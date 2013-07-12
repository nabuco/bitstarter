var express = require('express');
var fs= requre('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var indexHtml=fs.readFileSync('index.html');
  var string=indexHtml.toString('utf-8');
  response.send(string);  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

//response.send(fs.readFileSync("index.html").toString());

