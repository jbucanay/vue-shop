import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import routes from "./routes";

import "./style.css";
import { registerPlugins } from "@/plugins";

//lodash

//pinia store and persist
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

//router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

registerPlugins(app);

app.use(router).use(pinia).mount("#app");
