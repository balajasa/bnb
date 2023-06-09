<template>
  <div class="card">
    <Link :href="`/infopage/${props.data.account}`" class="card-link">
      <div class="card-imgs">
        <img class="card-img"
          :src="props.data.img"
          :alt="props.data.full_name"
          :title="props.data.full_name" />
      </div>
      <div class="card-info">
        <p class="card-info-title">
          {{ props.data.full_name }}
        </p>
        <p v-if="props.data.price">
          每晚 ${{ props.data.price }} TWD
        </p>
      </div>
      <!-- click.prevent 防止冒泡 -->
      <button class="card-favorite" @click.prevent="">
        <svg class="card-favorite-svg" v-if="false" :class="{ 'is-active': props.isFavorite }" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
          <path class="card-favorite-path" d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
        </svg>
      </button>
    </Link>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { ILobbyCard } from './CardType';
import Link from "../renderer/Link.vue";

const props = defineProps<{
  data: ILobbyCard
  isFavorite: boolean
}>();
</script>

<style lang="sass" scoped>
.card
  box-sizing: border-box
  display: inline-block
  position: relative
  padding: 12px

.card-link
  padding: 0

.card-imgs
  position: relative
  width: 100%
  height: 0
  padding: 50% 0
  margin-bottom: 12px
  background-color: #DDDDDD
  box-shadow: inset 0 0 10px #bbbbbb
  border-radius: 12px
  overflow: hidden

.card-img
  position: absolute
  top: 0
  left: 0
  height: 100%

.card-info
  line-height: 20px
  text-align: left
  color: #222222
  font-size: 15px
  font-weight: 600

.card-info-title
  max-width: 100%
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis

.card-favorite
  display: inline-block
  position: absolute
  top: 24px
  right: 24px
  height: 24px
  width: 24px
  margin: 0
  padding: 0
  border: none
  outline: none
  background-color: transparent
.card-favorite-svg
  display: block
  fill: rgba(0, 0, 0, 0.5)
  height: 24px
  width: 24px
  stroke: white
  stroke-width: 2
  overflow: visible
  &.is-active
    fill: rgba(220, 20, 60, 1)

.card-favorite-path
  stroke: white

  </style>
