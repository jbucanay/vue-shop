import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  actions: {
    addProductToCart(product) {
      const { id, name, price, selectedQuantity, type, image } = product;
      this.items.unshift(product);
    },
    removeFromCart(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },
  },
  getters: {
    calculateBill() {
      return this.items.reduce((accumulator, currentval) => {
        return accumulator + currentval.selectedQuantity * currentval.price;
      }, 0);
    },
    getCart() {
      return this.items;
    },
  },
  // localStorage: has no expiration date until programmer deletes it manulaly with
  // localStorage key is cart
  // But we are using session storage instead: main.js configured to use sessionStorage
  persist: true,
});
