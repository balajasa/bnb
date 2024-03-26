import { defineComponent, mergeProps, useSSRContext, ref, onMounted, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, computed, watch } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "../../chunks/chunk-cc2b3d55.js";
import { u as useOrderStore } from "../../chunks/chunk-0bffdfe9.js";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { storeToRefs } from "pinia";
import { u as usePageContext } from "../../chunks/chunk-16f2acc5.js";
import moment from "moment";
const _imports_0 = "/assets/static/earth.7d4dca37.svg";
const _imports_1 = "/assets/static/currency.2cb3570c.svg";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "RoomTitle",
  __ssrInlineRender: true,
  props: {
    data: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "title-nav" }, _attrs))}><div class="title">${ssrInterpolate(props.data.full_name)}</div><div class="functions"><img class="svgIcon"${ssrRenderAttr("src", _imports_0)}><img class="svgIcon"${ssrRenderAttr("src", _imports_1)}></div></div>`);
    };
  }
});
const RoomTitle_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/infopage/RoomTitle.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Info",
  __ssrInlineRender: true,
  props: {
    data: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="contact-info" data-v-74029e03><div class="title-detail" data-v-74029e03>聯絡資訊</div><div class="contact-group" data-v-74029e03><a${ssrRenderAttr("href", `tel:${__props.data.tel}`)} class="icon-contact contact-phone" data-v-74029e03><span data-v-74029e03>${ssrInterpolate(__props.data.tel)}</span></a></div><div class="contact-group" data-v-74029e03><a${ssrRenderAttr("href", __props.data.fb_link)} class="icon-contact contact-web" data-v-74029e03><span data-v-74029e03>${ssrInterpolate(__props.data.full_name)} 官網</span></a></div></div><div class="contact-info" data-v-74029e03><div class="title-detail" data-v-74029e03>更多資訊</div><div class="contact-group" data-v-74029e03><a${ssrRenderAttr("href", __props.data.fb_link)} class="icon-contact contact-fb" data-v-74029e03><span data-v-74029e03>FACEBOOK 粉絲專頁</span></a></div><div class="contact-group" data-v-74029e03><a${ssrRenderAttr("href", __props.data.ig_link)} class="icon-contact contact-instagram" data-v-74029e03><span data-v-74029e03>INSTAGRAM 官方帳號</span></a></div><div class="contact-group" data-v-74029e03><a${ssrRenderAttr("href", __props.data.line_link)} class="icon-contact contact-line" data-v-74029e03><span data-v-74029e03>LINE 官方帳號</span></a></div></div><div class="contact-info" data-v-74029e03><div class="title-detail" data-v-74029e03>位置</div><div class="contact-group" data-v-74029e03><div class="icon-contact contact-address" data-v-74029e03><span data-v-74029e03>42444台灣台中市和平區東關路一段台電巷122-2號</span></div></div><iframe${ssrRenderAttr("src", __props.data.map_link)}${ssrRenderAttr("width", "100%")} style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-74029e03></iframe></div><!--]-->`);
    };
  }
});
const Info_vue_vue_type_style_index_0_scoped_74029e03_lang = "";
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/infopage/Info.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Info = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-74029e03"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "RoomFooter",
  __ssrInlineRender: true,
  props: {
    data: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-82e20ab7><div class="footer__hotel" data-v-82e20ab7><h3 data-v-82e20ab7>${ssrInterpolate(__props.data.full_name)}</h3><hr data-v-82e20ab7><div class="footer__contacts" data-v-82e20ab7><div data-v-82e20ab7><a${ssrRenderAttr("href", __props.data.map_link)} data-v-82e20ab7><i class="owl-phone" data-v-82e20ab7></i><span data-v-82e20ab7>${ssrInterpolate(__props.data.address)}</span></a></div><div data-v-82e20ab7><a${ssrRenderAttr("href", `tel:${__props.data.tel}`)} data-v-82e20ab7><i class="owl-phone" data-v-82e20ab7></i><span data-v-82e20ab7>${ssrInterpolate(__props.data.tel)}</span></a></div><div data-v-82e20ab7><a${ssrRenderAttr("href", __props.data.fb_link)} data-v-82e20ab7><i class="owl-earth" data-v-82e20ab7></i><span data-v-82e20ab7>${ssrInterpolate(__props.data.full_name)} 官網</span></a></div></div></div><div class="block" data-v-82e20ab7>Powered by BnB</div></footer>`);
    };
  }
});
const RoomFooter_vue_vue_type_style_index_0_scoped_82e20ab7_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/infopage/RoomFooter.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const RoomFooter = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-82e20ab7"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BookingSelector",
  __ssrInlineRender: true,
  emits: ["search"],
  setup(__props, { emit }) {
    const orderStore = useOrderStore();
    const start = ref("2023/04/20");
    const end = ref("2023/04/25");
    onMounted(() => {
      emit("search", {
        start: start.value,
        end: end.value
      });
      orderStore.updateOrderInfo({
        start: start.value,
        end: end.value,
        people: {
          adults: 2,
          children: 0
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "selector-content" }, _attrs))} data-v-29e9659d><div class="selector-item" data-v-29e9659d><div class="selector-title" data-v-29e9659d>訂房日期</div><div class="selector" data-v-29e9659d>${ssrInterpolate(start.value)} - ${ssrInterpolate(end.value)}</div></div><div class="selector-item" data-v-29e9659d><div class="selector-title" data-v-29e9659d>人數</div><div class="selector" data-v-29e9659d>2成人, 0孩童, 0嬰幼兒</div></div></div>`);
    };
  }
});
const BookingSelector_vue_vue_type_style_index_0_scoped_29e9659d_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/infopage/BookingSelector.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const BookingSelector = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-29e9659d"]]);
const swiper_min = "";
const pagination_min = "";
const __default__ = {
  components: {
    Swiper,
    SwiperSlide
  }
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "Carousel",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      default: []
    },
    domain: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const modules = ref([Pagination]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        pagination: {
          type: "fraction"
        },
        enabled: true,
        modules: modules.value,
        class: "mySwiper"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.data, (item, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", `${__props.domain}/${item}`)} class="img-rwd" data-v-e7860ab9${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: `${__props.domain}/${item}`,
                        class: "img-rwd"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.data, (item, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: `${__props.domain}/${item}`,
                      class: "img-rwd"
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const Carousel_vue_vue_type_style_index_0_scoped_e7860ab9_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/infopage/Carousel.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-e7860ab9"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RoomType",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    const description = computed(() => {
      return props.data.description.split(/\\r|\\n/g).join("<br/>");
    });
    const count = ref(0);
    const order = useOrderStore();
    storeToRefs(order);
    watch(
      () => count.value,
      () => {
        console.log("inini", count.value);
        if (count.value > props.data.remaining || count.value === 0) {
          order.removeOrder(props.data.room_id);
        } else {
          order.updateOrder(props.data.room_id, {
            count: count.value,
            room: props.data
          });
          console.log(props.data.room_id, {
            price: count.value * props.data.totalPrice
          });
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.data.enough) {
        _push(`<!--[--><div class="main-title">${ssrInterpolate(__props.data.title)}</div><div class="room-info"><div class="info-content"><div class="room-carousel">`);
        _push(ssrRenderComponent(Carousel, {
          data: __props.data.images,
          domain: "http://34.31.125.18:8081"
        }, null, _parent));
        _push(`</div><div class="basic-info"><span class="price-tag">TWD ${ssrInterpolate(__props.data.price)}起</span><div class="info-group"><label>床型</label> ${ssrInterpolate(__props.data.bed)}</div><div class="info-group"><label>人數限制</label> ${ssrInterpolate(__props.data.max)}人 </div><div class="info-group"><label>坪數</label> ${ssrInterpolate(__props.data.size)}</div><div class="info-group"><label>設施</label> ${ssrInterpolate(__props.data.facilities)}</div></div></div><hr><div class="room-detail"><h3 class="title-detail">官網優惠預訂價格</h3><div class="txt-detail">${unref(description)}</div></div></div><div class="room-order"><div class="link-cancle">取消政策</div><div class="order-area"><div class="order-price">約 TWD <span>${ssrInterpolate(__props.data.price)}</span> / 晚</div><div class="numeric-box"><div class="input-box"><input class="numeric-input" type="number"${ssrRenderAttr("value", count.value)}${ssrRenderAttr("max", __props.data.remaining)}${ssrRenderAttr("min", 0)}><button type="button" class="btn-num btn-decrement">-</button><button type="button" class="btn-num btn-increment">+</button></div><span class="txt-room">間</span></div><div class="max-num">剩餘：${ssrInterpolate(__props.data.remaining)}間</div></div></div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const RoomType_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/infopage/RoomType.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RoomOrder",
  __ssrInlineRender: true,
  setup(__props) {
    const order = useOrderStore();
    const { orders, total } = storeToRefs(order);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(orders).size > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "room-order" }, _attrs))}><div>訂單總價</div><div>TWD $${ssrInterpolate(unref(total))}</div><button>下一步</button></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const RoomOrder_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/infopage/RoomOrder.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.page",
  __ssrInlineRender: true,
  setup(__props) {
    const order = useOrderStore();
    const pageContext = usePageContext();
    ref(["p1.jpeg", "p2.jpeg", "p3.jpeg", "p4.jpeg", "p5.jpeg"]);
    const info = ref({
      account: "",
      full_name: "",
      nick_name: "",
      email: "",
      tel: "",
      address: "",
      map_link: "",
      fb_link: "",
      line_link: "",
      ig_link: ""
    });
    const rooms = ref([]);
    const domain = "http://34.31.125.18:8081";
    const searchPayload = ref({
      start: "",
      end: ""
    });
    onMounted(() => {
      setInfo();
      setRooms();
      order.clearOrders();
    });
    function handelSearch(payload) {
      searchPayload.value.start = payload.start;
      searchPayload.value.end = payload.end;
      if (rooms.value.length === 0) {
        return;
      }
      console.log(payload);
      fetch(
        `${domain}/api/room_stock/${pageContext.routeParams.name}?${new URLSearchParams({
          start: payload.start.replaceAll("/", "-"),
          end: payload.end.replaceAll("/", "-")
        })}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json"
          }
        }
      ).then((response) => response.json()).then((response) => {
        setRoomStock(response, payload);
      });
    }
    function setInfo() {
      fetch(`${domain}/api/info/${pageContext.routeParams.name}`, {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }).then((response) => response.json()).then((response) => {
        info.value = response.res.data;
      });
    }
    function setRooms() {
      fetch(`${domain}/api/info/${pageContext.routeParams.name}`, {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }).then((response) => response.json()).then((response) => {
        info.value = response.res.data;
      });
      fetch(`${domain}/api/room/${pageContext.routeParams.name}`, {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }).then((response) => response.json()).then((response) => {
        const resp = response.res.rooms;
        rooms.value = resp.map((data) => ({
          ...data,
          enough: false,
          totalPrice: 0
        }));
        handelSearch(searchPayload.value);
      });
    }
    function setRoomStock(response, payload) {
      const room_stock = response.res.data;
      const startDay = moment(payload.start);
      const endDay = moment(payload.end);
      const days = endDay.diff(startDay, "days") + 1;
      rooms.value.forEach((room) => {
        room.enough = false;
        room.totalPrice = 0;
        room.remaining = 0;
        const stocks = room_stock.filter(
          (data) => data.room_id === room.room_id && data.remaining > 0
        );
        room.enough = stocks.length === days;
        if (room.enough) {
          room.totalPrice = room_stock.map((data) => data.price).reduce((a, b) => a + b);
          room.remaining = Math.min(...room_stock.map((data) => data.remaining));
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$7, { data: info.value }, null, _parent));
      _push(`<div class="info-wrapper" data-v-a19bee70><div class="container" data-v-a19bee70>`);
      _push(ssrRenderComponent(BookingSelector, { onSearch: handelSearch }, null, _parent));
      _push(`<div class="hotel-sub-nav" data-v-a19bee70><a href="#anchor-rooms" class="is-active" data-v-a19bee70>房型</a><a href="#anchor-intro" data-v-a19bee70>旅館資訊</a></div></div></div><div class="container" data-v-a19bee70><div class="room-main" data-v-a19bee70><div class="room-content" data-v-a19bee70><div id="anchor-rooms" class="rooms-area" data-v-a19bee70><!--[-->`);
      ssrRenderList(rooms.value, (room) => {
        _push(`<div data-v-a19bee70>`);
        _push(ssrRenderComponent(_sfc_main$2, { data: room }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div id="anchor-intro" data-v-a19bee70>`);
      _push(ssrRenderComponent(Info, { data: info.value }, null, _parent));
      _push(`</div></div><div class="order-content" data-v-a19bee70>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(RoomFooter, { data: info.value }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const index_page_vue_vue_type_style_index_0_scoped_a19bee70_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/infopage/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_page = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a19bee70"]]);
export {
  index_page as default
};
