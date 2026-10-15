import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import Graph, { D3Config } from "./Graph"

interface GraphHeroOptions {
  localGraph?: Partial<D3Config>
}

// Homepage graph (slug === "index").
//
// TECHNIQUE (Raúl, 29.09.26 — "cámbiala de técnica y hazlo totalmente
// interactivo"): no backdrop, no layer under the text, no `pointer-events`
// tricks. The homepage gets ONE real graph — the very same component the notes
// and the other pages use, with the same gestures: hover a dot to light up its
// neighbourhood and read its title, drag it, click it to open the note, wheel to
// zoom. It is simply rendered full-bleed and tall, directly below the hero copy,
// so nothing ever sits on top of it.
const homeGraphDefaults: Partial<D3Config> = {
  depth: -1,
  // Physics tuned for the compact panel (Raúl 15.10.26: keep the graph but small
  // — "visible pero no tan grande", luego "aún más pequeños"). The old values
  // (scale 1.6 / link 190 / repel 2.6) were sized for a near-full-screen box; in a
  // small band they blow the network up past the canvas and the fit force then
  // shrinks it back, which reads as a cramped clump. Shorter links + lower repel
  // keep the same structure, drawn at a scale that fits the small box.
  scale: 0.95,
  repelForce: 1.2,
  centerForce: 0.05,
  linkDistance: 80,
  fontSize: 0.5,
  showTags: false,
  focusOnHover: true,
  drag: true,
  zoom: true,
  // Raúl 06.10.26: "quiero que el grafo ... se mantenga moviendo constantemente"
  // — the homepage network never freezes; it keeps drifting on its own.
  alwaysMoving: true,
}

export default ((opts?: GraphHeroOptions) => {
  const HomeGraph = Graph({ localGraph: { ...homeGraphDefaults, ...opts?.localGraph } })
  const StandardGraph = Graph()

  const GraphHero: QuartzComponent = (props: QuartzComponentProps) => {
    if (props.fileData.slug !== "index") {
      return <StandardGraph {...props} />
    }

    // The inline script relocates this block directly below the hero copy, so the
    // headline keeps the top of the page and the graph sits right under it.
    return (
      <div class="ra-home-graph">
        <HomeGraph {...props} />
      </div>
    )
  }

  GraphHero.css = HomeGraph.css
  GraphHero.beforeDOMLoaded = HomeGraph.beforeDOMLoaded
  GraphHero.afterDOMLoaded = HomeGraph.afterDOMLoaded

  return GraphHero
}) satisfies QuartzComponentConstructor<GraphHeroOptions>

