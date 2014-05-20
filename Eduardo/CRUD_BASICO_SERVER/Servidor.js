var http = require("http");
var querystring= require("querystring");
var utils= require("util");
var port = 3000;
var serverUrl = "localhost";
var fs= require ("fs");

var server = http.createServer(function(req, res) 
{

  console.log("Request: " + req.url);
  
  if (req.method == 'POST') {
    console.log("[200] " + req.method + " to " + req.url);
    var fullBody = '';
    
    req.on('data', function(chunk) {
      // append the current chunk of data to the fullBody variable
      fullBody += chunk.toString();
    });
    
    req.on('end', function() {
    
      // request ended -> do something with the data
      res.writeHead(200, "OK", {'Content-Type': 'text/html'});
      
      // parse the received body data
      var decodedBody = querystring.parse(fullBody);

      //var post=JSON.eval(utils.inspect(decodedBody));
      var post= JSON.stringify(decodedBody);
          post=JSON.parse(post) ;
		  
		  
	
	var mymodule = mymodule || {}; 


;(function(){
	var Temario = function(tema,subtemas,unidades,OG,bibliografia){
		this._tema= tema;
		this._subtemas= subtemas;
		this._unidades= unidades;
		this._OG= OG;
		this._bibliografia= bibliografia;
	}
	
	//El objeto del metodo resive un dato
	Temario.prototype.setTema = function(tema){
		if (typeof tema === "undefined"){
			return this._tema;
		}else{
			this._tema = tema;
		}
	}

   //En esta funcion regresa el valor que se mando
	Temario.prototype.getTema = function(){
		return this._tema;
	}


	Temario.prototype.setSubtemas = function(subtemas){
		if (typeof subtemas === "undefined"){
			return this._subtemas;
		}else{
			this._subtemas = subtemas;
		}
	}

   //En esta funcion regresa el valor que se mando
	Temario.prototype.getSubtemas = function(){
		return this._subtemas;
	}

	Temario.prototype.setUnidades = function(unidades){
		if (typeof unidades === "undefined"){
			return this._unidades;
		}else{
			this._unidades = unidades;
		}

	}

   //En esta funcion regresa el valor que se mando
	Temario.prototype.getUnidades = function(){
		return this._unidades;
	}

	Temario.prototype.setObjG = function(OG){
		if (typeof OG === "undefined"){
			return this._OG;
		}else{
			this._OG = OG;
		}
	}

   //En esta funcion regresa el valor que se mando
	Temario.prototype.getObjG = function(){
		return this._OG;
	}

	Temario.prototype.setBibliografia = function(bibliografia){
		if (typeof bibliografia === "undefined"){
			return this._bibliografia;
		}else{
			this._bibliografia = bibliografia;
		}

	}
   //En esta funcion regresa el valor que se mando
	Temario.prototype.getBibliografia = function(){
		return this._bibliografia;
	}
	
	
	mymodule.Temario = Temario;
 })();	
 
;(function(){

	var temario1 = new mymodule.Temario();
	
	function Vista(){
	
	}
	
	Vista.prototype.Mostrar = function (){
		  res.write('<html><head><title>Pagina Post</title></head><body><pre>');
			    res.write("Entidad Temarios");
			   res.write("</br>");
			   res.write("</br>");
			   res.write("Temario")	
			   res.write("Tema: "+temario1.getTema());
			   res.write("<br>");
			   res.write("Subtemas: "+temario1.getSubtemas());
			   res.write("<br>");
			   res.write("Unidades: "+temario1.getUnidades());
			   res.write("<br>");
			   res.write("Objetivo general: "+temario1.getObjG());
			   res.write("<br>");
			   res.write("Bibliografia: "+temario1.getBibliografia());
			   res.write("</body>");
			   res.write("</html>");
	
	}
	
	Vista.prototype.Pedirdatos = function(tema,subtemas,unidades,OG, bibliografia){
		
		temario1.setTema(tema);
		temario1.setSubtemas(subtemas);
		temario1.setUnidades(unidades);
		temario1.setObjG(OG);
		temario1.setBibliografia(bibliografia);
	
	}
	
	Vista.prototype.Guardar = function(){
		var valor=temario1.getTema() + ',' + temario1.getSubtemas() + ',' + temario1.getUnidades() + ',' + temario1.getObjG() + ',' + temario1.getBibliografia();
		fs.writeFile('./archivo.csv', valor,function(err) {
			if(err) throw err;
			console.log('Se guardaron con exito')
		});
	}
	
	//Toma los valores
	
	inicio=function(Val1,val2,val3,val4,val5){
		var objguardar= new Vista();
		var objvis= new Vista();
		
		objvis.Pedirdatos(Val1,val2,val3,val4,val5);
		
		objguardar.Guardar();
		objvis.Mostrar();
	}
	
	 inicio(post.txtTema.toString(),post.txtSubtemas.toString(),post.txtUnidades.toString(),post.txtOG.toString(),post.txtBibliografia.toString());

	mymodule.Vista = Vista;

    })();
	
	
	
	});
} else {
    console.log("[405] " + req.method + " to " + req.url);
    res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
    res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
  }	  

}).listen(3000,'127.0.0.1');//.listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');		 
