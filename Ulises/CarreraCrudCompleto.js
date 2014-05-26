var myClase = myClase || {}; 
var band = false;

  //Clase modelo
  //entidad
  // Constructor
 var entidadCarrera = function (){
    Nombre=""; 
	Creditos="";
	Clave="";
	Area="";
	Tipo="";
	
  }
  
  entidadCarrera.prototype.setNombre = function(Nombre){
   
    if (typeof Nombre === "undefined"){
      return this._Nombre ;
    }else{
      this._Nombre = Nombre;
    }
  }
  
  entidadCarrera.prototype.getNombre = function(){
      return this._Nombre;
  }
  
  entidadCarrera.prototype.setCreditos = function(Creditos){
   
    if (typeof Creditos === "undefined"){
      return this._Creditos ;
    }else{
      this._Creditos = Creditos;
    }
  }
  
  entidadCarrera.prototype.getCreditos = function(){
      return this._Creditos;
  }
  
  entidadCarrera.prototype.setClave = function(Clave){
    
    if (typeof Clave === "undefined"){
      return this._Clave ;
    }else{
      this._Clave = Clave;
    }
  }
  
  entidadCarrera.prototype.getClave = function(){
      return this._Clave;
  }
  
  entidadCarrera.prototype.setArea = function(Area){
    if (typeof Area === "undefined"){
      return this._Area ;
    }else{
      this._Clave = Area;
    }
  }
  
   entidadCarrera.prototype.getArea = function(){
      return this._Area;
  }
  
  entidadCarrera.prototype.setTipo = function(Tipo){
    
    if (typeof Tipo === "undefined"){
      return this._Tipo ;
    }else{
      this._Tipo = Tipo;
    }
  }
  entidadCarrera.prototype.getTipo = function(){
      return this._Tipo;
  }
  
  ////////////////////////////////////////Clase Vista////////////////////////////////////////////////////////////////
  
  var claseVista = function(){
   
  }
  var obj = new entidadCarrera();
  
  
  claseVista.prototype.Mostrar = function(){
   console.log("mostrando.....");
     console.log(obj.getNombre());
	 console.log(obj.getCreditos());
	 console.log(obj.getClave());
	 console.log(obj.getArea());
	 console.log(obj.getTipo());
	 
  
  }
 
  claseVista.prototype.Capturar = function(nombre,creditos,clave,area,tipo){
     //var objCarrera = new entidadCarrera();
	 
	 obj.setNombre(nombre);
	 obj.setCreditos(creditos);
	 obj.setClave(clave);
	 obj.setArea(area);
	 obj.setTipo(tipo);
	 
	 console.log("guardando....");
   
  }
    claseVista.prototype.Eliminar = function(){
	var obCtrl = new claseControl();
        obCtrl.eliminar();
   
    }
   
   claseVista.prototype.Buscar = function(valor){
          var obCtrl = new claseControl();
		  
		  obCtrl.buscar(valor);
       
   }
   
   claseVista.prototype.Actualizar = function(){
   var obCtrl = new claseControl();
      obCtrl.actualizar();
   
   }
  
  
  //////////////////////////////////////Clase Control////////////////////////////////////////////////////////////////////
  
  
  var claseControl = function(){
  
  }
  var opcion = new claseVista();
  
  
  
  claseControl.prototype.opciones = function(){
      var obj = new claseControl();
     
	 //console.log("cargando valores...."); 
	 //obj.cargar();
	 //console.log("");
	 
  
     console.log("1.-Capturar");
     console.log("2.-Mostrar");
     console.log("3.-Salir");
	 console.log("4.-Mostrar archivo");
	 console.log("5.-Guardar en archivo");
	 console.log("6.-Modificar");
	 console.log("7.-Eliminar");
	 console.log("8.-Buscar");
	 
	 
	 this.pedir("elige una opcion",/.+/,function(eleccion){
	 
	   if(eleccion === "1"){
	      obj.pedir("Nombre", /\w/, function(nombre) {
          obj.pedir("Creditos", /\w/, function(creditos) {
          obj.pedir("Clave", /\w/, function(clave) {
          obj.pedir("Area", /\w/, function(area) {
          obj.pedir("Tipo", /\w/, function(tipo) {
		  
		    opcion.Capturar(nombre,creditos,clave,area,tipo);
			console.log("");
			 obj.guardar();		  
		           });
				});
			});
		 });
	  });
		  
	   }
	   if(eleccion === "2"){
           opcion.Mostrar();	
		   continuar();
          //process.exit();		   
	   }
	   if(eleccion === "3"){
	     console.log("SALIR")
		 process.exit();
	   }
	   
	   if(eleccion === "4"){
	      
		  obj.cargar();

	   }
	   if(eleccion === "5"){
	       obj.grabarArchivo();
	   }
	   
	   if(eleccion === "6"){
	      opcion.Actualizar();
	   }
	   else if(eleccion === "7"){
	       opcion.Eliminar();
	   }
	   else if(eleccion === "8"){
	        
			 claseControl.prototype.pedir("Escribe el valor a buscar",/.+/,function(val2){
			     opcion.Buscar(val2);
				 
			 });
			
	   }
	   
	   
	 });
	 
	 
  }
  
  function continuar(){
		 claseControl.prototype.pedir("Continuar: 1)Si 2)No",/.+/,function(val){
		    if(val==="1"){
			 claseControl.prototype.opciones();
			
			}
		     if(val==="2"){
			   process.exit();
			 }
		 
		 });
		 
		 
		 }
  
  
  
  
  
  
     claseControl.prototype.grabarArchivo = function(){
	         var objCtrl = new claseControl();
	         var fs = require('fs');
	         objCtrl.pedir("escribe el texto que se guardara",/.+/,function(val){
		     
		     fs.writeFile('./archivo.csv',val, function(err) {
             if(err) throw err;
             console.log('guardando en archivo...');
	         continuar();
			 //process.exit();
         });
		 }); 
	 
	 
	 
	 }
  
  
      claseControl.prototype.buscar = function(valor){
		    if(valor === obj.getNombre()){
				console.log("se encontro");
			}else if(valor === obj.getCreditos()){
			 console.log("se encontro");
			}else if(valor === obj.getClave()){
				console.log("se encontro");
			}else if(valor === obj.getArea()){
				console.log("se encontro");
			}else if(valor === obj.getTipo()){
				console.log("se encontro");
			}
			else{
			   console.log("no se encontro");
			}
		  
		  continuar();
		 // process.exit();
	  
	  }


      claseControl.prototype.actualizar = function(){
	  var obj = new claseControl();
	      obj.pedir("Nombre", /\w/, function(nombre) {
          obj.pedir("Creditos", /\w/, function(creditos) {
          obj.pedir("Clave", /\w/, function(clave) {
          obj.pedir("Area", /\w/, function(area) {
          obj.pedir("Tipo", /\w/, function(tipo) {
		  
		    opcion.Capturar(nombre,creditos,clave,area,tipo);
			console.log("");
			 obj.guardar();		  
		           });
				});
			});
		 });
	  });
		   
	   continuar();
	  }
      
       claseControl.prototype.eliminar = function(){
	       var fs = require('fs');
	       var linea="Default"+ ","+"Default"+","+"Default"+","+"Default"+","+"Default";
		   fs.writeFile('./archivo.csv',linea);
		   
		   console.log("borrado exitoso...");
		  continuar(); 
	   //process.exit();
	   }	  
        
     claseControl.prototype.guardar = function(){
	      var objFile = new claseArchivo();
	     
		   objFile.guardarArchivo();
	 
	  }
	  
	  claseControl.prototype.cargar = function(){
	      var objFile = new claseArchivo();
	       objFile.leerArchivo();
		   
	  }

	claseControl.prototype.pedir = function(question, format, callback) {
 		var stdin = process.stdin, stdout = process.stdout;
 		stdin.resume();
 		stdout.write(question + ": ");
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
	
	
	//////////////////////////////////Clase Archivo////////////////////////////////////////////////////////////
	
	  var claseArchivo = function(){
  
  }
     var fs = require('fs');
  
   claseArchivo.prototype.leerArchivo = function(){
       
	   var obj = new claseControl();
       
	   console.log("mostrando contenido del archivo...")
	   fs.readFile('./archivo.csv', 'utf8', function(err, data) {
       //the data is passed to the callback in the second argument
       console.log(data);
	   
	   if(band==false){
	     obj.opciones();
	   }else{
	     continuar();
	   }
	     band=true;
	   //continuar();
	   //process.exit();
      });
   
   }
   
   
   claseArchivo.prototype.guardarArchivo = function(){
   
       //var obj   
       
	   fs.writeFile('./archivo.csv', obj.getNombre() +','+ obj.getCreditos() +','+ obj.getClave() + ',' + obj.getArea() + ',' + obj.getTipo(), function(err) {
       if(err) throw err;
       console.log('File write completed');
	   continuar();
	  // process.exit();
      });
   
   }
  

	var objControl = new claseControl();
	objControl.cargar();













