import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Payment from '../views/Payment.vue'
import Warehouse from '../views/Warehouse'
import Addwarehouse from '../views/Addwarehouse'

import { fb } from '../firebase'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/Overview.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'addschedule',
        name: 'addschedule',
        component: () => import(/* webpackChunkName: "Addschedule" */ '../views/Addschedule.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'schedulelist',
        name: 'schedulelist',
        component: () => import(/* webpackChunkName: "Schedulelist" */ '../views/Schedulelist.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'booklist',
        name: 'booklist',
        component: () => import(/* webpackChunkName: "Booklist" */ '../views/Booklist.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'bookings',
        name: 'bookings',
        component: () => import(/* webpackChunkName: "Bookings" */ '../views/Bookings.vue'),
      },
    ]
  },

  

  {
    path: '/thank',
    name: 'Thank',
    component: () => import(/* webpackChunkName: "thank" */ '../views/Thank.vue'),

  },
  {
    path: '/bookings',
    name: 'Bookings',
    component: () => import(/* webpackChunkName: "bookings" */ '../views/Bookings.vue'),
    // meta: { requiresAuth: true } 

  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "signin" */ '../views/Signin.vue')
  },
 
  {
    path: '/payment',
    name: 'payment',
    component: Payment
  },
  {
    path: '/warehouse',
    name: 'warehouse',
    component: Warehouse
  },
  // {
  //   path: '/addwarehouse',
  //   name: 'addwarehouse',
  //   component: Addwarehouse
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !currentUser) {
    next('/')
  }else if (requiresAuth && currentUser) {
    next()
  }else {
    next()
  }
})

export default router
