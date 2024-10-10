import { createApp } from 'vue'
import './style.css'
import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import App from './App.vue'

createApp(App)
    .use(Vue3ColorPicker)
    .mount('#app')
