
var rs = require('fs');
var fs = require('fs');
var arr1 = Array ();
var File= "export.txt";
var mymodule = mymodule || {};//nombre del namespace


//---------------Clase Modelo-------------------------------------------
;(function(){
  
  // Constructor
  function ActividadesDidacticas( nombre, tipo, recurso, tiempo, materia){
    this._nombre = nombre; 
	this._tipo = tipo;
	this._recurso = recurso;
	this._tiempo = tiempo;
	this._materia = materia;
  }
  
  
  // A ObjectType Method
  ActividadesDidacticas.prototype.setNombreAct = function(nombre){
   
      this._nombre = nombre;    
}

  ActividadesDidacticas.prototype.getNombreAct = function (){
      return this._nombre;
      }    
  
  // A ObjectType Method
  ActividadesDidacticas.prototype.setTipo = function(tipo){
    
      this._tipo = tipo;
}

  ActividadesDidacticas.prototype.getTipo = function (){
      return this._tipo;
      }  
	  
	  ActividadesDidacticas.prototype.setRecurso = function(recurso){
     this._recurso = recurso;
}

  ActividadesDidacticas.prototype.getRecurso = function (){
      return this._recurso;
      }  
	  
 ActividadesDidacticas.prototype.setTiempo = function(tiempo){
    
      this._tiempo = tiempo;
}

  ActividadesDidacticas.prototype.getTiempo = function (){
      return this._tiempo;
      }
	  
ActividadesDidacticas.prototype.setMateria = function(materia){
    
      this._materia = materia;
}

  ActividadesDidacticas.prototype.getMateria = function (){
      return this._materia;
      }
  
  // mymodule namespace
  mymodule.ActividadesDidacticas = ActividadesDidacticas;
   
})();

var actividades1 = new mymodule.ActividadesDidacticas();

//-----------------------------Clase Vista-------------------------------------------

function claseVista(){

}
claseVista.prototype.pedirdatos =function (datos){

        control.ask("Nombre de la Actividad", /.+/, function(nombre) {
		if(nombre==undefined){
		console.log("No hay nombre");
		}else{
         actividades1.setNombreAct(nombre);
		 }
	      control.ask("Tipo de la Actividad", /.+/, function(tipo) {
		    if(tipo==undefined){
		      console.log("No hay nombre");
		      }else{
		       actividades1.setTipo(tipo);
               }		   
	        control.ask("Recursos para la Actividad (Internet, libros, etc.)", /.+/, function(recurso) {
             if(recurso==undefined){
		console.log("No hay recurso");
		}else{
			 actividades1.setRecurso(recurso);
			 }
	          control.ask("Duracion", /.+/, function(tiempo) {
			  if(tiempo==undefined){
		       console.log("No hay nombre");
		}else{
               actividades1.setTiempo(tiempo);
			   }
	            control.ask("Materia", /.+/, function(materia) {
				if(materia==undefined){
		console.log("No hay materia");
		}else{
                 actividades1.setMateria(materia);
				 }
                  control.guardar();    
                 // control.nuevafuncion();
                });
	          });
	        });
	      });
	    });
  }

claseVista.prototype.Leer = function(){

    rs.readFile(File, function(error, data) {
         if (error)
           throw error;
		   
		   
	        var str = data.toString();
            arr1 = str.split("\n");
	        for(var i=0;i<arr1.length;i++) {
                if(arr1[0]== undefined && i==0){
	                console.log("no hay datos en la linea 0");
	                 i=1;
	               }else{
	                 var nuevodato = arr1[i];
                     var arr2 = nuevodato.split(","); 
	                 //console.log(i+ " "+arr1[i] );
	                 for(var a=0;a<arr2.length;a++) {
					 
		                 
		             	
							   
							   if(a==0){
							   var nombre=arr2[a];
							   actividades1.setNombreAct(nombre);
							   }
							   if(a==1){
							   var tipo=arr2[a];
							   actividades1.setTipo(tipo);
							   }
							   if(a==2){
							   var recurso=arr2[a];
							   actividades1.setRecurso(recurso);
							   }
							   if(a==3){
							   var tiempo=arr2[a];
							   actividades1.setTiempo(tiempo);
							   }
							   if(a==4){
							   var materia=arr2[a];
							   actividades1.setMateria(materia);
							   }
							   
						  }
	                  
		            }
            }
			
			if(actividades1.getNombreAct()== undefined || actividades1.getTipo()== undefined || actividades1.getRecurso()==undefined 
			    || actividades1.getTiempo()==undefined || actividades1.getMateria()==undefined || arr2==arr2.length){
			      console.log("El archivo esta Vacio o no esta completo borre los datos e ingrese nuevos datos");
				  control.Procesohacer();
			}else{
			
			console.log("Nombre: "+actividades1.getNombreAct());
			console.log("Tipo: "+actividades1.getTipo()); 
			console.log("Recurso: "+actividades1.getRecurso());
			console.log("Tiempo: "+actividades1.getTiempo());
			console.log("Materia: "+actividades1.getMateria());
            		
           control.Procesohacer();
		   }
    });
  }
  
// claseVista.prototype.encontrado = function(dato){

// console.log("el dato encontrado en "+ dato);
// }

var vista = new claseVista ();
  

//-------------------Clase Control--------------------------------------------------------
//escribir datos en el archivo

function ClaseControl(){

}  
 ClaseControl.prototype.Procesohacer = function(){

        control.ask("Que proceso quieres (Guardar, Buscar, Modificar, Leer, Eliminar)", /.+/, function(proces) {
                 if(proces =="Guardar" || proces =="guardar" || proces =="G" || proces =="g"){
                     vista.pedirdatos();
                    }else{
                 if(proces=="Buscar" || proces =="buscar" || proces =="b" || proces =="B"){
                     control.buscar();
                    }else{
	             if(proces=="Modificar" || proces =="modificar" || proces =="m" || proces =="M"){
                     control.modificar();
                    }else{
		         if(proces=="Leer" || proces =="leer" || proces =="L" || proces =="l"){
                     control.mostrar();
                    }else{
			    if(proces=="Eliminar" || proces =="eliminar" || proces =="E" || proces =="e"){
                     control.borrar();
                    }else{
					
                     console.log("Error no se tiene la opcion: ", proces);
                        process.exit();
                             }
							} 
                        }
	     	        }
			    }
            });
        }
	
	
ClaseControl.prototype.guardar = function(datos){
 
   fs.writeFile(File, (actividades1.getNombreAct()+","+actividades1.getTipo()+","
   +actividades1.getRecurso()+","+actividades1.getTiempo()+","+actividades1.getMateria()));
            
              control.nuevafuncion();
}

ClaseControl.prototype.buscar = function(dato){



		
		control.ask("dato a buscar", /.+/, function(dato){
		if( dato== actividades1.getNombreAct()){
		console.log("Dato encontrado en Nombre  ");
		}else{
		if(dato== actividades1.getTipo()){
		console.log("Dato encontrado en  ");
		}else{
		if(dato==actividades1.getRecurso()){
		console.log("Dato encontrado en Recurso  ");
		}else{
		if(dato==actividades1.getTiempo()){
		console.log("dato encontrado en tiempo  ");
		}else{
		if(dato==actividades.getMateria()){
		console.log("Dato encontrado en Materia  ");
		}
		}
		}
		}
		}
		
		control.nuevafuncion();
		});
	
		
    }

ClaseControl.prototype.modificar = function(){
    vista.pedirdatos();
   
}


ClaseControl.prototype.mostrar = function(){
leer.Leer();

}

ClaseControl.prototype.borrar = function(){

           var data="";
		   fs.writeFile(File, data);
		   console.log("los datos han sido borrados");   
           control.nuevafuncion()

}


ClaseControl.prototype.nuevafuncion= function(){

   control.ask("Quieres otra funcion (s)", /.+/, function(nueva) {

       if (nueva == "s" || nueva === "S" || nueva === "si" || nueva === "SI" || nueva === "Si" || nueva === "sI"){
            console.log("--------------------------------------------------------------------------------------------");
            control.Procesohacer();
        }else{
           process.exit();
        }
    });
}

ClaseControl.prototype.ask = function(question, format, callback) {
    
	var stdin = process.stdin, stdout = process.stdout;
    stdin.resume();
    stdout.write(question + ": ");

    stdin.once('data', function(data) {
       data = data.toString().trim();
      if (format.test(data)) {
        callback(data);
       } else {
        stdout.write("Elige una Opción\n");
        control.ask(question, format, callback);
   }
 });
}

var control = new ClaseControl();
var leer = new claseVista();
  leer.Leer();