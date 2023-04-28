<template>
  <!-- 標題 -->
  <room-title />
  <!-- 照片輪播 -->
  <Carousel :data="images" :domain="'./pages/infopage/pics'" />
  <!-- 訂房日期、人數選擇 -->
  <BookingSelector />
  <!-- 快速連結：房型｜旅館資訊 -->
  <div>
    <button>房型</button>
    <button>旅館資訊</button>
  </div>
  <!-- 房型 -->
  <div v-for="room in rooms" :key="room.room_id">
    <RoomType :data="room" />
  </div>
  <!-- GoogleMap -->
  <!-- <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.21942622936!2d121.01339481206901!3d24.199093478276733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468e4453dcf57e5%3A0xc9e9b90141fc1c70!2z5a626ZyW6L6y5aC0IEdhcmluIEZhcm0gLSDosLfpl5zpnLLnh5_ljYA!5e0!3m2!1szh-TW!2stw!4v1682481264391!5m2!1szh-TW!2stw"
    :width="screenWidth"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe> -->
</template>

<script setup>
import { ref, onMounted } from 'vue'
import OrderCard from "./OrderCard.vue";
import Carousel from "./Carousel.vue";
import RoomTitle from "./RoomTitle.vue";
import BookingSelector from "./BookingSelector.vue";
import RoomType from "./RoomType.vue";

const images = ref(["p1.jpeg","p2.jpeg","p3.jpeg","p4.jpeg","p5.jpeg"])

let rooms = ref({})

onMounted(() => {
  const url = "http://35.221.193.60/mock/153/api/room/1651127002029101056";
  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      rooms.value = response.res.rooms
    });
});
</script>

<style lang="sass" scoped></style>
