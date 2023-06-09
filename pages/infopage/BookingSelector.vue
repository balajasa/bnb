<template>
  <div class="container">
    <div class="selector-title">訂房日期</div>
    <div class="selector">{{ start }} - {{ end }}</div>

    <div class="selector-title">人數</div>
    <div class="selector">2成人, 0孩童, 0嬰幼兒</div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const emit = defineEmits(['search'])

const start = ref("2023/04/20");
const end = ref("2023/04/25");

onMounted(() => {
  emit('search', {
    start: start.value,
    end: end.value
  })
});
</script>
<style>
.container {
  padding: 16px 20px;
}
.selector {
  padding: 8px 16px;
  background-color: #f8fafc;
  cursor: pointer;
  color: #686e74;
  font-size: 14px;
}
.selector-title {
  margin-bottom: 4px;
  color: #686e74;
}
</style>
