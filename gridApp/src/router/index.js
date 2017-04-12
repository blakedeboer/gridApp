import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import DashboardA from '@/components/DashboardA'
import DashboardB from '@/components/DashboardB'

Vue.use(Router)

function dynamicFunc (route) {
  console.log("ROUTE", route);
  return {
    date: route.params.date
  }
}

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/dashboardA',
    	name: 'dashboardA',
    	component: DashboardA, 
      props: dynamicFunc
    }, {
    	path: '/dashboardB',
    	name: 'dashboardB',
    	component: DashboardB
    }
  ]
})
