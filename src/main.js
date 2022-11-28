import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import { productsStore } from "./stores/ProductsStore";
import routes from "./routes";

import "./style.css";
import { registerPlugins } from "@/plugins";

//lodash

//store
const pinia = createPinia();

//router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

registerPlugins(app);

app.use(router).use(pinia).mount("#app");
