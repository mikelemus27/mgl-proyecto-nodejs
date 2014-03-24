var fs = require("fs");
var http = require('http');
var url = require("url");
http.createServer(function (req, res) {
    
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");

    res.writeHead(200);

    if(pathname == "/") {
       res.writeHead(200, {'Content-Type': 'text/html'});
        html = fs.readFileSync("index.html", "utf8");
        res.write(html);

    } else if (pathname == "saludo.js") {
       
        script = fs.readFileSync("/saludo.js", "utf8");
        res.write(script);
    }

 res.end();
}).listen(process.env.PORT, process.env.IP);//.listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');