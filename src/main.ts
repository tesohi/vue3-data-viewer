import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

import HighchartsVue from "highcharts-vue";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(HighchartsVue);

app.mount("#app");
