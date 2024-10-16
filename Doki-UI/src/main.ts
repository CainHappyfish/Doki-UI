import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import DokiUI from './index.ts'
// import DokiUI from "../dist/doki-ui.js"
import "../dist/style.css"


const app = createApp(App)
app.use(DokiUI)
app.mount('#app')
