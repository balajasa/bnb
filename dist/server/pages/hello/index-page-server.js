import { n as names } from "../../pageFiles.mjs";
import "vite-plugin-ssr/routing";
import "vite-plugin-ssr/RenderErrorPage";
const magentaText = "";
async function onBeforeRender(pageContext) {
  const { name } = pageContext.routeParams;
  const pageProps = { name };
  return {
    pageContext: {
      pageProps
    }
  };
}
function prerender() {
  return ["/hello", ...names.map((name) => `/hello/${name}`)];
}
export {
  onBeforeRender,
  prerender
};
