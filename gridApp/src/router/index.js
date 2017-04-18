import Vue from 'vue'
import Router from 'vue-router'
import DashboardDefault from '@/components/DashboardDefault'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

function dynamicFunc (route) {
  return {
    date: route.params.date
  }
}

function dynamicDashboardRoute (route) {
  return {
    id: route.params.id,
    name: route.params.name,
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
      path: '/dashboard/:id/:name/:date',
      name: 'dashboard',
      component: Dashboard,
      props: dynamicDashboardRoute
    }
  ]
})
