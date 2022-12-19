import axios from "axios";
import { defineStore } from "pinia";

export const useAuth = defineStore("auth", {
  state: () => ({
    user: {},
    token: "",
    errorMessage: "",
  }),
  getters: {},
  actions: {
    loginUser(email, password) {
      axios
        .post("http://localhost/api/login", {
          email,
          password,
        })
        .then((response) => {
          const { status, data } = response;
          const { user, token } = data;
          this.token = token;
          this.user = user;
        })
        .catch((e) => {
          const { message } = e.response.data;
          this.errorMessage = message;
        });
    },
  },
  persist: true,
});
