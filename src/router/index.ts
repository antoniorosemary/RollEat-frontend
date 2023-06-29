import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '../store/index'
import axios from 'axios'

import HomeView from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import UserProfilePage from '../views/UserProfilePage.vue'
import Login from '../components/Login.vue'
import Client from '../components/Client.vue'
import Restaurant from '../components/Restaurant.vue'
import Register from '../views/RegisterView.vue'

// Footer Pages
import AboutUsViewVue from '../views/footer/AboutUsView.vue'
import ContactUsView from '../views/footer/ContactUsView.vue'
import JoinDeliveryView from '../views/footer/JoinDeliveryView.vue'
import AddRestaurantViewVue from '@/views/footer/AddRestaurantView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: store.state.hrefHome,
    name: 'home',
    component: HomeView
  },{
    path: '/test',
    name: 'test',
    component: () => import( '../views/TestView.vue'),
    meta: { requiresAuth: true }
  },{
    path: store.state.hrefLogin,
    name: 'login',
    component: Login
  },{
    path: store.state.hrefRegister,
    name: 'register',
    component: Register
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfilePage
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

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = await checkAuthentication();

  if (isAuthenticated) {
    store.commit('setLoggedOut', false); // Modifie l'état loggedOut à false si l'utilisateur est authentifié
  } else {
    store.commit('setLoggedOut', true); // Sinon, il est défini à true
  }

  if (to.meta && to.meta.requiresAuth && !isAuthenticated) {
    next(store.state.hrefLogin);
  } else {
    next();
  }
});

async function checkAuthentication() {
  try {
    // const token = document.cookie.split('=')[1];
    const response = await axios.post('/auth',{withCredentials: true});
    return response.status === 200;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export default router
