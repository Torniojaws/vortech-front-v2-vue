import Vue from 'vue'
import App from './App.vue'
import LoginForm from './components/LoginForm.vue'
import UserControlPanel from './components/UserControlPanel.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.component('login-form', LoginForm)
Vue.component('user-control-panel', UserControlPanel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
