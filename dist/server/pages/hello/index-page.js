import { defineComponent, unref, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { n as names } from "../../pageFiles.mjs";
import "vite-plugin-ssr/routing";
import "vite-plugin-ssr/RenderErrorPage";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.page",
  __ssrInlineRender: true,
  props: ["name"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1>Hello</h1><p> Hi <b>${ssrInterpolate(__props.name)}</b>. </p><ul><!--[-->`);
      ssrRenderList(unref(names), (item, i) => {
        _push(`<li><a${ssrRenderAttr("href", `/hello/${item}`)}>/hello/${ssrInterpolate(item)}</a></li>`);
      });
      _push(`<!--]--></ul><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hello/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
