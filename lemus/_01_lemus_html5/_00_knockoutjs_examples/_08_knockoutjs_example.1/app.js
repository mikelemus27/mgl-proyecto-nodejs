/***************************************
 * http://expressjs.com/guide.html
 * http://stackoverflow.com/questions/5710358/how-to-get-post-query-in-express-node-js
 * *************************************************************************************
 * http://blog.greatrexpectations.com/2013/01/23/single-page-applications-using-node-knockout/
 * http://stackoverflow.com/questions/18310394/no-access-control-allow-origin-node-apache-port-issue
 ***************************************/
var express = require('express');

/**************************************************/
var _ = require('underscore');
var app = express();
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://c9.io');

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


/*function allowCrossDomain(req, res, next) {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  //var origin = req.headers.origin;
  var origin = "https://c9.io";
  if (_.contains(app.get('allowed_origins'), origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
}

app.configure(function () {
  app.use(express.logger());
  app.use(express.bodyParser());
  app.use(allowCrossDomain);
});*/
app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

app.post('/form-test.html', function(req, res) {
    res.write("entrando en el post"+req.body.num1);
  //  res.write();
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
console.log("port"+process.env.PORT);
console.log("ip"+process.env.IP);
app.listen(process.env.PORT,process.env.IP); 