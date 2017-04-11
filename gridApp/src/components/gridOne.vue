<template>
  <div class="grid-one">
    <h1>{{ msg }}</h1>
    <p>{{ response }}</p>
  </div>
</template>

<script>
	export default {
	  name: 'gridOne',
	  data () {
	    return {
	      msg: 'Welcome to Grid One',
	      response: 'response goes here'
	    }
	  },
	  mounted: function () {
	  	this.$http.get('http://localhost:3000/getquote', { withCredentials: true })
	  			.then(resp => this.response = resp.data)
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
