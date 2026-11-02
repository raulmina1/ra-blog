import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// ── Explorer: one curated navigation ──────────────────────────────────────────
// The site had 13 top-level entries in two languages, alphabetically sorted, with
// the two "start here" pages at the very bottom and 12 daily issues cluttering the
// Daily folder (Raúl 02.11.26: "está súper desorganizado… que tenga un origen
// coherente, que se vea mucho mejor"). One order, one vocabulary, one start point.
//
// ⚠️ sortFn / mapFn / filterFn are serialised with .toString() and executed in the
// browser: they must stay self-contained — no outer constants, no TS annotations,
// no closures — or they break at runtime.
const explorerOptions = {
  folderDefaultState: "collapsed" as const,
  folderClickBehavior: "link" as const,
  // display labels (English, short) — the menu is the site's table of contents
  mapFn: (node) => {
    const labels = {
      einfuhrung: "Start here — who is RA?",
      "ai-ecosystem": "AI Ecosystem — what I built",
      engineering: "Engineering & technology",
      services: "Engineering services",
      projekte: "AI systems & services",
      "semantic-web": "Knowledge graphs",
      deutsch: "German language",
      "leben-in-deutschland": "Life in Germany",
      wirtschaft: "Economy & energy",
      kolumnen: "Columns",
      daily: "Daily Brief",
      contact: "Contact",
      "service-request": "Request a service",
      topics: "Topics",
      "engineering-portfolio": "Engineering portfolio",
      "ai-ecosystem-one-pager-innenansicht": "AI Ecosystem · one-pager (inside)",
      "ai-ecosystem-one-pager-autonomie": "AI Ecosystem · one-pager (autonomy)",
      "ai-ecosystem-data-pipeline": "The journey of a note",
      "system-views": "Inside a daily note",
      "system-changelog": "System changelog",
      "kg-context-service": "KG Context service",
      "kge-link-prediction-yellowvault": "KGE link prediction",
      "prompt-shop": "Prompt shop",
      "agent-shop": "Agent shop",
      "cron-shop": "Cron shop",
      "hook-shop": "Hook shop",
      "strava-resumen-estadistico": "Strava summary",
    }
    const key = String(node.slugSegment || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
    const label = labels[key] ?? node.displayName
    // drop leading emoji / symbols: inside the menu they break the left edge and
    // make some rows look like a different kind of item (the page keeps them)
    node.displayName = String(label).replace(/^[^\p{L}\p{N}]+/u, "")
  },
  sortFn: (a, b) => {
    // numbered ranks: sections in reading order, then the sub-pages of Projekte
    const rank = {
      einfuhrung: 1,
      "ai-ecosystem": 2,
      engineering: 3,
      services: 4,
      projekte: 5,
      "semantic-web": 6,
      deutsch: 7,
      "leben-in-deutschland": 8,
      wirtschaft: 9,
      kolumnen: 10,
      daily: 11,
      contact: 12,
      "service-request": 13,
      "engineering-portfolio": 101,
      "ai-ecosystem-one-pager-innenansicht": 102,
      "ai-ecosystem-one-pager-autonomie": 103,
      "ai-ecosystem-data-pipeline": 104,
      "system-views": 105,
      "system-changelog": 106,
      "kg-context-service": 107,
      "kge-link-prediction-yellowvault": 108,
      "prompt-shop": 109,
      "agent-shop": 110,
      "cron-shop": 111,
      "hook-shop": 112,
      "strava-resumen-estadistico": 113,
    }
    const key = (n) =>
      String(n.slugSegment || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
    const rankOf = (n) => {
      const r = rank[key(n)]
      if (r !== undefined) return r
      return n.isFolder ? 50 : 200
    }
    const ra = rankOf(a)
    const rb = rankOf(b)
    if (ra !== rb) return ra - rb
    return a.displayName.localeCompare(b.displayName, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },
  // keep the menu a map, not a log: tag pages, the mail confirmation page and the
  // 12 dated issues (all reachable from the Daily Brief page) stay out of it
  filterFn: (node) => {
    const slug = String(node.slug || "")
    if (slug === "tags" || slug.indexOf("tags/") === 0) return false
    if (node.slugSegment === "thanks") return false
    if (/^Daily\/\d{4}-\d{2}-\d{2}$/.test(slug)) return false
    return true
  },
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.ScrollHide()],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/raulmina1",
      Blog: "https://raulmina1.github.io/ra-blog",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    // Graph View panel at the TOP of the page (Raúl 15.10.26: "me gustó mucho
    // cómo quedó todo moviéndose, creo que lo puedes dejar arriba"). On the
    // homepage the inline script relocates it right below the hero copy, so the
    // headline keeps the top and the network is the first thing under it.
    Component.GraphHero(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
      ],
    }),
    Component.Explorer(explorerOptions as any),
  ],
  right: [Component.DesktopOnly(Component.TableOfContents()), Component.Backlinks()],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    // Section landing pages (/Projekte/, /Engineering/, …) get the same local
    // graph as a note (Raúl 21.10.26). Tag pages stay without it.
    Component.GraphHero(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
      ],
    }),
    Component.Explorer(explorerOptions as any),
  ],
  right: [],
}
