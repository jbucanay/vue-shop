import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
    bill: 0,
    quantity: 0,
  }),
  actions: {
    addProductToCart(product) {
      const { id, name, price, selectedQuantity, type, image } = product;
      this.quantity += selectedQuantity;
      this.bill += price * selectedQuantity;
      this.items.unshift(product);
    },
  },
  persist: true,
});
