import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
    bill: 0,
    quantity: 0,
  }),
});
