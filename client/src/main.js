import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


sync(store, router)
const app = createApp(App)
app.use(store)
app.use(router)

app.mount('#app')
