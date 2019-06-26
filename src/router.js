import Vue from 'vue'
import Router from 'vue-router'
import ShoppingCart from './views/ShoppingCart.vue'
import Todo from './views/Todo.vue'
import notFound from "@/views/notFound";
import News from '@/views/News'
import Bitcoin from '@/views/Bitcoin'
import ECharts from '@/views/ECharts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: {name: 'echarts'}
    },
    {
      path:'/echarts',
      name:'echarts',
      component:ECharts
    },
    {
      path: '/shopping_cart',
      name: 'shoppingCart',
      component: ShoppingCart

    },
    {
      path: '/bitcoin',
      name: 'bitcoin',
      component: Bitcoin
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '*',
      name: '404',
      component: notFound
    }
  ]
})
