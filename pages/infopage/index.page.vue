<template>
  <!-- 標題 -->
  <room-title :data="info" />
  <!-- 照片輪播 -->
  <Carousel :data="images" :domain="'../pages/infopage/pics'" />
  <!-- 訂房日期、人數選擇 -->
  <BookingSelector @search="handelSearch" />
  <!-- 快速連結：房型｜旅館資訊 -->
  <div class="hotel-sub-nav">
    <a href="#anchor-rooms" class="is-active">房型</a>
    <a href="#anchor-intro">旅館資訊</a>
  </div>
  <!-- 房型 -->
  <div class="room-container">
    <div id="anchor-rooms">
      <div v-for="room in rooms" :key="room.room_id">
        <RoomType :data="room" />
      </div>
    </div>
    <div id="anchor-intro">
      <Info :data="info"></Info>
    </div>
  </div>
  <RoomOrder></RoomOrder>
  <RoomFooter :data="info"></RoomFooter>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Carousel from "./Carousel.vue";
import RoomTitle from "./RoomTitle.vue";
import Info from "./Info.vue";
import RoomFooter from "./RoomFooter.vue";
import BookingSelector from "./BookingSelector.vue";
import RoomType from "./RoomType.vue";
import RoomOrder from "./RoomOrder.vue";
import { usePageContext } from "../../renderer/usePageContext";
import { IInfo, IRoom, IRoomResp, ISearchPayload, IRoomStock } from "./types";
import moment from "moment";

const pageContext: any = usePageContext();

const images = ref(["p1.jpeg", "p2.jpeg", "p3.jpeg", "p4.jpeg", "p5.jpeg"]);

const info = ref<IInfo>({
  account: "",
  full_name: "",
  nick_name: "",
  email: "",
  tel: "",
  address: "",
  map_link: "",
  fb_link: "",
  line_link: "",
  ig_link: "",
});
const rooms = ref<IRoom[]>([]);
const domain = "http://127.0.0.1:8088";
const searchPayload = ref<ISearchPayload>({
  start: "",
  end: "",
});

onMounted(() => {
  setInfo();
  setRooms();
});

function handelSearch(payload: ISearchPayload) {
  searchPayload.value.start = payload.start;
  searchPayload.value.end = payload.end;

  if (rooms.value.length === 0) {
    return;
  }

  console.log(payload);
  fetch(
    `${domain}/api/room_stock/${
      pageContext.routeParams.name
    }?${new URLSearchParams({
      start: payload.start.replaceAll("/", "-"),
      end: payload.end.replaceAll("/", "-"),
    })}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      setRoomStock(response, payload);
    });
}

function setInfo() {
  // 35.221.193.60/mock/153
  fetch(`${domain}/api/info/${pageContext.routeParams.name}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      info.value = response.res.data;
    });
}

function setRooms() {
  // 35.221.193.60/mock/153
  fetch(`${domain}/api/info/${pageContext.routeParams.name}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      info.value = response.res.data;
    });
  fetch(`${domain}/api/room/${pageContext.routeParams.name}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      const resp: IRoomResp[] = response.res.rooms;
      rooms.value = resp.map((data) => ({
        ...data,
        enough: false,
        totalPrice: 0,
      }));
      handelSearch(searchPayload.value);
    });
}

function setRoomStock(response: any, payload: ISearchPayload) {
  const room_stock: IRoomStock[] = response.res.data;
  const startDay = moment(payload.start);
  const endDay = moment(payload.end);
  const days = endDay.diff(startDay, "days") + 1;
  rooms.value.forEach((room) => {
    room.enough = false;
    room.totalPrice = 0;
    room.remaining = 0;
    const stocks = room_stock.filter(
      (data) => data.room_id === room.room_id && data.remaining > 0
    );
    room.enough = stocks.length === days;
    if (room.enough) {
      room.totalPrice = room_stock
        .map((data) => data.price)
        .reduce((a, b) => a + b);
      room.remaining = Math.min(...room_stock.map((data) => data.remaining));
    }
  });
}
</script>

<style lang="sass" scoped>

.hotel-sub-nav
  width: 100%
  display: flex
  align-items: center
  justify-content: space-around
  box-shadow: 0 25px 40px -15px rgba(92,101,107,.2)
  padding-bottom: 1rem
  margin-bottom: 2.5rem
  a
    margin-right: 2rem
    padding-top: 0.5rem
    padding-bottom: 0.5rem
    color: #686e74
    text-decoration: none
    &.is-active
      border-bottom-width: 2px
      border-color: #a3abb2
.room-container
  width: 100%
  margin-right: auto
  margin-left: auto
  padding-right: 1rem
  padding-left: 1rem
</style>
