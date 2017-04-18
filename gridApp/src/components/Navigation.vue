<template>
  <div id="navigation">
<!--       <router-link :to="{ name: dashNameA, params: { date: selectedDate }}">Dashboard A</router-link>
      <router-link :to="{ name: dashName, params: { id: dashId, date: selectedDate }}">{{ dashName }}</router-link>    -->
      <router-link
        v-for="dashboard in dashboards" 
        :key="dashboard.id"
        :to="{ name: 'dashboard', params: { date: selectedDate, id: dashboard.id, name: dashboard.name }}"
        >{{ dashboard.name }}
      </router-link> 
      <select v-model="selectedDate">
        <option v-for="option in options" v-bind:value="option.value">{{ option. text }}</option>
      </select> 
  </div>
</template>

<script>

function getDashboardObjects (namesArray) {
  const dashes = namesArray.map(function (dashboardName) {
    const id = dashboardName.split(" ")[2];
    return {
      name: dashboardName,
      path: "Dashboard/:" + id
    }
  })
  return dashes;
}

export default {
  name: 'navigation',
  data () {
    return {
      msg: 'Welcome to the Navigation',
      selectedDate: '1',
      dashNameA: 'dashboardA',
      dashboardNames: [],
      dashboards: [],
      dashName: 'dashboard',
      dashId: 'B',
      options: [
        { text: 'April 10, 2017', value: '1'},
        { text: 'April 11, 2017', value: '2'}, 
        { text: 'April 12, 2017', value: '3'}
      ]
    }
  },
  mounted: function () {
    this.$http.get('http://localhost:3000/getDashboardNames', { withCredentials: true })
        .then((resp) => {  
          this.dashboards = resp.data;
        }).catch(error => console.log("HERE IS THE ERROR", error))
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
}

.router-link-active {
  border-color: #42b983;
}
</style>

