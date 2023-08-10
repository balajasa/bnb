<template>
  <section>
    <div class="wrap" v-for="date in createCalender" :key="date">
      <div class="datePicker-head">
        <div class="year">{{ date.year }}年</div>
        <div class="month">{{ date.month }}月</div>
      </div>
      <div class="datePicker-box">
        <div class="week-content" v-for="week in date.weeks" :key="week">
          <div class="day" v-for="day in week" :key="day"
            :class="{
              'is-disabled': isDisabled(day),
              'is-click': isSelected(day),
              'is-range': isDateRange(day),
              'is-hover': day && hoverDay === day.dateFormat && !chooseDate.includes(day) && !isNotToday
            }"
            @click="selectDate(day)"

            >
            {{ day.number }}
            <!-- <div class="room-left" v-if="day">87間</div> -->
            <!-- @mouseover.stop="hoverDay = day.dateFormat"
            @mouseout.stop="hoverDay = null" -->
          </div>
        </div>
      </div>

    </div>
    <div class="moreDate">
        <button class="more-btn" @click="loadMoreMonth">載入更多日期</button>
      </div>
  </section>
</template>


<script>
import moment from 'moment';
import 'moment/locale/zh-tw';

export default {
  emit: ['getMoreMonth', 'emitChooseDate'],
  props: ['duringDate', 'clearouo', 'setouo'],
  data() {
    return {
      currentMonth: '',
      chooseDate: [],
      hoverDay: null,
      isNotToday: false,
      isClick: false,
      moreMonth: 0
    }
  },
  computed: {
    createCalender() {
      const result = [];
      const today = moment();
      const monthsCount = 4 + this.moreMonth;
      let currentMonth = today.month();

      for (let i = 0; i < monthsCount; i++) {
        const currentDate = moment().add(i, 'day').startOf('day');
        const firstDay = moment().add(i, 'months').startOf('month').startOf('day');
        const lastDay = moment().add(i, 'months').endOf('month').startOf('day');

        const startOfMonth = firstDay.day();
        const endOfMonth = 6 - lastDay.day();

        const daysInMonth = firstDay.daysInMonth();
        const days = []

        for (let i = 1 - startOfMonth; i <= daysInMonth + endOfMonth; i++) {
          const date = new Date(new Date().getFullYear(), currentMonth, i);
          if (i > 0 && i <= daysInMonth) {
            days.push({
              number: i,
              dateFormat: moment(date).format('YYYY-MM-DD'),
              isYesterday: moment.unix(date).startOf('day') >= moment.unix(today.startOf('day'))
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
          year: `${firstDay.year()}`,
          month: `${firstDay.month() + 1}`,
          weeks
        })
        currentMonth++
      }
      // this.$emit('getMoreMonth', this.addMonth)
      return result
    }
  },
  methods: {
    isDisabled(day) {
      this.isNotToday = !day.isYesterday
      return this.isNotToday
    },

    selectDate(day) {
      if (day.dateFormat !== undefined && day.isYesterday) {
        if (this.chooseDate.length === 2) {
          // 如果已經選擇了兩個數字，則點擊時重置選擇
          this.chooseDate = [day.dateFormat];
        } else if (this.isSelected(day.dateFormat)) {
          // 如果已經選擇了該數字，則取消選擇
          const index = this.chooseDate.indexOf(day.dateFormat);
          this.chooseDate.splice(index, 1);
        } else {
          // 選擇新的數字
          this.isClick = !this.isClick
          this.chooseDate.push(day.dateFormat);
        }

        this.parseDate();
      }
    },

    isSelected(day) {
      return this.chooseDate.includes(day.dateFormat)
    },

    isDateRange(day) {
      if (this.chooseDate[1] !== undefined) {
        const sortDate = this.chooseDate.sort()
        return day.dateFormat > sortDate[0] && day.dateFormat < sortDate[1]
      }
      return false
    },

    loadMoreMonth() {
      this.moreMonth += 3;
    },

    parseDate() {
      // this.$emit('emitChooseDate', this.chooseDate)
      this.setouo(this.chooseDate)
    },

    clear() {
      console.log('cccc')
      this.duringDate = []
      this.chooseDate = []
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
  flex-direction: column
  &.is-start, &.is-end, &.is-click
    color: #fff
    background: #222222
    border: 1.5px solid #717171
    border-radius: 50%
  &.is-disabled
    color: #484848
    opacity: 0.25
  &.is-range
    background: #F7F7F7
  &.is-hover
    border: 1.5px solid #717171
    border-radius: 50%

.room-left
  font-size: 12px

.moreDate
  margin: 20px 0
  width: 100%

.more-btn
  width: 100%
  border-radius: 8px
  transition: box-shadow 0.2s ease,transform 0.1s ease
  border: 1px solid #222222
  padding: 10px 23px
  background: #fff
  font-weight: bold


@media screen and (max-width: 414px)
  .week
    width: 43px
  .day
    width: 43px
    height: 43px
</style>