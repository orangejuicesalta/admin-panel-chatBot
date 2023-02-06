import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import dayjs from "dayjs";
import "dayjs/locale/ru";

import Input from "ant-design-vue/es/input";
import Tabs from "ant-design-vue/es/tabs";
import Popover from "ant-design-vue/es/popover";
import Textarea from "ant-design-vue/es/input";
import Spin from "ant-design-vue/es/spin";
import Form from "ant-design-vue/es/form";

import "ant-design-vue/lib/input/style/index.less";
import "ant-design-vue/lib/tabs/style/index.less";
import "ant-design-vue/lib/popover/style/index.less";
import "ant-design-vue/lib/spin/style/index.less";
import "ant-design-vue/lib/form/style/index.less";

dayjs.locale("ru");
createApp(App)
  .use(createPinia())
  .use(router)
  .use(Input)
  .use(Form)
  .use(Spin)
  .use(Popover)
  .use(Tabs)
  .use(Textarea)
  .mount("#app");
