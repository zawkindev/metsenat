import { createPinia } from "pinia";
import { createApp } from "vue";
import Toast from "vue-toastification";
import App from "@/App.vue";
import router from "@/router/router";
import "./style.css";
import "vue-toastification/dist/index.css";

const pinia = createPinia();

const app = createApp(App);
const options = {
  position: "top-right",
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
};

app.use(router);
app.use(pinia);
app.use(Toast, options);
app.mount("#app");
