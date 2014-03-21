 
var Entidad = Entidad || {}; 

;(function(){
  
  function Reticula(Clave,Nombre,Modulos,Creditos,Periodo){
    this._Clave = Clave; 
	this._Nombre= Nombre;
	this._Modulos= Modulos;
	this._Creditos= Creditos;
	this._Periodo= Periodo;
  }
  
  Reticula.prototype.setClave = function(Clave){
  
    if (typeof Clave === "undefined"){
      return this._Clave ;
    }else{
      this._Clave = Clave;
    }
  }
  
  
  Reticula.prototype.getClave = function(){
  
  return this._Clave;
  
  }
  
  
    Reticula.prototype.setNombre = function(Nombre){
  
    if (typeof Nombre === "undefined"){
      return this._Nombre;
    }else{
      this._Nombre = Nombre;
    }
  }
  
  
    Reticula.prototype.getNombre = function(){
	
	 return this._Nombre;
	}
  
    Reticula.prototype.setModulos = function(Modulos){
  
    if (typeof Modulos === "undefined"){
      return this._Modulos;
    }else{
      this._Modulos = Modulos;
    }
  }
  
    Reticula.prototype.getModulos = function(){
	return this._Modulos;
	}
    
	
	Reticula.prototype.setCreditos = function(Creditos){
  
    if (typeof Creditos === "undefined"){
      return this._Creditos;
    }else{
      this._Creditos = Creditos;
    }
  }
  
    Reticula.prototype.getCreditos = function(){
	return this._Creditos;
	}
	
	
	
	  Reticula.prototype.setPeriodo = function(Periodo){
  
    if (typeof Periodo === "undefined"){
      return this._Periodo;
    }else{
      this._Periodo = Periodo;
    }
  }
  
    Reticula.prototype.getPeriodo = function(){
	return this._Periodo;
	}
  
  
  Entidad.Reticula = Reticula;
})(); 


;(function(){

  var datos=new Entidad.Reticula();
  
  function Vista(){
 
  }
  
  
  Vista.prototype.Mostrar = function (){
   
   console.log("\nEs lo que se encuentra... \n");
   console.log(datos.getClave());
   console.log(datos.getNombre());
   console.log(datos.getModulos());
   console.log(datos.getCreditos());
   console.log(datos.getPeriodo());

  
  }
  
  Vista.prototype.Capturar = function(valClave,valNombre,valModulos,valCreditos,valPeriodo){
  
  datos.setClave(valClave);
  datos.setNombre(valNombre);
  datos.setModulos(valModulos);
  datos.setCreditos(valCreditos);
  datos.setPeriodo(valPeriodo);
  
  
  
  console.log("Se guardo exitosamente..");
}


 
  Entidad.Vista = Vista;
})(); 


;(function(){

 var op = new Entidad.Vista();
   function Control(){
   
    
   }
    //Metodo para cargar los datos del archivo a un array siguiendo el modelo de la entidad
	Control.prototype.cargar = function(){
	    //Indica informacion sobre el archivo
		var fs  = require("fs");
		fs.readFile('c:/archivo.csv', function(err, f){
		
		//contamos el numero de lineas del archivo
		var numLINEAS = f.toString().split('\n').length;
		  
          //ciclo para leer linea individualmente
		  for(var x=0;  x < numLINEAS ; x++){
		    console.log("\nEn la linea "+ (x+1) + " Del archivo se encuentra");
		    var array = f.toString().split('\n');
			var txtLINEA=array[x].split(',');
			
			//ahora palabra por palabra para insertarlas en el array del modelo de la entidad
				for(var j=1; j<5; j++){
			     	
					
					
					if(j==1){
					var valCVE=txtLINEA[j];
					console.log("Clave: "+valCVE);
					}
					else if(j==2){
					var valNBR=txtLINEA[j];
					console.log("Nombre: "+valNBR);
					}
					else if(j==3){
					var valMOD=txtLINEA[j];
					console.log("Modulos: "+valMOD);
					}
					else if(j==4){
					var valCRE=txtLINEA[j];
					console.log("Creditos: "+valCRE);
					}
					else if(j==5){
					var valPER=txtLINEA[j];
					console.log("Periodo: "+valPeriodo);
					}
					
				}
		
		  
		  }
		  
		  console.log("\n");
		   
		});
	
	}
	
	//Metodo para guardar los cambios en el archivo
	 Control.prototype.guardar = function(){
	 
	 
	 }
	
   Control.prototype.opciones = function(){
    
	console.log("1)Capturar 2)Mostrar 3)Salir 4)Cargar el Archivo 5) Guardar en el archivo\n");
	
    this.pedir("",/.+/,function(valor) {
	

	if(valor ==="1"){
	var dato = new Entidad.Control();
	
	dato.pedir("Clave: ",/.+/,function(valA) {
	 dato.pedir("Nombre: ",/.+/,function(valB) {
	  dato.pedir("Modulos: ",/.+/,function(valC) {
	    dato.pedir("Creditos: ",/.+/,function(valD) {
	    dato.pedir("Periodos: ",/.+/,function(valE) {
      
			op.Capturar(valA,valB,valC,valD,valE);
			process.exit();
					});
				});
			});
		});
	  });
	}
	else if(valor ==="2"){
	  op.Mostrar();
	  process.exit();
	}
	else if(valor ==="3"){
	console.log("Bye...");
	process.exit();
	
	}
	else if(valor==="4"){
	Control.prototype.cargar();
	}
	
   
    });
	


   }
   
   
  Control.prototype.pedir= function(question, format, callback) {
			var stdin = process.stdin, stdout = process.stdout;
 
				stdin.resume();
				stdout.write(question);
 
				stdin.once('data', function(data) {
				data = data.toString().trim();
 
				if (format.test(data)) {
					callback(data);
					} else {
					stdout.write("It should match: "+ format +"\n");
						this.pedir(question, format, callback);
							}
													}.bind(this));
	}


  Entidad.Control = Control;
  
})(); 




var inicio = new Entidad.Control();

inicio.opciones();

