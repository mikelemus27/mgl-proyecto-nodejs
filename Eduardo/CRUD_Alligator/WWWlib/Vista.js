  var fs= require ("fs");
  var entidad = require ("./Entidad.js");
  var temario1 = new entidad();
  
  var Vista = function (){
 
  }
  
  Vista.prototype.leerARCHIVO = function(){
  
		var numLINEAS = fs.readFileSync('./archivo.csv').toString().split('\n').length;
          //ciclo para leer linea individualmente
		  for(var x=0;  x < numLINEAS ; x++){
	
		    var array = fs.readFileSync('./archivo.csv').toString().split('\n');
			var txtLINEA=array[x].split(',');
			
			//ahora palabra por palabra para insertarlas en el array del modelo de la entidad
				for(var i=0; i<5; i++){
			     	

					
					if(i===0){
					var vltema=txtLINEA[i];
					temario1.setTema(vltema);
					}
					else if(i===1){
					var vlsubtemas=txtLINEA[i];
					temario1.setSubtemas(vlsubtemas);
					}
					else if(i===2){
					var vlunidades=txtLINEA[i];
					temario1.setUnidades(vlunidades);
					}
					else if(i===3){
					var vlOG=txtLINEA[i];
					temario1.setObjG(vlOG);
					}
					else if(i===4){
					var vlbibliografia=txtLINEA[i];
					temario1.setBibliografia(vlbibliografia);
					}
					
				}
		
		  
		  }
		 
  }
  
  Vista.prototype.Mostrar = function (){
    Vista.prototype.leerARCHIVO();
               
	 var cadena='<html>'+
	 '<FORM method=post action="pedirdatos.jssp">'+
	'Tema : <label>'+temario1.getTema()+'</label> <br/>'+
	'Subtemas : <label>'+temario1.getSubtemas()+'</label> <br/>'+
	'Unidades : <label>'+temario1.getUnidades()+'</label> <br/>'+
	'Objetivo General : <label>'+temario1.getObjG()+'</label> <br/>'+
	'Bibliografia : <label>'+temario1.getBibliografia()+'</label> <br/>'+
	'<INPUT name="btnINDICADOR" type="submit" value="Terminado" />'+
    '</FORM>'+'</html>';		
     return cadena;
  
  }
  
  Vista.prototype.Pedirdatos = function(tema,subtemas,unidades,OG,bibliografia){
  
  temario1.setTema(tema);
  temario1.setSubtemas(subtemas);
  temario1.setUnidades(unidades);
  temario1.setObjG(OG);
  temario1.setBibliografia(bibliografia);
  
  var valor= Vista.prototype.Cadena();
	  fs.writeFile("./archivo.csv", valor);

}

  Vista.prototype.Editar = function(){
     Vista.prototype.leerARCHIVO();
	 var cadena ='<html>'+
	'<FORM method=post action="http://127.0.0.1:8888/servidor.js">'+
	'FORMULARIO PARA EDITAR<br/>Tema :<INPUT type=text name="txtTema" value="'+temario1.getTema()+'"/>'+
	'<br/>Subtemas :<INPUT type=text name="txtSubtemas" value="'+temario1.getSubtemas()+'"/>'+
	'<br/>Unidades :<INPUT type=text name="txtUnidades" value="'+temario1.getUnidades()+'"/>'+
	'<br/>Objetivo General :<INPUT type=text name="txtOG" value="'+temario1.getObjG()+'"/>'+
	'<br/>Bibliografia :<INPUT type=text name="txtBibliografia" value="'+temario1.getBibliografia()+'"/>'+
	'<br/><INPUT name="btnINDICADOR" type="submit" value="Guardar" />'+
    '</FORM>'+'</html>';  
	return cadena;
  }

  Vista.prototype.Cadena = function(){
   var x=temario1.getTema()+","+temario1.getSubtemas()+","+temario1.getUnidades()+","+temario1.getObjG()+","+temario1.getBibliografia();
   return x;
  }
  
    Vista.prototype.Busqueda= function(valA,valB){
    Vista.prototype.leerARCHIVO();
	var texto="";
    if(valA==="1"){
	 if(valB===temario1.getTema()){
	 texto="Si se encontro";
	 }
	 else{
	 texto="No se encontro";
	 }
	}
	else if(valA==="2"){
	 if(valB===temario1.getSubtemas()){
	 texto="Si se encontro";
	 }
	 else{
	 texto="No se encontro";
	 }
	}
	else if(valA==="3"){
	 if(valB===temario1.getUnidades()){
	 texto="Si se encontro";
	 }
	 else{
	 texto="No se encontro";
	 }
	}
	else if(valA==="4"){
	 if(valB===temario1.getObjG()){
	 texto="Si se encontro";
	 }
	 else{
	texto="No se encontro";
	 }
	}
	else if(valA==="5"){ 
	if(valB===temario1.getBibliografia()){
	 texto="Si se encontro";
	 }
	 else{
	 texto="No se encontro";
	 }
	}
	
  return texto;
	
  }
  
  
 module.exports = Vista;