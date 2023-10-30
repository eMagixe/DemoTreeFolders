import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import SvgIcon from "vue3-icon";

const app = createApp(App);

app.component("svg-icon", SvgIcon);
app.use(createPinia());

app.mount('#app');