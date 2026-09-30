import type { ContentDetails } from "../../plugins/emitters/contentIndex"
import {
  SimulationNodeDatum,
  SimulationLinkDatum,
  Simulation,
  forceSimulation,
  forceManyBody,
  forceCenter,
  forceLink,
  forceCollide,
  forceRadial,
  zoomIdentity,
  select,
  drag,
  zoom,
} from "d3"
import { Text, Graphics, Application, Container, Circle } from "pixi.js"
import { Group as TweenGroup, Tween as Tweened } from "@tweenjs/tween.js"
import { registerEscapeHandler, removeAllChildren } from "./util"
import { FullSlug, SimpleSlug, getFullSlug, resolveRelative, simplifySlug } from "../../util/path"
import { D3Config } from "../Graph"

type GraphicsInfo = {
  color: string
  gfx: Graphics
  alpha: number
  active: boolean
}

type NodeData = {
  id: SimpleSlug
  text: string
  tags: string[]
} & SimulationNodeDatum

type SimpleLinkData = {
  source: SimpleSlug
  target: SimpleSlug
}

type LinkData = {
  source: NodeData
  target: NodeData
} & SimulationLinkDatum<NodeData>

type LinkRenderData = GraphicsInfo & {
  simulationData: LinkData
}

type NodeRenderData = GraphicsInfo & {
  simulationData: NodeData
  label: Text
}

const localStorageKey = "graph-visited"
function getVisited(): Set<SimpleSlug> {
  return new Set(JSON.parse(localStorage.getItem(localStorageKey) ?? "[]"))
}

function addToVisited(slug: SimpleSlug) {
  const visited = getVisited()
  visited.add(slug)
  localStorage.setItem(localStorageKey, JSON.stringify([...visited]))
}

type TweenNode = {
  update: (time: number) => void
  stop: () => void
}

async function renderGraph(graph: HTMLElement, fullSlug: FullSlug) {
  const slug = simplifySlug(fullSlug)
  const visited = getVisited()
  removeAllChildren(graph)

  let {
    drag: enableDrag,
    zoom: enableZoom,
    depth,
    scale,
    repelForce,
    centerForce,
    linkDistance,
    fontSize,
    opacityScale,
    removeTags,
    showTags,
    focusOnHover,
    enableRadial,
  } = JSON.parse(graph.dataset["cfg"]!) as D3Config

  // every graph instance is interactive now: the homepage uses the same panel as
  // the notes (there is no backdrop/decorative variant any more)
  const interactiveLayer = true

  const data: Map<SimpleSlug, ContentDetails> = new Map(
    Object.entries<ContentDetails>(await fetchData).map(([k, v]) => [
      simplifySlug(k as FullSlug),
      v,
    ]),
  )
  const links: SimpleLinkData[] = []
  const tags: SimpleSlug[] = []
  const validLinks = new Set(data.keys())

  const tweens = new Map<string, TweenNode>()
  for (const [source, details] of data.entries()) {
    const outgoing = details.links ?? []

    for (const dest of outgoing) {
      if (validLinks.has(dest)) {
        links.push({ source: source, target: dest })
      }
    }

    if (showTags) {
      const localTags = details.tags
        .filter((tag) => !removeTags.includes(tag))
        .map((tag) => simplifySlug(("tags/" + tag) as FullSlug))

      tags.push(...localTags.filter((tag) => !tags.includes(tag)))

      for (const tag of localTags) {
        links.push({ source: source, target: tag })
      }
    }
  }

  const neighbourhood = new Set<SimpleSlug>()
  const wl: (SimpleSlug | "__SENTINEL")[] = [slug, "__SENTINEL"]
  if (depth >= 0) {
    while (depth >= 0 && wl.length > 0) {
      // compute neighbours
      const cur = wl.shift()!
      if (cur === "__SENTINEL") {
        depth--
        wl.push("__SENTINEL")
      } else {
        neighbourhood.add(cur)
        const outgoing = links.filter((l) => l.source === cur)
        const incoming = links.filter((l) => l.target === cur)
        wl.push(...outgoing.map((l) => l.target), ...incoming.map((l) => l.source))
      }
    }
  } else {
    validLinks.forEach((id) => neighbourhood.add(id))
    if (showTags) tags.forEach((tag) => neighbourhood.add(tag))
  }

  const nodes = [...neighbourhood].map((url) => {
    const text = url.startsWith("tags/") ? "#" + url.substring(5) : (data.get(url)?.title ?? url)
    return {
      id: url,
      text,
      tags: data.get(url)?.tags ?? [],
    }
  })
  const graphData: { nodes: NodeData[]; links: LinkData[] } = {
    nodes,
    links: links
      .filter((l) => neighbourhood.has(l.source) && neighbourhood.has(l.target))
      .map((l) => ({
        source: nodes.find((n) => n.id === l.source)!,
        target: nodes.find((n) => n.id === l.target)!,
      })),
  }

  // Background mode (homepage hero): a decorative back layer behind the page
  // text must look like a clean constellation, not a hairball. Orphan nodes
  // (zero links) are the main source of visual noise at this scale, so they are
  // dropped before the simulation is built — the network stays airy and the
  // remaining nodes are the ones that actually carry meaning.
  {
    const degree = new Map<string, number>()
    for (const l of graphData.links) {
      degree.set(l.source.id, (degree.get(l.source.id) ?? 0) + 1)
      degree.set(l.target.id, (degree.get(l.target.id) ?? 0) + 1)
    }
    graphData.nodes = graphData.nodes.filter((n) => (degree.get(n.id) ?? 0) > 0)
    const keep = new Set(graphData.nodes.map((n) => n.id))
    graphData.links = graphData.links.filter(
      (l) => keep.has(l.source.id) && keep.has(l.target.id),
    )
  }

  const width = graph.offsetWidth
  const height = Math.max(graph.offsetHeight, 250)

  // radius in simulation space (used by the physics: collide force)
  function simRadius(d: NodeData) {
    const numLinks = graphData.links.filter(
      (l) => l.source.id === d.id || l.target.id === d.id,
    ).length
    return 1.5 + Math.sqrt(numLinks) * 0.4
  }

  // The simulation lives in a coordinate system centred on (0,0) — the render
  // loop adds width/2, height/2 — so the centre force must be pinned there.
  // Stock Quartz passes nothing, and d3 defaults forceCenter to (0,0) too, which
  // is why the network settles in a corner of a tall panel instead of filling it.
  // `scale` (previously only used to size the labels) now sets the initial
  // spread: the box diagonal / 6, so a full-screen panel gets a wide layout.
  const simulation: Simulation<NodeData, LinkData> = forceSimulation<NodeData>(graphData.nodes)
    .force("charge", forceManyBody().strength(-100 * repelForce))
    .force("center", forceCenter(0, 0).strength(centerForce))
    .force("link", forceLink(graphData.links).distance(linkDistance).iterations(2))
    .force("collide", forceCollide<NodeData>((n) => simRadius(n)).iterations(1))
  const baseSpread = (Math.min(width, height) / 2) * 0.55
  if (baseSpread > 0) {
    for (const n of graphData.nodes) {
      if (typeof n.x === "number") n.x *= (baseSpread / 60) * scale
      if (typeof n.y === "number") n.y *= (baseSpread / 60) * scale
    }
  }

  // A note network is naturally wide and flat (links sit inside clusters), so it
  // leaves the lower half of a tall panel empty. This per-tick force grows the
  // settled layout — on both axes — until it reaches 92% of the box, then stops:
  // a centred, full-panel network instead of a strip. It works on the real
  // simulation coordinates, so hover, drag and click hit exactly where they look.
  const fillX = width * 0.42
  const fillY = height * 0.42
  simulation.force("stretch", () => {
    let minX = Infinity
    let maxX = -Infinity
    let minY = Infinity
    let maxY = -Infinity
    for (const n of graphData.nodes) {
      if (typeof n.x !== "number" || typeof n.y !== "number") continue
      if (n.x < minX) minX = n.x
      if (n.x > maxX) maxX = n.x
      if (n.y < minY) minY = n.y
      if (n.y > maxY) maxY = n.y
    }
    if (!isFinite(minX) || !isFinite(minY)) return
    const halfX = Math.max(1, (maxX - minX) / 2)
    const halfY = Math.max(1, (maxY - minY) / 2)
    const gx = Math.min(1.05, fillX / halfX)
    const gy = Math.min(1.05, fillY / halfY)
    const cx = (minX + maxX) / 2
    const cy = (minY + maxY) / 2
    if (gx > 1.0005 || gy > 1.0005 || Math.abs(cx) > 0.5 || Math.abs(cy) > 0.5) {
      for (const n of graphData.nodes) {
        if (typeof n.x === "number") n.x = (n.x - cx) * gx
        if (typeof n.y === "number") n.y = (n.y - cy) * gy
      }
    }
  })
  // settle faster so the graph appears stable sooner
  simulation.alphaDecay(0.06)

  const radius = (Math.min(width, height) / 2) * 0.8
  if (enableRadial) simulation.force("radial", forceRadial(radius).strength(0.2))

  // This graph has no auto-fit / backdrop mode: it is the stock interactive
  // panel (d3 force layout centred in the box, zoom/pan, hover, drag, click).
  // The former "cover" fit and the background-layer plumbing were removed with
  // the technique change (Raúl 29.09.26) — the nodes are reachable now.
  const visualScale = 1

  // Background layers are decorative: dots and links get an on-screen minimum
  // so a full-bleed canvas never turns them into invisible sub-pixel noise.
  const minDotRadius = 0.001
  const minLinkWidth = 0

  // precompute style prop strings as pixi doesn't support css variables
  const cssVars = [
    "--secondary",
    "--tertiary",
    "--gray",
    "--light",
    "--lightgray",
    "--dark",
    "--darkgray",
    "--bodyFont",
  ] as const
  const computedStyleMap = cssVars.reduce(
    (acc, key) => {
      acc[key] = getComputedStyle(document.documentElement).getPropertyValue(key)
      return acc
    },
    {} as Record<(typeof cssVars)[number], string>,
  )

  // calculate color
  const color = (d: NodeData) => {
    const isCurrent = d.id === slug
    if (isCurrent) {
      return computedStyleMap["--secondary"]
    } else if (visited.has(d.id) || d.id.startsWith("tags/")) {
      return computedStyleMap["--tertiary"]
    } else {
      return computedStyleMap["--gray"]
    }
  }

  function nodeRadius(d: NodeData) {
    // on-screen dot size: thin, small dots — constant regardless of the fit
    return Math.max(simRadius(d) / visualScale, minDotRadius)
  }

  let hoveredNodeId: string | null = null
  let hoveredNeighbours: Set<string> = new Set()
  const linkRenderData: LinkRenderData[] = []
  const nodeRenderData: NodeRenderData[] = []
  function updateHoverInfo(newHoveredId: string | null) {
    hoveredNodeId = newHoveredId

    if (newHoveredId === null) {
      hoveredNeighbours = new Set()
      for (const n of nodeRenderData) {
        n.active = false
      }

      for (const l of linkRenderData) {
        l.active = false
      }
    } else {
      hoveredNeighbours = new Set()
      for (const l of linkRenderData) {
        const linkData = l.simulationData
        if (linkData.source.id === newHoveredId || linkData.target.id === newHoveredId) {
          hoveredNeighbours.add(linkData.source.id)
          hoveredNeighbours.add(linkData.target.id)
        }

        l.active = linkData.source.id === newHoveredId || linkData.target.id === newHoveredId
      }

      for (const n of nodeRenderData) {
        n.active = hoveredNeighbours.has(n.simulationData.id)
      }
    }
  }

  let dragStartTime = 0
  let dragging = false

  function renderLinks() {
    tweens.get("link")?.stop()
    const tweenGroup = new TweenGroup()

    for (const l of linkRenderData) {
      let alpha = 0.6

      // if we are hovering over a node, we want to highlight the immediate neighbours
      // with full alpha and the rest with default alpha
      if (hoveredNodeId) {
        alpha = l.active ? 1 : 0.15
      }

      l.color = l.active ? "#8a8a8a" : "#666"
      tweenGroup.add(new Tweened<LinkRenderData>(l).to({ alpha }, 200))
    }

    tweenGroup.getAll().forEach((tw) => tw.start())
    tweens.set("link", {
      update: tweenGroup.update.bind(tweenGroup),
      stop() {
        tweenGroup.getAll().forEach((tw) => tw.stop())
      },
    })
  }

  function renderLabels() {
    tweens.get("label")?.stop()
    const tweenGroup = new TweenGroup()

    const defaultScale = 1 / (scale * currentTransform.k)
    const activeScale = defaultScale * 1.1
    for (const n of nodeRenderData) {
      const nodeId = n.simulationData.id

      if (hoveredNodeId === nodeId) {
        tweenGroup.add(
          new Tweened<Text>(n.label).to(
            {
              alpha: 1,
              scale: { x: activeScale, y: activeScale },
            },
            100,
          ),
        )
      } else {
        tweenGroup.add(
          new Tweened<Text>(n.label).to(
            {
              // interactive backdrop: only the hovered caption is shown, because
              // the zoom-based label fade never reaches a visible alpha at the
              // fit factor this layer uses
              alpha: n.label.alpha,
              scale: { x: defaultScale, y: defaultScale },
            },
            100,
          ),
        )
      }
    }

    tweenGroup.getAll().forEach((tw) => tw.start())
    tweens.set("label", {
      update: tweenGroup.update.bind(tweenGroup),
      stop() {
        tweenGroup.getAll().forEach((tw) => tw.stop())
      },
    })
  }

  function renderNodes() {
    tweens.get("hover")?.stop()

    const tweenGroup = new TweenGroup()
    for (const n of nodeRenderData) {
      let alpha = 1

      // if we are hovering over a node, we want to highlight the immediate neighbours
      if (hoveredNodeId !== null && focusOnHover) {
        alpha = n.active ? 1 : 0.2
      }

      tweenGroup.add(new Tweened<Graphics>(n.gfx, tweenGroup).to({ alpha }, 200))
    }

    tweenGroup.getAll().forEach((tw) => tw.start())
    tweens.set("hover", {
      update: tweenGroup.update.bind(tweenGroup),
      stop() {
        tweenGroup.getAll().forEach((tw) => tw.stop())
      },
    })
  }

  function renderPixiFromD3() {
    renderNodes()
    renderLinks()
    renderLabels()
  }

  tweens.forEach((tween) => tween.stop())
  tweens.clear()

  const app = new Application()
  await app.init({
    width,
    height,
    antialias: true,
    autoStart: false,
    autoDensity: true,
    backgroundAlpha: 0,
    preference: "webgpu",
    // a full-bleed 100vw canvas at dpr 3 melts low-end GPUs, so cap it tighter
    resolution: Math.min(window.devicePixelRatio, 2),
    eventMode: "static",
  })
  graph.appendChild(app.canvas)

  const stage = app.stage
  stage.interactive = false

  const labelsContainer = new Container<Text>({ zIndex: 3, isRenderGroup: true })
  const nodesContainer = new Container<Graphics>({ zIndex: 2, isRenderGroup: true })
  const linkContainer = new Container<Graphics>({ zIndex: 1, isRenderGroup: true })
  stage.addChild(nodesContainer, labelsContainer, linkContainer)

  for (const n of graphData.nodes) {
    const nodeId = n.id

    const label = new Text({
      interactive: false,
      eventMode: "none",
      text: n.text,
      alpha: 0,
      visible: true,
      anchor: { x: 0.5, y: 1.2 },
      style: {
        fontSize: fontSize * 15,
        fill: computedStyleMap["--dark"],
        fontFamily: computedStyleMap["--bodyFont"],
      },
      resolution: Math.min(window.devicePixelRatio, 2) * 2,
    })
    label.scale.set(1 / (scale * visualScale))

    let oldLabelOpacity = 0
    const isTagNode = nodeId.startsWith("tags/")
    const gfx = new Graphics({
      interactive: interactiveLayer,
      label: nodeId,
      eventMode: interactiveLayer ? "static" : "none",
      hitArea: new Circle(0, 0, Math.max(nodeRadius(n), 8 / visualScale)),
      cursor: "pointer",
    })
      .circle(0, 0, nodeRadius(n))
      .fill({ color: isTagNode ? computedStyleMap["--light"] : color(n) })
      .on("pointerover", (e) => {
        updateHoverInfo(e.target.label)
        oldLabelOpacity = label.alpha
        if (!dragging) {
          renderPixiFromD3()
        }
      })
      .on("pointerleave", () => {
        updateHoverInfo(null)
        label.alpha = oldLabelOpacity
        if (!dragging) {
          renderPixiFromD3()
        }
      })

    if (isTagNode) {
      gfx.stroke({ width: 1, color: computedStyleMap["--tertiary"] })
    }

    nodesContainer.addChild(gfx)
    labelsContainer.addChild(label)

    const nodeRenderDatum: NodeRenderData = {
      simulationData: n,
      gfx,
      label,
      color: color(n),
      alpha: 1,
      active: false,
    }

    nodeRenderData.push(nodeRenderDatum)
  }

  for (const l of graphData.links) {
    const gfx = new Graphics({ interactive: false, eventMode: "none" })
    linkContainer.addChild(gfx)

    const linkRenderDatum: LinkRenderData = {
      simulationData: l,
      gfx,
      color: "#666",
      alpha: 0.6,
      active: false,
    }

    linkRenderData.push(linkRenderDatum)
  }

  let currentTransform = zoomIdentity
  let zoomBehaviour: ReturnType<typeof zoom<HTMLCanvasElement, NodeData>> | undefined
  if (enableZoom) {
    zoomBehaviour = zoom<HTMLCanvasElement, NodeData>()
      .extent([
        [0, 0],
        [width, height],
      ])
      .scaleExtent([0.25, 4])
      .on("zoom", ({ transform }) => {
        currentTransform = transform
        stage.scale.set(transform.k, transform.k)
        stage.position.set(transform.x, transform.y)

        // zoom adjusts opacity of labels too
        const zoomScale = transform.k * opacityScale
        let scaleOpacity = Math.max((zoomScale - 1) / 3.75, 0)
        const activeNodes = nodeRenderData.filter((n) => n.active).flatMap((n) => n.label)

        // keep labels at a constant on-screen size regardless of the zoom / fit
        const labelScale = 1 / (scale * transform.k * visualScale)
        for (const label of labelsContainer.children) {
          label.scale.set(labelScale)
          if (!activeNodes.includes(label)) {
            label.alpha = scaleOpacity
          }
        }
      })
    select<HTMLCanvasElement, NodeData>(app.canvas).call(zoomBehaviour)
  }



  if (enableDrag && interactiveLayer) {
    select<HTMLCanvasElement, NodeData | undefined>(app.canvas).call(
      drag<HTMLCanvasElement, NodeData | undefined>()
        .container(() => app.canvas)
        .subject(() => graphData.nodes.find((n) => n.id === hoveredNodeId))
        .on("start", function dragstarted(event) {
          if (!event.active) simulation.alphaTarget(1).restart()
          event.subject.fx = event.subject.x
          event.subject.fy = event.subject.y
          event.subject.__initialDragPos = {
            x: event.subject.x,
            y: event.subject.y,
            fx: event.subject.fx,
            fy: event.subject.fy,
          }
          dragStartTime = Date.now()
          dragging = true
        })
        .on("drag", function dragged(event) {
          const initPos = event.subject.__initialDragPos
          event.subject.fx = initPos.x + (event.x - initPos.x) / currentTransform.k
          event.subject.fy = initPos.y + (event.y - initPos.y) / currentTransform.k
        })
        .on("end", function dragended(event) {
          if (!event.active) simulation.alphaTarget(0)
          event.subject.fx = null
          event.subject.fy = null
          dragging = false

          // if the time between mousedown and mouseup is short, we consider it a click
          if (Date.now() - dragStartTime < 500) {
            const node = graphData.nodes.find((n) => n.id === event.subject.id) as NodeData
            const targ = resolveRelative(fullSlug, node.id)
            window.spaNavigate(new URL(targ, window.location.toString()))
          }
        }),
    )
  } else {
    for (const node of nodeRenderData) {
      node.gfx.on("click", () => {
        const targ = resolveRelative(fullSlug, node.simulationData.id)
        window.spaNavigate(new URL(targ, window.location.toString()))
      })
    }
  }

  const zoomEnabled = enableZoom && interactiveLayer
  if (zoomEnabled) {
    select<HTMLCanvasElement, NodeData>(app.canvas).call(
      zoom<HTMLCanvasElement, NodeData>()
        .extent([
          [0, 0],
          [width, height],
        ])
        .scaleExtent([0.25, 4])
        .on("zoom", ({ transform }) => {
          currentTransform = transform
          stage.scale.set(transform.k, transform.k)
          stage.position.set(transform.x, transform.y)



          // zoom adjusts opacity of labels too
          const scale = transform.k * opacityScale
          let scaleOpacity = Math.max((scale - 1) / 3.75, 0)
          const activeNodes = nodeRenderData.filter((n) => n.active).flatMap((n) => n.label)

          for (const label of labelsContainer.children) {
            if (!activeNodes.includes(label)) {
              label.alpha = scaleOpacity
            }
          }
        }),
    )
  }

  let stopAnimation = false
  let settledFrames = 0
  let revealed = true
  function animate(time: number) {
    if (stopAnimation) return
    // skip the heavy per-frame work when the tab is hidden
    if (document.hidden) {
      requestAnimationFrame(animate)
      return
    }
    for (const n of nodeRenderData) {
      const { x, y } = n.simulationData
      if (!x || !y) continue
      n.gfx.position.set(x + width / 2, y + height / 2)
      if (n.label) {
        n.label.position.set(x + width / 2, y + height / 2)
      }
    }

    for (const l of linkRenderData) {
      const linkData = l.simulationData
      l.gfx.clear()
      l.gfx.moveTo(linkData.source.x! + width / 2, linkData.source.y! + height / 2)
      l.gfx
        .lineTo(linkData.target.x! + width / 2, linkData.target.y! + height / 2)
        .stroke({
          alpha: l.alpha,
          width: Math.max(0.3 / visualScale, minLinkWidth),
          color: l.color,
        })
    }

    tweens.forEach((t) => t.update(time))
    app.renderer.render(stage)

    // Background hero: reveal the layer only once the simulation has settled,
    // so the visitor never sees a flash of randomly placed nodes.
    if (!revealed && simulation.alpha() < 0.02) {
      settledFrames++
      if (settledFrames > 2) {
        revealed = true
        const hero = graph.closest(".ra-graph-hero")
        if (hero) hero.classList.add("is-settled")
      }
    }

    requestAnimationFrame(animate)
  }

  requestAnimationFrame(animate)
  return () => {
    stopAnimation = true
    app.destroy()
  }
}

let localGraphCleanups: (() => void)[] = []
let globalGraphCleanups: (() => void)[] = []

function cleanupLocalGraphs() {
  for (const cleanup of localGraphCleanups) {
    cleanup()
  }
  localGraphCleanups = []
}

function cleanupGlobalGraphs() {
  for (const cleanup of globalGraphCleanups) {
    cleanup()
  }
  globalGraphCleanups = []
}

// Homepage hero backdrop (`.ra-graph-hero`): the layer is viewport-wide and
// vertically bounded by the hero block. Both come from the DOM because neither
// is stable across viewports:
//   - the centre column sits off-centre between the two sidebars, so a
//     percentage `left` on it overflows the page horizontally;
//   - the hero's height changes with the headline wrap.
function positionHeroBand() {
  const band = document.querySelector<HTMLElement>(".ra-graph-hero")
  const hero = document.querySelector<HTMLElement>("article .ra-hero")
  if (!band || !hero) {
    return
  }
  const heroRect = hero.getBoundingClientRect()
  // The absolutely positioned layer resolves `left` against its containing block
  // (the centre column), so a negative offset equal to the column's own viewport
  // position makes the band start at x=0 while still hanging off the column.
  const origin = band.offsetParent
    ? (band.offsetParent as HTMLElement).getBoundingClientRect().left
    : 0
  band.style.left = `${-Math.round(origin)}px`
  band.style.width = `${Math.round(window.innerWidth)}px`
  const top = band.getBoundingClientRect().top + window.scrollY
  const height = heroRect.bottom + window.scrollY - top
  if (height > 0) {
    band.style.height = `${Math.round(height)}px`
  }
}

document.addEventListener("nav", async (e: CustomEventMap["nav"]) => {
  const slug = e.detail.url
  addToVisited(simplifySlug(slug))

  async function renderLocalGraph() {
    cleanupLocalGraphs()
    // Homepage only: GraphHero renders the interactive panel in the beforeBody
    // block (inside .page-header), while the hero markdown lives inside
    // <article>. Move the panel into the article, directly below the hero, so the
    // hero keeps the top of the page and the graph stays usable right underneath
    // (Raúl 29.09.26). Guarded, so repeated nav events do not re-append it.
    const homePanel = document.querySelector(".ra-home-graph")
    const homeHero = document.querySelector("article .ra-hero")
    if (homePanel && homeHero && homePanel.previousElementSibling !== homeHero) {
      homeHero.after(homePanel)
    }
    // The backdrop must cover the hero and nothing more. Its height depends on
    // the hero's real bottom (which varies with the headline wrap and the card
    // grid below), so size it from the DOM instead of a fixed vh clamp. Runs
    // before the graphs render: the canvas then gets the final box size.
    positionHeroBand()
    const localGraphContainers = document.getElementsByClassName("graph-container")
    for (const container of localGraphContainers) {
      localGraphCleanups.push(await renderGraph(container as HTMLElement, slug))
    }
  }

  await renderLocalGraph()
  const handleThemeChange = () => {
    void renderLocalGraph()
  }

  document.addEventListener("themechange", handleThemeChange)
  window.addCleanup(() => {
    document.removeEventListener("themechange", handleThemeChange)
  })

  const containers = [...document.getElementsByClassName("global-graph-outer")] as HTMLElement[]
  async function renderGlobalGraph() {
    const slug = getFullSlug(window)
    for (const container of containers) {
      container.classList.add("active")
      const sidebar = container.closest(".sidebar") as HTMLElement
      if (sidebar) {
        sidebar.style.zIndex = "1"
      }

      const graphContainer = container.querySelector(".global-graph-container") as HTMLElement
      registerEscapeHandler(container, hideGlobalGraph)
      if (graphContainer) {
        globalGraphCleanups.push(await renderGraph(graphContainer, slug))
      }
    }
  }

  function hideGlobalGraph() {
    cleanupGlobalGraphs()
    for (const container of containers) {
      container.classList.remove("active")
      const sidebar = container.closest(".sidebar") as HTMLElement
      if (sidebar) {
        sidebar.style.zIndex = ""
      }
    }
  }

  async function shortcutHandler(e: HTMLElementEventMap["keydown"]) {
    if (e.key === "g" && (e.ctrlKey || e.metaKey) && !e.shiftKey) {
      e.preventDefault()
      const anyGlobalGraphOpen = containers.some((container) =>
        container.classList.contains("active"),
      )
      anyGlobalGraphOpen ? hideGlobalGraph() : renderGlobalGraph()
    }
  }

  const containerIcons = document.getElementsByClassName("global-graph-icon")
  Array.from(containerIcons).forEach((icon) => {
    icon.addEventListener("click", renderGlobalGraph)
    window.addCleanup(() => icon.removeEventListener("click", renderGlobalGraph))
  })

  document.addEventListener("keydown", shortcutHandler)
  window.addCleanup(() => {
    document.removeEventListener("keydown", shortcutHandler)
    cleanupLocalGraphs()
    cleanupGlobalGraphs()
  })
})
