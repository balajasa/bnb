<template>
  <div class="country">
    <div class="country_title">
      <span class="title_choose" v-for="item of choose" :key="item">{{ item }}</span>
    </div>
    <div class="country_box">
      <div class="country_place">
        <div class="country_where">想去哪？</div>
        <div class="country_search">搜尋目的地</div>
        <div class="country_banner">
          <div class="imageBox" v-for="item of wayItem" :key="item">
            <div class="imageBox_image"></div>
            <div class="imageBox_Text">{{ item }}</div>
          </div>

        </div>
      </div>
      <div class="country_date">
        <div class="date">日期</div>
        <div class="addData">新增日期</div>
      </div>
      <div class="country_date">
        <div class="date">旅客</div>
        <div class="addData">新增人數</div>
      </div>
    </div>

  </div>

</template>

<script setup>
import { ref } from 'vue'

const choose = ref(['住宿', '體驗'])
const waynumber = ref(['','','','','','','','',''])
const wayItem = ref(['隨心所欲', '歐洲', '英國', '東南亞', '義大利', '中東', '阿拉伯聯合大公園', '美國', '印尼'])

</script>

<style lang="sass" scoped>
.country
  height: 100vh
  background-color: #f7f7f7
  transition: background-color 0.5s ease

.country_title
  animation: title_choose_animation ease 0.5s
  text-align: center
  padding-top: 18px
  padding-bottom: 9px

.title_choose
  font-size: 16px
  line-height: 20px
  font-weight: 600
  border-radius: 8px
  border: none
  background: transparent
  padding: 5px 10px 0px
  margin-top: 4px
  margin-bottom: 4px
  margin-right: 0px
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s
  position: relative
  outline: none
  color: rgb(34, 34, 34)
  cursor: default

  &:last-child
    color: #717171

.country_box
  margin: 15px 12px 0 12px

.country_place
  box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 6px 20px rgb(0 0 0 / 20%)
  border-radius: 24px
  background-color: #ffffff
  padding: 24px

.country_date
  display: flex
  box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 6px 20px rgb(0 0 0 / 20%)
  border-radius: 16px
  background-color: #ffffff
  padding: 14px
  font-size: 14px
  margin-top: 14px
  justify-content: space-between
.date
  color: #5b5b5b
.country_where
  font-size: 22px

.country_search
  margin-top: 16px
  font-size: 14px
  border: 1px solid rgb(176, 176, 176)
  overflow: hidden
  position: relative
  align-items: center
  display: flex
  padding: 0px 20px
  white-space: nowrap
  height: 60px
  border-radius: 12px
  font-size: 14px
  color: #5b5b5b
.country_banner
  margin: 12px -24px 0 -24px
  display: flex
  overflow: scroll
.imageBox_image
  background-color: #d9d9d9
  border-radius: 12px
  width: 122px
  height: 122px
  margin: 0 11px
.imageBox_Text
  margin: 5px 11px
  color: #5b5b5b
  font-size: 14px
  line-height: 18px
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap

@keyframes title_choose_animation
  0%
    opacity: 0
    transform: translateY(-100px)

  100%
    opacity: 1
    transform: translateY(0)
</style>
