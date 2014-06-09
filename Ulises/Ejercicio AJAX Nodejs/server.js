var http = require('http');
var querystring= require("querystring");
var url = require ("url");
var fs= require ("fs");
var a= [30];

a[0]="Anna";
a[1]="Brittany";
a[2]="Cinderella";
a[3]="Diana";
a[4]="Eva";
a[5]="Fiona";
a[6]="Gunda";
a[7]="Hege";
a[8]="Inga";
a[9]="Johanna";
a[10]="Kitty";
a[11]="Linda";
a[12]="Nina";
a[13]="Ophelia";
a[14]="Petunia";
a[15]="Amanda";
a[16]="Raquel";
a[17]="Cindy";
a[18]="Doris";
a[19]="Eve";
a[20]="Evita";
a[21]="Sunniva";
a[22]="Tove";
a[23]="Unni";
a[24]="Violet";
a[25]="Liza";
a[26]="Elizabeth";
a[27]="Ellen";
a[28]="Wenche";
a[29]="Vicky";

var server = http.createServer(function (req, res) {

var ruta = url.parse(req.url).pathname;

     if(ruta == "/"){

		res.writeHead(200, {'Content-Type': 'text/html'});
		html  = fs.readFileSync('home.html','utf8');
		res.write(html);

   }
   
   console.log("Request: " + req.url);

 if (req.method === 'GET'){
     if(ruta.length>3){
     var letras=ruta.substring(3,ruta.length);
		for(var i = 0; i < 29;i++){
			var nombre=a[i].substring(0,ruta.length-3);
				if(letras==nombre.toLowerCase()){
				res.write('<br/>'+a[i]);
	   } 
	 } 
   }
 
 }

	   
res.end(); 
});

server.listen(8888,'127.0.0.1');//.listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');