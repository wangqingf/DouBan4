import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/scripts/components/Index'
import Board from '@/scripts/components/Board'
import Search from '@/scripts/components/Search'
import User from '@/scripts/components/User'
import Registor from '@/scripts/components/Registor'
import Login from '@/scripts/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect: 'board',
      children: [
        {
          path: 'board',
          component: Board
        },
        {
          path: 'search',
          component: Search
        },
        {
        	 path: 'user',
          component: User
        }
      ]
    },
    {
      path: '/registor',
      component: Registor
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
