<template>
  <div class="dashboard">
  	<h1>{{ msg }}{{ name }}</h1>
  	<p>ID: {{ id }}</p>
  	<p>DATE: {{ date }}</p>	
  	<grid
	    v-for="grid in grids" 
	    :name="grid.name"
	    :id="grid.id"
	    :key="grid.id"> 	
    </grid>
  </div>
</template>

<script>
	import Grid from './Grid'

	function getGridNames (id) {

	}


	export default {
	  name: 'dashboard',
	  data () {
	    return {
	      msg: 'Welcome to ',
	      grids: ["unknown"]
	    }
	  },
	  components: {
	  	grid: Grid
	  },
	 	props: ['id', 'name', 'date'],						//********TO DO - REFACTOR - DO NOT REPEAT CODE BELOW
	 	mounted: function () {
	 		const path = 'http://localhost:3000/getGridNames/' + this.id
	 		console.log("PATH FOR GETTING GRID NAMES", path);
	  	this.$http.get(path, { withCredentials: true })
	  			.then(resp => this.grids = resp.data)
	  			.catch(error => console.log("HERE IS THE ERROR", error))
	  },
	  watch: {
	  	id: function (val, oldVal) {
	  		const path = 'http://localhost:3000/getGridNames/' + this.id
		 		console.log("PATH FOR GETTING GRID NAMES", path);
		  	this.$http.get(path, { withCredentials: true })
		  			.then(resp => this.grids = resp.data)
		  			.catch(error => console.log("HERE IS THE ERROR", error))
	  	}
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

