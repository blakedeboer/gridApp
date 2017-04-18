<template>
  <div class="grid">
    <h1>Welcome to {{ name }}</h1>
    <p>Data: {{ response }}</p>
  </div>
</template>

<script>
	export default {
	  name: 'grid',
	  data () {
	    return {
	      response: 'response goes here'
	    }
	  },
	  props: ['name', 'id'],
	  mounted: function () {
	  	console.log("MOUNTED", this.id)
	  	//*****TO DO - REFACTOR IN DASHBOARD SO GRID ISN"T MOUNTED UNTIL ID's ARE DEFINED
	  	if (this.id == undefined) {
	  		return
	  	}

	  	const path = 'http://localhost:3000/getGridData/' + this.id;
	  	console.log("PATH", path)
	  	this.$http.get(path, { withCredentials: true })
			.then(resp => this.response = resp.data)
			.catch(error => console.log("HERE IS THE ERROR", error))
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid {
	border: 1px solid black;
  margin: 10px;
}
</style>
