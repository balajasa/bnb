<template>
  <button type="button" @click="counterStore.increment()">Counter {{ data }}</button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useCounter } from '@/stores/useCounter'

const counterStore = useCounter()
const data = computed(() => counterStore.count)
</script>
