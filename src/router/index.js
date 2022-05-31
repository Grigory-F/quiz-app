import Vue from 'vue'
import VueRouter from 'vue-router'
import Base from '../views/TheBase.vue'
import Home from '../views/TheHome.vue'
import Auth from '../views/TheAuth.vue'
<<<<<<< HEAD
<<<<<<< HEAD
=======
import UserPage from '../views/UserPage.vue'
>>>>>>> work
=======
import UserPage from '../views/UserPage.vue'
>>>>>>> parent of 82eb2ea (awdad f wf w)

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
        component: Home
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> parent of 82eb2ea (awdad f wf w)
      },
      {
        path: '/user-page',
        name: 'UserPage',
        component: UserPage
<<<<<<< HEAD
>>>>>>> work
=======
>>>>>>> parent of 82eb2ea (awdad f wf w)
      }
    ]
  }/* ,
  {
    path: '/quiz',
    name: 'quiz',
    component: Base,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      }
    ]
  } */

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
