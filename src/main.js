import { createApp } from "vue";
import App from "./App.vue";
import $bus from "./utils/Events";
import router from "./routes";
import $pages from "./data";

const app = createApp(App);

app.use(router);
// This allows us to use globally our global event "$bus"
app.config.globalProperties.$bus = $bus;
app.config.globalProperties.$pages = $pages;

app.mount("#app");
