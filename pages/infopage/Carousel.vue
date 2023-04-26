<template>
  <swiper
    :pagination="{
      type: 'fraction',
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><img src="./pics/p1.jpeg" /></swiper-slide>
    <swiper-slide><img src="./pics/p2.jpeg" /></swiper-slide>
    <swiper-slide><img src="./pics/p4.jpeg" /></swiper-slide>
    <swiper-slide><img src="./pics/p5.jpeg" /></swiper-slide>
    <swiper-slide><img src="./pics/p7.jpeg" /></swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/pagination";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<script setup>
import { ref } from "vue";
import { Pagination } from "swiper";
const modules = ref([Pagination]);
</script>

<style scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}
</style>
