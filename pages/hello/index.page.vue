<template>
  <h1>Hello</h1>
  <p>
    Hi <b>{{ name }}</b
    >.
  </p>
  <ul>
    <li v-for="(item, i) in names" :key="i">
      <a :href="`/hello/${item}`">/hello/{{ item }}</a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { names } from './names'

defineProps(['name'])
</script>
