import { createApp } from 'vue'
import '@/app/styles/style.css'
import App from './App.vue'
import routes from "@/app/router/routes.ts";
import {createPinia} from "pinia";

const pinia = createPinia()

const plugins = [routes, pinia]
const app = createApp(App)

plugins.forEach((plugin) => {app.use(plugin)})

app.mount('#app')
