<template>
  <!-- 標題 -->
  <room-title :data="info" />
  <!-- 照片輪播 -->
  <Carousel :data="images" :domain="'../pages/infopage/pics'" />
  <!-- 訂房日期、人數選擇 -->
  <BookingSelector />
  <!-- 快速連結：房型｜旅館資訊 -->
  <div>
    <a href="#anchor-rooms">房型</a>
    <a href="#anchor-intro">旅館資訊</a>
  </div>
  <!-- 房型 -->
  <div id="anchor-rooms">
    <div v-for="room in rooms" :key="room.room_id">
      <RoomType :data="room" />
    </div>
  </div>
  <div id="anchor-intro">
    <div>
      <h4>聯絡資訊</h4>
      <div>
        <a :href="`tel:${info.tel}`">
          <i class="owl-phone"></i>
          <span>{{ info.tel }}</span>
        </a>
      </div>
      <div>
        <a :href="info.fb_link">
          <i class="owl-earth"></i>
          <span>{{ info.full_name }} 官網</span>
        </a>
      </div>
    </div>
    <div>
      <h4>更多資訊</h4>
      <div>
        <a :href="info.fb_link">
          <i class="owl-link-intact"></i>
          <span>📘 . FACEBOOK 粉絲專頁</span>
        </a>
      </div>
      <div>
        <a :href="info.ig_link">
          <i class="owl-link-intact"></i>
          <span>📕 . INSTAGRAM 官方帳號</span>
        </a>
      </div>
      <div>
        <a :href="info.line_link">
          <i class="owl-link-intact"></i>
          <span>💬 . LINE 官方帳號</span>
        </a>
      </div>
    </div>
    <div>
      <h4>位置</h4>
      <!-- GoogleMap -->
      <iframe
        :src="info.map_link"
        :width="screenWidth"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import OrderCard from "./OrderCard.vue";
import Carousel from "./Carousel.vue";
import RoomTitle from "./RoomTitle.vue";
import BookingSelector from "./BookingSelector.vue";
import RoomType from "./RoomType.vue";
import { usePageContext } from "../../renderer/usePageContext";
const pageContext = usePageContext();

const images = ref(["p1.jpeg", "p2.jpeg", "p3.jpeg", "p4.jpeg", "p5.jpeg"]);

let info = ref({});
let rooms = ref({});

onMounted(() => {
  fetch(
    `http://35.221.193.60/mock/153/api/info/${pageContext.routeParams.name}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      info.value = response.res.data;
    });

  fetch(
    `http://35.221.193.60/mock/153/api/room/${pageContext.routeParams.name}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      rooms.value = response.res.rooms;
    });
});
</script>

<style lang="sass" scoped>
*, :after, :before
  border: 0 solid #d1d7dd
.owl-phone:before
  content: "\E85B"
.owl-earth:before
  content: "\E82C"
.owl-link-intact:before
  content: "\E84B"
[class*=" owl-"]:before, [class^=owl-]:before
  font-family: owl
  font-style: normal
  font-weight: 400
  speak: none
  display: inline-block
  text-decoration: inherit
  width: 1em
  margin-right: 0.2em
  text-align: center
  font-variant: normal
  text-transform: none
  line-height: 1em
  margin-left: 0.2em
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
