import { defineStore } from "pinia";
import { computed, onMounted, ref } from "vue";
export interface IOrder {
  price: number;
}
export type RoomID = string;
export const useOrderStore = defineStore("order", () => {
  const orders = ref<Map<RoomID, IOrder>>(new Map());

  onMounted(() => {
    console.log("inin");
    loadInStorage();
  });
  const total = computed(() => {
    let sum = 0;
    for (const [_, value] of orders.value) {
      sum += value.price;
    }
    return sum;
  });

  function updateOrder(room_id: RoomID, order: IOrder) {
    orders.value.set(room_id, order);
    saveInStorage();
  }
  function removeOrder(room_id: RoomID) {
    orders.value.delete(room_id);
    saveInStorage();
  }
  function clearOrders() {
    orders.value.clear();
    saveInStorage();
  }

  function saveInStorage() {
    localStorage.setItem("order", JSON.stringify(Array.from(orders.value)));
  }

  function loadInStorage() {
    if (!import.meta.env.SSR) {
      try {
        const orderStr = localStorage.getItem("order");
        if (orderStr) {
          const orderMap = new Map<RoomID, IOrder>(JSON.parse(orderStr));
          orders.value = orderMap;
        }
      } catch (error) {
        console.log("[訂單資料錯誤]", error);
      }
    }
  }
  return { orders, total, updateOrder, removeOrder, clearOrders };
});
