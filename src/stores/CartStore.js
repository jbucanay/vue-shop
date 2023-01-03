import { defineStore } from "pinia";
import axios from "axios";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  actions: {
    addProductToCart(product, inventory) {
      const { inventoryId: id, remainder } = inventory;
      const { id: productId, selectedQuantity } = product;

      //check to see if the item exists in the cart
      const productInCart = this.items.find(
        (product) => product.id === productId
      );

      if (productInCart) {
        productInCart.selectedQuantity += selectedQuantity;
      } else {
        this.items.unshift(product);
      }

      //update product quantity
      // using patch vs put because patch maintains the old data and just changes requested info. Whereas put replaces the old data completely
      axios
        .patch(`http://localhost/api/inventory/${id}`, {
          remainder,
        })
        .then((res) => {})
        .catch((e) => console.log(e));
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
