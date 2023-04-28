import { PageContext } from "@/renderer/types"

export { render }

async function render(pageContext: PageContext) {
  document.title = getPageTitle(pageContext)
}

function getPageTitle(pageContext: {
  exports: { documentProps?: { title: string } }
  documentProps?: { title: string }
}): string {
  const title =
    (pageContext.exports.documentProps || {}).title ||
    (pageContext.documentProps || {}).title ||
    '鵝鵝鵝鵝鵝鵝鵝鵝鵝鵝鵝鵝鵝鵝鵝鵝鵝'
  return title
}
