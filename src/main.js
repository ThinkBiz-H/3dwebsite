// import { createApp } from "vue";
// import { createPinia } from "pinia";
// import App from "./App.vue";
// import router from "./router";

// import "./style.css";
// import "./assets/article-content.css";

// const app = createApp(App);

// app.use(createPinia());
// app.use(router);

// app.mount("#app");
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import "./style.css";
import "./assets/article-content.css";

async function bootstrap() {
  const app = createApp(App);

  app.use(createPinia());
  app.use(router);

  // Wait for router before mounting
  await router.isReady();

  app.mount("#app");
}

bootstrap();
