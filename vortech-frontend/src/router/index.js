import Vue from 'vue'
import VueRouter from 'vue-router'
import News from '../views/News.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'news',
  component: News
}, {
  path: '/releases',
  name: 'releases',
  // Lazy-loaded
  component: () => import(/* webpackChunkName: "releases" */ '../views/Releases.vue')
}, {
  path: '/profile',
  name: 'profile',
  component: () => import(/* webpackChunkName: "profile" */ '../views/UserProfile.vue')
}, {
  path: '/logout',
  name: 'logout',
  component: () => import(/* webpackChunkName: "logout" */ '../views/Logout.vue')
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
