import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
    bill: 0,
    quantity: 0,
  }),
  actions: {
    addItem(foundItem) {
      console.log(foundItem);
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "Cart",
        storage: localStorage,
      },
    ],
  },
});
