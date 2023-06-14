<template>
  <template v-if="data.enough">
    <div class="main-title">{{ data.title }}</div>
    <div class="room-info">
      <div class="info-content">
        <div class="room-carousel">
          <!-- 輪播 -->
          <Carousel :data="data.images" :domain="'http://34.31.125.18:8081'" />
        </div>
        <div class="basic-info">
          <span class="price-tag">TWD {{ data.price }}起</span>
          <div class="info-group">
            <label>床型</label>
            {{ data.bed }}
          </div>
          <div class="info-group">
            <label>人數限制</label>
            {{ data.max }}人
          </div>
          <div class="info-group">
            <label>坪數</label>
            {{ data.size }}
          </div>
          <div class="info-group">
            <label>設施</label>
            {{ data.facilities }}
          </div>
        </div>
      </div>
      <hr />
      <div class="room-detail">
        <h3 class="title-detail">官網優惠預訂價格</h3>
        <div v-html="description" class="txt-detail"></div>
      </div>
    </div>
    <div class="room-order">
      <div class="link-cancle">取消政策</div>
      <div class="order-area">
        <div class="order-price">約 TWD <span>{{ data.price }}</span> / 晚</div>
        <div class="numeric-box">
          <div class="input-box">
            <input class="numeric-input" type="number" v-model="count" :max="data.remaining" :min="0" />
            <button type="button" class="btn-num btn-decrement">-</button>
            <button type="button" class="btn-num btn-increment">+</button>
          </div>
          <span class="txt-room">間</span>
        </div>
        <div class="max-num">剩餘：{{data.remaining}}間</div>
      </div>
    </div>
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
        count: count.value ,
        room: props.data
      });
      console.log(props.data.room_id, {
        price: count.value * props.data.totalPrice
      })
    }
  }
);

</script>

<style lang="sass">
.main-title
  font-size: 20px
  margin-bottom: 16px

.room-carousel
  display: inline-block
  max-width: calc(100% - 400px)
  width: 50%

.room-info
  display: flex
  flex-direction: column

.info-content
  display: flex

.basic-info
  display: inline-flex
  flex-direction: column
  position: relative
  width: 50%
  padding-left: 20px

.price-tag
  display: inline-block
  border: 1px solid #e9edef
  font-size: 12px
  margin-left: auto
  padding: 4px 8px
  border-radius: 9999px
  cursor: default
  color: #a3abb2

.info-group
  display: inline-flex
  flex-direction: column
  color: #3c4145
  margin-bottom: 24px
  font-size: 14px
  label
    color: #686e74
    display: block
    font-size: 14px
    line-height: 14px
    margin-bottom: 2px

.title-detail
  color: #3c4145
  font-size: 16px
  font-weight: 500
  margin: 0 0 16px 0

.txt-detail
  white-space: pre-wrap
  font-size: 14px
  color: #3c4145
  margin-bottom: 32px

.room-order
  display: flex
  justify-content: space-between
  align-items: center

.link-cancle
  display: inline-flex
  align-items: center
  color: #686e74
  cursor: pointer
  font-size: 14px
  &:after
    content: 'i'
    display: inline-block
    border-radius: 50%
    width: 14px
    height: 14px
    line-height: 14px
    font-size: 12px
    background-color: #686e74
    color: #fff
    text-align: center
    margin: 0 2px

.order-price
  color: #686e74
  font-size: 12px
  text-align: right
  margin-bottom: 8px
  span
    color: #078abc
    font-weight: bold

.numeric-box
  display: inline-flex
  align-items: center

.txt-room
  font-weight: bold
  font-size: 18px
  color: #686e74

.input-box
  position: relative
  margin-right: 5px

.btn-num
  display: inline-flex
  align-items: center
  justify-content: center
  position: absolute
  top: 0
  border: none
  background-color: #e9edef
  width: 48px
  height: 38px
  color: #686e74

.btn-decrement
  left: 0
  border-radius: 8px 0 0 8px

.btn-increment
  right: 0
  border-radius: 0 8px 8px 0

.numeric-input
  width: 150px
  height: 38px
  border: none
  background-color: #f8fafc
  outline: none
  padding: 0 48px
  text-align: center
  color: #3c4145
  pointer-events: none
  font-size: 16px

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button
  -moz-appearance: textfield
  -webkit-appearance: none

.max-num
  font-size: 12px
  text-align: right
  margin-top: 4px
  color: #686e74

</style>
