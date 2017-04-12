<template>
  <div class="dashboard-a">
    <h1>{{ date }}</h1>
    <gridOne></gridOne>
    <gridTwo></gridTwo>
  </div>
</template>

<script>
	import GridOne from './GridOne'
	import GridTwo from './GridTwo'
	
	export default {
	  name: 'dashboardA',
	  data () {
	    return {
	      msg: 'Welcome to Dashboard A'
	    }
	  },
	 	props: ['date'],
	  components: {
	  	gridOne: GridOne,
	  	gridTwo: GridTwo
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

