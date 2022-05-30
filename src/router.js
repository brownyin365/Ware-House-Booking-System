import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard.vue'),
        meta: { requiresAuth: true },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/adware',
      name: 'adware',
      component: () => import(/* webpackChunkName: "adware" */ './views/Adware.vue')
    },
    {
      path: '/bookplace',
      name: 'bookplace',
      component: () => import(/* webpackChunkName: "bookplace" */ './views/Bookplace.vue')
    },
    {
      path: '/signin',
      name: 'Signin',
      component: () => import(/* webpackChunkName: "signin" */ './views/Signin.vue')
    },



    {
      path: '/user/:id',
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'overview',
          name: 'overview',
          component: () => import(/* webpackChunkName: "Overview" */ './views/Overview.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'addschedule',
          name: 'addschedule',
          component: () => import(/* webpackChunkName: "Addschedule" */ './views/Addschedule.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'schedulelist',
          name: 'schedulelist',
          component: () => import(/* webpackChunkName: "Schedulelist" */ './views/Schedulelist.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'booklist',
          name: 'booklist',
          component: () => import(/* webpackChunkName: "Booklist" */ './views/Booklist.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'bookings',
          name: 'bookings',
          component: () => import(/* webpackChunkName: "Bookings" */ './views/Bookings.vue'),
        },
      ]
    },
  ]
});

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
//   const currentUser = fb.auth().currentUser

//   if (requiresAuth && !currentUser) {
//     next('/')
//   }else if (requiresAuth && currentUser) {
//     next()
//   }else {
//     next()
//   }
// })


