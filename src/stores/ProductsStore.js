import { defineStore } from "pinia";
import axios from "axios";

export const productsStore = defineStore("products", {
  state: () => ({
    products: [],
  }),
  getters: {
    productsFromStore() {
      return this.products.length > 0 && this.products;
    },
  },
  actions: {
    getProducts() {
      axios
        .get("http://localhost:3000/products")
        .then((res) => {
          if (res.status === 200 && res.data.length > 0) {
            for (const product of res.data) {
              this.products.push(product);
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
  },
});
