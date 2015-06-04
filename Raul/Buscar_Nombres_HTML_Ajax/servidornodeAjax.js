     var http = require("http");
	 //var querystring= require("querystring");
     var url= require("url");
	 var fs = require('fs');
	 var archivo = 'ajaxhtml.html';
     var a = [30];
	 
  var server = http.createServer(function(req, res){
     
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
	 
	 console.log("[200] " + req.method + " Dato '" + req.url +"'");
     console.log("request recieved");
	   
	 var peticion = req.url;//recoge el dato enviado
	
  if (peticion=='/') {
		
      console.log('Leer y Mostrar HTML');
	  res.writeHead(200, {'Content-Type': 'text/html'});
      html  = fs.readFileSync(archivo,'utf8');
      res.write(html);
	  res.end();
	}else{
	  
	  if(req.method == 'GET'){
         
		 //console.log('Buscar ' + peticion);
		 var letras=peticion.substring(3, peticion.length);//elimina /q=  de la url
         //console.log("Letra:  " + letras);
         letras = letras.substring(0,1).toUpperCase()+letras.substring(1, letras.length).toLowerCase();//toUppercase asigna la primera letra a mayuscula del dato de entrada
	     var cont =0;                                                                    //toLowerCase convierte a minusculas las letras siguientes de la primera
				
		   for(var i=0;i<=29;i++){
				
			// console.log(' numero de envios:  ', peticion.length-3);
		    //console.log('letras: '+ letras);
		      var nombre = a[i].toString();//toma el nombre del array en la posicion i
			  //console.log('nombre letra  '+ nombre);
              nombre = nombre.substring(0, peticion.length-3);//revisa letra por letra de los datos de entrada, restandole (-3) "/q="
				
				  if(letras==nombre){
				     cont++;
				     res.write('<br/>'+a[i]);
                   }
			}//fin del for
			 console.log('sugerencias ', cont);
			 res.write('<br/>'+cont+' Suggestions');
      
	  }else{
           console.log("[405] " + req.method + " to " + req.url);
           res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
           res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
  
  }
  }
  	res.end();
});
console.log("listen:http://127.0.0.1:3000");
server.listen(process.env.PORT, process.env.IP);