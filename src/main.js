import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import { createPersistedState } from "pinia-plugin-persistedstate";
import routes from "./routes";

import "./style.css";
import { registerPlugins } from "@/plugins";

//lodash

//pinia store
// when code is changed in store, it might take a while for things to register, so refresh page a couple times for new changes to register
const pinia = createPinia();
// sessionStorage for persistence to clear data when user closes browser
// every store that uses persist: true will use sessionStorage
pinia.use(
  createPersistedState({
    storage: sessionStorage,
  })
);

//router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

registerPlugins(app);

app.use(router).use(pinia).mount("#app");
