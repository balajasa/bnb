import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext, ref, onMounted, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { L as Link } from "../chunks/chunk-ec6044ef.js";
import { _ as _export_sfc } from "../chunks/chunk-cc2b3d55.js";
import Country from "./country/index-page.js";
import "../chunks/chunk-16f2acc5.js";
let LobbyCard$1 = class LobbyCard {
  constructor(payload) {
    this.img = payload.img || "";
    this.account = payload.account || "";
    this.full_name = payload.full_name || "";
    this.nick_name = payload.nick_name || "";
    this.price = 123;
  }
};
function ParseLobbyCard(res) {
  if (!Array.isArray(res)) {
    return [];
  }
  return res.map((i) => new LobbyCard$1(i));
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LobbyCard",
  __ssrInlineRender: true,
  props: {
    data: null,
    isFavorite: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-c8942e90>`);
      _push(ssrRenderComponent(Link, {
        href: `/infopage/${props.data.account}`,
        class: "card-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-imgs" data-v-c8942e90${_scopeId}><img class="card-img"${ssrRenderAttr("src", props.data.img)}${ssrRenderAttr("alt", props.data.full_name)}${ssrRenderAttr("title", props.data.full_name)} data-v-c8942e90${_scopeId}></div><div class="card-info" data-v-c8942e90${_scopeId}><p class="card-info-title" data-v-c8942e90${_scopeId}>${ssrInterpolate(props.data.full_name)}</p>`);
            if (props.data.price) {
              _push2(`<p data-v-c8942e90${_scopeId}> 每晚 $${ssrInterpolate(props.data.price)} TWD </p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><button class="card-favorite" data-v-c8942e90${_scopeId}>`);
            {
              _push2(`<!---->`);
            }
            _push2(`</button>`);
          } else {
            return [
              createVNode("div", { class: "card-imgs" }, [
                createVNode("img", {
                  class: "card-img",
                  src: props.data.img,
                  alt: props.data.full_name,
                  title: props.data.full_name
                }, null, 8, ["src", "alt", "title"])
              ]),
              createVNode("div", { class: "card-info" }, [
                createVNode("p", { class: "card-info-title" }, toDisplayString(props.data.full_name), 1),
                props.data.price ? (openBlock(), createBlock("p", { key: 0 }, " 每晚 $" + toDisplayString(props.data.price) + " TWD ", 1)) : createCommentVNode("", true)
              ]),
              createVNode("button", {
                class: "card-favorite",
                onClick: withModifiers(() => {
                }, ["prevent"])
              }, [
                createCommentVNode("", true)
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const LobbyCard_vue_vue_type_style_index_0_scoped_c8942e90_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/LobbyCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const LobbyCard2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c8942e90"]]);
const Search_vue_vue_type_style_index_0_scoped_0ca50df9_lang = "";
const _sfc_main$1 = {
  __name: "Search",
  __ssrInlineRender: true,
  props: {
    card: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "search" }, _attrs))} data-v-0ca50df9><div class="searchBox" data-v-0ca50df9><div class="searchIcon" data-v-0ca50df9></div><div class="searchtext" data-v-0ca50df9>任何地方 <br data-v-0ca50df9><span class="searchmini" data-v-0ca50df9>任1週 新增人數</span></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Search.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Search = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0ca50df9"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.page",
  __ssrInlineRender: true,
  setup(__props) {
    let cards = ref([]);
    const showSearch = ref(false);
    onMounted(() => {
      const url = "http://34.31.125.18:8081/api/info";
      fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }).then((response) => response.json()).then((response) => {
        cards.value = ParseLobbyCard(response.res.data);
      });
    });
    function toggleSearch() {
      showSearch.value = !showSearch.value;
    }
    function search(data) {
      showSearch.value = !showSearch.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div style="${ssrRenderStyle(showSearch.value ? null : { display: "none" })}" data-v-185af9cf>`);
      _push(ssrRenderComponent(Country, {
        onSearch: ($event) => search()
      }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle(!showSearch.value ? null : { display: "none" })}" data-v-185af9cf>`);
      _push(ssrRenderComponent(Search, { onClick: toggleSearch }, null, _parent));
      _push(`<div class="lobby-cards" data-v-185af9cf><!--[-->`);
      ssrRenderList(unref(cards), (card) => {
        _push(ssrRenderComponent(LobbyCard2, {
          class: "lobby-card",
          key: card.account,
          data: card,
          isFavorite: true
        }, null, _parent));
      });
      _push(`<!--]--></div></div><!--]-->`);
    };
  }
});
const index_page_vue_vue_type_style_index_0_scoped_185af9cf_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_page = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-185af9cf"]]);
export {
  index_page as default
};
