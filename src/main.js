import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import { productsStore } from "./stores/ProductsStore";
import routes from "./routes";
import "./style.css";

// Plugins
import { registerPlugins } from "@/plugins";

const pinia = createPinia();

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

registerPlugins(app);

app.use(router).use(pinia).mount("#app");
