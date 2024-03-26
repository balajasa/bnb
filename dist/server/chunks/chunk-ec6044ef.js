import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { u as usePageContext } from "./chunk-16f2acc5.js";
import { _ as _export_sfc } from "./chunk-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Link",
  __ssrInlineRender: true,
  setup(__props) {
    const pageContext = usePageContext();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: { active: unref(pageContext).urlPathname === _ctx.$attrs.href }
      }, _attrs))} data-v-16e7755a>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</a>`);
    };
  }
});
const Link_vue_vue_type_style_index_0_scoped_16e7755a_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("renderer/Link.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Link = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-16e7755a"]]);
export {
  Link as L
};
