import Vue from 'vue'
import VueRouter from 'vue-router'
import Base from '../views/Base.vue'
import SecondPage from '../views/SecondPage.vue'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/',
    name: 'base',
    component: Base,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
