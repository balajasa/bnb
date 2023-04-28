<template>
  <swiper
    :pagination="{
      type: 'fraction',
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(item, index) in data" :key="index"><img :src="`${domain}/${item}`"></swiper-slide>
  </swiper>
</template>

<script lang="ts">
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

<script lang="ts" setup>
import { ref, PropType } from "vue";
import { Pagination } from "swiper";
const modules = ref([Pagination]);

const props = defineProps({
  data: {
    type: Array as PropType<String[]>,
    default: [],
  },
  domain: {
    type: String,
    default: '',
  },
});

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
