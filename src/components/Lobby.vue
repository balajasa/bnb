<template>
  <div class="lobby-cards">
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
// import { ref } from 'vue'

defineProps({
  card: String,
})

// const msg = ref('Hello World!')

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lobby-cards {
  display: flex;
  flex-wrap: wrap;
}
.lobby-cards > * {
  flex: 0 0 25%;
}

</style>
