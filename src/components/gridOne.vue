<template>
  <div class="grid-one">
    <h1>{{ msg }}</h1>
    <button v-on:click="getQuote()">GET QUOTE</button>
  </div>
</template>

<script>
	export default {
	  name: 'gridOne',
	  data () {
	    return {
	      msg: 'Welcome to Grid One'
	    }
	  },
	  methods: {
	  	getQuote() {
	  		this.$http.get('http://localhost:3000/get-quote')
	  			.then(response => console.log(response))
	  			.catch(error => console.log(error))
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
