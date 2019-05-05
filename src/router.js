import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login/login'
Vue.use(Router)

//不需要登录权限的路由
export const constantRouterMap = [{
  path: '/login',
  name: 'login',
  component: login
}, {
  path: '/vx',
  name: 'vuex',
  component: () => import('./views/vx/test'),
  meta: {
    requireAuth: true
  }
}]
//根据登录权限动态加载的路由表
export const asyncRouterMap = [{
    path: '/',
    name: 'Home',
    redirect: '/home',
  }, {
    path: '/home',
    name: '首页',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "home" */ '@/views/home/home'),
    meta: {
      requireAuth: true,
      role: ['admin', 'normal']
    }
  },
  {
    path: '/cart',
    name: '购物车',
    component: () => import( /* webpackChunkName: "cart" */ '@/views/cart/cart'),
    meta: {
      title: '',
      requireAuth: true,
      role: ['admin', 'normal']
    }
  },
  {
    path: '/todolist',
    name: '代办事项',
    component: () => import('./views/todo/todolist'),
    meta: {
      requireAuth: true,
      role: ['admin']
    }
  },
  {
    path: '/nav',
    name: '路由导航',
    component: () => import('./views/routeNav/navigation'),
    meta: {
      requireAuth: true,
      role: ['admin', 'normal']
    }
  },
  {
    path: '/user/:id',
    name: '用户',
    component: () => import('./views/user/user'),
    props: {
      name: 'feng'
    },
    meta: {
      requireAuth: true,
      role: ['admin', 'normal']
    }
  },
]
export default new Router({
  routes: constantRouterMap,
  //滚动行为，
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // return {x:0,y:0}
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})