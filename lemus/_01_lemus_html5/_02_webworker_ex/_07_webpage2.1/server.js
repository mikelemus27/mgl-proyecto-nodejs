var http = require('http'),
    fs = require('fs');
    var url = require("url");

http.createServer(function(req, res) {
     var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");
  if(req.url == "/" || req.url == "/index.html") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(fs.readFileSync('webworker.html'));
  } else if(req.url == "/part1.css") {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(fs.readFileSync('part1.css'));
  } else if(req.url == "/pi.js") {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(fs.readFileSync('pi.js'));
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end("Page Could Not Be Found");
  }
}).listen(process.env.PORT, process.env.IP);//.listen(8888, '127.0.0.1');s