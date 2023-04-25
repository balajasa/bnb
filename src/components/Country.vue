<template>
  <div class="country">
    <div class="country_title">
      <span class="title_choose" v-for="item of choose" :key="item">{{ item }}</span>
    </div>
    <div class="country_box">
      <div class="country_place">
        <div class="country_where">想去哪？</div>
        <div class="country_search"></div>
        <div class="country_banner"></div>
      </div>

    </div>
  </div>

</template>

<script setup>

import { ref } from 'vue'

const choose = ref(['住宿', '體驗'])
</script>

<style scoped>
.country{
  height: 100vh;
  background-color: #f7f7f7;
  transition: background-color 0.5s ease;
}
.country_title{
  animation: title_choose_animation ease 0.5s;
  text-align: center;
  padding-top: 18px;
  padding-bottom: 9px;
}
.title_choose{
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  background: transparent;
  padding: 5px 10px 0px;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-right: 0px;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
  position: relative;
  outline: none;
  color: rgb(34, 34, 34);
  cursor: default;
}
.title_choose:last-child{
  color: #717171
}
.country_box{
  margin: 15px 12px 0 12px;
}
.country_place{
  box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 6px 20px rgb(0 0 0 / 20%);
  border-radius: 24px;
  background-color: #ffffff;
  padding: 24px;
}
.country_where{
  font-size: 22px;
}
.country_search{
  padding-top: 16px;
  height: 76px;
}
@keyframes title_choose_animation{
  0%{
    opacity:0;
    transform:translateY(-100px);
  }
  100%{
    opacity:1;
    transform:translateY(0);
  }
}
</style>
