import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    redirect: '/home',
    component: HomeView,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/home',
    component: HomeView,
    name: '首页',
    meta: {
      title: '首页',
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
