import { defineStore } from "pinia";

export const productsStore = defineStore("products", {
  state: () => ({
    products: [
      {
        id: 1,
        image: "test",
        title: "test title",
        description: "test description",
        price: 34.99,
      },
    ],
    name: "testing from store what the fuck",
  }),
});
