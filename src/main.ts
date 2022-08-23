import { createSSRApp } from "vue";
import App from "./App.vue";
// import * as echarts from 'echarts';

export function createApp() {
  const app = createSSRApp(App);
  // app.config.globalProperties.echarts = echarts;
  return {
    app,
  };
}
