var File= "archivo.txt";
var fs = require('fs');
var Array = [];
var ModuloEntidad = require("./ModuloEntidad.js");
var ActividadesDidacticas = new ModuloEntidad(); 

function cargarModeloArchivo (){
     	  
}

cargarModeloArchivo.prototype.CargarCargar = function(){
	
	console.log('clase cargarar');
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


		  }
		Anombre=ActividadesDidacticas.getNombreAct();
		Atipo=ActividadesDidacticas.getTipo();
		Arecurso=ActividadesDidacticas.getRecurso();
		Atiempo=ActividadesDidacticas.getTiempo();
		Amateria=ActividadesDidacticas.getMateria();
	   
	   Array[0]=Anombre;
	   Array[1]=Atipo;
	   Array[2]=Arecurso;
	   Array[3]=Atiempo;
	   Array[4]=Amateria;
	 
    }
	
	
cargarModeloArchivo.prototype.Mostrar = function(){

      
          cargarModeloArchivo.prototype.CargarCargar();  		
	  
	   var html= '<html>'+
	   '<p>Entidad Actividades Didacticas Mostrar</p>'+
	   '<div>'+
	   '<table border="1">'+
		'<tr>'+
	    '<td colspan="5">'+
	    'CRUD COMPLETO'+
	    ' Entidad Actividades Didacticas'+
		"</td>"+
		'</tr>'+
	    '<tr>'+
	    '<td>Ac Nombre</td>'+'<td>Ac Tipo</td>'+'<td>Ac Recurso</td>'+'<td>Ac Tiempo</td>'+'<td>Ac Materia</td>'+
        '</tr>'+
		'<tr>'+
		'<td>'+Anombre+
        '</td>'+ 
		'<td>'+Atipo+
		'</td>'+
		'<td>'+Arecurso+ 
		'</td>'+
		'<td>'+Atiempo+
		'</td>'+
        '<td>'+Amateria+
		'</td>'+
        '</tr>'+
		'<tr>'+
	    '<td colspan="5">'+
		'Direccion: http://127.0.0.1 Puerto: 8888'+
		'</td>'+
	    '</tr>'+
		'<tr>'+
		'<td>'+
	     '<FORM method=POST action="control.jssp">'+
		'<INPUT TYPE="submit" VALUE="Regresar" NAME="btnFuncion" />'+
		'</FORM>'+
		'</td>'+
		'</tr>'+
		'</table>'+
		'</div>'+
        '</body>'+
		'</html>';
		 return html;
}	


cargarModeloArchivo.prototype.BuscarDato = function(dato){
      
	  this.dato=dato;
	  dato= dato.toString().substring(0,1).toUpperCase()+ dato.substring(1, dato.toString().length).toLowerCase();
	 
	  cargarModeloArchivo.prototype.CargarCargar();
	    //console.log('materia: ', ActividadesDidacticas.getMateria()); 
      var propiedad="";
     for(var i=0;i<Array.length;i++){
	
	   if(dato==Array[i]){

		if(i==0){
	   propiedad="Nombre Actividad";
	   }else{
	   if(i==1){
	   propiedad="Tipo de Actividad";
	   }else{
	   if(i==2){
	   proiedad=" Recurso";
	   }else{
	   if(1==3){
	   propiedad="Tiempo"
	   }else{
	   if(i==4){
	   propiedad="Materia";
	   }
	   }
	   }
	   }
	   }
		
	    var datoigual='<html>'+
		'<p>Entidad Actividades Didacticas Buscar Dato</p>'+
		'Dato ":  '+dato+ '" encontrado en  "'+propiedad+'"'+
	    '<br>'+
		'<form method=post action="control.jssp">'+
	    '<INPUT name="btnFuncion" type="submit" value="Regresar">'+
	    '<INPUT name="btnFuncion" type="submit" value="Mostrar" />'+
		'</form>'+
		'</br>'+
		'</html>';
		
		return datoigual;

}else{
   
   if(dato!=ActividadesDidacticas.getNombreAct() && dato!=ActividadesDidacticas.getTipo() && dato!=ActividadesDidacticas.getRecurso() 
		&& dato!=ActividadesDidacticas.getTiempo() && dato!=ActividadesDidacticas.getMateria()){
		    console.log('no ');
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
}
	//res.end();

}

cargarModeloArchivo.prototype.Modificar = function(){

cargarModeloArchivo.prototype.CargarCargar(); 
        
	    var html= '<html>'+
		'<p>Entidad Actividades Didacticas Modificar</p>'+
		'<div>'+
	   '<FORM method=POST action="guardar.jssp">'+
		'<INPUT TYPE="submit" VALUE="Regresar" NAME="btnFuncion"/>'+
		'<div align=”center” border=”0″>'+
                '<div>'+
                     '<div>Nombre de la Actividad:</div> <div><INPUT NAME="txtNombre" MAXLENGTH=”25″ TYPE=”TEXT” VALUE="'+Anombre+'"></div>'+
                '</div>'+
                '<div>'+
                     '<div>Tipo de la Actividad:</div> <div><INPUT NAME="txtTipo" MAXLENGTH=”25″ TYPE=”TEXT” VALUE="'+Atipo+'"></div>'+
                '</div>'+
				'<div>'+
                     '<div>Recurso para la Actividad:</div> <div><INPUT NAME="txtRecurso" MAXLENGTH=”25″ TYPE=”TEXT” VALUE="'+Arecurso+'"></div>'+
                '</div>'+
				'<div>'+
                     '<div>Tiempo de la Actividad:</div> <div><INPUT NAME="txtTiempo" MAXLENGTH=”25″ TYPE=”TEXT” VALUE="'+Atiempo+'"></div>'+
                '</div>'+
				'<div>'+
                     '<div>Materia de la Actividad:</div> <div><INPUT NAME="txtMateria" MAXLENGTH=”25″ TYPE=”TEXT” VALUE="'+Amateria+'"></div>'+
                '</div>'+
                '<INPUT TYPE="submit" VALUE="Guardar" NAME="btnFuncion">'+
				'<INPUT TYPE="submit" VALUE="Regresar" NAME="btnFuncion">'+
            '</div>'+
		'</FORM>'+
		'</div>'+
        '</body>'+
		'</html>';
			  
	 return html;
	 //res.end();

}

cargarModeloArchivo.prototype.GuardarDatos = function(nombre,tipo,recurso,tiempo,materia){

         setNom= nombre.toString().substring(0,1).toUpperCase()+ nombre.substring(1, nombre.toString().length).toLowerCase();
		 setTip= tipo.toString().substring(0,1).toUpperCase()+ tipo.substring(1, tipo.toString().length).toLowerCase();
		 setRe= recurso.toString().substring(0,1).toUpperCase()+ recurso.substring(1, recurso.toString().length).toLowerCase();
		 setTiem= tiempo.toString().substring(0,1).toUpperCase()+ tiempo.substring(1, tiempo.toString().length).toLowerCase();
		 setMat= materia.toString().substring(0,1).toUpperCase()+ materia.substring(1, materia.toString().length).toLowerCase();
          
	      ActividadesDidacticas.setNombreAct(setNom);
		  ActividadesDidacticas.setTipo(setTip);
		  ActividadesDidacticas.setRecurso(setRe);
		  ActividadesDidacticas.setTiempo(setTiem);
		  ActividadesDidacticas.setMateria(setMat);
     
		fs.writeFile(File,(ActividadesDidacticas.getNombreAct()+","+ActividadesDidacticas.getTipo()+","+ActividadesDidacticas.getRecurso()+","+ActividadesDidacticas.getTiempo()+","+ActividadesDidacticas.getMateria()));
		
		
}

cargarModeloArchivo.prototype.Eliminar = function(){


fs.writeFile(File, " ");
}

module.exports.cargarModeloArchivo = cargarModeloArchivo;  

  