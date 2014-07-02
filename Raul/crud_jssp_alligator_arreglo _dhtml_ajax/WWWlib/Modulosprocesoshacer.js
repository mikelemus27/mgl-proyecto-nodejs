     var File= "archivo.csv";
     var fs = require('fs');
     var Arreglo = [];
     var json = {};//arreglo del tipo JSON
     
	 var ModuloEntidad = require("./ModuloEntidad.js");
     var ActividadesDidacticas = new ModuloEntidad(); 

     var array = require("./array.js");
	 var objArray = new array();
     var cont="0";
	 var star="1";
	
var Modulosprocesoshacer = function(){
   
   if(star=="1"){
  //cargamos el arreglo al iniciar la aplicacion
    Modulosprocesoshacer.prototype.CargarCargar();
	star="0";
	}
}

Modulosprocesoshacer.prototype.CargarCargar = function(){
	
	console.log('clase cargar');
	 var lineasarchivo = fs.readFileSync(File).toString().split('\n').length;
          
		  for(var x=0;  x < lineasarchivo; x++){

		    var array = fs.readFileSync(File).toString().split('\n');
			var datoarchivo=array[x].split(',');

			//ahora palabra por palabra para insertarlas en el array del modelo de la entidad
				for(var j=0; j<5; j++){
                   if(j===0){
					var nombre=datoarchivo[j];
					ActividadesDidacticas.setNombreAct(nombre);
					}
					else if(j===1){
					var tipo=datoarchivo[j];
					ActividadesDidacticas.setTipo(tipo);
					}
					else if(j===2){
					var recurso=datoarchivo[j];
					ActividadesDidacticas.setRecurso(recurso);
					}
					else if(j===3){
					var tiempo=datoarchivo[j];
					ActividadesDidacticas.setTiempo(tiempo);
					}
					else if(j===4){
					var materia=datoarchivo[j];
					ActividadesDidacticas.setMateria(materia);
					}

				}

//------llenamos el arreglo con los datos del archivo--------------------------	
	    json["Numero"]= (x + 1);
		json["Nombre"] = ActividadesDidacticas.getNombreAct();
        json["Tipo"] = ActividadesDidacticas.getTipo();
        json["Recurso"] = ActividadesDidacticas.getRecurso();
        json["Tiempo"] = ActividadesDidacticas.getTiempo();
        json["Materia"] = ActividadesDidacticas.getMateria();
		json["TuDato"] = "_";
		
		cont=x;
		var  jsonobj =JSON.stringify([json]);
        objArray.setArray(eval(jsonobj));
		 }//fin del primer for
		
	 
    }
	
	
Modulosprocesoshacer.prototype.MostrarDatos = function(){

     return JSON.stringify(objArray.mostrar());
}	


Modulosprocesoshacer.prototype.BuscarDato = function(dato, atributo){
      
	  dato= dato.toString().substring(0,1).toUpperCase()+ dato.substring(1, dato.toString().length).toLowerCase();
	 
	 for(var i=0;i<objArray.mostrar().length;i++){
	if(dato==objArray.mostrar()[i][atributo]){

		console.log('Dato encontrado en linea:  ' + i);
		nombre = objArray.mostrar()[i]["Nombre"];
		tipo = objArray.mostrar()[i]["Tipo"]
		recurso = objArray.mostrar()[i]["Recurso"]
		tiempo = objArray.mostrar()[i]["Tiempo"]
		materia = objArray.mostrar()[i]["Materia"]
	    var ne="Dato Enc.  " + (i+1);
		objArray.CambiarDatosLinea(nombre,tipo,recurso,tiempo,materia,i,ne); 
       }
	  

}
	 return JSON.stringify(objArray.mostrar());

}

Modulosprocesoshacer.prototype.ModificarDatos = function(nombre,tipo,recurso,tiempo,materia,linea){

// console.log('metodo ModificarDatos');
// console.log('numero de linea:   '+ linea);

         var setN= nombre.toString().substring(0,1).toUpperCase()+ nombre.substring(1, nombre.toString().length).toLowerCase();
		 var setTp= tipo.toString().substring(0,1).toUpperCase()+ tipo.substring(1, tipo.toString().length).toLowerCase();
		 var setR= recurso.toString().substring(0,1).toUpperCase()+ recurso.substring(1, recurso.toString().length).toLowerCase();
		 var setTm= tiempo.toString().substring(0,1).toUpperCase()+ tiempo.substring(1, tiempo.toString().length).toLowerCase();
		 var setM= materia.toString().substring(0,1).toUpperCase()+ materia.substring(1, materia.toString().length).toLowerCase();
        
		objArray.CambiarDatosLinea(setN,setTp,setR,setTm,setM,linea); 
  
         return JSON.stringify(objArray.mostrar());
   
}

Modulosprocesoshacer.prototype.GuardarDatos = function(nombre,tipo,recurso,tiempo,materia){
         
         var setNom= nombre.toString().substring(0,1).toUpperCase()+ nombre.substring(1, nombre.toString().length).toLowerCase();
		 var setTip= tipo.toString().substring(0,1).toUpperCase()+ tipo.substring(1, tipo.toString().length).toLowerCase();
		 var setRe= recurso.toString().substring(0,1).toUpperCase()+ recurso.substring(1, recurso.toString().length).toLowerCase();
		 var setTiem= tiempo.toString().substring(0,1).toUpperCase()+ tiempo.substring(1, tiempo.toString().length).toLowerCase();
		 var setMat= materia.toString().substring(0,1).toUpperCase()+ materia.substring(1, materia.toString().length).toLowerCase();
          
	      ActividadesDidacticas.setNombreAct(setNom);
		  ActividadesDidacticas.setTipo(setTip);
		  ActividadesDidacticas.setRecurso(setRe);
		  ActividadesDidacticas.setTiempo(setTiem);
		  ActividadesDidacticas.setMateria(setMat);
		  
	//-------datos enviados al nuevo arreglo en wwwlib-------------------- 
		  json["Numero"]=(objArray.mostrar().length+1);
		  json["Nombre"] = ActividadesDidacticas.getNombreAct();
          json["Tipo"] = ActividadesDidacticas.getTipo();
          json["Recurso"] = ActividadesDidacticas.getRecurso();
          json["Tiempo"] = ActividadesDidacticas.getTiempo();
          json["Materia"] = ActividadesDidacticas.getMateria();
          json["TuDato"] = "_";
		  var  jsonobj =JSON.stringify([json]);
          objArray.setArray(eval(jsonobj));	
          
		  return JSON.stringify(objArray.mostrar());
		  
}

Modulosprocesoshacer.prototype.EliminarDatos = function(fila){

         objArray.EliminarFila(fila);
         
		 return JSON.stringify(objArray.mostrar());

}

Modulosprocesoshacer.prototype.ActualizarDatos = function(linea,nombre,tipo,recurso,tiempo,materia){

 console.log('numero de linea'+ linea);
 objArray.CambiarDatosLinea(linea,nombre,tipo,recurso,tiempo,materia); 
 
}

Modulosprocesoshacer.prototype.GuardarCambios = function(){
	
 var remplazo = fs.createWriteStream(File);
 
	 remplazo.once('open', function(fd) {
			
			for(var i=0; i < objArray.mostrar().length; i++){
			
				if(objArray.mostrar().length-1== i ){
				 remplazo.write(objArray.mostrar()[i]["Nombre"]+','+
						 objArray.mostrar()[i]["Tipo"]+','+
						 objArray.mostrar()[i]["Recurso"]+','+
						 objArray.mostrar()[i]["Tiempo"]+','+
						 objArray.mostrar()[i]["Materia"]+'\r');
				}
				else{
				
				remplazo.write(objArray.mostrar()[i]["Nombre"]+','+
						 objArray.mostrar()[i]["Tipo"]+','+
						 objArray.mostrar()[i]["Recurso"]+','+
						 objArray.mostrar()[i]["Tiempo"]+','+
						 objArray.mostrar()[i]["Materia"]+'\n');
				}
			}
	 
	
      remplazo.end();
		});
	return JSON.stringify(objArray.mostrar());	
  } 



module.exports.Modulosprocesoshacer = Modulosprocesoshacer;  

  