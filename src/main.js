import { createPinia } from "pinia";
import { createApp } from "vue";
// import Toast from 'vue-toastification'
import App from "@/App.vue";
import router from "@/router/router";
import "./style.css";
import "vue-toastification/dist/index.css";

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);
// app.use(Toast)
app.mount("#app");
