import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import DokiUI from './index.ts'

createApp(App).use(DokiUI).mount('#app')
