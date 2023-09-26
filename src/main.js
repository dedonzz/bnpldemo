import { createApp } from "vue";
import { createPinia } from "pinia";

import Camera from "simple-vue-camera";
import App from "./App.vue";
import { router } from "./helpers";

// setup fake backend
import { fakeBackend } from "./helpers";
fakeBackend();

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("camera", Camera);
app.mount("#app");
