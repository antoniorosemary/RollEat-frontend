import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue'
import Client from '../components/Client.vue'
import Restaurant from '../components/Restaurant.vue'
import Register from '../components/Register.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/client',
    name: 'client',
    component: Client
  },
  {
    path: '/restaurant',
    name: 'restaurant',
    component: Restaurant
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
