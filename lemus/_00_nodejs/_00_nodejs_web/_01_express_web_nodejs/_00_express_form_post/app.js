/***************************************
 * http://expressjs.com/guide.html
 * http://stackoverflow.com/questions/5710358/how-to-get-post-query-in-express-node-js
 ***************************************/
var express = require('express');

/**************************************************/
var app = express();
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

app.post('/form-test.html', function(req, res) {
    var num1 = req.body.num1;
    var    num2 = req.body.num2;
  num1=  num1.toString();
  num2=  num2.toString();
  var result=parseInt(num1)+parseInt(num2);
 res.write ("el num1 es : "+num1+" </br> el num2 es : "+num2+"</br>"+"lasuma es : "+result);
  res.end ();
});
/*var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});*/
app.listen(process.env.PORT,process.env.IP); 