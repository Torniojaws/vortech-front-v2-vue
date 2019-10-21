import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    admin: false,
    loggedIn: false,
    username: ''
  },
  mutations: {
    admin (state, value) {
      state.admin = value
    },
    loggedIn (state, value) {
      state.loggedIn = value
    },
    username (state, value) {
      state.username = value
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
