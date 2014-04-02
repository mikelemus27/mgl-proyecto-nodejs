var http = require('http');
var utils=require('util');
var qs = require('querystring');
http.createServer(function (req, res) {
		var body='';
			
		var POST='';
		res.writeHead(200, {'Content-Type': 'text/html'});
		req.on('data', function (data){ body+=data; });
		req.on('end',function()
			{
 	 	 
				if (req.method=='POST')
				{
			 
					 console.log(body);
					 POST=qs.parse(body);
					 post=JSON.stringify(POST);
					 post=JSON.parse(post);
					 res.write('<html>');
					 res.write('<head>');
					 res.write('<title>');
					 res.write('</title>');
					 res.write('</head>');
					 res.write('<body>');
					 res.write('Suma de dos numeros<br>');
					 res.write(utils.inspect(POST));
					 
					 num1=post.num_1.toString();
					 num2=post.num2.toString();
					 res.write('<br>');
					 res.write(num1)
					 res.write('+');
					 res.write(num2);
					 res.write('=');
					 result=parseInt(num1)+parseInt(num2);
					 res.write(result.toString());
					 res.write('</body>');
					 res.write('</html>');
					 res.end();
			 
				}
		 
			});
 	 
 
}).listen(8888, 'localhost');//.listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');
