var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

//http.createServer(onRequest).listen(8888);
http.createServer(onRequest).listen(process.env.PORT, process.env.IP);
console.log("Server has started.");