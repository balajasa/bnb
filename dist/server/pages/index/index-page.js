import { defineComponent, computed, mergeProps, unref, useSSRContext, ref, onServerPrefetch, onMounted, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { defineStore } from "pinia";
import fetch from "cross-fetch";
import { L as Link } from "../../chunks/chunk-ec6044ef.js";
import "../../chunks/chunk-16f2acc5.js";
import "../../chunks/chunk-cc2b3d55.js";
const useCounter = defineStore("counter", {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++;
    }
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Counter",
  __ssrInlineRender: true,
  setup(__props) {
    const counterStore = useCounter();
    const data = computed(() => counterStore.count);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ type: "button" }, _attrs))}>Counter ${ssrInterpolate(unref(data))}</button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/Counter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useTodos = defineStore("todos", {
  state: () => ({
    todoList: [],
    test: {}
  }),
  getters: {
    data: (state) => () => state.test
  },
  actions: {
    async fetchData() {
      const res = await fetch("https://star-wars.brillout.com/api/films/1.json");
      this.test = res;
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.page",
  __ssrInlineRender: true,
  setup(__props) {
    const msg = ref("Hello World!");
    const todosStore = useTodos();
    const data = computed(() => todosStore.data());
    const loadTodo = async () => {
      await todosStore.fetchData();
    };
    onServerPrefetch(loadTodo);
    onMounted(loadTodo);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1>Welcome</h1> This page is: ${ssrInterpolate(msg.value)} <ul><li>Rendered to HTML.</li><li>Interactive. `);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</li></ul><div>${ssrInterpolate(unref(data))}</div><hr>`);
      _push(ssrRenderComponent(Link, { href: "/hello" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`route test`);
          } else {
            return [
              createTextVNode("route test")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
