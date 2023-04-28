<template>
  <Search />
  <div class="lobby-cards">
    <LobbyCard class="lobby-card"
      v-for="card in cards"
      :key="card.card_id"
      :data="card"/>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ILobbyCard, ParseLobbyCard } from './CardType';
import LobbyCard from './LobbyCard.vue'
import Search from './Search.vue'

let cards = ref<ILobbyCard[]>([])

onMounted(() => {
  const url = "http://35.221.193.60/mock/153/api/info";
  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      cards.value = ParseLobbyCard(response.res.data)
    });
});
</script>

<style lang="sass" scoped>
.lobby-cards
  display: flex
  flex-wrap: wrap

.lobby-card
  flex: 0 0 100%

@media (min-width: 550px)
  .lobby-card
    flex-basis: calc(100% / 2)
@media (min-width: 950px)
  .lobby-card
    flex-basis: calc(100% / 3)
@media (min-width: 1128px)
  .lobby-card
    flex-basis: calc(100% / 4)
@media (min-width: 1640px)
  .lobby-card
    flex-basis: calc(100% / 5)
</style>
