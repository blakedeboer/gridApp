<template>
  <div class="dashboard-a">
  	<h1>{{ msg }}</h1>
    <p>Date: {{ date }}</p>
    <grid
	    v-for="(gridName, index) in gridNames" 
	    :name="gridName"
	    :key="gridName"> 	
    </grid>
  </div>
</template>

<script>
	import Grid from './Grid'

	export default {
	  name: 'dashboardA',
	  data () {
	    return {
	      msg: 'Welcome to Dashboard A',
	      response: '',
	      gridNames: []
	    }
	  },
	 	props: ['date'],
	  components: {
	  	grid: Grid
	  }, 
	  mounted: function () {
	  	this.$http.get('http://localhost:3000/getDashboardAGridNames', { withCredentials: true })
	  			.then(resp => this.gridNames = resp.data)
	  			.catch(error => console.log("HERE IS THE ERROR", error))
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

