import Vue from 'vue'
import Router from 'vue-router'
import DashboardDefault from '@/components/DashboardDefault'
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
      name: 'DashboardDefault',
      component: DashboardDefault
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
