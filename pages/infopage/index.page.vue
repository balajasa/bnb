<template>
  <!-- 標題 -->
  <room-title />
  <!-- 照片輪播 -->
  <Carousel />
  <!-- GoogleMap -->
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.21942622936!2d121.01339481206901!3d24.199093478276733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468e4453dcf57e5%3A0xc9e9b90141fc1c70!2z5a626ZyW6L6y5aC0IEdhcmluIEZhcm0gLSDosLfpl5zpnLLnh5_ljYA!5e0!3m2!1szh-TW!2stw!4v1682481264391!5m2!1szh-TW!2stw"
    :width="screenWidth"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>

  <order-card />
</template>

<script>
import OrderCard from "./OrderCard.vue";
import Carousel from "./Carousel.vue";
import RoomTitle from "./RoomTitle.vue";
import { onMounted } from "vue";
export default {
  components: {
    Carousel,
    OrderCard,
    RoomTitle,
  },
};
</script>

<script setup>
const screenWidth = 0;
function onScreenResize() {
  window.addEventListener("resize", () => {
    updateScreenWidth();
  });
}
function updateScreenWidth() {
  screenWidth = window.innerWidth;
}

onMounted(() => {
  // 輪播圖片適應寬度
  onScreenResize();
});
</script>

<style lang="sass" scoped></style>
