var express = require('express');
var app = express();
app.get('/', function(req, res){
  res.send('Hello World');
});
app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});
var server = app.listen(8888,"localhost");
//var server = app.listen(8888,"localhost", function() {
//   console.log('Listening on port %d', server.address().port);
//});