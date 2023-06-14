<template>
  <swiper
    :pagination="{
      type: 'fraction',
    }"
    :enabled="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(item, index) in data" :key="index"><img :src="`${domain}/${item}`" class="img-rwd"></swiper-slide>
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
    default: []
  },
  domain: {
    type: String,
    default: '',
  },
});

</script>

<style scoped lang="sass">
@import "@/styles/layout"

</style>
