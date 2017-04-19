<template>
  <div class="grid">
    <h1>Welcome to {{ name }}</h1>
    <p>Data: {{ gridData }}</p>
  </div>
</template>

<script>
	import { getRequest } from '../utilities/ajaxFunctions'

	function onGridData (response) {
		this.gridData = response.data
	}

	export default {
	  name: 'grid',
	  data () {
	    return {
	      gridData: 'response goes here'
	    }
	  },
	  props: ['name', 'id'],
	  mounted: function () {
	  	getRequest({
	  		url: 'getGridData/' + this.id,
	  		onResponse: onGridData.bind(this)
	  	})
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
