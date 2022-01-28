/* import Vue from 'vue'
import App from './App.vue'
import store from '../vuex/store'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
 */
import Vue from 'vue'
import App from './App.vue'
import store from '../vuex/store'
import  router from '../src/router/router'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
