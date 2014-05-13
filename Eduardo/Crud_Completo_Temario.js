// try to always scope your API, Object Types, properties in a namespace   
var mymodule = mymodule || {}; 
var rs = require('fs');
var fs = require('fs');
var arr1 = Array ();
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

     //var objFile = new control();

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
    
      
       pro.guardarArchivo(); 
			   });
			});
		});
	});
});

}

Vista.prototype.Leer = function(){
	rs.readFile('./archivo.csv', function(error, date){
		if(error)
			throw error;
			
			var str = date.toString();
			arr1 = str.split("\n");
			for(var i=0;i<arr1.length;i++){
				if(arr1[0]== undefined && i==0){
					console.log("no hay datos en la linea 0");
					i=1;
				}else{
					var nuevodato = arr1[i];
					var arr2 = nuevodato.split(",");
					
					for(var a=0; a<arr2.length;a++){
					
							if(a==0){
								var tema=arr2[a];
								temario1.setTema(tema);
							}
							if(a==1){
								var subtemas=arr2[a];
								temario1.setSubtemas(subtemas);
							}
							if(a==2){
								var unidades=arr2[a];
								temario1.setUnidades(unidades);
							}
							if(a==3){
								var OG=arr2[a];
								temario1.setObjG(OG);
							}
							if(a==4){
								var bibliografia=arr2[a];
								temario1.setBibliografia(bibliografia);
							}
					}
					
						
				}
			}
			
			if(temario1.getTema()== undefined || temario1.getSubtemas()== undefined || temario1.getUnidades()== undefined
			   || temario1.getObjG()== undefined || temario1.getBibliografia()== undefined || arr2 ==arr2.length){
				
					console.log("El archivo esta vacio, ingresa datos nuevos");
					pro.ejecutarproceso();
			}else{
				console.log("Tema: "+ temario1.getTema());
				console.log("Subtemas: "+ temario1.getSubtemas());
				console.log("Unidades: "+ temario1.getUnidades());
				console.log("Objetivo General: "+ temario1.getObjG());
				console.log("Bibliografia: "+ temario1.getBibliografia());
				
				pro.ejecutarproceso();
			}
	});
}	
	
	
//-----------------------CLASE CONTROL---------------------------//	
	var opcion = new Vista();


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
	//var objFile = new control();
	//var temario1 = new Control();
	pro.ask("Que proceso quieres (1.-Capturar; 2.-Buscar; 3.-Modificar; 4.-Leer; 5.-Eliminar;)", /.+/, function(proceso){

			if(proceso === "1" || proceso === "Capturar"){
				opcion.Pedirdatos();

			}else{
				if(proceso ==="2" || proceso === "Buscar"){
					pro.buscar();

			}else{
				if(proceso === "3" || proceso === "Modificar"){
				 	pro.modificar();
			}else{
				if(proceso === "4" || proceso === "Leer"){
					pro.mostrar();
				
			}else{
				if(proceso === "5" || proceso === "Eliminar"){
					pro.borrar();
			}else{
				console.log("Error no existe la opcion: ", proceso);
				process.exit();
					
				   }
				 }
			  }
		    }
		  }

	});

}

Control.prototype.guardarArchivo = function(Tema,Subtemas,Unidades,ObjG,Bibliografia){
	fs.writeFile('./archivo.csv', temario1.getTema() + ',' + temario1.getSubtemas() + ',' + temario1.getUnidades() + ',' + temario1.getObjG() + ',' + temario1.getBibliografia());
	pro.nuevafuncion();
}

Control.prototype.buscar = function(dato){

	pro.ask("buscar dato", /.+/, function(dato){
			if(dato == temario1.getTema()){
				console.log("Dato encontrado en tema ");
			}else{
		    if(dato == temario1.getSubtemas()){
				console.log("Se encontro con Subtemas ");
		    }else{
		    if(dato == temario1.getUnidades()){
				console.log("Se encontro por unidades");
		    }else{
		    if(dato == temario1.getObjG()){
				console.log("Se encontro con el Objetivo general ");
		    }else{
		    if(dato == temario1.getBibliografia()){
				console.log("Se encontro con la bibliografia ");
		      }
		   }
		 }
	   }
	 }
	pro.nuevafuncion();
	});	
	
}

Control.prototype.modificar = function(){
	opcion.Pedirdatos();
}

Control.prototype.mostrar = function(){
	leer.Leer();
}

Control.prototype.borrar = function(){
	var date = "";
	fs.writeFile('./archivo.csv', date);
	console.log("Los datos han sido borrados con exito");
	pro.nuevafuncion();
}

Control.prototype.nuevafuncion = function(){
	pro.ask("Deseas realizar otra funcion (s) / (n) ", /.+/, function(nueva){
		if(nueva == "s" || nueva == "S" || nueva == "si" || nueva == "SI"){
			console.log("PROCESANDO LA FUNCION.............................");
			pro.ejecutarproceso();
		}else{
			process.exit();
		}
	});
}
	
var pro = new Control();
var leer = new Vista();
leer.Leer();
	
	