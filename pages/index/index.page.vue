<template>
  <h1>Welcome</h1>
  This page is: {{ msg }}
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
  </ul>
  <div>{{ data }}</div>
  <hr/>
  <Link href="/hello">route test</Link>
</template>

<script lang="ts" setup>
import { ref, onServerPrefetch, onMounted, computed } from "vue";
import Counter from "./Counter.vue";
import { useTodos } from '@/stores/useTodos'
import Link from "@/renderer/Link.vue";


const msg = ref("Hello World!");

const todosStore = useTodos()
const data = computed(() => todosStore.data())

const loadTodo = async () => {
  await todosStore.fetchData()
}

onServerPrefetch(loadTodo)
onMounted(loadTodo)
</script>
