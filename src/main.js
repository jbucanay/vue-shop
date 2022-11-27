import App from "./App.vue";
import { createApp } from "vue";
import "./style.css";

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
