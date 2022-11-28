import { defineStore } from "pinia";
import axios from "axios";

export const productsStore = defineStore("products", {
  state: () => ({
    products: [],
  }),
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
      console.log("hit");
    },
  },
});
