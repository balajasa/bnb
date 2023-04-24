<template>
  <div id="app">
    <router-link to="/hello">HelloWolrd</router-link>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
</style>
