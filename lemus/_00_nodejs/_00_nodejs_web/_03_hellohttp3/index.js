var http = require('http');
    
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Switch On The Code Rocks My Socks Off!"); 
}).listen(process.env.PORT, process.env.IP);//.listen(8888, '127.0.0.1');