<template>
  <template v-if="orders.size > 0">
    <div class="room-order">
      <div>訂單總價</div>
      <div>TWD ${{ total }}</div> 
      <button @click="gogo()">下一步</button>
      
    </div>
   
  </template>
</template>

<script lang="ts" setup>
import { useOrderStore } from '@/stores/useOrder';
import { storeToRefs } from 'pinia';

const order = useOrderStore();
const {  orders, total } = storeToRefs(order);


function gogo() {
  location.href = '/payment'
}
</script>
<style>
.room-order {
  font-size: 20px;
  margin-bottom: 16px;
}
</style>
