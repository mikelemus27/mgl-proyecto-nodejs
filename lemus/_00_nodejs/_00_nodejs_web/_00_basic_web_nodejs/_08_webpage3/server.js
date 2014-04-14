var http = require('http'),
    fs = require('fs');
fs.readFile('/var/nodeFiles/www/index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(process.env.PORT, process.env.IP);//.listen(8888, '127.0.0.1');
});