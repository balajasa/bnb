<template>
  <div class="search">
    <div class="searchBox">
      <div class="searchIcon"></div>
      <div class="searchtext">任何地方
        <br>
        <span class="searchmini">任1週 新增人數</span>
      </div>
    </div>


  </div>
</template>

<script setup>

defineProps({
  card: String,
})


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search{
  border-radius: 1000px;
  border: 0.5px solid rgba(0,0,0,0.08);
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  transform: translate3d(0,0,0);
  min-height: 56px;
  min-width: 285px;
  align-items: center;
  display: flex;
}
.searchBox{
  display: flex;
}
.searchIcon{
  width: 52px;
}

.searchtext{
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}
.searchmini{
  color: #717171;
  font-size: 12px;
  line-height: 16px;
}
</style>
