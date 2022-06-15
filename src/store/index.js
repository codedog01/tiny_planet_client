import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0,
    token: ''
  },

  mutations: {
    increment (state) {
      state.count++
    },
    setUserToken (state) {
      state.token = 'code'
    }

  },
  getters: {
    getToken: state => state.token
  }

})
