var http = require("http");
var querystring= require("querystring");
var utils= require("util");
var port = 3000;
var serverUrl = "localhost";

var server = http.createServer(function(req, res) 
{

  console.log("Request: " + req.url);
  
  var now = new Date();
  var html = "<p>Hello World, the time is " + now + ".</p>";
  if (req.method == 'POST') {
    console.log("[200] " + req.method + " to " + req.url);
    var fullBody = '';
    
    req.on('data', function(chunk) {
      // append the current chunk of data to the fullBody variable
      fullBody += chunk.toString();
    });
    
    req.on('end', function() {
    
      // request ended -> do something with the data
      res.writeHead(200, "OK", {'Content-Type': 'text/html'});
      
      // parse the received body data
      var decodedBody = querystring.parse(fullBody);

      //var post=JSON.eval(utils.inspect(decodedBody));
      var post= JSON.stringify(decodedBody);
          post=JSON.parse(post) ;
      // output the decoded data to the HTTP response          
      res.write('<html><head><title>Post data</title></head><body><pre>');
      //res.write(utils.inspect(decodedBody));
      res.write("Realizando la suma...");
	  
      //console.log(post.data);
      //res.write(post.data.toString());
         res.write("</br>");
         txt1= post.num1.toString();
          txt2= post.num2.toString();
          result=parseInt(txt1)+parseInt(txt2);
      res.write(txt1);
      // res.write("</br>");
      res.write("+");
       // res.write("</br>");
       res.write(txt2);
           // res.write("</br>");
      res.write("=");
       // res.write("</br>");
       // res.write("</br>");
        res.write(result.toString());
      res.write('</pre></body></html>');
      
      res.end();
    });
    
  } else {
    console.log("[405] " + req.method + " to " + req.url);
    res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
    res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
  }
 // res.end(html);

});

console.log("Listening at " + serverUrl + ":" + port);
//server.listen(process.env.PORT, process.env.IP);//.listen(8888, '127.0.0.1');
server.listen(3000,'127.0.0.1');