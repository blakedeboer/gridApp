var express = require('express')
var app = express()

const dashboards = [
	{
		id: 0,
		name: 'Dashboard A',
		grids: [0, 1, 2]
	}, {
		id: 1,
		name: 'Dashboard B',
		grids: [3, 4, 5]
	}, {
		id: 2,
		name: 'Dashboard C',
		grids: [1, 3, 5]
	}
]

const grids = [
	{
		id: 0, 
		name: 'Grid Zero',
		data: 'grid data for 0'
	}, {
		id: 1, 
		name: 'Grid One',
		data: 'grid data for 1'
	}, {
		id: 2, 
		name: 'Grid Two',
		data: 'grid data for 2'
	}, {
		id: 3, 
		name: 'Grid Three',
		data: 'grid data for 3'
	}, {
		id: 4, 
		name: 'Grid Four',
		data: 'grid data for 4'
	}, {
		id: 5, 
		name: 'Grid Five',
		data: 'grid data for 5'
	}, {
		id: 6, 
		name: 'Grid Six',
		data: 'grid data for 6'
	},
]

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


app.get('/getDashboardNames', function (req, res) {
  res.send(dashboards.map(db => { 
  	return { id: db.id, name: db.name }	 
  }))
})

app.get('/getGridNames/:dashboardId', function (req, res) {
	const id = parseInt(req.params.dashboardId, 10);
	const dashboard = dashboards.find(dashboard => dashboard.id === id );
	const matchingGrids = dashboard.grids.map((gridId) => {
		return grids[gridId]
	})
  res.send(matchingGrids)
})

app.get('/getGridData/:id', function (req, res) {
	const id = parseInt(req.params.id, 10);
	const grid = grids.find(grid => grid.id === id );

  res.send(grid.data)
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

