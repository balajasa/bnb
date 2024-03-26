import { resolveRoute } from "vite-plugin-ssr/routing";
import { RenderErrorPage } from "vite-plugin-ssr/RenderErrorPage";
const names = ["evan", "rom", "alice", "jon", "eli"];
const index_page_route$1 = (pageContext) => {
  if (pageContext.urlPathname === "/hello" || pageContext.urlPathname === "/hello/") {
    const name2 = "anonymous";
    return { routeParams: { name: name2 } };
  }
  const result = resolveRoute("/hello/@name", pageContext.urlPathname);
  if (!result.match)
    return false;
  const { name } = result.routeParams;
  if (!names.includes(name)) {
    const errorInfo = `Unknown name: ${name}.`;
    throw RenderErrorPage({ pageContext: { pageProps: { errorInfo } } });
  }
  return { routeParams: { name } };
};
const __vite_glob_2_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index_page_route$1
}, Symbol.toStringTag, { value: "Module" }));
const index_page_route = "/infopage/@name";
const __vite_glob_2_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index_page_route
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$1 = ["render"];
const __vite_glob_3_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$1
}, Symbol.toStringTag, { value: "Module" }));
const exportNames = ["render"];
const __vite_glob_3_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames
}, Symbol.toStringTag, { value: "Module" }));
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const isGeneratedFile = true;
const pageConfigs = [];
const pageConfigGlobal = {
  ["onBeforeRoute"]: null,
  ["onPrerenderStart"]: null
};
const invalidator = null;
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({ "/pages/completeOrder/@id.page.vue": () => import("./pages/completeOrder/@id-page.js"), "/pages/country/index.page.vue": () => import("./pages/country/index-page.js"), "/pages/date/index.page.vue": () => import("./pages/date/index-page.js"), "/pages/hello/index.page.vue": () => import("./pages/hello/index-page.js"), "/pages/index.page.vue": () => import("./pages/index-page.js"), "/pages/index/index.page.vue": () => import("./pages/index/index-page.js"), "/pages/infopage/index.page.vue": () => import("./pages/infopage/index-page.js"), "/pages/payment/index.page.vue": () => import("./pages/payment/index-page.js"), "/renderer/_error.page.vue": () => import("./renderer/error-page.js") });
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({ "/pages/hello/index.page.server.ts": () => import("./pages/hello/index-page-server.js"), "/renderer/_default.page.server.ts": () => import("./renderer/default-page-server.js") });
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({ "/pages/hello/index.page.route.ts": __vite_glob_2_0, "/pages/infopage/index.page.route.ts": __vite_glob_2_1 });
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({ "/pages/hello/index.page.client.ts": __vite_glob_3_0, "/renderer/_default.page.client.ts": __vite_glob_3_1 });
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
export {
  invalidator,
  isGeneratedFile,
  names as n,
  neverLoaded,
  pageConfigGlobal,
  pageConfigs,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
};
