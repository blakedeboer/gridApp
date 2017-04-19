<template>
  <div class="dashboard">
  	<h1>{{ msg }}{{ name }}</h1>
  	<p>ID: {{ id }}</p>
  	<p>DATE: {{ date }}</p>	
  	<grid v-for="grid in grids" :name="grid.name" :id="grid.id" :key="grid.id"></grid>
  </div>
</template>

<script>
	import { getRequest } from '../utilities/ajaxFunctions'
	import Grid from './Grid'

	function onGridNames (response) {
		this.grids = response.data
	}

	function getGridNames () {
		getRequest({
 			url: 'getGridNames/' + this.id,
 			onResponse: onGridNames.bind(this)
 		})
	}

	export default {
	  name: 'dashboard',
	  data () {
	    return {
	      msg: 'Welcome to ',
	      grids: []
	    }
	  },
	  components: {
	  	grid: Grid
	  },
	 	props: ['id', 'name', 'date'],						
	 	mounted: getGridNames,
	  watch: {
	  	id: getGridNames
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

