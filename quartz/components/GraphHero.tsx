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
  scale: 1.6,
  repelForce: 2.6,
  centerForce: 0.05,
  linkDistance: 190,
  fontSize: 0.5,
  showTags: false,
  focusOnHover: true,
  drag: true,
  zoom: true,
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

