<template>
  <template v-if="data.enough">
    <div class="main-title">{{ data.title }}</div>
    <!-- 輪播 -->
    <Carousel :data="data.images" :domain="'http://127.0.0.1:8088'" />

    <div class="basic-info">
      <div>TWD {{ data.price }}起</div>
      <div>床型</div>
      <div>{{ data.bed }}</div>
      <div>人數限制</div>
      <div>{{ data.max }}人</div>
      <div>坪數</div>
      <div>{{ data.size }}</div>
      <div>設施</div>
      {{ data.facilities }}
    </div>
    <hr />
    <div class="detail">
      <h3>官網優惠預訂價格</h3>
      <div v-html="description" style="white-space: pre-wrap"></div>
    </div>
    <div class="room-order">
      <span>取消政策</span>
      <div>約 TWD {{ data.price }}/ 晚</div>
      <input type="number" v-model="count" /> {{count}}最多：{{data.remaining}}間
    </div>
    <hr />
  </template>
</template>

<script lang="ts" setup>
import Carousel from "./Carousel.vue";
import { computed, PropType, ref, watch } from 'vue';
import { IRoom } from "./types";
import { useOrderStore } from "@/stores/useOrder";
import { storeToRefs } from "pinia";

const props = defineProps({
  data: {
    type: Object as PropType<IRoom>,
    default: {},
  },
});
const description = computed(() => {
  return props.data.description.split(/\\r|\\n/g).join("<br/>");
});
const count = ref<number>(0);

const order = useOrderStore();
const {  orders, total } = storeToRefs(order);

watch(
  () => count.value,
  () => {
    console.log('inini', count.value)
    if(count.value > props.data.remaining || count.value === 0){
      // 超過最大上限 或者數量寫0
      order.removeOrder(props.data.room_id);
    } else {
      order.updateOrder(props.data.room_id, {
        price: count.value * props.data.totalPrice
      });
      console.log(props.data.room_id, {
        price: count.value * props.data.totalPrice
      })
    }
  }
);

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
