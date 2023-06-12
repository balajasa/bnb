import { IRoom } from "@/pages/infopage/types";
import { defineStore } from "pinia";
import { computed, onMounted, ref } from "vue";
export interface IOrderPeople{
  adults: number
  children: number
}

export interface IOrder{
  totalPrice: number;
  start: string;
  end: string;
  people: IOrderPeople
}
export interface IUpdateOrderPayload {
  totalPrice?: number;
  start?: string;
  end?: string;
  people?: IOrderPeople
}
export interface IOrderDetail {
  count: number;
  room: IRoom;
}
export type RoomID = string;

export const useOrderStore = defineStore("order", () => {
  const order = ref<IOrder>({
    totalPrice: 0,
    start: '',
    end: '',
    people: {
      adults: 0, 
      children: 0
    }
  });
  const orderDetails = ref<Map<RoomID, IOrderDetail>>(new Map());

  onMounted(() => {
    console.log("inin");
    loadInStorage();
  });
  const total = computed(() => {
    let sum = 0;
    for (const [_, value] of orderDetails.value) {
      sum += value.count * value.room.totalPrice;
    }
    return sum;
  });

  function updateOrderInfo(updateData: IUpdateOrderPayload) {
    if(updateData.start !== undefined){
      order.value.start = updateData.start
    }
    if(updateData.end !== undefined){
      order.value.end = updateData.end
    }
    if(updateData.totalPrice !== undefined){
      order.value.totalPrice = updateData.totalPrice
    }

    if(updateData.people !== undefined){
      order.value.people = updateData.people
    }
    saveInStorage();
  }

  function updateOrderDetail(room_id: RoomID, orderDetail: IOrderDetail) {
    orderDetails.value.set(room_id, orderDetail);
    order.value.totalPrice = total.value;
    saveInStorage();
  }
  function removeOrderDetail(room_id: RoomID) {
    orderDetails.value.delete(room_id);
    order.value.totalPrice = total.value;
    saveInStorage();
  }
  function clearOrdersDetail() {
    orderDetails.value.clear();
    order.value.totalPrice = 0;
    saveInStorage();
  }

  function saveInStorage() {
    localStorage.setItem("orderDetails", JSON.stringify(Array.from(orderDetails.value)));
    localStorage.setItem("orderInfo", JSON.stringify(order.value));
  }

  function loadInStorage() {
    if (!import.meta.env.SSR) {
      try {
        const orderDetailsStr = localStorage.getItem("orderDetails");
        if (orderDetailsStr) {
          const orderMap = new Map<RoomID, IOrderDetail>(JSON.parse(orderDetailsStr));
          orderDetails.value = orderMap;
        }

        const orderInfoStr = localStorage.getItem("orderInfo");
        if (orderInfoStr) {
          const orderInfo = (JSON.parse(orderInfoStr)) as IOrder;
          order.value = orderInfo;
        }
      } catch (error) {
        console.log("[訂單資料錯誤]", error);
      }
    }
  }

  
  return { orders: orderDetails, orderInfo: order, total, updateOrder: updateOrderDetail, removeOrder: removeOrderDetail, clearOrders: clearOrdersDetail, updateOrderInfo };
});
