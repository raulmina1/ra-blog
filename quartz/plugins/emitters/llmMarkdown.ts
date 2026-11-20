import fs from "fs"
import path from "path"
import { FilePath, FullSlug, joinSegments } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"

/**
 * LLM / agent-friendly mirror of the site (Raul 20.11.26: every link of the
 * website must carry its information as downloadable markdown so agents can
 * read it easily).
 *
 * For every published page this emitter writes:
 *   public/static/llm/<slug>.md     -> verbatim markdown of that page
 *   public/static/llm/manifest.json -> machine index (title, description, urls)
 *   public/llms.txt                 -> llmstxt.org style index with links
 *   public/llms-full.txt            -> every page, concatenated
 *
 * Wikilinks are rewritten to absolute site URLs so a crawler reading the .md
 * does not hit Obsidian syntax it cannot resolve.
 */

const SITE = "https://raulmina1.github.io/ra-blog"
const MD_DIR = "static/llm"
const LF = String.fromCharCode(10)
const CRLF = String.fromCharCode(13, 10)

type Entry = {
  slug: FullSlug
  title: string
  description: string
  section: string
  md: string
  markdown: string
}

const stripFrontmatter = (raw: string): string => {
  if (!raw.startsWith("---")) return raw
  const end = raw.indexOf(LF + "---", 3)
  if (end === -1) return raw
  const after = raw.indexOf(LF, end + 4)
  return after === -1 ? "" : raw.slice(after + 1)
}

/** frontmatter description clean enough to publish in a one-line index */
const cleanDescription = (d: string): string => {
  const flat = d.split(LF).join(" ").split("\r").join(" ").split("\t").join(" ").trim()
  if (flat.length < 20) return ""
  const first = flat.charAt(0)
  if (">|#*-_+".indexOf(first) !== -1) return ""
  return flat.split("  ").join(" ")
}

/** true when the page already opens with its own H1 in the first lines */
const startsWithH1 = (markdown: string): boolean => {
  for (const line of markdown.split(LF).slice(0, 6)) {
    const t = line.trim()
    if (t.length === 0) continue
    return t.startsWith("# ")
  }
  return false
}

const key = (s: string): string => s.trim().toLowerCase()

const buildSlugMap = (entries: Entry[]): Map<string, FullSlug> => {
  const map = new Map<string, FullSlug>()
  for (const e of entries) {
    const segments = e.slug.split("/")
    const last = segments[segments.length - 1]
    for (const k of [e.slug, last, e.title]) {
      const kk = key(k)
      if (kk && !map.has(kk)) map.set(kk, e.slug)
    }
    if (last === "index" && segments.length > 1) {
      const folder = segments[segments.length - 2]
      if (!map.has(key(folder))) map.set(key(folder), e.slug)
    }
  }
  return map
}

const rewriteWikilinks = (body: string, map: Map<string, FullSlug>): string => {
  return body.replace(/(!?)\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (whole, bang, target, display) => {
    if (bang === "!") return whole
    const clean = String(target).split("#")[0].trim()
    const slug = map.get(key(clean))
    if (!slug) return whole
    const label = display ? String(display).trim() : clean
    const href = slug === "index" ? SITE + "/" : SITE + "/" + slug
    return "[" + label + "](" + href + ")"
  })
}

const sectionOf = (slug: string): string => {
  if (!slug.includes("/")) return "Start"
  const first = slug.split("/")[0]
  return first.charAt(0).toUpperCase() + first.slice(1)
}

const pageUrlOf = (slug: string): string => (slug === "index" ? SITE + "/" : SITE + "/" + slug)

export const LlmMarkdown: QuartzEmitterPlugin = () => {
  return {
    name: "LlmMarkdown",
    async *emit(ctx, content) {
      const outDir = joinSegments(ctx.argv.output, MD_DIR)

      // 1. collect every published page
      const entries: Entry[] = []
      for (const [, file] of content) {
        const slug = file.data.slug as FullSlug | undefined
        const src = file.data.filePath as FilePath | undefined
        if (!slug || !src) continue
        if (slug === "404" || slug === "tags" || slug.startsWith("tags/")) continue
        if (slug === "thanks" || slug.endsWith("/thanks")) continue
        let raw: string
        try {
          raw = await fs.promises.readFile(src, "utf8")
        } catch {
          continue
        }
        raw = raw.split(CRLF).join(LF)
        const segments = slug.split("/")
        const fallbackTitle = segments[segments.length - 1].split("-").join(" ")
        const fm = (file.data.frontmatter ?? {}) as Record<string, unknown>
        const title = String(fm.title ?? fallbackTitle)
        const description = cleanDescription(
          String(
            fm.description ??
              fm.socialDescription ??
              (file.data.description ?? "").replace(/<[^>]+>/g, "").trim(),
          ),
        )
        entries.push({
          slug,
          title,
          description,
          section: sectionOf(slug),
          md: MD_DIR + "/" + slug + ".md",
          markdown: stripFrontmatter(raw),
        })
      }

      // 2. resolve wikilinks once the whole slug map exists
      const map = buildSlugMap(entries)
      for (const e of entries) {
        e.markdown = rewriteWikilinks(e.markdown, map)
      }

      entries.sort((a, b) =>
        a.section === b.section
          ? a.title.localeCompare(b.title, "en", { sensitivity: "base" })
          : a.section.localeCompare(b.section, "en", { sensitivity: "base" }),
      )

      // 3. per-page markdown mirrors
      await fs.promises.mkdir(outDir, { recursive: true })
      for (const e of entries) {
        const dest = joinSegments(ctx.argv.output, e.md) as FilePath
        await fs.promises.mkdir(path.dirname(dest), { recursive: true })
        const header = [
          ...(startsWithH1(e.markdown) ? [] : ["# " + e.title, ""]),
          "*Downloadable markdown mirror of " + pageUrlOf(e.slug) + "*",
          "",
        ].join(LF)
        await fs.promises.writeFile(dest, header + e.markdown.trim() + LF, "utf8")
        yield dest
      }

      // 4. manifest.json
      const manifest = entries.map((e) => ({
        title: e.title,
        description: e.description,
        url: pageUrlOf(e.slug),
        markdown: SITE + "/" + e.md,
        section: e.section,
      }))
      const manifestPath = joinSegments(outDir, "manifest.json") as FilePath
      await fs.promises.writeFile(manifestPath, JSON.stringify(manifest, null, 2), "utf8")
      yield manifestPath

      // 5. llms.txt
      const bySection = new Map<string, Entry[]>()
      for (const e of entries) {
        const list = bySection.get(e.section) ?? []
        list.push(e)
        bySection.set(e.section, list)
      }
      const lines: string[] = [
        "# RA Blog — Raul Mina",
        "",
        "> Digital garden of a process engineer in Berlin: AI systems, knowledge",
        "> graphs, energy technology, German language material and daily briefs.",
        "> Every page below is mirrored as plain markdown and can be read offline.",
        "",
        "Pages: " + entries.length + ". Full text in one file: " + SITE + "/llms-full.txt",
        "Machine index (JSON): " + SITE + "/" + MD_DIR + "/manifest.json",
        "",
      ]
      for (const [section, list] of [...bySection.entries()].sort((a, b) =>
        a[0].localeCompare(b[0]),
      )) {
        lines.push("## " + section, "")
        for (const e of list) {
          const desc = e.description ? ": " + e.description : ""
          lines.push("- [" + e.title + "](" + SITE + "/" + e.md + ")" + desc)
        }
        lines.push("")
      }
      const llmsPath = joinSegments(ctx.argv.output, "llms.txt") as FilePath
      await fs.promises.writeFile(llmsPath, lines.join(LF), "utf8")
      yield llmsPath

      // 6. llms-full.txt
      const full = entries
        .map((e) => {
          const head = startsWithH1(e.markdown) ? [] : ["# " + e.title, ""]
          return ["<!-- " + pageUrlOf(e.slug) + " -->", "", ...head, e.markdown.trim(), ""].join(LF)
        })
        .join(LF + "---" + LF + LF)
      const fullPath = joinSegments(ctx.argv.output, "llms-full.txt") as FilePath
      await fs.promises.writeFile(fullPath, full, "utf8")
      yield fullPath
    },
    async *partialEmit() {},
  }
}
