import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { useSSRContext, resolveComponent, mergeProps } from "vue";
import { _ as _export_sfc } from "../../chunks/chunk-cc2b3d55.js";
import moment from "moment";
import "moment/locale/zh-tw.js";
const DateContent_vue_vue_type_style_index_0_scoped_b4c7b862_lang = "";
const _sfc_main$3 = {
  emit: ["get_more_action"],
  data() {
    return {
      monthIndex1: 0,
      dayIndex1: 0,
      monthIndex2: 0,
      dayIndex2: 0,
      startDay: null,
      endDay: null,
      isRange: false,
      rangeResult: [],
      startDate: "",
      endDate: "",
      dates: [],
      rangeMonth: "",
      rangeDay: 0,
      moreMonth: 0,
      handleStartDate: null,
      clickCount: 0
    };
  },
  methods: {
    isDisabled(day) {
      const isNotToday = day.isYesterday === false || void 0;
      return isNotToday;
    },
    selectDate(month, day) {
      if (!this.isDisabled(day) && day.number !== void 0) {
        if (this.startDay === null) {
          this.startDay = day.number;
          this.dayIndex1 = day.number;
          console.log("this.dayIndex1", this.dayIndex1);
          this.monthIndex1 = month;
          this.startDate = this.convertTimestampToDate(day.timeStamp);
        } else if (this.endDay === null) {
          this.endDay = day.number;
          this.dayIndex2 = day.number;
          this.monthIndex2 = month;
          this.endDate = this.convertTimestampToDate(day.timeStamp);
        } else if (this.clickCount === 2) {
          this.startDay = null;
          this.endDay = null;
          this.clickCount = 0;
          this.dates = [];
        }
        this.clickCount++;
      }
    },
    convertTimestampToDate(timestamp) {
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const formattedDate = `${year}-${month}-${day}`;
      return formattedDate;
    },
    isDateRange(year, month, day) {
      const date = `${year}/${month}/${day}`;
      let isRange = false;
      const sliceDate = this.dates.slice(1, -1);
      if (sliceDate.indexOf(date) >= 0) {
        isRange = true;
      }
      return isRange;
    },
    addMonth() {
      this.moreMonth += 3;
    }
  },
  watch: {
    handleStartDate(newVal) {
      this.startDate = null;
      console.log("handleStartDate", newVal);
    }
  },
  mounted() {
    this.$watch(() => [this.startDate, this.endDate], ([newStartDate, newEndDate]) => {
      if (newStartDate && newEndDate) {
        const oneDay = 24 * 60 * 60 * 1e3;
        const startTimestamp = Date.parse(newStartDate);
        const endTimestamp = Date.parse(newEndDate);
        const numDays = Math.round(Math.abs((startTimestamp - endTimestamp) / oneDay)) + 1;
        const result = [];
        for (let i = 0; i < numDays; i++) {
          const timestamp = startTimestamp + i * oneDay;
          result.push(new Date(timestamp).toLocaleDateString());
        }
        this.dates = result;
      } else {
        this.dates = [];
      }
    });
    this.$emit("get_more_action", this.addMonth);
  },
  computed: {
    // 產生日曆
    months() {
      const monthsCount = 4 + this.moreMonth;
      const today = /* @__PURE__ */ new Date();
      const result = [];
      let currentMonth = today.getMonth();
      for (let i = 0; i < monthsCount; i++) {
        const firstDay = new Date(today.getFullYear(), currentMonth, 1);
        const lastDay = new Date(today.getFullYear(), currentMonth + 1, 0);
        const startOffset = firstDay.getDay();
        const endOffset = 6 - lastDay.getDay();
        const daysInMonth = lastDay.getDate();
        const todayHour = today.setHours(0, 0, 0, 0);
        const toydayFormat = new Date(todayHour);
        const days = [];
        for (let i2 = 1 - startOffset; i2 <= daysInMonth + endOffset; i2++) {
          const date = new Date(today.getFullYear(), currentMonth, i2);
          if (i2 > 0 && i2 <= daysInMonth) {
            days.push({
              number: i2,
              isToday: date.toDateString() === today.toDateString(),
              isWeekend: date.getDay() === 0 || date.getDay() === 6,
              isYesterday: Date.parse(date).valueOf() >= Date.parse(toydayFormat).valueOf(),
              timeStamp: Date.parse(date).valueOf()
            });
          } else {
            days.push("");
          }
        }
        const weeks = [];
        for (let i2 = 0; i2 < days.length; i2 += 7) {
          weeks.push(days.slice(i2, i2 + 7));
        }
        result.push({
          year: `${firstDay.getFullYear()}`,
          month: `${firstDay.getMonth() + 1}`,
          weeks
        });
        currentMonth++;
      }
      return result;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-b4c7b862><!--[-->`);
  ssrRenderList($options.months, (month, index) => {
    _push(`<div class="wrap" data-v-b4c7b862><div class="datePicker-head" data-v-b4c7b862><div class="year" data-v-b4c7b862>${ssrInterpolate(month.year)}年</div><div class="month" data-v-b4c7b862>${ssrInterpolate(month.month)}月</div></div><div class="datePicker-box" data-v-b4c7b862><!--[-->`);
    ssrRenderList(month.weeks, (week, index2) => {
      _push(`<div class="week-content" data-v-b4c7b862><!--[-->`);
      ssrRenderList(week, (day) => {
        _push(`<div class="${ssrRenderClass([{
          "is-start": $data.startDay && $data.startDay === day.number && $data.monthIndex1 === month.month,
          "is-end": $data.startDay && $data.endDay && $data.endDay === day.number && $data.monthIndex2 === month.month,
          "is-disabled": $options.isDisabled(day),
          "is-range": $options.isDateRange(month.year, month.month, day.number)
        }, "day"])}" data-v-b4c7b862>${ssrInterpolate(day.number)}</div>`);
      });
      _push(`<!--]--></div>`);
    });
    _push(`<!--]--></div></div>`);
  });
  _push(`<!--]--></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/date/DateContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DateContent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-b4c7b862"]]);
const DateNewMoment_vue_vue_type_style_index_0_scoped_e3026f64_lang = "";
const _sfc_main$2 = {
  emit: ["getMoreMonth", "emitChooseDate"],
  props: ["duringDate", "clearouo", "setouo"],
  data() {
    return {
      currentMonth: "",
      chooseDate: [],
      hoverDay: null,
      isNotToday: false,
      isClick: false,
      moreMonth: 0
    };
  },
  computed: {
    createCalender() {
      const result = [];
      const today = moment();
      const monthsCount = 4 + this.moreMonth;
      let currentMonth = today.month();
      for (let i = 0; i < monthsCount; i++) {
        moment().add(i, "day").startOf("day");
        const firstDay = moment().add(i, "months").startOf("month").startOf("day");
        const lastDay = moment().add(i, "months").endOf("month").startOf("day");
        const startOfMonth = firstDay.day();
        const endOfMonth = 6 - lastDay.day();
        const daysInMonth = firstDay.daysInMonth();
        const days = [];
        for (let i2 = 1 - startOfMonth; i2 <= daysInMonth + endOfMonth; i2++) {
          const date = new Date((/* @__PURE__ */ new Date()).getFullYear(), currentMonth, i2);
          if (i2 > 0 && i2 <= daysInMonth) {
            days.push({
              number: i2,
              dateFormat: moment(date).format("YYYY-MM-DD"),
              isYesterday: moment.unix(date).startOf("day") >= moment.unix(today.startOf("day"))
            });
          } else {
            days.push("");
          }
        }
        const weeks = [];
        for (let i2 = 0; i2 < days.length; i2 += 7) {
          weeks.push(days.slice(i2, i2 + 7));
        }
        result.push({
          year: `${firstDay.year()}`,
          month: `${firstDay.month() + 1}`,
          weeks
        });
        currentMonth++;
      }
      return result;
    }
  },
  methods: {
    isDisabled(day) {
      this.isNotToday = !day.isYesterday;
      return this.isNotToday;
    },
    selectDate(day) {
      if (day.dateFormat !== void 0 && day.isYesterday) {
        if (this.chooseDate.length === 2) {
          this.chooseDate = [day.dateFormat];
        } else if (this.isSelected(day.dateFormat)) {
          const index = this.chooseDate.indexOf(day.dateFormat);
          this.chooseDate.splice(index, 1);
        } else {
          this.isClick = !this.isClick;
          this.chooseDate.push(day.dateFormat);
        }
        this.parseDate();
      }
    },
    isSelected(day) {
      return this.chooseDate.includes(day.dateFormat);
    },
    isDateRange(day) {
      if (this.chooseDate[1] !== void 0) {
        const sortDate = this.chooseDate.sort();
        return day.dateFormat > sortDate[0] && day.dateFormat < sortDate[1];
      }
      return false;
    },
    loadMoreMonth() {
      this.moreMonth += 3;
    },
    parseDate() {
      this.setouo(this.chooseDate);
    },
    clear() {
      console.log("cccc");
      this.duringDate = [];
      this.chooseDate = [];
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-e3026f64><!--[-->`);
  ssrRenderList($options.createCalender, (date) => {
    _push(`<div class="wrap" data-v-e3026f64><div class="datePicker-head" data-v-e3026f64><div class="year" data-v-e3026f64>${ssrInterpolate(date.year)}年</div><div class="month" data-v-e3026f64>${ssrInterpolate(date.month)}月</div></div><div class="datePicker-box" data-v-e3026f64><!--[-->`);
    ssrRenderList(date.weeks, (week) => {
      _push(`<div class="week-content" data-v-e3026f64><!--[-->`);
      ssrRenderList(week, (day) => {
        _push(`<div class="${ssrRenderClass([{
          "is-disabled": $options.isDisabled(day),
          "is-click": $options.isSelected(day),
          "is-range": $options.isDateRange(day),
          "is-hover": day && $data.hoverDay === day.dateFormat && !$data.chooseDate.includes(day) && !$data.isNotToday
        }, "day"])}" data-v-e3026f64>${ssrInterpolate(day.number)} </div>`);
      });
      _push(`<!--]--></div>`);
    });
    _push(`<!--]--></div></div>`);
  });
  _push(`<!--]--><div class="moreDate" data-v-e3026f64><button class="more-btn" data-v-e3026f64>載入更多日期</button></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/date/DateNewMoment.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const DateNewMoment = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-e3026f64"]]);
const DatePicker_vue_vue_type_style_index_0_scoped_5766a564_lang = "";
const _sfc_main$1 = {
  components: {
    DateContent,
    DateNewMoment
  },
  data() {
    return {
      weekly: [],
      addMonth: 3,
      moreMonth: null,
      duringDate: [],
      ouo: "qqq"
    };
  },
  created() {
    this.weekly = ["日", "一", "二", "三", "四", "五", "六"];
  },
  methods: {
    addMoreMonth() {
      if (this.moreMonth) {
        this.moreMonth();
      }
    },
    getChooseDate(aaa) {
      console.log("aaa", aaa);
      this.duringDate = aaa;
    },
    resetData() {
      this.duringDate = [];
      this.clearouo();
    },
    clearouo() {
      this.duringDate = [];
      console.log("duringDate", this.duringDate);
    },
    setouo(oxxx) {
      this.duringDate = oxxx;
      console.log("= =", oxxx);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_DateNewMoment = resolveComponent("DateNewMoment");
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "position": "relative" } }, _attrs))} data-v-5766a564><div class="dateSelector" data-v-5766a564><div class="dateSelector-content" data-v-5766a564><div class="dateSelector-title" data-v-5766a564>何時出發？</div><div class="datePicker" data-v-5766a564><div class="datePicker-tabs" data-v-5766a564><div class="tablist" data-v-5766a564><button class="tab-btn" data-v-5766a564>選擇日期</button></div></div><div class="datePicker-title" data-v-5766a564><div class="datePicker-week" data-v-5766a564><!--[-->`);
  ssrRenderList($data.weekly, (week) => {
    _push(`<div class="week" data-v-5766a564>${ssrInterpolate(week)}</div>`);
  });
  _push(`<!--]--></div></div><div class="datePicker-content" data-v-5766a564>`);
  _push(ssrRenderComponent(_component_DateNewMoment, {
    onGetMoreMonth: ($event) => $data.moreMonth = $event,
    onEmitChooseDate: $options.getChooseDate,
    duringDate: $data.duringDate,
    setouo: $options.setouo,
    clearouo: $options.clearouo
  }, null, _parent));
  _push(`</div><div class="dateTool" data-v-5766a564><div class="ooo" data-v-5766a564>${ssrInterpolate($data.duringDate[0])} 到 ${ssrInterpolate($data.duringDate[1])}</div></div><footer class="bottomTool" data-v-5766a564><div class="reset-btn" data-v-5766a564>重設</div><button class="continue-btn" data-v-5766a564>繼續</button></footer></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/date/DatePicker.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DatePicker = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5766a564"]]);
const _sfc_main = {
  __name: "index.page",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(DatePicker, _attrs, null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/date/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
