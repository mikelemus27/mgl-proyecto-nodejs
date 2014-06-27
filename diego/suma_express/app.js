var express = require('express');
var app = express();
var ar = require('./archivo');
app.use(express.json());
app.use(express.urlencoded());
app.use(function (req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/form-test.html',function(req, res){
	var num1="";
	var num2="";
	var result="";
	var num3="";
	var objToJson=0;
	var json="";
	res.writeHead(200, {'content-type' : 'application/json'});
	console.log("in post");
	num1 = req.body.num1;
	num2 = req.body.num2;
	num1 = num1.toString();
	num2 = num2.toString();
	result=parseInt(num1)+parseInt(num2);
	objToJson={res:result};
	json=JSON.stringify(objToJson);
	res.write(json);
	res.end();
});


app.listen(8888,"localhost");
console.log('listening');