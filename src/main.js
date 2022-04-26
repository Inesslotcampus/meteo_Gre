import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: require('./components/CityList.vue')

  },
{
  path: '/city/:id',
  component:require('./components/City.vue')
}]
})


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount(require('./App.vue'))


