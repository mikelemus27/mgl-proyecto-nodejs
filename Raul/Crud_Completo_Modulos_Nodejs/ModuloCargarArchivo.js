var File= "archivo.txt";
var fs = require('fs');

var ModuloEntidad = require("./ModuloEntidad.js");
var ActividadesDidacticas = new ModuloEntidad(); 

function cargarModeloArchivo (){
     	  
}

cargarModeloArchivo.prototype.CargarCargar = function(){
	
	console.log('clase mostrar');
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
		
    }
	
	
cargarModeloArchivo.prototype.Mostrar = function(){

        cargarModeloArchivo.prototype.CargarCargar(); 
         		
		Anombre=ActividadesDidacticas.getNombreAct();
		Atipo=ActividadesDidacticas.getTipo();
		Arecurso=ActividadesDidacticas.getRecurso();
		Atiempo=ActividadesDidacticas.getTiempo();
		Amateria=ActividadesDidacticas.getMateria();
		 
		 
		 console.log('nombremateria   '+Anombre );
	   var html= '<html>'+
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
		'Direccion: http://127.0.0.1 Puerto: 3000'+
		'</td>'+
	    '</tr>'+
		'<tr>'+
		'<td>'+
	     '<FORM method=POST action="http://127.0.0.1:3000/index.js">'+
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

        cargarModeloArchivo.prototype.CargarCargar();
    
	    console.log('valor entidadadato dato      '+ dato);
		console.log('valor entidad  actividadesdi       '+ ActividadesDidacticas.getNombreAct());
		if(dato==ActividadesDidacticas.getNombreAct()){

      console.log('se encontro dato          : '+ dato);
		
	    var datoigual='<html>'+
		'Dato encontrado en Nombre de la Actividad:  '+dato+
	    '<br>'+
		'<form method=post action="http://127.0.0.1:3000/servidor.js">'+
	    '<INPUT name="btnFuncion" type="submit" value="Regresar">'+
	    '<INPUT name="btnFuncion" type="submit" value="Mostrar" />'+
		'</form>'+
		'</br>'+
		'</html>';
		
		return datoigual;
     

}else{

   if(dato==ActividadesDidacticas.getTipo()){

         console.log('se encontro dato          : '+ dato);
		
	    var datoigual='<html>'+
		'Dato encontrado en Tipo de Actividad:  '+dato+
	    '<br>'+
		'<form method=post action="http://127.0.0.1:3000/servidor.js">'+
	    '<INPUT name="btnFuncion" type="submit" value="Regresar">'+
	    '<INPUT name="btnFuncion" type="submit" value="Mostrar" />'+
		'</form>'+
		'</br>'+
		'</html>';
		
		return datoigual;


}else{
   if(dato==ActividadesDidacticas.getRecurso()){


           console.log('se encontro dato          : '+ dato);
		
	    var datoigual='<html>'+
		'Dato encontrado  REcursos:  '+dato+
	    '<br>'+
		'<form method=post action="http://127.0.0.1:3000/servidor.js">'+
	    '<INPUT name="btnFuncion" type="submit" value="Regresar">'+
	    '<INPUT name="btnFuncion" type="submit" value="Mostrar" />'+
		'</form>'+
		'</br>'+
		'</html>';
		
		return datoigual;



}else{
   if(dato==ActividadesDidacticas.getTiempo()){


      console.log('se encontro dato          : '+ dato);
		
	    var datoigual='<html>'+
		'Dato encontrado en Tiempo para la Actividad:  '+dato+
	    '<br>'+
		'<form method=post action="http://127.0.0.1:3000/servidor.js">'+
	    '<INPUT name="btnFuncion" type="submit" value="Regresar">'+
	    '<INPUT name="btnFuncion" type="submit" value="Mostrar" />'+
		'</form>'+
		'</br>'+
		'</html>';
		
		return datoigual;

}else{

   if(dato==ActividadesDidacticas.getMateria()){

        console.log('se encontro dato          : '+ dato);
		
	    var datoigual='<html>'+
		'Dato encontrado Nombre de la Materia:  '+dato+
	    '<br>'+
		'<form method=post action="http://127.0.0.1:3000/servidor.js">'+
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
		'No se encontro el Dato:  '+dato+
	    '<br>'+
		'<form method=post action="http://127.0.0.1:3000/servidor.js">'+
	    '<INPUT name="btnFuncion" type="submit" value="Regresar" />'+
		'<INPUT name="btnFuncion" type="submit" value="Mostrar" />'+ 
	    '</form>'+
		'</html>';
		
		return datonoigual;

}
}
}
}
} 
}	
		
		res.end();
    

}

module.exports=cargarModeloArchivo;  

  