import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import DokiUI from './index.ts'

const app = createApp(App)
app.use(DokiUI)
app.mount('#app')
