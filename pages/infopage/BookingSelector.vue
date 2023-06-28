<template>
  <div class="selector-content">
    <div class="selector-item">
      <div class="selector-title">訂房日期</div>
      <div class="selector">{{ start }} - {{ end }}</div>
    </div>
    <div class="selector-item">
      <div class="selector-title">人數</div>
      <div class="selector">2成人, 0孩童, 0嬰幼兒</div>
    </div>
  </div>
</template>

<script lang="ts" setup >
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useOrderStore } from '@/stores/useOrder';

const orderStore = useOrderStore();

const emit = defineEmits(['search'])

const start = ref("2023/04/20");
const end = ref("2023/04/25");

onMounted(() => {
  emit('search', {
    start: start.value,
    end: end.value
  })
  orderStore.updateOrderInfo({
    start: start.value,
    end: end.value,
    people: {
      adults: 2,
      children: 0
    }
  })

});
</script>
<style scoped lang="sass">
.selector-content
  display: inline-flex
  align-items: center
  flex-direction: column
  @media (min-width: 992px)
    flex-direction: row

.selector-item
  width: 100%
  margin-bottom: 10px
  @media (min-width: 992px)
    margin: 0 20px 0 0
    width: auto


.selector-title
  color: #686e74
  margin-bottom: 8px
  font-size: 14px

.selector
  padding: 8px 16px
  background-color: #f8fafc
  cursor: pointer
  color: #686e74
  font-size: 14px

</style>
