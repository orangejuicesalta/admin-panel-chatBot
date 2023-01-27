import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import dayjs from "dayjs";
import "dayjs/locale/ru";

import Input from "ant-design-vue/es/input";
import Popover from "ant-design-vue/es/popover";


import "vue-tel-input/dist/vue-tel-input.css";
import "ant-design-vue/lib/popover/style/index.less";



dayjs.locale("ru");
createApp(App).use(router).use(Input).use(Popover).mount('#app')
