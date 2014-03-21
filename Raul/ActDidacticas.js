// try to always scope your API, Object Types, properties in a namespace   
var mymodule = mymodule || {};//nombre del namespace

//Clase Modelo -------------------------------------------------------------------
;(function(){
  
  // Constructor
  function ActividadesDidacticas( nombre, tipo, recurso, tiempo, materia){
    this._nombre = nombre; // as convention, ._*** is for privates properties
    this._tipo = tipo;
	this._recurso = recurso;
	this._tiempo = tiempo;
  }
  
  
  // A ObjectType Method
  ActividadesDidacticas.prototype.setNombreAct = function(nombre){
    // Note: here, we use the js/jQuery style, setter/getter in one method
    if (typeof nombre === "undefined"){
      return this._nombre ;
    }else{
      this._nombre = nombre;
     }
  }

      ActividadesDidacticas.prototype.getNombreAct = function (){
      return this._nombre;
      }  
   
  
  // A ObjectType Method
  ActividadesDidacticas.prototype.setTipo = function(tipo){
    // Note: here, we use the js/jQuery style, setter/getter in one method
    if (typeof tipo === "undefined"){
      return this._tipo ;
    }else{
      this._tipo = tipo;
     }
   }//fin de prototype tipo
 
  ActividadesDidacticas.prototype.getTipo = function(){
  return this._tipo;
  }

  
  // A ObjectType Method
  ActividadesDidacticas.prototype.setRecurso = function(recurso){
    // Note: here, we use the js/jQuery style, setter/getter in one method
    if (typeof recurso === "undefined"){
      return this._recurso ;
    }else{
      this._recurso = recurso;
     }
   }//fin de prototype tipo
 
  ActividadesDidacticas.prototype.getRecurso = function(){
  return this._recurso;
  }
  
   // A ObjectType Method
  ActividadesDidacticas.prototype.setTiempo = function(tiempo){
    // Note: here, we use the js/jQuery style, setter/getter in one method
    if (typeof tiempo === "undefined"){
      return this._tiempo;
    }else{
      this._tiempo = tiempo;
     }
   }//fin de prototype tiempo
 
  ActividadesDidacticas.prototype.getTiempo = function(){
  return this._tiempo;
  }
  
  
    // A ObjectType Method
  ActividadesDidacticas.prototype.setMateria = function(materia){
    // Note: here, we use the js/jQuery style, setter/getter in one method
     if (typeof materia === "undefined"){
      return this._tiempo;
      }else{
      this._materia = materia;
     }
   }//fin de prototype materia
 
     ActividadesDidacticas.prototype.getMateria = function(){
    return this._materia;
    }
	
  // mymodule namespace
  mymodule.ActividadesDidacticas = ActividadesDidacticas;
  
})(); 

var actividades1 = new mymodule.ActividadesDidacticas();

//Clase Vista ---------------------------------------------------------
 
function Vistadatos(){

} 
  
Vistadatos.prototype.PedirGuardardatos = function(datos){

     control.ask("Nombre de la Actividad", /.+/, function(nombre) {
      actividades1.setNombreAct(nombre);
        control.ask("Tipo de Actividad (Grupo o Individual)", /.+/, function(tipo) {
         actividades1.setTipo(tipo); 
		  control.ask("Recursos para la Actividad (Internet, libros, etc.)", /.+/, function(recurso) {
           actividades1.setRecurso(recurso); 
		    control.ask("Duracion de la actividad", /.+/, function(tiempo) {
             actividades1.setTiempo(tiempo); 
               control.ask("Materia", /.+/, function(materia) {
                actividades1.setMateria(materia); 
 
	 control.ask("Quieres otra funcion (s)", /.+/, function(nueva) {

        if (nueva == "s" || nueva === "S" || nueva === "si" || nueva === "SI" || nueva === "Si" || nueva === "sI"){
            control.Procesohacer();
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

			   
Vistadatos.prototype.MostrarDatos = function(datos){
    
       actividades1.getNombreAct();
	   actividades1.getTipo();
	   actividades1.getRecurso();
	   actividades1.getTiempo();
	   actividades1.getMateria();
	
       console.log("El nombre de la actividad es:" + actividades1.getNombreAct() );
	   console.log("La Actividad es :" + actividades1.getTipo() );
	   console.log("Recursos :" + actividades1.getRecurso() );
	   console.log("Duracion: " + actividades1.getTiempo());
	   console.log("Materia: " + actividades1.getMateria());
	
	
	control.ask("Quieres otra funcion (s)", /.+/, function(nueva) {

      if (nueva == "s" || nueva === "S" || nueva === "si" || nueva === "SI" || nueva === "Si" || nueva === "sI"){
          control.Procesohacer();
         }else{
         process.exit();
       }
    });
}

var vista = new Vistadatos ();

//Clase Control -------------------------------------------------------------------------
function Control(){

}
Control.prototype.ask = function(question, format, callback) {
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

Control.prototype.Procesohacer = function(){

control.ask("Que proceso quieres (Mostrar o Guardar)", /.+/, function(proces) {
 
      if(proces =="Guardar" || proces =="guardar" || proces =="G" || proces =="g"){
        vista.PedirGuardardatos();
        }else{
           if(proces=="Mostrar" || proces =="mostrar" || proces =="m" || proces =="M"){
              vista.MostrarDatos();
           }else{
             console.log("Error no se tiene la opcion: ", proces);
           process.exit();
          }
        }
    });
}

var control = new Control();
control.Procesohacer();