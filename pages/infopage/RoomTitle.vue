<template>
  <div class="title-nav">
    <div class="title">{{props.data.full_name}}</div>
    <div class="functions">
      <img class="svgIcon" src="./pics/earth.svg" />
      <img class="svgIcon" src="./pics/currency.svg" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { IInfo } from "./types"

const props = defineProps<{ data: IInfo }>();
</script>

<style>
.title-nav {
  padding: 8px;
  display: flex;
  justify-content: space-between;
}
.title {
  font-size: 24px;
  line-height: 30px;
  margin: 10px;
  cursor: pointer;
}
.functions {
  display: flex;
  line-height: 30px;
  align-items: center;
}
.svgIcon {
  width: 17px;
  height: 17px;
  margin: 0 6px;
  cursor: pointer;
}
</style>
