import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import DokiUI from './index.ts'
import dokiLink from "./components/links/dokiLink.vue";

const app = createApp(App)
app.use(DokiUI)
// app.component('doki-link', dokiLink)
app.mount('#app')
