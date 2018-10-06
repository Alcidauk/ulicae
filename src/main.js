import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'

import Cv from './components/cv/cv'
import Home from './components/home/home'


Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/home', component: Home },
  { path: '/cv', component: Cv }
]

const router = new VueRouter({routes, mode: 'history'})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')