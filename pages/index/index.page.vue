<template>
  <h1>Welcome</h1>
  This page is: {{ msg }}
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Counter from "./Counter.vue";

const msg = ref("Hello World!");
</script>
