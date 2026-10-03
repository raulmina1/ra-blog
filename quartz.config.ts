import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "RA Blog",
    pageTitleSuffix: "",
    ogSiteName: "RA Blog",
    ogImage: "static/og-ra-logo.png",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "raulmina1.github.io/ra-blog",
    ignorePatterns: ["private/**", "templates/**", ".obsidian/**"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        header: { name: "MADE Tommy", weights: [300, 400, 500, 700] },
        body: { name: "MADE Tommy", weights: [300, 400, 500, 700] },
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f5f5f0",
          lightgray: "#e8e8e0",
          gray: "#b0b0a0",
          darkgray: "#4a4a3a",
          dark: "#1a1a10",
          secondary: "#807500",
          tertiary: "#a89400",
          highlight: "rgba(128, 117, 0, 0.12)",
          textHighlight: "#80750044",
        },
        darkMode: {
          light: "#000000",
          lightgray: "#1e1e1e",
          gray: "#3a3a3a",
          darkgray: "#c8c8c8",
          dark: "#ebebeb",
          secondary: "#a89400",
          tertiary: "#c4ab00",
          highlight: "rgba(128, 117, 0, 0.15)",
          textHighlight: "#80750055",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // CustomOgImages removed (2026-08-17): it fetches fonts from Google Fonts
      // and fails with self-hosted fonts (MADE Tommy). Default static
      // og-image.png is used for social previews instead. Also speeds up build.
    ],
  },
}

export default config
