import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importar Materialize CSS
import 'materialize-css/dist/css/materialize.min.css'

// Importar Materialize JS (se necessário)
import 'materialize-css/dist/js/materialize.min.js'

createApp(App).use(router).mount('#app')
