// try to always scope your API, Object Types, properties in a namespace   
var mymodule = mymodule || {}; 

;(function(){

	//En la siguiente funcion o "constructor"que se llama temario colocamos todos los atributos que van a resivir un valor
	function Temario(tema,subtemas,unidades,OG,bibliografia){
		this._tema = tema;
		this._subtemas = subtemas;
		this._unidades = unidades;
		this._OG = OG;
		this._bibliografia = bibliografia


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




//;(function(){

	var temario1 = new mymodule.Temario();
	

//------------Clase Vista-----------------------------------------------
	function Vista(){


	}



Vista.prototype.Pedirdatos = function(Tema,Subtemas,Unidades,ObjG,Bibliografia){

var objFile = new claseArchivo();

pro.ask("Tema", /.+/, function(tema){
	temario1.setTema(tema);
		pro.ask("Subtemas", /.+/, function(subtemas){
			temario1.setSubtemas(subtemas);
				pro.ask("Unidades", /.+/, function(unidades){
					temario1.setUnidades(unidades);
						pro.ask("Objetivo general", /.+/, function(OG){
							temario1.setObjG(OG);
								pro.ask("Bibliografia", /.+/, function(bibliografia){
									temario1.setBibliografia(bibliografia);
    
      
       objFile.guardarArchivo(); //----Mando llamar la funcion de guardar archivo

	pro.ask("Deseas hacer otra funcion (si / No)", /.+/, function(ejecutar){

		if(ejecutar == "s" || ejecutar == "si"){
			pro.ejecutarproceso();
		}else{
			process.exit();
		}

		

	});

								});

						});

				});
		});
});

}

Vista.prototype.Mostrardatos = function(){
	temario1.getTema();
	temario1.getSubtemas();
	temario1.getUnidades();
	temario1.getObjG();
	temario1.getBibliografia



	console.log("Nombre del tema: " + temario1.getTema() );
	console.log("Nombre de los subtemas: " + temario1.getSubtemas() );
	console.log("Cuantas unidades son: " + temario1.getUnidades() ) ;
	console.log("Obgetivo general: " + temario1.getObjG() );
	console.log("Bibliografia: " + temario1.getBibliografia() );

	pro.ask("Deseas hacer otra funcion (si / no)", /.+/, function(ejecutar){

		if(ejecutar == "s" || ejecutar =="si"){
			pro.ejecutarproceso();

		}else{
			if(ejecutar == "n" || ejecutar == "No"){

               pro.ejecutarproceso();  
			}
			console.log("Bye a finalizado la ejecucion...")
			process.exit();
		}
	});
}


mymodule.Vista = Vista;


//}) ();




//----------------Class Control----------------------------------

//;(funtion(){


var opcion = new mymodule.Vista


function Control(){

}

Control.prototype.ask = function(question, format, callback){
	var stdin = process.stdin, stdout = process.stdout;


	stdin.resume();
 stdout.write(question + ": ");

 stdin.once('data', function(data) {
   data = data.toString().trim();

    if (format.test(data)) {
       callback(data);
   }else {
     stdout.write("It should match: "+ format +"\n");
     ask(question, format, callback);
   }
 });
}



Control.prototype.ejecutarproceso = function(){
	var objFile = new claseArchivo();
	//var temario1 = new Control();
	pro.ask("Que proceso quieres (1.-Capturar; 2.- Mostrar; 3.-Mostrar archivo; 4.- Salir)", /.+/, function(proceso){

			if(proceso === "1"){
				opcion.Pedirdatos();


			}else{
				if(proceso ==="2"){
					opcion.Mostrardatos();

				}else{
				if(proceso === "3"){
				 	objFile.leerArchivo();
				}else{
					console.log("A seleccionado el proceso salir: ", proceso);
					process.exit();

				}
					
				}
			}



	});

}

//-------------Clase del archivo---------------------//
	var claseArchivo = function(){
	
	}

	
	var fs = require ('fs');

  claseArchivo.prototype.leerArchivo = function(){
  	fs.readFile('./archivo.txt', 'utf8', function(err, data){
  		console.log(data);
  		process.exit();	
  	});
  }


  claseArchivo.prototype.guardarArchivo = function(){
  	fs.writeFile('./archivo.txt', temario1.getTema() + ',' + temario1.getSubtemas() + ',' + temario1.getUnidades() + ',' + temario1.getObjG() + ',' + temario1.getBibliografia(), function(err){
  		if(err) throw err;
  		console.log('File write completed');
  		process.exit();

  	});
  }



mymodule.Control = Control;


//}) ();




var pro = new Control();
pro.ejecutarproceso();



