<template>
  <div class="main-title">碎石區營地</div>
  <!-- 輪播 -->
  <Carousel :data="data.images" :domain="'./pages/infopage/pics'" />

  <div class="basic-info">
    <div>TWD {{data.price}}起</div>
    <div>床型</div>
    <div>{{data.bed}}</div>
    <div>人數限制</div>
    <div>{{data.max}}人</div>
    <div>坪數</div>
    <div>{{data.size}}</div>
    <div>設施</div>
    {{data.facilities}}
  </div>
  <hr />
  <div class="detail">
    <h3>官網優惠預訂價格</h3>
    <div v-html="description"></div>
  </div>
</template>

<script lang="ts" setup>
import Carousel from "./Carousel.vue";
import { computed, PropType } from "vue";
import { IRoom } from "./RoomType"

const props = defineProps({
  data: {
    type: Object as PropType<IRoom>,
    default: {},
  },
});
const description = computed(() => {
  return props.data.description.split(/\\r|\\n/g).join('<br/>')
});
</script>

<style>
.main-title {
  font-size: 20px;
  margin-bottom: 16px;
}
.temp-carousel {
  width: 70%;
  height: 254px;
  background-color: brown;
  justify-content: center;
}
</style>
