<template>
  <!-- 標題 -->
  <room-title :data="info" />
  <!-- 照片輪播 -->
  <!-- <Carousel :data="images" :domain="'../pages/infopage/pics'" /> -->

  <!-- 訂房日期、人數選擇 -->
  <div class="info-wrapper">
    <div class="container">
      <BookingSelector @search="handelSearch" />
      <!-- 快速連結：房型｜旅館資訊 -->
      <div class="hotel-sub-nav">
        <a href="#anchor-rooms" class="is-active">房型</a>
        <a href="#anchor-intro">旅館資訊</a>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="room-main">
      <!-- 房型 -->
      <div class="room-content">
        <div id="anchor-rooms" class="rooms-area">
          <div v-for="room in rooms" :key="room.room_id">
            <RoomType :data="room" />
          </div>
        </div>
        <div id="anchor-intro">
          <Info :data="info"></Info>
        </div>
      </div>
      <div class="order-content">
        <RoomOrder></RoomOrder>
      </div>
    </div>
  </div>

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
import { useOrderStore } from "@/stores/useOrder";

const order = useOrderStore();

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
const domain = "http://34.31.125.18:8081";
const searchPayload = ref<ISearchPayload>({
  start: "",
  end: "",
});

onMounted(() => {
  setInfo();
  setRooms();
  order.clearOrders();
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
@import "@/styles/layout"

.info-wrapper
  box-shadow: 0 25px 40px -15px rgba(92,101,107,.2)
  padding: 16px 0
  margin-bottom: 40px
  .container
    display: flex
    flex-direction: column
    @media (min-width: 992px)
      align-items: flex-end
      flex-direction: row


.hotel-sub-nav
  display: inline-flex
  align-items: center
  justify-content: space-around
  a
    margin-right: 2rem
    padding-top: 0.5rem
    padding-bottom: 0.5rem
    color: #686e74
    text-decoration: none
    border-bottom: 2px solid #fff
    &.is-active
      border-bottom: 2px solid #a3abb2

.room-main
  display: flex
  justify-content: space-between

.rooms-area
  padding: 0 16px 24px 16px
  border-bottom: 1px solid #e9edef

.room-content
  display: inline-block
  max-width: calc(100% - 375px)

.order-content
    width: 100%
    padding-left: 16px
    @media (min-width: 992px)
      max-width: 375px
      display: inline-block
</style>
