var http = require('http');
var const_hash = require('./consistent-hashing-test');

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/data', function(req, res){
  var nodes = req.query.nodes;
  var items = req.query.items;

  var data_values = const_hash(nodes, items);
  res.send(JSON.stringify(data_values));

});

app.listen(8080);

/*http.createServer(function (req, res) {
  var data_values = const_hash(10, 100);
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(data_values));
  res.end();
}).listen(8080);
*/
