import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// Router
import router from '@/router'

import './styles/main.sass'


const vuetify = createVuetify({
  components,
  directives,
  icons: { defaultSet: 'mdi', }
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')