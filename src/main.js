import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// eslint-disable-next-line no-unused-vars
import styles from '@/styles/app.scss'
// eslint-disable-next-line no-unused-vars
import baseComponents from '@/baseComponents.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
