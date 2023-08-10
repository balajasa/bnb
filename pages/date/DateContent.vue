<template>
  <section>
    <div class="wrap" v-for="(month, index) in months" :key="index">
      <div class="datePicker-head">
        <div class="year">{{ month.year }}年</div>
        <div class="month">{{ month.month }}月</div>
      </div>
      <div class="datePicker-box">
        <div class="week-content" v-for="(week, index) in month.weeks" :key="index">
          <div class="day" v-for="day in week" :key="day"
            :class="{
            'is-start': startDay && startDay === day.number && monthIndex1 === month.month,
            'is-end': startDay && endDay && endDay === day.number && monthIndex2 === month.month,
            'is-disabled': isDisabled(day),
            'is-range': isDateRange(month.year, month.month, day.number),
          }" @click="selectDate(month.month, day)">
            {{ day.number }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  emit: ['get_more_action'],
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
      startDate: '',
      endDate: '',
      dates: [],
      rangeMonth: '',
      rangeDay: 0,
      moreMonth: 0,
      handleStartDate: null,
      clickCount: 0,
    }
  },
  methods: {
    isDisabled(day) {
      const isNotToday = day.isYesterday === false || undefined
      return isNotToday
    },

    selectDate(month, day) {
      if (!this.isDisabled(day) && day.number !== undefined) {
        if (this.startDay === null) {
          this.startDay = day.number
          this.dayIndex1 = day.number
          console.log('this.dayIndex1', this.dayIndex1)
          this.monthIndex1 = month
          this.startDate = this.convertTimestampToDate(day.timeStamp)
        } else if (this.endDay === null) {
          this.endDay = day.number
          this.dayIndex2 = day.number
          this.monthIndex2 = month
          this.endDate = this.convertTimestampToDate(day.timeStamp)
        } else if (this.clickCount === 2) {
          this.startDay = null
          this.endDay = null
          this.clickCount = 0
          this.dates = []
        }
        this.clickCount++;
      }
    },

    convertTimestampToDate(timestamp) {
      const date = new Date(timestamp); // 將秒轉換為毫秒
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const formattedDate = `${year}-${month}-${day}`;
      return formattedDate;
    },

    isDateRange(year, month, day) {
      const date = `${year}/${month}/${day}`;
      let isRange = false;
      const sliceDate = this.dates.slice(1, -1)
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
      this.startDate = null
      console.log('handleStartDate', newVal)
    }
  },

  mounted() {
    this.$watch(() => [this.startDate, this.endDate], ([newStartDate, newEndDate]) => {
      // 如果取到兩個日期就計算兩個日期的區間
      if (newStartDate && newEndDate) {
        const oneDay = 24 * 60 * 60 * 1000
        const startTimestamp = Date.parse(newStartDate)
        const endTimestamp = Date.parse(newEndDate)
        const numDays = Math.round(Math.abs((startTimestamp - endTimestamp) / oneDay)) + 1
        const result = []
        for (let i = 0; i < numDays; i++) {
          const timestamp = startTimestamp + i * oneDay
          result.push(new Date(timestamp).toLocaleDateString())
        }
        this.dates = result
      } else {
        this.dates = []
      }
    })

    this.$emit('get_more_action', this.addMonth)
  },
  computed: {
    // 產生日曆
    months() {
      const monthsCount = 4 + this.moreMonth; // 設定月份數量
      const today = new Date(); // 取得當前日期
      const result = [];
      let currentMonth = today.getMonth();

      for (let i = 0; i < monthsCount; i++) {
        const firstDay = new Date(today.getFullYear(), currentMonth, 1);
        const lastDay = new Date(today.getFullYear(), currentMonth + 1, 0);
        const startOffset = firstDay.getDay();
        const endOffset = 6 - lastDay.getDay();
        const daysInMonth = lastDay.getDate();
        // 將時間設置在當日00:00:00
        const todayHour = today.setHours(0, 0, 0, 0)
        const toydayFormat = new Date(todayHour)
        const days = [];

        for (let i = 1 - startOffset; i <= daysInMonth + endOffset; i++) {
          const date = new Date(today.getFullYear(), currentMonth, i);
          if (i > 0 && i <= daysInMonth) {
            days.push({
              number: i,
              isToday: date.toDateString() === today.toDateString(),
              isWeekend: date.getDay() === 0 || date.getDay() === 6,
              isYesterday: Date.parse(date).valueOf() >= Date.parse(toydayFormat).valueOf(),
              timeStamp: Date.parse(date).valueOf()
            });
          } else {
            days.push('');
          }

        }

        const weeks = [];

        for (let i = 0; i < days.length; i += 7) {
          weeks.push(days.slice(i, i + 7));
        }
        result.push({
          year: `${firstDay.getFullYear()}`,
          month: `${firstDay.getMonth() + 1}`,
          weeks,
        });
        currentMonth++;
      }

      return result;
    }
  }

}

</script>

<style lang="sass" scoped>
.datePicker-box
  width: 100%
  display: flex
  margin: 1px
  line-height: 18px
  flex-direction: column

.datePicker-head
  display: flex
  align-items: center
  font-size: 16px
  margin-top: 20px

.week
  width: 55px
  font-size: 12px
  text-align: center
  color: #717171
  line-height: 16px
  margin-bottom: 6px

.week-content
  width: 100%
  display: flex
  align-items: center
  flex-wrap: wrap
  text-align: center

.week-box
  display: flex
  font-size: 14px

.day
  width: 55px
  height: 55px
  margin: 1px 0
  display: flex
  justify-content: center
  align-items: center
  &.is-start, &.is-end
    color: #fff
    background: #222222
    border: 1.5px solid #717171
    border-radius: 50%
  &.is-disabled
    color: #484848
    opacity: 0.25
  &.is-range
    background: #F7F7F7


@media screen and (max-width: 414px)
  .week
    width: 43px
  .day
    width: 43px
    height: 43px
</style>

<!--
                                     ....
                                    W$$$$$u
                                    $$$$F**+           .oW$$$eu
                                    ..ueeeWeeo..      e$$$$$$$$$
                                .eW$$$$$$$$$$$$$$$b- d$$$$$$$$$$W
                    ,,,,,,,uee$$$$$$$$$$$$$$$$$$$$$ H$$$$$$$$$$$~
                 :eoC$$$$$$$$$$$C""?$$$$$$$$$$$$$$$ T$$$$$$$$$$"
                  $$$*$$$$$$$$$$$$$e "$$$$$$$$$$$$$$i$$$$$$$$F"
                  ?f"!?$$$$$$$$$$$$$$ud$$$$$$$$$$$$$$$$$$$$*Co
                  $   o$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
          !!!!m.*eeeW$$$$$$$$$$$f?$$$$$$$$$$$$$$$$$$$$$$$$$$$$$U
          !!!!!! !$$$$$$$$$$$$$$  T$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
           *!!*.o$$$$$$$$$$$$$$$e,d$$$$$$$$$$$$$$$$$$$$$$$$$$$$$:
          "eee$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$C
         b ?$$$$$$$$$$$$$$**$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$!
         Tb "$$$$$$$$$$$$$$*uL"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'
          $$o."?$$$$$$$$F" u$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
           $$$$en ```    .e$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'
            $$$B*  =*"?.e$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$F
             $$$W"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"
              "$$$o#$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"
             R: ?$$$W$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$" :!i.
              !!n.?$???""``.......,``````"""""""""""``   ...+!!!
               !* ,+::!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*`
               "!?!!!!!!!!!!!!!!!!!!~ !!!!!!!!!!!!!!!!!!!~`
               +!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!?!`
             .!!!!!!!!!!!!!!!!!!!!!' !!!!!!!!!!!!!!!, !!!!
            :!!!!!!!!!!!!!!!!!!!!!!' !!!!!!!!!!!!!!!!! `!!:
         .+!!!!!!!!!!!!!!!!!!!!!~~!! !!!!!!!!!!!!!!!!!! !!!.
        :!!!!!!!!!!!!!!!!!!!!!!!!!.`:!!!!!!!!!!!!!!!!!:: `!!+
        "~!!!!!!!!!!!!!!!!!!!!!!!!!!.~!!!!!!!!!!!!!!!!!!!!.`!!:
            ~~!!!!!!!!!!!!!!!!!!!!!!! ;!!!!~` ..eeeeeeo.`+!.!!!!.
          :..    `+~!!!!!!!!!!!!!!!!! :!;`.e$$$$$$$$$$$$$u .
          $$$$$$beeeu..  `````~+~~~~~" ` !$$$$$$$$$$$$$$$$ $b
          $$$$$$$$$$$$$$$$$$$$$UU$U$$$$$ ~$$$$$$$$$$$$$$$$ $$o
         !$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$. $$$$$$$$$$$$$$$~ $$$u
         !$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$! $$$$$$$$$$$$$$$ 8$$$$.
         !$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$X $$$$$$$$$$$$$$`u$$$$$W
         !$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$! $$$$$$$$$$$$$".$$$$$$$:
          $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  $$$$$$$$$$$$F.$$$$$$$$$
          ?$$$$$$$$$$$$$$$$$$$$$$$$$$$$f $$$$$$$$$$$$' $$$$$$$$$$.
           $$$$$$$$$$$$$$$$$$$$$$$$$$$$ $$$$$$$$$$$$$  $$$$$$$$$$!
           "$$$$$$$$$$$$$$$$$$$$$$$$$$$ ?$$$$$$$$$$$$  $$$$$$$$$$!
            "$$$$$$$$$$$$$$$$$$$$$$$$Fib ?$$$$$$$$$$$b ?$$$$$$$$$
              "$$$$$$$$$$$$$$$$$$$$"o$$$b."$$$$$$$$$$$  $$$$$$$$'
             e. ?$$$$$$$$$$$$$$$$$ d$$$$$$o."?$$$$$$$$H $$$$$$$'
            $$$W.`?$$$$$$$$$$$$$$$ $$$$$$$$$e. "??$$$f .$$$$$$'
           d$$$$$$o "?$$$$$$$$$$$$ $$$$$$$$$$$$$eeeeee$$$$$$$"
           $$$$$$$$$bu "?$$$$$$$$$ 3$$$$$$$$$$$$$$$$$$$$*$$"
          d$$$$$$$$$$$$$e. "?$$$$$:`$$$$$$$$$$$$$$$$$$$$8
  e$$e.   $$$$$$$$$$$$$$$$$$+  "??f "$$$$$$$$$$$$$$$$$$$$c
 $$$$$$$o $$$$$$$$$$$$$$$F"          `$$$$$$$$$$$$$$$$$$$$b.
M$$$$$$$$U$$$$$$$$$$$$$F"              ?$$$$$$$$$$$$$$$$$$$$$u
?$$$$$$$$$$$$$$$$$$$$F                   "?$$$$$$$$$$$$$$$$$$$$u
 "$$$$$$$$$$$$$$$$$$"                       ?$$$$$$$$$$$$$$$$$$$$o
   "?$$$$$$$$$$$$$F                            "?$$$$$$$$$$$$$$$$$$
      "??$$$$$$$F                                 ""?3$$$$$$$$$$$$F
                                                .e$$$$$$$$$$$$$$$$'
                                               u$$$$$$$$$$$$$$$$$
                                              `$$$$$$$$$$$$$$$$"
                                               "$$$$$$$$$$$$F"
                                                 ""?????""
-->