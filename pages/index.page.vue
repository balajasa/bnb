<template>
  <div v-show="showSearch">
    <Country @search="search($event)"></Country>
  </div>
  <div v-show="!showSearch">
    <Search @click="toggleSearch"/>
    <div class="lobby-cards">
      <!-- 這個是樣式範例 -->
      <!-- 1. 金額api回來前不顯示（從另一支api來的） -->
      <!-- 2. 圖片錯誤時顯示替代文字跟灰底 -->
      <LobbyCard class="lobby-card"
        v-for="card in cards"
        :key="card.account"
        :data="card"
        :isFavorite="true"/>
    </div>
  </div>
 
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ILobbyCard, ParseLobbyCard } from './CardType';
import LobbyCard from './LobbyCard.vue'
import Search from './Search.vue'
import Country from './country/index.page.vue'

let cards = ref<ILobbyCard[]>([])
const showSearch = ref<boolean>(false)
//router
// const router = useRouter();

onMounted(() => {
  const url = "http://34.31.125.18:8081/api/info";
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

function toggleSearch() {
  // router.push('country');
  showSearch.value = !showSearch.value
}

function search(data: any){
  showSearch.value = !showSearch.value
}
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
