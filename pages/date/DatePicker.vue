<template>
  <div style="position: relative">
    <div class="dateSelector">
      <div class="dateSelector-content">
        <div class="dateSelector-title">何時出發？</div>
        <div class="datePicker">
          <div class="datePicker-tabs">
            <div class="tablist">
              <button class="tab-btn">選擇日期</button>
            </div>
          </div>


          <div class="datePicker-title">
            <div class="datePicker-week">
              <div class="week" v-for="week in weekly" :key="week">{{ week }}</div>
            </div>

          </div>
          <div class="datePicker-content">
            <!-- <DateContent @get_moreMonth="moreMonth = $event"></DateContent> -->
            <DateNewMoment
              @getMoreMonth="moreMonth = $event"
              @emitChooseDate="getChooseDate"
              :duringDate="duringDate"
              :setouo="setouo"
              :clearouo="clearouo"
              >
            </DateNewMoment>


          </div>
          <div class="dateTool">
            <div class="ooo">{{ duringDate[0] }} 到 {{ duringDate[1] }}</div>
          </div>
          <footer class="bottomTool">
            <div class="reset-btn" @click="resetData">重設</div>
            <button class="continue-btn">繼續</button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DateContent from './DateContent.vue'
import DateNewMoment from './DateNewMoment.vue'


export default {
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
      ouo: 'qqq',
    }
  },
  created() {
    this.weekly = ['日', '一', '二', '三', '四', '五', '六']
  },

  methods: {
    addMoreMonth() {
      if(this.moreMonth) {
        this.moreMonth();
      }
    },
    getChooseDate(aaa) {
      console.log('aaa', aaa)
      this.duringDate = aaa
    },
    resetData() {
      this.duringDate = []
      this.clearouo();
    },
    clearouo() {
      this.duringDate = []
      console.log('duringDate', this.duringDate)
    },
    setouo(oxxx) {
      this.duringDate = oxxx
      console.log('= =', oxxx)
    },
  }

}


</script>


<style lang="sass" scoped>
.dateSelector
  width: 100%
  background: #fff
  border-top-left-radius: 32px
  border-top-right-radius: 32px
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.15)
  margin-top: 12px
  padding: 24px
  position: absolute
  top: 100%
  z-index: 1
  overflow-x: hidden
  overflow-y: auto
  overscroll-behavior: contain

.datePicker
  width: 100%
  height: 100%

.datePicker-content
  height: 350px
  overflow-y: scroll
  overflow-x: hidden
  padding: 0 13px
  display: flex
  justify-content: center

.dateSelector-title
  font-size: 22px

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

.datePicker-title
  width: 405px
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

.dateTool
  border-top: 1px solid #EBEBEB
  padding: 12px 24px

.bottomTool
  width: 100%
  display: flex
  justify-content: space-between
  align-items: center
  border-top: 1px solid #EBEBEB
  padding: 12px 24px

.reset-btn
  color: #222222
  transition: box-shadow 0.2s cubic-bezier(0.2,0,0,1), transform 0.1s cubic-bezier(0.2,0,0,1)
  border-bottom: 1px solid #222222
  background: transparent
  cursor: pointer

.continue-btn
  color: #ffffff
  background: #222222
  padding: 14px 24px
  border: none
  border-radius: 8px

.more-btn
  width: 100%
  border-radius: 8px
  transition: box-shadow 0.2s ease,transform 0.1s ease
  border: 1px solid #222222
  padding: 10px 23px
  background: #fff
  font-weight: bold

@media screen and (max-width: 414px)
  .datePicker-title
    width: 328px
</style>
