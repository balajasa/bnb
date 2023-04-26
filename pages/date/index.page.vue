<template>
  <div style="position: relative">
    <div class="dateSelector">
      <section>
        <div class="datePicker">
          <div class="datePicker-tabs">
              <div class="tablist">
                <button class="tab-btn">選擇日期</button>
                <button class="tab-btn">彈性日期</button>
              </div>
          </div>

          <div class="datePicker-box">
            <div class="datePicker-head">
              <div class="year">{{ currentYear }}年</div>
              <div class="mounth">{{ currentMounth }}月</div>
            </div>
            <div class="day-box">
              <div class="week" v-for="day in week" :key="day">{{ day }}</div>
            <!-- <table v-for="item of box" :key="item">
                {{ item }}
            </table> -->
            </div>

          </div>
        </div>
      </section>
    </div>
  </div>

</template>

<script setup>

// import { ref } from 'vue'

// const box = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// const showDate = '';
const week = ['日', '一', '二', '三', '四', '五', '六']
const date = new Date()


const currentYear = date.getFullYear()
console.log('= =', currentYear)
const currentMounth = date.getMonth() + 1;
console.log('@@', currentMounth)


</script>

<style lang="sass" scoped>
.dateSelector
  background: #fff
  border-radius: 32px
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.15)
  margin-top: 12px
  padding: 16px 32px
  position: absolute
  top: 100%
  z-index: 1
  overflow-x: hidden
  overflow-y: auto
  overscroll-behavior: contain

.datePicker
  padding: 18px 28px 10px 28px

.datePicker-tabs
  display: flex
  align-items: center
  justify-content: center

.tablist
  background-color: rgb(235, 235, 235)
  border-radius: 100px
  padding: 0 4px
  display: flex

.tab-btn
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

.datePicker-box
  width: 800px
  height: 397px

.datePicker-head, .day-box
  display: flex

.week
  width: 46px
  height: 46px
</style>