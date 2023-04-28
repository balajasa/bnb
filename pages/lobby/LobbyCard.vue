<template>
  <div class="card">
    <a href="" class="card-link">
      <div class="card-imgs">
        <img class="card-img" :src="props.data.img"/>
      </div>
      <div class="card-info">
        <p>{{ props.data.full_name }}</p>
        <p v-if="props.data.price">
          每晚 ${{ props.data.price }} TWD
        </p>
      </div>
      <button class="card-favorite"></button>
    </a>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { ILobbyCard } from './CardType';

const props = defineProps<{data: ILobbyCard}>();

setTimeout(() => {
  console.log(props.data)
}, 1000);
</script>

<style lang="sass" scoped>
.card
  box-sizing: border-box
  display: inline-block
  position: relative
  padding: 12px

.card-link
  text-decoration: none

.card-imgs
  position: relative
  width: 100%
  height: 0
  padding: 50% 0
  margin-bottom: 12px
  background-color: red
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

  &::before, &::after
    content: ''
    position: absolute
    top: 50%
    left: 50%
    height: 86%
    width: 50%
    background-color: #eee
    border-radius: 20px 20px 2px 2px
    transform-origin: center 75%

  &::before
    transform: translate(-50%, -80%) rotate(45deg)

  &::after
    transform: translate(-50%, -80%) rotate(-45deg)

  </style>
