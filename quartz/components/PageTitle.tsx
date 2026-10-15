import { joinSegments, pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// Logo only — the "RA Blog" wordmark under the icon was removed on request
// (Raúl 15.10.26: "quita el RA blog debajo de mi icono").
const PageTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const logoPath = joinSegments(baseDir, "static/ra-logo.png")
  return (
    <div class={classNames(displayClass, "page-title-wrapper")}>
      <a href={baseDir}>
        <img src={logoPath} alt="RA Logo" class="ra-logo" />
      </a>
    </div>
  )
}

PageTitle.css = `
.page-title-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.ra-logo {
  width: 70px !important;
  height: 70px !important;
  max-width: none !important;
  object-fit: contain;
  display: block;
}

@media all and (max-width: 800px) {
  .ra-logo {
    width: 42px !important;
    height: 42px !important;
  }
}

.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
