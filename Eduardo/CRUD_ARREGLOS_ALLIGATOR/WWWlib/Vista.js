  var fs= require ("fs");
  var entidad = require ("./Entidad.js");
  var temario1 = new entidad();
  
  var array = require("./ArregloTemario.js");
  var objArray = new array();
  var bandera = "1";
  var elemento = {};
  var pos = "-1";
  
  
  var Vista = function (){
	if (bandera=="1"){
		Vista.prototype.CargarArreglo();
		bandera="0";
	}
 
  }
  
    Vista.prototype.GuardarCambio = function(){
	
 var contenedor = fs.createWriteStream("archivo.csv");
 
	 contenedor.once('open', function(func) {
			
			for(var i=0; i < objArray.getobjARRAY().length; i++){
			
				if(objArray.getobjARRAY().length-1== i ){
				 contenedor.write(objArray.getobjARRAY()[i]["tema"]+','+
						 objArray.getobjARRAY()[i]["subtemas"]+','+
						 objArray.getobjARRAY()[i]["unidades"]+','+
						 objArray.getobjARRAY()[i]["OG"]+','+
						 objArray.getobjARRAY()[i]["bibliografia"]+'\r');
				}
				else{
				
				contenedor.write(objArray.getobjARRAY()[i]["tema"]+','+
						 objArray.getobjARRAY()[i]["subtemas"]+','+
						 objArray.getobjARRAY()[i]["unidades"]+','+
						 objArray.getobjARRAY()[i]["OG"]+','+
						 objArray.getobjARRAY()[i]["bibliografia"]+'\n');
				}
			}
	 
	
      contenedor.end();
		});
  } 
  
  Vista.prototype.CargarArreglo= function(){
  
		var numLINEAS = fs.readFileSync('./archivo.csv').toString().split('\n').length;
          //ciclo para leer linea individualmente
		  for(var x=0;  x < numLINEAS ; x++){
	
		    var array = fs.readFileSync('./archivo.csv').toString().split('\n');
			var txtLINEA=array[x].split(',');
			
			//ahora palabra por palabra para insertarlas en el array del modelo de la entidad
				for(var i=0; i<5; i++){
			     	

					
					if(i===0){
					temario1.setTema(txtLINEA[i]);
					}
					else if(i===1){
					temario1.setSubtemas(txtLINEA[i]);
					}
					else if(i===2){
					temario1.setUnidades(txtLINEA[i]);
					}
					else if(i===3){
					temario1.setObjG(txtLINEA[i]);
					}
					else if(i===4){
					temario1.setBibliografia(txtLINEA[i]);
					}
					
				}
			
			 elemento["Tema"] = temario1.getTema();
			 elemento["Subtemas"] = temario1.getSubtemas();
			 elemento["Unidades"] = temario1.getUnidades();
			 elemento["OG"] = temario1.getObjG();
			 elemento["Bibliografia"] = temario1.getBibliografia();

			 var R=JSON.stringify([elemento]);
  
			 objArray.setobjARRAY(eval(R)); 
				
		
		  
		  }
		 
  }
  
  Vista.prototype.Mostrar = function (){
  
	 var contenido = ["<tr><th>Tema</th><th>Subtemas</th><th>Unidades</th><th>OG</th><th>Bibliografia</th></tr>" ];
      
	 for(var i=0; i< objArray.getobjARRAY().length; i++){ 
	  
	  contenido.push('<tr>'+
					 '<td>'+objArray.getobjARRAY()[i]["Tema"]+'</td>'+
	                 '<td>'+objArray.getobjARRAY()[i]["Subtemas"]+'</td>'+
					 '<td>'+objArray.getobjARRAY()[i]["Unidades"]+'</td>'+
					 '<td>'+objArray.getobjARRAY()[i]["OG"]+'</td>'+
					 '<td>'+objArray.getobjARRAY()[i]["Bibliografia"]+'</td>'+
					 '<td align="center" ><input type="radio" name="radios" value="'+i+'" /></td>'+
					 '</tr>');
	 }
   
               
	 var cadena='<html>'+'<form action="./editar.jssp"><table border="1">'+
				contenido.join(" ")+'</table>'+
				'<INPUT name="btnINDICADOR" type="submit" value="Salir" />'+
		        '<INPUT name="btnINDICADOR" type="submit" value="Editar" />'+
		        '<INPUT name="btnINDICADOR" type="submit" value="Eliminar" />'+
				'<INPUT name="btnINDICADOR" type="submit" value="Guardar en Archivo" />'+
				'</form></html>';
     return cadena;
  
  }
  
  Vista.prototype.Pedirdatos = function(tema,subtemas,unidades,OG,bibliografia){
  
  temario1.setTema(tema);
  temario1.setSubtemas(subtemas);
  temario1.setUnidades(unidades);
  temario1.setObjG(OG);
  temario1.setBibliografia(bibliografia);
  
  elemento["Tema"] = temario1.getTema();
  elemento["Subtemas"] = temario1.getSubtemas();
  elemento["Unidades"] = temario1.getUnidades();
  elemento["OG"] = temario1.getObjG();
  elemento["Bibliografia"] = temario1.getBibliografia();

  var R=JSON.stringify([elemento]);
  
  objArray.setobjARRAY(eval(R));
  
 

}

  Vista.prototype.Modificar = function(val1,val2,val3,val4,val5){
    objArray.Cambiar(val1,val2,val3,val4,val5,pos); 
  }
  
  Vista.prototype.Borrar= function(val){
  objArray.Borrar(val);
  }

  
    Vista.prototype.Busqueda= function(dato){
	var texto="null";
	
		for(var i=0; i < objArray.getobjARRAY().length; i++){
					if(objArray.getobjARRAY()[i] == dato){
						texto="Si se encontro";
						break;
					}
					else{
						texto="no se encontro";
					}
			}
			
		
		  
		  return texto;
		  }
		  
		Vista.prototype.valPos= function (val){
			pos=val;
		}
  
  
 module.exports.Vista = Vista;
 