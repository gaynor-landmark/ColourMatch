var express = require('express')
var path = require('path')

var app = express()

app.use(express.static(path.join(__dirname, '../public')))

app.set('port', 3001)
var server = app.listen(app.get('port'), function(req, res){
  console.log('listening on 3001')
} )

app.get('/', function(req, res){
  res.send('ColourMatch')
})
