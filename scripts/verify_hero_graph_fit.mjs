// Verify the homepage hero graph fit: replicate graph.inline.ts layout math
// against the real contentIndex.json and report the on-screen spread.
//
// Mirrors the CURRENT implementation:
//   - depth -1 (whole site network)
//   - orphan nodes (zero links) pruned in background mode
//   - "cover" fit for background mode: scale by the LARGER ratio, so the
//     constellation reaches every edge and bleeds past them
//   - repelForce 2.4, centerForce 0.06, linkDistance 175
import fs from "node:fs"
import { forceSimulation, forceManyBody, forceCenter, forceLink, forceCollide } from "d3-force"

const data = JSON.parse(fs.readFileSync("public/static/contentIndex.json", "utf8"))
const simplify = (k) => k.replace(/\/index$/, "/")

const graph = new Map(Object.entries(data).map(([k, v]) => [simplify(k), v]))
const validLinks = new Set(graph.keys())

// showTags: false for the hero
const links = []
for (const [source, details] of graph.entries()) {
  for (const dest of details.links ?? []) {
    if (validLinks.has(simplify(dest))) links.push({ source, target: simplify(dest) })
  }
}

// depth -1 => the whole node set
const neighbourhood = new Set(validLinks)

const nodes = [...neighbourhood].map((id) => ({ id, text: graph.get(id)?.title ?? id }))
let graphLinks = links
  .filter((l) => neighbourhood.has(l.source) && neighbourhood.has(l.target))
  .map((l) => ({ source: nodes.find((n) => n.id === l.source), target: nodes.find((n) => n.id === l.target) }))

console.log(`before pruning — nodes: ${nodes.length}  links: ${graphLinks.length}`)

// background mode: prune orphan nodes (no links at all)
const degree = new Map()
for (const l of graphLinks) {
  degree.set(l.source.id, (degree.get(l.source.id) ?? 0) + 1)
  degree.set(l.target.id, (degree.get(l.target.id) ?? 0) + 1)
}
const kept = nodes.filter((n) => (degree.get(n.id) ?? 0) > 0)
const keepSet = new Set(kept.map((n) => n.id))
graphLinks = graphLinks.filter((l) => keepSet.has(l.source.id) && keepSet.has(l.target.id))
console.log(`after pruning  — nodes: ${kept.length}  links: ${graphLinks.length}  (orphans dropped: ${nodes.length - kept.length})`)

const simRadius = (d) => {
  const numLinks = graphLinks.filter((l) => l.source.id === d.id || l.target.id === d.id).length
  return 1.5 + Math.sqrt(numLinks) * 0.4
}

const sim = forceSimulation(kept)
  .force("charge", forceManyBody().strength(-100 * 2.4)) // repelForce 2.4
  .force("center", forceCenter().strength(0.06)) // centerForce 0.06
  .force("link", forceLink(graphLinks).distance(175).iterations(2)) // linkDistance 175
  .force("collide", forceCollide((n) => simRadius(n)).iterations(1))
sim.alphaDecay(0.06)
sim.stop()
for (let i = 0; i < 250; i++) sim.tick()

let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
for (const n of kept) {
  const r = simRadius(n)
  minX = Math.min(minX, n.x - r); maxX = Math.max(maxX, n.x + r)
  minY = Math.min(minY, n.y - r); maxY = Math.max(maxY, n.y + r)
}
const gW = Math.max(maxX - minX, 1)
const gH = Math.max(maxY - minY, 1)
console.log(`settled extent: ${gW.toFixed(1)} x ${gH.toFixed(1)}  (aspect ${(gW / gH).toFixed(2)})`)

// ---- background mode: stretch, then "cover" fit + bgZoom + bgAnchor ----
const BG_ZOOM = 1.5
const BG_ANCHOR = 0.28

// Background mode first stretches the settled layout along its short axis so the
// network's proportions match the box (see graph.inline.ts). Dots stay circular;
// only the link segments stretch. Then a uniform cover fit has almost nothing
// left to crop, so the field reaches every edge without dead bands.
function fitCover(w, h) {
  const boxAspect = w / Math.max(h, 1)
  const netAspect = gW / gH
  const stretchY = Math.min(Math.max(netAspect / Math.max(boxAspect, 1e-6), 1), 8)
  const sW = gW
  const sH = gH * stretchY
  const ratioX = (w * 1) / sW
  const ratioY = (h * 1) / sH
  const k = Math.min(Math.max(Math.max(ratioX, ratioY) * BG_ZOOM, 0.25), 4)
  return { k, stretchY, sW, sH }
}

const cases = [
  ["desktop 1440x1200 (250vh)", 1422, Math.round(1200 * 2.5)],
  ["desktop 1440x1200 (265vh wide)", 1422, Math.round(1200 * 2.65)],
  ["mobile 390x844 (265vh)", 390, Math.round(844 * 2.65)],
  ["mobile 393x852 (265vh)", 393, Math.round(852 * 2.65)],
  ["mobile 360x780 (265vh)", 360, Math.round(780 * 2.65)],
]

for (const [label, w, h] of cases) {
  const { k, stretchY, sW, sH } = fitCover(w, h)
  const spanW = sW * k, spanH = sH * k
  // anchored: top = anchor*H - spanH/2, bottom = anchor*H + spanH/2
  const top = BG_ANCHOR * h - spanH / 2
  const bottom = BG_ANCHOR * h + spanH / 2
  const covers = top <= 0 && bottom >= h && spanW >= w
  console.log(
    `${label.padEnd(28)} fitK ${k.toFixed(2)} stretchY ${stretchY.toFixed(1)} · network ${spanW.toFixed(0)}x${spanH.toFixed(0)}px ` +
      `(${((spanW / w) * 100).toFixed(0)}% width, ${((spanH / h) * 100).toFixed(0)}% height) · ` +
      `framed top ${top.toFixed(0)} bottom ${bottom.toFixed(0)} (canvas 0..${h}) · gap-free: ${covers}`,
  )
}

// on-screen dot sizes after the fit divide (min dot radius is 1.8 desktop / 2 mobile)
for (const [label, w, h, minR] of [
  ["desktop", 1422, 3000, 1.8],
  ["mobile", 390, 2237, 2],
]) {
  const { k } = fitCover(w, h)
  const radii = kept.map((n) => Math.max(simRadius(n), minR)) // fit cancels out in screen space
  const onScreen = radii.map((r) => r * (k / k))
  const minPx = 2 * minR
  const maxPx = 2 * Math.max(...kept.map((n) => simRadius(n)))
  console.log(
    `${label.padEnd(9)} dots on screen: diameter ${minPx.toFixed(1)}-${maxPx.toFixed(1)}px (floor ${minPx.toFixed(1)}px)`,
  )
}
