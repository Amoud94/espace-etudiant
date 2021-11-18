import Vue from 'vue'
import App from './App.vue'
import { router } from './router.js'
import VModal from 'vue-js-modal'
import store from './store.js'
Vue.use(store)
Vue.use(VModal)
Vue.use(router)
// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
