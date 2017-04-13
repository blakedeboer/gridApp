var express = require('express')
var app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.get('/getDataForGridOne', function (req, res) {
  res.send('Data from server for grid one')
})

app.get('/getDataForGridTwo', function (req, res) {
  res.send('Data from server for two')
})

app.get('/getDataForGridThree', function (req, res) {
  res.send('Data from server for grid three')
})


app.get('/getDashboardAGridNames', function (req, res) {
  res.send(["One", "Two", "Three"])
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})