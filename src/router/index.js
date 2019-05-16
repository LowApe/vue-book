import Vue from 'vue'
import Router from 'vue-router'
// 引入四个页面
import Home from '@/components/Home.vue'
import Explorer from '@/components/Explorer.vue'
import Cart from '@/components/Cart.vue'
import Me from '@/components/Me.vue'
import BookDetails from '@/components/BookDetails.vue'
import Main from '@/components/Main.vue'
// 使用路由实例插件
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes: [
    {
      name: 'Main',
      path: '/',
      component: Main,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'explorer',
          name: 'Explorer',
          component: Explorer
        },
        {
          path: 'cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: 'me',
          name: 'Me',
          component: Me
        }
      ]
    },
    {
      name: 'BookDetails',
      path: '/books/:id',
      component: BookDetails
    }
  ]
})
