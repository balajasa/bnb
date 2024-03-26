import { defineStore } from "pinia";
import { ref, onMounted, computed } from "vue";
const useOrderStore = defineStore("order", () => {
  const order = ref({
    totalPrice: 0,
    start: "",
    end: "",
    people: {
      adults: 0,
      children: 0
    }
  });
  const orderDetails = ref(/* @__PURE__ */ new Map());
  onMounted(() => {
    console.log("inin");
  });
  const total = computed(() => {
    let sum = 0;
    for (const [_, value] of orderDetails.value) {
      sum += value.count * value.room.totalPrice;
    }
    return sum;
  });
  function updateOrderInfo(updateData) {
    if (updateData.start !== void 0) {
      order.value.start = updateData.start;
    }
    if (updateData.end !== void 0) {
      order.value.end = updateData.end;
    }
    if (updateData.totalPrice !== void 0) {
      order.value.totalPrice = updateData.totalPrice;
    }
    if (updateData.people !== void 0) {
      order.value.people = updateData.people;
    }
    saveInStorage();
  }
  function updateOrderDetail(room_id, orderDetail) {
    orderDetails.value.set(room_id, orderDetail);
    order.value.totalPrice = total.value;
    saveInStorage();
  }
  function removeOrderDetail(room_id) {
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
  return { orders: orderDetails, orderInfo: order, total, updateOrder: updateOrderDetail, removeOrder: removeOrderDetail, clearOrders: clearOrdersDetail, updateOrderInfo };
});
export {
  useOrderStore as u
};
