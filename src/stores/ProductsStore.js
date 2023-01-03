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
        .post("http://localhost/api/products", {
          id,
          name,
          price,
          quantity,
          type,
          image,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getOneProduct(id) {
      axios
        .get(`http://localhost/api/products/${id}`)
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
  },
});
