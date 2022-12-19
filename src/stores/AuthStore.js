import axios from "axios";
import { defineStore } from "pinia";

export const useAuth = defineStore("auth", {
  state: () => ({
    user: {},
    token: "",
    errorMessage: "",
  }),
  getters: {
    isAuthenticated() {
      return !!this.token;
    },
    loginFailed() {
      this.errorMessage = this.isAuthenticated ? "" : this.errorMessage;
      return this.errorMessage;
    },
  },
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
          this.errorMessage = "";
        })
        .catch((e) => {
          const { message } = e.response.data;
          this.errorMessage = message;
        });
    },
    logout() {
      console.log("clear damnit");
      this.user = {};
      this.token = "";
    },
  },

  persist: true,
});
