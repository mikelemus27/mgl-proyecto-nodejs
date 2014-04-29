
var fs=require("fs");
var http = require('http');
var url =require("url");
http.createServer(function (req, res) {
 var pathname=url.parse(req.url).pathname;
 if (pathname=="/")
 	 {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write(
  '<!doctype html>\n'+
 '<html lang="en">\n' +
     '<head>\n'+
         '<meta charset="utf-8">\n'+
         '<title>Test web page on node.js</title>\n' +
         '<script type="text/javascript" src="knockout.js"></script>'+
         '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
     '</head>\n'+
     '<body background="C:\Users\iBBY\Pictures\m.jpg">'	 +
	'<p><font color="red">First name: <strong data-bind="text: firstName"></strong></font></p>'+
	'<p><font color="red">Last name: <strong data-bind="text: lastName"></strong></font></p>'+
	
	'<p><font color="blue">First name: <input data-bind="value: firstName" /></font></p>'+
	'<p><font color="blue">Last name: <input data-bind="value: lastName" /></font></p>'+
	
	'<p>Full name: <strong data-bind="text: fullName"></strong></p>'+
	
	'<button data-bind="click: capitalizeLastName">Go caps</button>'+
	'<script type="text/javascript">'+
	'function AppViewModel()'+
	'{'+
	    'this.firstName = ko.observable("");'+
	   ' this.lastName = ko.observable("");'+
	
	    'this.fullName = ko.computed(function() '+
	    	    '{'+
	    	    	    'return this.firstName() + " " + this.lastName();'+    
		    '}, this);'+
	
	    'this.capitalizeLastName = function() '+
	    '{'+
		'var currentVal = this.lastName();'+
		'this.lastName(currentVal.toUpperCase());'+
	    '};'+   
	'}'+
	'ko.applyBindings(new AppViewModel());'+
	'</script>'+

      '</body>'+
 '</html>');
 	 }
 	 else if (pathname=="/knockout.js")
 	 {
 	 	 res.writeHead(200, {'Content-Type': 'text/javascript'});
 	 	 script=fs.readFileSync("knockout.js","utf8");
 	 	 res.write(script);
 	 }


 	
 res.end();
}).listen(8888, 'localhost');//.listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');
