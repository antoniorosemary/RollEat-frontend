import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '../store/index'

import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue'
import Client from '../components/Client.vue'
import Restaurant from '../components/Restaurant.vue'
import Register from '../components/Register.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: store.state.hrefHome,
    name: 'home',
    component: HomeView
  },
  {
    path: store.state.hrefAbout,
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: store.state.hrefLogin,
    name: 'login',
    component: Login
  },
  /*{
    path: '/client',
    name: 'client',
    component: Client
  },*/
  /*{
    path: '/restaurant',
    name: 'restaurant',
    component: Restaurant
  },*/
  {
    path: store.state.hrefRegister,
    name: 'register',
    component: Register
  },
  // {
  //   path: '/protected',
  //   name: 'protected',
  //   component: ProtectedView,
  //   beforeEnter: (to, from, next) => {
  //     if (store.state.user) {
  //       next()
  //     } else {
  //       next('/login')
  //     }
  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
