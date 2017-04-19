<template>
  <div id="navigation">
      <router-link
        v-for="dashboard in dashboards" 
        :key="dashboard.id"
        :to="{ name: 'dashboard', params: { date: selectedDate, id: dashboard.id, name: dashboard.name }}"
        >{{ dashboard.name }}
      </router-link> 
      <select v-model="selectedDate">
        <option v-for="date in dates" v-bind:value="date.value">{{ date. text }}</option>
      </select> 
  </div>
</template>

<script>
  import { getRequest } from '../utilities/ajaxFunctions'

  const defaultDates = [{ text: 'April 10, 2017', value: '1'}]

  function onDashboardNames (response) {
    this.dashboards = response.data
  }

  function onDates (response) {
    this.dates = response.data
  }

  export default {
    name: 'navigation',
    data () {
      return {
        dashboards: [],
        selectedDate: defaultDates[0].value,
        dates: defaultDates
      }
    },
    mounted: function () {
      getRequest({
        url: 'getDashboardNames',
        onResponse: onDashboardNames.bind(this)
      })

      getRequest({
        url: 'getDates',
        onResponse: onDates.bind(this)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navigation {
  padding-bottom: 30px;
  border-bottom: 1px solid black;
}

a {
  color: #42b983;
  padding: 5px;
  border: 1px solid transparent;
  border-radius: 5px;
  text-decoration: none;
  margin-left: 5px;
  margin-right: 5px;
}



.router-link-active {
  border-color: #42b983;
}
</style>

