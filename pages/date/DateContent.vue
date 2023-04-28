<template>
  <section>
    <div class="datePicker-head">
      <div class="year">{{ currentYear }}年</div>
      <div class="month">{{ currentMonth }}月</div>
    </div>

    <div class="datePicker-box">
      <div class="week-content">
        <div
          class="day"
          v-for="day in allDays"
          :key="day"
          :class="{ 'is-active': day === obj.itemIndex, 'is-disabled': isDisabled(currentMonth, day) }"
          @click="selectDate(day)">
            {{ day }}
        </div>
      </div>

      <!-- <div class="week-content">
        <div class="week-box" v-for="(week, index) in weeks" :key="index">
          <div class="day" v-for="day in week" :key="day" :class="{ today: day.isToday, 'is-selected': isSelected(day.date), 'is-disabled': isDisabled(day.date) }" @click="selectDate(day.date)">
            {{ day.date.getDate() }}
          </div>
        </div>
      </div> -->
    </div>

  </section>
</template>

<script>
import { computed, reactive, ref } from 'vue'


export default {
  props: {
    value: {
      type: Date,
      required: true,
    },
    minDate: {
      type: Date,
      default: null,
    },
    onChange: Function
  },

  setup(props) {
    const weekly = ['日', '一', '二', '三', '四', '五', '六']
    const currentYear = ref(props.value.getFullYear())
    const currentMonth = ref(props.value.getMonth() + 1)
    const startDate = computed(() => new Date(currentYear.value, currentMonth.value - 1, 1))
    const endDate = computed(() => new Date(currentYear.value, currentMonth.value, 0))

    let isActive = ref(false)
    const obj = reactive({
      itemIndex: 0
    })

    const startSelect = ref(null)
    const endSelect = ref(null)



    let allDays = []
    let dayInMonth = new Date(currentYear.value, currentMonth.value, 0).getDate();
    const emptyArr = new Array(startDate.value.getDay() % 7).fill('')
    const days = new Array(dayInMonth).fill('').map((i, index) => String(index + 1))
    allDays = allDays.concat(emptyArr, days)

    // const isSelected = (date) => {
    //   isSelecte = true
    //   return date === props.minDate.toDateString()
    // }

    const isDisabled = (month, date) => {
      // console.log('date', month, date)
        const monthfix = month
        // console.log('今天', monthfix)
        // console.log('這個月的', props.minDate.getMonth())

        const minDate = props.minDate.getMonth() > month && props.minDate.getDate() > date
        // console.log('kk', monthfix > month)

      return minDate
    }

    const selectDate = (date) => {
      if (!isDisabled(date)) {
        isActive = !isActive
        obj.itemIndex = date
        console.log(obj.itemIndex)
        // props.onChange(date)
      }
    }

    // watch([startSelect, endSelect], ([startDate, endDate]) => {
    //   if (startDate && endDate) {}
    // }, { immediate: true })

    return {
      weekly,
      currentYear,
      currentMonth,
      isDisabled,
      selectDate,
      allDays,
      isActive,
      obj
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
  width: 53px
  height: 53px
  margin: 0 1px
  display: flex
  justify-content: center
  align-items: center
  &.is-active
    color: #fff
    background: #222222
    border: 1.5px solid #717171
    border-radius: 50%
    // &:hover
    //   color: #fff
    //   background: yellow
    //   border: 1.5px solid #717171
    //   border-radius: 50%        
  &.is-disabled
    color: #484848
    opacity: 0.25

@media screen and (max-width: 414px)
  .week
    width: 43px
  .day
    width: 41px
    height: 41px
</style>