<template>
  <div class="main-title">碎石區營地</div>
  <!-- 輪播 -->
  <div class="temp-carousel">
    <img :src="`./pages/infopage/pics/${data.images[0]}`">
  </div>

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
    {{data.description}}
  </div>
</template>

<script lang="ts" setup>
import { XXX } from "./RoomType"

// const props = defineProps({
//   data: {
//     type: IRoom,
//     default: null,
//   },
// });
defineProps({
  data: XXX,
})

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
