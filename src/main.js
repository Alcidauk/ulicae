import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'

import Cv from './components/cv/cv'
import Home from './components/home/home'
import Note from './components/note/note'
import Portfolio from './components/portfolio/portfolio'
import PortfolioCaroussel from './components/portfolio/portfolio-caroussel'

import VeeValidate, { Validator } from 'vee-validate';
import fr from 'vee-validate/dist/locale/fr';

Vue.use(VueRouter)
Vue.use(VeeValidate);

Validator.localize('fr', fr);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/cv', component: Cv },
  { path: '/notes', component: Note },
  { path: '/portfolio', 
    component: Portfolio, 
    children: [
      { path: ':name', component: PortfolioCaroussel }
    ]
  }
]

const router = new VueRouter({routes, mode: 'history'})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')