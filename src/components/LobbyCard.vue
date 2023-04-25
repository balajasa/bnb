<template>
  <div class="card">
    <a href="" class="card-link">
      <div class="card-imgs">
        <div class="card-img"></div>
        <div class="card-img"></div>
        <div class="card-img"></div>
        <div class="card-img"></div>
      </div>
      <div class="card-info">
        <p>Lonavla、印度</p>
        <p>每晚 $3,847 TWD</p>
      </div>
      <button class="card-favorite"></button>
    </a>
  </div>
</template>

<script setup>
// import { ref } from 'vue'

defineProps({
  card: String,
})

// const msg = ref('Hello World!')

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  padding: 12px;
}

.card-link {
  text-decoration: none;
}

.card-imgs {
  width: 100%;
  height: 0;
  padding: 50% 0;
  margin-bottom: 12px;
  background-color: red;
  border-radius: 12px;
  overflow: hidden;
}
.card-img {}
.card-info {
  line-height: 20px;
  text-align: left;
  color: #222222;
  font-size: 15px;
  font-weight: 600;
  text-overflow: ellipsis;
}
.card-favorite {
  display: inline-block;
  position: absolute;
  top: 24px;
  right: 24px;
  height: 24px;
  width: 24px;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
}
.card-favorite::before,
.card-favorite::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  height: 86%;
  width: 50%;
  background-color: #eee;
  border-radius: 20px 20px 2px 2px;
  transform-origin: center 75%;
}
.card-favorite::before {
  transform: translate(-50%, -80%) rotate(45deg);

}
.card-favorite::after {
  transform: translate(-50%, -80%) rotate(-45deg);
}
</style>
