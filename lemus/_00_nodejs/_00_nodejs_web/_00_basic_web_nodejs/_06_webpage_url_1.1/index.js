var http = require('http');
var url = require("url");
http.createServer(function (req, res) 
{
    
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");

    if(pathname == "/") {
       res.writeHead(200, {'Content-Type': 'text/html'});
     res.write(
     '<!doctype html>\n'+
     '<html lang="en">\n' +
         '<head>\n'+
             '<meta charset="utf-8">\n<title>Test web page on node.js</title>\n' +
             '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
             '<script type="text/javascript" src="saludo.js"> </script>\n'+
         '</head>\n'+
         '<body>\n'+
         '<h1>Euro 2012 teams</h1>\n' +
             '<div id="content">\n'+
                 '<p>The teams in Group D for Euro 2012 are:</p>\n'+
                 '<ul>\n'+
                     '<li>England</li>\n'+
                     '<li>France</li>\n'+
                     '<li>Sweden</li>\n'+
                     '<li>Ukraine</li>\n\n'+
                 '</ul>\n'+
             '</div>\n'+
             '<button onclick="saludar()"  >  saluda</button>\n'+
             '</div>\n'+
             '<div>\n'+
            '\n'+
            '<script type="text/javascript" > '+
                '(function()'+
                '{saludar()})();'+
            '</script>\n'+
         '</body>\n'+
     '</html>');
        } else if (pathname == "/saludo.js") {
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write("saludar = function(){alert('hi mike');}");
        }

 res.end();
}).listen(process.env.PORT, process.env.IP);//.listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');