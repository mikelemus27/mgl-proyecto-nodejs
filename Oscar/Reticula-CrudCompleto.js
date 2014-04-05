 
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
   
   console.log("\nMostrando... \n");
   console.log("Clave: "+datos.getClave());
   console.log("Nombre: "+datos.getNombre());
   console.log("Modulos: "+datos.getModulos());
   console.log("Creditos: "+datos.getCreditos());
   console.log("Periodo: "+datos.getPeriodo());

  
  }
  
  Vista.prototype.Capturar = function(valClave,valNombre,valModulos,valCreditos,valPeriodo){
  
  datos.setClave(valClave);
  datos.setNombre(valNombre);
  datos.setModulos(valModulos);
  datos.setCreditos(valCreditos);
  datos.setPeriodo(valPeriodo);

}

  Vista.prototype.Cadena = function(){
   var x=datos.getClave()+","+datos.getNombre()+","+datos.getModulos()+","+datos.getCreditos()+","+datos.getPeriodo();
   return x;
  }
  
  Vista.prototype.Busqueda= function(valA,valB){
  
    if(valA==="1"){
	 if(valB===datos.getClave()){
	 console.log("Si se encontro");
	 }
	 else{
	 console.log("No se encontro");
	 }
	}
	else if(valA==="2"){
	 if(valB===datos.getNombre()){
	 console.log("Si se encontro");
	 }
	 else{
	 console.log("No se encontro");
	 }
	}
	else if(valA==="3"){
	 if(valB===datos.getModulos()){
	 console.log("Si se encontro");
	 }
	 else{
	 console.log("No se encontro");
	 }
	}
	else if(valA==="4"){
	 if(valB===datos.getCreditos()){
	 console.log("Si se encontro");
	 }
	 else{
	 console.log("No se encontro");
	 }
	}
	else if(valA==="5"){ 
	if(valB===datos.getPeriodo()){
	 console.log("Si se encontro");
	 }
	 else{
	 console.log("No se encontro");
	 }
	}
  }
  Entidad.Vista = Vista;
})(); 

;(function(){

 var fs  = require("fs");
 var op = new Entidad.Vista();
 var flag="1";
 
   function Control(){
    
    
   }
 
   Control.prototype.cargar =function(){
   //COMIENZA EL PROCESO DE CARGAR EL ARCHIVO

		var numLINEAS = fs.readFileSync('c:/archivo.csv').toString().split('\n').length;
          //ciclo para leer linea individualmente
		  for(var x=0;  x < numLINEAS ; x++){
		    console.log("\nEn la linea " + (x+1)+ " del archivo se encuentra");
		    var array = fs.readFileSync('c:/archivo.csv').toString().split('\n');
			var txtLINEA=array[x].split(',');
			
			//ahora palabra por palabra para insertarlas en el array del modelo de la entidad
				for(var j=0; j<5; j++){
			     	

					
					if(j===0){
					var valCVE=txtLINEA[j];
					console.log("Clave: "+valCVE);
					}
					else if(j===1){
					var valNBR=txtLINEA[j];
					console.log("Nombre: "+valNBR);
					}
					else if(j===2){
					var valMOD=txtLINEA[j];
					console.log("Modulos: "+valMOD);
					}
					else if(j===3){
					var valCRE=txtLINEA[j];
					console.log("Creditos: "+valCRE);
					}
					else if(j===4){
					var valPER=txtLINEA[j];
					console.log("Periodo: "+valPER);
					}
					
				}
		       op.Capturar(valCVE,valNBR,valMOD,valCRE,valPER);
		  
		  }
		  
		  console.log("\n");
	
		
		
	//Termina el proceso de cargar el archivo
   
   }
     
   Control.prototype.Guardar = function(){
     
	  var valor= op.Cadena();
	  fs.writeFile("c:/archivo.csv", valor);
	
	 }
   
   
   Control.prototype.iniciar = function(){
   
	function iniciar(callbackLOAD,callbackMENU){
	 
	 //comienza mi primera funcion
	 callbackLOAD(flag);

	 //comienza mi segunda funcion
	
     callbackMENU();
     
	 }
     
	 //Funcion para cargar el archivo existente antes del menu
    function callbackLOAD(){
	
	if(flag==="1"){
	 console.log("Se carga el archivo por primera vez y se muestra...");
     Control.prototype.cargar();
	 }
	 flag++;
    }
	 
	//Funcion para pedir al usuario una opcion
	function callbackMENU(){
     
	  console.log("1)Editar 2)Mostrar 3)Buscar  4)Guardar en archivo\n");
	
	   Control.prototype.pedir("",/.+/,function(valorA) {
	   
	    Control.prototype.movimiento(valorA);
	   
	   });
	   
	  
	
	 
  
	}
		
    //Da comienzo a los callback segun el orden que los llama creo que es asi no?
     iniciar(callbackLOAD,callbackMENU);

	} 
	 
   Control.prototype.movimiento=function(valor){
     function comparar(preguntar){
		if(valor === "1"){
			Control.prototype.pedir("Clave: ",/.+/,function(valA) {
				Control.prototype.pedir("Nombre: ",/.+/,function(valB) {
					Control.prototype.pedir("Modulos: ",/.+/,function(valC) {
						Control.prototype.pedir("Creditos: ",/.+/,function(valD) {
							Control.prototype.pedir("Periodos: ",/.+/,function(valE) {
      
		                       op.Capturar(valA,valB,valC,valD,valE);
								preguntar();
						});
					});
				});
			});
		});
		}
	   
	   
	   else if(valor === "2"){
	     op.Mostrar();
		 preguntar();
	   }
	   else if(valor === "3"){
	     Control.prototype.pedir("¿Que elemento buscas? 1)Clave  2)Nombre 3)Modulos 4)Creditos 5)Periodo\n",/.+/,function(x) {
			Control.prototype.pedir("Escribe el valor a buscar: ",/.+/,function(y){
				op.Busqueda(x,y);
				preguntar();
			});
		 });
	     
	   }
	   else if(valor === "4"){
	     Control.prototype.Guardar();
	     preguntar();
	   }
	   else if(valor >4 || valor ===0 ){
	     console.log("opcion no valida intenta de nuevo");
	     preguntar();
	   }
	 
	 }
	 
	 function preguntar(){
	  console.log("\nQuieres continuar? 1)Si 2)no");
	 
	 Control.prototype.pedir("",/.+/,function(valorB) {
	 if(valorB==="2"){
	 process.exit();
	 
	 }
	 else if(valorB=="1"){
	 Control.prototype.iniciar();
	 }
	 else if(valorB>2 || valorB==="0"){
	 
	 console.log("opcion invalida cerrando y saliendo sin guardar cambios bye...");
	 process.exit();
	 
	 }
	 
	 
	 });
	 }
	 
	 comparar(preguntar);
	 
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
inicio.iniciar();

