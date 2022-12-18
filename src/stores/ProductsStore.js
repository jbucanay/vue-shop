import { defineStore } from "pinia";
import axios from "axios";

//Product store used to manage products. Getters == computed properties, actions == methods, state == data to manage
export const productsStore = defineStore("products", {
  state: () => ({
    products: [],
  }),
  getters: {
    returnProducts() {
      return this.products.length > 0 && this.products;
    },
  },
  actions: {
    getProducts() {
      axios
        .get("http://localhost/api/products")
        .then((res) => {
          if (res.status === 200 && res.data.length > 0) {
            for (const product of res.data) {
              this.products.unshift(product);
            }
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    createProduct(productInfo) {
      const { id, name, price, quantity, type, image } = productInfo;
      axios
        .post("http://localhost:3000/products", {
          id,
          name,
          price,
          quantity,
          type,
          image,
        })
        .then((res) => {})
        .catch((e) => {
          console.log(e);
        });
    },
    updateProductGoingCart(id, quantity) {
      // using patch vs put because patch maintains the old data and just changes requested info. Whereas put replaces the old data completely
      axios
        .patch(`http://localhost:3000/products/${id}`, {
          id,
          quantity,
        })
        .then((res) => {
          this.getProducts();
        })
        .catch((e) => console.log(e));
    },
  },
});
