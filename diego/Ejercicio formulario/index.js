var http = require('http');
var utils=require('util');
var query = require('querystring');
http.createServer(function (req, res) {
		var body='';
		var POST='';
		res.writeHead(200, {'Content-Type': 'text/html'});
		req.on('data', function (data){ body+=data; });
		req.on('end',function()
			{
				if (req.method=='POST')
				{
					 POST=query.parse(body);
					 post=JSON.stringify(POST);
					 post=JSON.parse(post);
					 num1=post.numero1.toString();
					 num2=post.numero2.toString();
					 result=parseInt(num1)+parseInt(num2);
					 res.write(result.toString());
					 res.end();
				}
		 
			});
 	 
 
}).listen(3000, '127.0.0.1');
console.log('Servidor funcionando.');