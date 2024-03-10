import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueMoment,{'moment'})
app.mount('#app')
