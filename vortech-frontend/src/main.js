import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { VueSpinners } from '@saeris/vue-spinners'

import App from './App.vue'
import './custom.scss'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueSpinners)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
