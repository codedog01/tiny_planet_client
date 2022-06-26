import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import LoginView from '../views/LoginView.vue'
import TimeLineView from '../views/TimeLineView.vue'
import TagsView from '../views/TagsView.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    redirect: '/home',
    component: HomeView,
    meta: {
      requireAuth: true
    }
  }, {
    path: '/login',
    component: LoginView,
    name: '登录',
    meta: {
      title: '登录',
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
  }, {
    path: '/categories',
    component: CategoriesView,
    name: '分类',
    meta: {
      title: '分类',
      requireAuth: true
    }
  }, {
    path: '/tags',
    component: TagsView,
    name: '标签',
    meta: {
      title: '标签',
      requireAuth: true
    }
  }, {
    path: '/timeline',
    component: TimeLineView,
    name: '归档',
    meta: {
      title: '归档',
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
