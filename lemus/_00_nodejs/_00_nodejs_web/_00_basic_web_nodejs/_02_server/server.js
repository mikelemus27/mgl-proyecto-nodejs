var http = require("http");

function start() {
  function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("que pex");
    response.end();
  }

  http.createServer(onRequest).listen(process.env.PORT, process.env.IP);//listen(8888);
  console.log("Server has started.");
}

exports.start = start;