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
  path: '/bio',
  name: 'bio',
  // Lazy-loaded
  component: () => import(/* webpackChunkName: "bio" */ '../views/Biography.vue')
}, {
  path: '/media',
  name: 'media',
  // Lazy-loaded
  component: () => import(/* webpackChunkName: "media" */ '../views/Media.vue')
}, {
  path: '/shop',
  name: 'shop',
  // Lazy-loaded
  component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue')
}, {
  path: '/guestbook',
  name: 'guestbook',
  // Lazy-loaded
  component: () => import(/* webpackChunkName: "guestbook" */ '../views/Guestbook.vue')
}, {
  path: '/profile',
  name: 'profile',
  component: () => import(/* webpackChunkName: "profile" */ '../views/UserProfile.vue')
}, {
  path: '/settings',
  name: 'settings',
  component: () => import(/* webpackChunkName: "settings" */ '../views/UserSettings.vue')
}, {
  path: '/register',
  name: 'register',
  component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
}, {
  path: '/login',
  name: 'login',
  component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
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
