import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/element-variables.scss'

import '@/assets/css/common.css'
// 关闭生产提示
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)

Vue.use(store)
new Vue({
  router,

  render: h => h(App),
  beforeCreate () {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
