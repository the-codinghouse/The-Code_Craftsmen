// src/main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia' // Add this
import App from './App.vue'
import router from '@/router' // Add this (create router/index.ts first)
import './style.css'

const app = createApp(App)
app.use(createPinia()) // Initialize Pinia
app.use(router) // Initialize Vue Router
app.mount('#app')