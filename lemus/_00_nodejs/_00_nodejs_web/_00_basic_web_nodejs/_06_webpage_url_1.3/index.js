var fs = require("fs");
var http = require('http');
var url = require("url");
console.log("creatin server");
onrequest=function(request,response)
{
	req=request;
	res=response;
//	watch("req");
    debugger;
	console.log ("iniciando server")  ;
    console.log("Request for " + req.url);
    debugger;
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");
    console.log("pathname = "+pathname);
    console.log("iniciando responses");
    res.writeHead(200);

    debugger;
    if(pathname == "/") {
      //  var html="";
       res.writeHead(200, {'Content-Type': 'text/html'});
       // fs.readFile('node.js/ex.html', only en c9.io
              //html = fs.readFileSync("page.html", "utf8");
              //for c9.io
              html = fs.readFileSync('lemus/_00_nodejs/_00_nodejs_web/_06_webpage_url_1.3/page.html', 'utf8');
            /*   fs.realpath('./index', function(err, resolvedPath) {
                   console.log("el path es "+ resolvedPath);
                   
            // pass the resolved path to read asynchronously
            fs.readFile(resolvedPath, function(err, data) { 
                // assign the variable per your use case
                  var html = data;
                 
            })
        });*/
       
    debugger;
    res.write(html);
    } else if (pathname == "/saludo.js") {
       
       res.writeHead(200, {'Content-Type': 'text/javascript'});
       //script = fs.readFileSync("saludo.js", "utf8");
       
       //for c9.io
       script = fs.readFileSync("lemus/_00_nodejs/_00_nodejs_web/_06_webpage_url_1.3/saludo.js", "utf8");
        res.write(script);
    }
    else if (pathname == "/part1.css") {
       
       res.writeHead(200, {'Content-Type': 'text/css'});
       //script = fs.readFileSync("saludo.js", "utf8");
       
       //for c9.io
       script = fs.readFileSync("lemus/_00_nodejs/_00_nodejs_web/_06_webpage_url_1.3/part1.css", "utf8");
        res.write(script);
    }

 res.end();
}
http.createServer(onrequest).listen(process.env.PORT, process.env.IP);//.listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');
