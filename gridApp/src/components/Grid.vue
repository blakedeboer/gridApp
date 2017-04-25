<template>
  <div class="grid">
    <h1>Welcome to {{ name }}</h1>
<!--     <p>Data: {{ gridData }}</p> -->
    <div :class="chartClass">
    </div>
  </div>
</template>

<script>
	import { getRequest } from '../utilities/ajaxFunctions'
	import * as d3 from 'd3'

	function onGridData (response) {
		this.gridData = response.data
	}

	export default {
	  name: 'grid',
	  data () {
	    return {
	      gridData: 'response goes here',
	      chartClass: 'chart'
	    }
	  },
	  props: ['name', 'id'],
	  methods: {
	  	setChartClass(id) {
	  		this.chartClass = "chart" + id
	  	},
	  	runDeeThree() {
	  		var data = [4, 8, 15, 16, 23, 42]
	  		const deeThree = d3
	  		//console.log("BIG CHANGE")
	  		//console.log("DR", d3)
				// var x = d3.scale.linear()
				//     .domain([0, d3.max(data)])
				//     .range([0, 420])
				const chartNameQuery = "." + this.chartClass
		  	let chart = d3.selectAll(chartNameQuery);
		  	//console.log('chart', chart)
				chart.selectAll("div")
				    .data(this.gridData)
				  .enter().append("div")
				    .style("width", function(d) { return d * 10 + "px"; })
				    .text(function(d) { return d; });
		  	}
		  },
		  mounted: function () {
		  	getRequest({
		  		url: 'getGridData/' + this.id,
		  		onResponse: onGridData.bind(this)
		  	})
		  	
	  }, 
		updated: function () {
			console.log(this.chartClass, this.name, this.id)
			//debugger;
			this.setChartClass(this.id)
			this.runDeeThree()
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.grid {
	border: 1px solid black;
  margin: 10px;
}

div[class^="chart"] div {
  font: 10px sans-serif;
  background-color: steelblue;
  text-align: right;
  padding: 3px;
  margin: 1px;
  color: white;
}

</style>
