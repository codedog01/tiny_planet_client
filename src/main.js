import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/element-variables.scss'
import tagCloud from 'v-tag-cloud'

import '@/assets/css/common.css'
// 注册公共页面头
import WebHeader from '@/components/WebHeader'
// 动画
import VAnimateCss from 'v-animate-css'

Vue.use(VAnimateCss)
Vue.component('WebHeader', WebHeader)
// 关闭生产提示
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(store)
Vue.use(tagCloud)
new Vue({
  router,

  render: h => h(App),
  beforeCreate () {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
