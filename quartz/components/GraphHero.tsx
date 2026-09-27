import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import Graph, { D3Config } from "./Graph"

interface GraphHeroOptions {
  localGraph?: Partial<D3Config>
}

// Homepage background graph ("Semantic Connections").
//
// - On the homepage (slug === "index") the graph is rendered as a full-bleed
//   BACKGROUND LAYER behind the hero text and the first cards, so the network
//   blends into the words of the page instead of sitting in its own panel:
//   thin links, small dots, wide spacing (see `autoFit` in scripts/graph.inline.ts)
//   and a CSS mask that dissolves the layer before the denser card sections.
// - On every other page the standard compact interactive graph panel renders
//   unchanged, so nothing is lost.
const heroDefaults: Partial<D3Config> = {
  // The whole site network (depth -1), spread very wide: lots of repulsion and
  // almost no centering pull, so the notes sit far apart like a constellation
  // instead of knotting in the middle. Orphan nodes are pruned in the script.
  depth: -1,
  scale: 1.05,
  repelForce: 2.4,
  centerForce: 0.06,
  linkDistance: 175,
  fontSize: 0.4,
  showTags: false,
  autoFit: true,
  background: true,
  // Bleed past the "cover" fit: the field extends 1.5x the canvas in each axis,
  // so it always reaches every edge even when framed off-centre.
  bgZoom: 1.5,
  // Frame the constellation HIGH in the box (0 = top edge, 0.5 = centred) so it
  // reads behind the hero copy instead of sinking into a very tall canvas.
  bgAnchor: 0.28,
}

export default ((opts?: GraphHeroOptions) => {
  const HeroGraph = Graph({ localGraph: { ...heroDefaults, ...opts?.localGraph } })
  const StandardGraph = Graph()

  const GraphHero: QuartzComponent = (props: QuartzComponentProps) => {
    if (props.fileData.slug !== "index") {
      return <StandardGraph {...props} />
    }

    return (
      <div class="ra-graph-hero">
        <HeroGraph {...props} />
      </div>
    )
  }

  GraphHero.css = HeroGraph.css
  GraphHero.beforeDOMLoaded = HeroGraph.beforeDOMLoaded
  GraphHero.afterDOMLoaded = HeroGraph.afterDOMLoaded

  return GraphHero
}) satisfies QuartzComponentConstructor<GraphHeroOptions>
