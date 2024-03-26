import { renderToString as renderToString$1 } from "@vue/server-renderer";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import { createPinia } from "pinia";
import { defineComponent, withCtx, createTextVNode, useSSRContext, h, createSSRApp } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { L as Link } from "../chunks/chunk-ec6044ef.js";
import { _ as _export_sfc } from "../chunks/chunk-cc2b3d55.js";
import { s as setPageContext } from "../chunks/chunk-16f2acc5.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageShell",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      {
        _push(ssrRenderComponent(Link, { href: "/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Home`);
            } else {
              return [
                createTextVNode("Home")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      {
        _push(ssrRenderComponent(Link, { href: "/completeOrder" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`completeOrder`);
            } else {
              return [
                createTextVNode("completeOrder")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      {
        _push(ssrRenderComponent(Link, { href: "/date" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`date`);
            } else {
              return [
                createTextVNode("date")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      {
        _push(ssrRenderComponent(Link, { href: "/lobby" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`lobby`);
            } else {
              return [
                createTextVNode("lobby")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      {
        _push(ssrRenderComponent(Link, { href: "/country" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`country`);
            } else {
              return [
                createTextVNode("country")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      {
        _push(ssrRenderComponent(Link, { href: "/infopage" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Info`);
            } else {
              return [
                createTextVNode("Info")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      {
        _push(ssrRenderComponent(Link, { href: "/payment" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`payment`);
            } else {
              return [
                createTextVNode("payment")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<!--]-->`);
    };
  }
});
const PageShell_vue_vue_type_style_index_0_lang = "";
const PageShell_vue_vue_type_style_index_1_scoped_17ee9e2a_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("renderer/PageShell.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PageShell = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-17ee9e2a"]]);
function createApp(Page, pageProps, pageContext) {
  const PageWithLayout = defineComponent({
    render() {
      return h(
        PageShell,
        {},
        {
          default() {
            return h(Page, pageProps || {});
          }
        }
      );
    }
  });
  const app = createSSRApp(PageWithLayout);
  setPageContext(app, pageContext);
  const store = createPinia();
  app.use(store);
  return app;
}
const logoUrl = "/assets/static/logo.bebe2e90.svg";
const passToClient = ["pageProps", "urlPathname", "routeParams", "documentProps", "initialStoreState"];
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");
  const app = createApp(Page, pageProps, pageContext);
  const appHtml = await renderToString(app);
  const { documentProps } = pageContext.exports;
  const title = documentProps && documentProps.title || "--";
  const desc = documentProps && documentProps.description || "--";
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;
  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  };
}
async function renderToString(app) {
  let err;
  app.config.errorHandler = (err_) => {
    err = err_;
  };
  const appHtml = await renderToString$1(app);
  if (err)
    throw err;
  return appHtml;
}
export {
  passToClient,
  render
};
