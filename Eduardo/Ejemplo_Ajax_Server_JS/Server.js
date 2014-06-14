var http = require('http');
var url = require ("url");
var fs= require ("fs");
var array= [30];

array[0]="Anna";
array[1]="Brittany";
array[2]="Cinderella";
array[3]="Diana";
array[4]="Eva";
array[5]="Fiona";
array[6]="Gunda";
array[7]="Hege";
array[8]="Inga";
array[9]="Johanna";
array[10]="Kitty";
array[11]="Linda";
array[12]="Nina";
array[13]="Ophelia";
array[14]="Petunia";
array[15]="Amanda";
array[16]="Raquel";
array[17]="Cindy";
array[18]="Doris";
array[19]="Eve";
array[20]="Evita";
array[21]="Sunniva";
array[22]="Tove";
array[23]="Unni";
array[24]="Violet";
array[25]="Liza";
array[26]="Elizabeth";
array[27]="Ellen";
array[28]="Wenche";
array[29]="Vicky";



http.createServer(function (req, res) {

var pathname = url.parse(req.url).pathname;


if(pathname == "/"){

res.writeHead(200, {'Content-Type': 'text/html'});
html  = fs.readFileSync('index.html','utf8');
res.write(html);

}

else if (req.method === 'GET'){
   if(pathname.length>3){
    var letras=pathname.substring(3,pathname.length);
	 for(var i = 0; i < 29;i++){
	   var nombre=array[i].substring(0,pathname.length-3);
	   if(letras==nombre.toLowerCase()){
	   res.write('<br/>'+array[i]);
	   } 
	 } 
   }
 
   
}
res.end(); 
 
}).listen(8888,'127.0.0.1');//.listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');