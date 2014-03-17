var mymodule = mymodule || {};//nombre del namespace
var rs = require("fs");

//---------------Clase Modelo-------------------------------------------
;(function(){
  
  // Constructor
  function ActividadesDidacticas( nombre, nomArch, tipo, recurso, tiempo, materia ){
    this._nombre = nombre; // as convention, ._*** is for privates properties
    this._nomArch = nomArch;
	this._tipo = tipo;
	this._recurso = recurso;
	this._tiempo = tiempo;
	this._materia = materia;
  }
   // A ObjectType Method
  ActividadesDidacticas.prototype.setNomArch = function(nomArch){
    
      this._nomArch = nomArch;     
}

  ActividadesDidacticas.prototype.getNomArch = function (){
      return this._nomArch;
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

function VistaActividadesD(){

}
 
VistaActividadesD.prototype.pedirdatos =function (datos){

    control.ask("Nota! si el archivo no exixte se creara uno nuevo" +"\n" + "Nombre del archivo y la extencion: " , /.+/, function(nomArch){
       actividades1.setNomArch(nomArch);
        control.ask("Nombre de la Actividad", /.+/, function(nombre) {
         actividades1.setNombreAct(nombre);
	        control.ask("Tipo de la Actividad", /.+/, function(tipo) {
             actividades1.setTipo(tipo);  
			  control.ask("Recursos para la Actividad (Internet, libros, etc.)", /.+/, function(recurso) {
               actividades1.setRecurso(recurso);
			    control.ask("Duracion", /.+/, function(tiempo) {
                  actividades1.setTiempo(tiempo);
				    control.ask("Materia", /.+/, function(materia) {
                    actividades1.setMateria(materia);
     control.guardar();    
     control.nuevafuncion();
            });
	       });
	      });
	     });
	   });
     });
}

			   
VistaActividadesD.prototype.LeerDatos = function (mostrar){
 
	  control.ask("Nombre del archivo y la extencion", /.+/, function(nomArch){
	    actividades1.setNomArch(nomArch); 
        rs.readFile(actividades1.getNomArch(), function(error, data){
 
     if (error) throw error;
        console.log("contenido en el archivo: \n" + data);
        control.nuevafuncion();
        });	  
      });
}

var vista = new VistaActividadesD ();
//------------------Fin clase Vista-------------------------------------------------------

//-------------------Clase Control--------------------------------------------------------
//escribir datos en el archivo

function ClaseControl(){

}
ClaseControl.prototype.guardar = function(datos){

   actividades1.getNomArch();
   var File = actividades1.getNomArch();
   var arr = new Array();
   
   arr[0] = "Nombre de la actividad: " + actividades1.getNombreAct() + "  ";
   arr[1] = "Tipo de actividad (gru, ind): " + actividades1.getTipo() + "  ";
   arr[2] = "Recurso para la actividad: " + actividades1.getRecurso() + "  ";
   arr[3] = "Tiempo: " + actividades1.getTiempo() + "  ";
   arr[4] = "Materia: " + actividades1.getMateria() + "  ";
   
  
   
	for(var i =0; i<5; i++){
	   rs.appendFile(File, arr[i]+ i +"\n");
   }

}


ClaseControl.prototype.Procesohacer = function(){

     control.ask("Que proceso quieres (Leer o Guardar)", /.+/, function(proces) {
          
		  if(proces =="Guardar" || proces =="guardar" || proces =="G" || proces =="g"){
              vista.pedirdatos();
            }else{
               if(proces=="Leer" || proces =="leer" || proces =="l" || proces =="L"){
               vista.LeerDatos();
              }else{
		        
                   console.log("Error no se tiene la opcion: ", proces);
                    process.exit();
                 
               }
			}
        });
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
control.Procesohacer();
