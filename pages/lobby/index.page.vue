<template>
  <div class="lobby-cards">
    <Search />
    <LobbyCard />
    <LobbyCard />
    <LobbyCard />
    <LobbyCard />
    <LobbyCard />
    <LobbyCard />
    <LobbyCard />
  </div>
</template>

<script setup>
import LobbyCard from './LobbyCard.vue'
import Search from './Search.vue'
// import { ref } from 'vue'

defineProps({
  card: String,
})

// const msg = ref('Hello World!')

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.lobby-cards
  display: flex
  flex-wrap: wrap

  > *
    flex: 0 0 25%
</style>
