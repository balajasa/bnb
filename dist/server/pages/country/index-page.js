import { ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { ref, useSSRContext } from "vue";
import { _ as _export_sfc } from "../../chunks/chunk-cc2b3d55.js";
const index_page_vue_vue_type_style_index_0_scoped_78b88847_lang = "";
const _sfc_main = {
  __name: "index.page",
  __ssrInlineRender: true,
  emits: ["search"],
  setup(__props, { emit }) {
    const choose = ref(["住宿"]);
    ref(["", "", "", "", "", "", "", "", ""]);
    const wayItem = ref(["隨心所欲", "歐洲", "英國", "東南亞", "義大利", "中東", "阿拉伯聯合大公園", "美國", "印尼"]);
    const iswayopen = ref(false);
    const isgoopen = ref(false);
    const ispeopleopen = ref(false);
    ref(true);
    ref(true);
    ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="country" data-v-78b88847><div class="country_title" data-v-78b88847><!--[-->`);
      ssrRenderList(choose.value, (item) => {
        _push(`<span class="title_choose" data-v-78b88847>${ssrInterpolate(item)}</span>`);
      });
      _push(`<!--]--></div><div class="country_box" data-v-78b88847>`);
      if (iswayopen.value) {
        _push(`<div class="country_place" data-v-78b88847><div class="country_where" data-v-78b88847>想去哪？</div><input class="country_search" type="text" placeholder="搜尋目的地" data-v-78b88847><div class="country_banner" data-v-78b88847><!--[-->`);
        ssrRenderList(wayItem.value, (item) => {
          _push(`<div class="imageBox" data-v-78b88847><div class="imageBox_image" data-v-78b88847></div><div class="imageBox_Text" data-v-78b88847>${ssrInterpolate(item)}</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!iswayopen.value) {
        _push(`<div class="country_date" data-v-78b88847><div class="date" data-v-78b88847>地點</div><div class="addData" data-v-78b88847>隨心所欲</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!isgoopen.value) {
        _push(`<div class="country_date" data-v-78b88847><div class="date" data-v-78b88847>日期</div><div class="addData" data-v-78b88847>新增日期</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isgoopen.value) {
        _push(`<div class="country_place" data-v-78b88847><div class="country_where" data-v-78b88847>何時出發？</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!ispeopleopen.value) {
        _push(`<div class="country_date" data-v-78b88847><div class="date" data-v-78b88847>旅客</div><div class="addData" data-v-78b88847>新增人數</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (ispeopleopen.value) {
        _push(`<div class="country_place" data-v-78b88847><div class="country_where" data-v-78b88847>有幾個人？</div><div class="country_people" data-v-78b88847><div class="country_text" data-v-78b88847><div class="people_number" data-v-78b88847>成人</div><div class="people_info" data-v-78b88847>滿13歲</div></div><div class="country_add" data-v-78b88847>0</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="country_footer" data-v-78b88847><div class="clearButton" data-v-78b88847>清除全部</div><div class="searchButton" data-v-78b88847>搜尋</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/country/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Country = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-78b88847"]]);
export {
  Country as default
};
