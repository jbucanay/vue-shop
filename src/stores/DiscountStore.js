import { defineStore } from "pinia";
import axios from "axios";

export const useDiscountStore = defineStore("discount", {
  state: () => ({
    availableDiscount: [],
  }),
  getters: {
    currentDiscounts() {
      return this.availableDiscount;
    },
  },

  actions: {
    getDiscounts() {
      axios
        .get("http://localhost/api/discounts")
        .then((res) => {
          if (res.status === 200 && res.data.length > 0) {
            for (const discount of res.data) {
              this.availableDiscount.unshift(discount);
            }
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
