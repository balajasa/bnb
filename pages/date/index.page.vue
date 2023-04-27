<template>
  <div style="position: relative">
    <div class="dateSelector">
      <section>
        <div class="dateSelector-title">何時出發？</div>
        <div class="datePicker">
          <div class="datePicker-tabs">
              <div class="tablist">
                <button class="tab-btn">選擇日期</button>
              </div>
          </div>

          <div class="datePicker-content">
            <div class="datePicker-week">
              <div class="week" v-for="week in weeks" :key="week">{{ week }}</div>
            </div>
            <div class="datePicker-head">
              <div class="year">{{ year }}年</div>
              <div class="month">
                {{ months }}月
              </div>
            </div>

            <div class="datePicker-box">

              <div class="day-box">
                <div class="day" v-for="day in days" :key="day" :class="{ 'is-yesterday' : isYesterday(day) }">
                  {{ day }}
                </div>
              </div>
          </div>

          </div>
        </div>
      </section>
    </div>
  </div>

</template>

<script>
import { computed, ref } from 'vue'


export default {
  setup() {
    const weeks = ['日', '一', '二', '三', '四', '五', '六']
    const today = new Date()

    const year = ref(today.getFullYear())
    const months = ref(today.getMonth() + 1)
    // const months = reactive([
    //   today.getMonth(),
    //   today.getMonth() + 1,
    //   today.getMonth() + 2
    // ])

    const daysInMonth = computed(() => new Date(year.value, months.value, 0).getDate())
    const startDay = computed(() => new Date(year.value, months.value - 1, 1).getDay())
    const days = computed(() => {
      const daysArr =[]
      for (let i = 1; i <= daysInMonth.value + startDay.value; i++) {
        if (i > startDay.value) {
          daysArr.push(i - startDay.value)
        } else {
          daysArr.push('')
        }
      }
      console.log('daysArr', daysArr)
      return daysArr;
    })

    function isYesterday(day) {
      const aaa = today.getDate()
      console.log('dayyy', aaa)


      // console.log('= =', today.getDate())
      // console.log('today', today)
      return true
    }



    return {
      weeks,
      year,
      months,
      days,
      isYesterday
    }
  }
  
}


</script>

<style lang="sass" scoped>
.dateSelector
  width: 100%
  background: #fff
  border-radius: 32px
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.15)
  margin-top: 12px
  padding: 24px
  position: absolute
  top: 100%
  z-index: 1
  overflow-x: hidden
  overflow-y: auto
  overscroll-behavior: contain

.dateSelector-title
  font-size: 22px

.datePicker
  width: 100%
  // padding: 18px 28px 10px 28px

.datePicker-tabs
  display: flex
  align-items: center
  justify-content: center
  padding-bottom: 8px

.tablist
  background-color: rgb(235, 235, 235)
  border-radius: 100px
  padding: 0 4px
  display: flex
  width: 150px
  display: flex
  justify-content: center

.tab-btn
  width: 150px
  border-radius: 100px
  font-size: 14px
  line-height: 18px
  font-weight: 600
  background: #fff
  padding: 8px 12px
  margin: 4px 0
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s
  position: relative
  border: 1px solid rgba(0, 0, 0, 0.04)
  box-shadow: rgba(0, 0, 0, 0.08) 0 1px 2px, rgba(0, 0, 0, 0.05) 0 4px 12px
  cursor: pointer

.datePicker-content
  width: 412px
  padding: 0 13px
  transform: translateX(0px)
  margin: 0 auto

.datePicker-week
  width: 100%
  display: flex
  justify-content: center
  border-bottom: 1px solid #DDDDDD

.datePicker-box
  width: 100%
  display: flex
  margin: 1px
  line-height: 18px
  overflow-y: scroll
  
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

.day-box
  width: 100%
  display: flex
  align-items: center
  flex-wrap: wrap
  text-align: center

.day
  width: 53px
  height: 53px
  margin: 0 1px
  &.is-yesterday
    color: red
</style>