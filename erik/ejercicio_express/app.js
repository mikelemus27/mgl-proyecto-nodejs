var express=require('express');
var connect=require('connect');
var app=express();
var http = require('http');
var utils=require('util');
var qs = require('querystring');
app.use(connect.json());
app.use(connect.urlencoded());
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.post('/x.html', function(req,res)
			{
				var objJSON="";
				var json="";
				var num1=req.body.Num1;
				var num2=req.body.Num2;
				/*num1=num1.toString();
				num2=num2.toString();*/
				var result=parseInt(num1)+parseInt(num2);
				objJSON={number1:num1, number2: num2, Res:result};
				json=JSON.stringify(objJSON);
				res.write(json);
				res.end();
				
				
			});
app.listen(8888, 'localhost');
console.log('Server running at http://127.0.0.1:8888');
