import "./assets/main.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";

const app = createApp(App);
app.use(router);
app.mount("#app");
