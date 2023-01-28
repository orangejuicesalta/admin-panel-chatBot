import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import dayjs from "dayjs";
import "dayjs/locale/ru";

import Input from "ant-design-vue/es/input";
import Popover from "ant-design-vue/es/popover";
import Textarea from "ant-design-vue/es/input";

import "ant-design-vue/lib/input/style/index.less";

import "ant-design-vue/lib/popover/style/index.less";

dayjs.locale("ru");
createApp(App).use(router).use(Input).use(Popover).use(Textarea).mount("#app");
