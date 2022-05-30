import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
// import store from './store'
import { fb } from './firebase'


// Notifications
// import VueNoty from 'vuejs-noty'
// Vue.use(VueNoty)

// Vue firestore
import VueFirestore from 'vue-firestore'
Vue.use(VueFirestore,  {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})

//Validate
// import Vuelidate from 'vuelidate'
// Vue.use(Vuelidate)



// Global Components Setup
Vue.component('Nav', require('./components/Nav.vue').default);
Vue.config.productionTip = false


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)




let app = ''
// eslint-disable-next-line no-unused-vars
fb.auth().onAuthStateChanged(function(user) {
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
});


