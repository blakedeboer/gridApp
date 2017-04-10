import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import DashboardA from '@/components/DashboardA'
import DashboardB from '@/components/DashboardB'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/dashboardA',
    	name: 'dashboardA',
    	component: DashboardA
    }, {
    	path: '/dashboardB',
    	name: 'dashboardB',
    	component: DashboardB
    }
  ]
})
