     var File= "archivo.txt";
     var fs = require('fs');
     var Arreglo = [];
     var json = {};//arreglo del tipo JSON
     
	 var ModuloEntidad = require("./ModuloEntidad.js");
     var ActividadesDidacticas = new ModuloEntidad(); 

     var array = require("./array.js");
	 var objArray = new array();
     
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
	    json["Numero"]= x;
		json["Nombre"] = ActividadesDidacticas.getNombreAct();
        json["Tipo"] = ActividadesDidacticas.getTipo();
        json["Recurso"] = ActividadesDidacticas.getRecurso();
        json["Tiempo"] = ActividadesDidacticas.getTiempo();
        json["Materia"] = ActividadesDidacticas.getMateria();
		
		var  jsonobj =JSON.stringify([json]);
        objArray.setArray(eval(jsonobj));
		 }//fin del primer for
		
	 
    }
	
	
Modulosprocesoshacer.prototype.MostrarDatos = function(){

      		
	 var mostrarhtml = ["<h1>Actividades Didacticas Mostrar Datos</h1><tr><th>Numero_Ac</th><th>Nombre_Ac</th><th>Tipo_Ac</th><th>Recurso_Ac</th><th>Tiempo_Ac</th><th>Materia_Ac</th></tr>" ];
     console.log('tamaño de objeto mostrar', objArray.mostrar().length)
	 for(var i=0; i<objArray.mostrar().length; i++){ 
	  
	   mostrarhtml.push('<tr>'+
	                 '<td>'+(i+1)+[]+'</td>'+
					 //'<td>'+objArray.mostrar()[i]["Numero"]+'</td>'+
					 '<td>'+objArray.mostrar()[i]["Nombre"]+'</td>'+
	                 '<td>'+objArray.mostrar()[i]["Tipo"]+'</td>'+
					 '<td>'+objArray.mostrar()[i]["Recurso"]+'</td>'+
					 '<td>'+objArray.mostrar()[i]["Tiempo"]+'</td>'+
					 '<td>'+objArray.mostrar()[i]["Materia"]+'</td>'+
					 '</tr>');
		 }
	 var cadenahtml='<html>'+'<form action="control.jssp" method="post"><table border="1">'+
				mostrarhtml.join(" ")+'</table>'+
				'<INPUT name="btnFuncion" type="submit" value="Regresar" />'+
				'</form>'+
				'<form action="fileguardar.jssp" method="post">'+
				'<INPUT name="btnFuncion" type="submit" value="Guardar en Archivo" />'+
				'</form></html>';
		 return cadenahtml;
}	


Modulosprocesoshacer.prototype.BuscarDato = function(dato, atributo){
      
	  dato= dato.toString().substring(0,1).toUpperCase()+ dato.substring(1, dato.toString().length).toLowerCase();
	 
	 for(var i=0;i<objArray.mostrar().length;i++){
	
	  
	   if(dato==objArray.mostrar()[i][atributo]){

		console.log('Dato encontrado en:  ' + i);
	    var datoigual='<html>'+
		'<p>Entidad Actividades Didacticas Buscar Dato</p>'+
		'Dato ":  '+dato+ '" encontrado  " '+atributo+' "  Linea: '+(i+1)+
	    '<br>'+
		'<form method=post action="control.jssp">'+
	    '<INPUT name="btnFuncion" type="submit" value="Regresar">'+
	    '<INPUT name="btnFuncion" type="submit" value="Mostrar" />'+
		'</form>'+
		'</br>'+
		'</html>';
		
		return datoigual;

}else{
   
       console.log('no se encontro dato');
		var datonoigual='<html>'+
		'<p>Entidad Actividades Didacticas Buscar Dato</p>'+
		'No se encontro el Dato:  '+dato+
	    '<br>'+
		'<form method=post action="control.jssp">'+
	    '<INPUT name="btnFuncion" type="submit" value="Regresar" />'+
		'<INPUT name="btnFuncion" type="submit" value="Mostrar" />'+ 
	    '</form>'+
		'</html>';
		
		return datonoigual;

}
}
	//res.end();

}

Modulosprocesoshacer.prototype.Modificar = function(linea){

 
     for(var i=0;i<objArray.mostrar().length;i++){ 
     if(linea==objArray.mostrar()[i]["Numero"]){
      
	  var html= '<html>'+
		'<body>'+
		'<p>Entidad Actividades Didacticas Modificar</p>'+
		'<FORM method=POST action="actualizar.jssp">'+
		'<div align=”center” border=”0″>'+
                '<div>'+
                     '<div>Numero de la Actividad:</div> <div><INPUT NAME="nuevoNumero" MAXLENGTH=”25″ TYPE=”TEXT” VALUE="'+objArray.mostrar()[linea]["Numero"]+'"></div>'+
                '</div>'+
			
				'<div>'+
                     '<div>Nombre de la Actividad:</div> <div><INPUT NAME="nuevoNombre" MAXLENGTH=”25″ TYPE=”TEXT” VALUE="'+objArray.mostrar()[linea]["Nombre"]+'"></div>'+
                '</div>'+
                '<div>'+
                     '<div>Tipo de la Actividad:</div> <div><INPUT NAME="nuevoTipo" MAXLENGTH=”25″ TYPE=”TEXT” VALUE="'+objArray.mostrar()[linea]["Tipo"]+'"></div>'+
                '</div>'+
				'<div>'+
                     '<div>Recurso para la Actividad:</div> <div><INPUT NAME="nuevoRecurso" MAXLENGTH=”25″ TYPE=”TEXT” VALUE="'+objArray.mostrar()[linea]["Recurso"]+'"></div>'+
                '</div>'+
				'<div>'+
                     '<div>Tiempo de la Actividad:</div> <div><INPUT NAME="nuevoTiempo" MAXLENGTH=”25″ TYPE=”TEXT” VALUE="'+objArray.mostrar()[linea]["Tiempo"]+'"></div>'+
                '</div>'+
				
				'<div>'+
                     '<div>Materia de la Actividad:</div> <div><INPUT NAME="nuevoMateria" MAXLENGTH=”25″ TYPE=”TEXT” VALUE="'+objArray.mostrar()[linea]["Materia"]+'"></div>'+
                '</div>'+
				
                '<INPUT TYPE="submit" VALUE="Actualizar" NAME="btnFuncion">'+
			'</div>'+
		'</FORM>'+
		'<FORM method=POST action="control.jssp">'+
		'<INPUT TYPE="submit" VALUE="Regresar" NAME="btnFuncion">'+
		'</FORM>'+
		'</body>'+
		'</html>';
			  
	 return html;
	 
  }
  else{
  
   console.log('no se encontro dato');
		var datonoigual='<html>'+
		'<p>Entidad Actividades Didacticas Buscar Dato</p>'+
		'No Existe linea:  '+linea+
	    '<br>'+
		'<form method=post action="control.jssp">'+
	    '<INPUT name="btnFuncion" type="submit" value="Regresar" />'+
		'<INPUT name="btnFuncion" type="submit" value="Mostrar" />'+ 
	    '</form>'+
		'</html>';
		
		return datonoigual;
  }
  }
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
		  json["Nombre"] = ActividadesDidacticas.getNombreAct();
          json["Tipo"] = ActividadesDidacticas.getTipo();
          json["Recurso"] = ActividadesDidacticas.getRecurso();
          json["Tiempo"] = ActividadesDidacticas.getTiempo();
          json["Materia"] = ActividadesDidacticas.getMateria();
          
		  var  jsonobj =JSON.stringify([json]);
          objArray.setArray(eval(jsonobj));	

}

Modulosprocesoshacer.prototype.Eliminar = function(fila){

objArray.EliminarFila(fila);
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
				 remplazo.write('\n'+objArray.mostrar()[i]["Nombre"]+','+
						 objArray.mostrar()[i]["Tipo"]+','+
						 objArray.mostrar()[i]["Recurso"]+','+
						 objArray.mostrar()[i]["Tiempo"]+','+
						 objArray.mostrar()[i]["Materia"]);
				}
				else{
				
				remplazo.write('\n'+objArray.mostrar()[i]["Nombre"]+','+
						 objArray.mostrar()[i]["Tipo"]+','+
						 objArray.mostrar()[i]["Recurso"]+','+
						 objArray.mostrar()[i]["Tiempo"]+','+
						 objArray.mostrar()[i]["Materia"]);
				}
			}
	 
	
      remplazo.end();
		});
  } 

//funcion sin uso, se creo para tratar de solucionar el reenvio de datos al aarreglo
Modulosprocesoshacer.prototype.funcionGuardar = function(){

var html= '<html>'+
		'<body>'+
	     '<h1>Entidad Actividades Didacticas Guardar Datos</h1>'+
		'<FORM method=POST action="guardar.jssp">'+
		'<div>'+
                '<div>'+
                     '<div>Nombre de la Actividad:</div><div><INPUT NAME="txtNombre" MAXLENGTH=”25″ TYPE=”TEXT” VALUE=""></div>'+
                '</div>'+
			    '<div>'+
                     '<div>Tipo de la Actividad:</div><div><INPUT NAME="txtTipo" MAXLENGTH=”25″ TYPE=”TEXT” VALUE=""></div>'+
                '</div>'+
                '<div>'+
                     '<div>Recurso de la Actividad:</div><div><INPUT NAME="txtRecurso" MAXLENGTH=”25″ TYPE=”TEXT” VALUE=""></div>'+
                '</div>'+
				'<div>'+
                     '<div>Tiempo para la Actividad:</div><div><INPUT NAME="txtTiempo" MAXLENGTH=”25″ TYPE=”TEXT” VALUE=""></div>'+
                '</div>'+
				'<div>'+
                     '<div>Materia de la Actividad:</div><div><INPUT NAME="txtMateria" MAXLENGTH=”25″ TYPE=”TEXT” VALUE=""></div>'+
                '</div>'+
				
				'<INPUT TYPE="submit" VALUE="Guardar" NAME="btnFuncion">'+
				'<INPUT TYPE="submit" VALUE="Regresar" NAME="btnFuncion">'+
				
			'</div>'+
		'</FORM>'+
		'</body>'+
		'</html>';
			  
	 return html;

}

module.exports.Modulosprocesoshacer = Modulosprocesoshacer;  

  