function cambiarColores()
{
  var lista=document.getElementById('bloque');
      alert('La cantidad de hijos del nodo div es:'+lista.childNodes.length);
    alert(lista.childNodes[0]); 
    alert(lista.childNodes[0].nodeValue);
   
    alert(lista.childNodes[1]);
    alert(lista.childNodes[1].nodeValue);

    alert(lista.childNodes[2]);
     alert(lista.childNodes[2].nodeValue);
  

    alert(lista.childNodes[3]);
      alert(lista.childNodes[3].nodeValue);
    alert(lista.childNodes[4]);
      alert(lista.childNodes[4].nodeValue);
    alert(lista.childNodes[5]);
      alert(lista.childNodes[5].nodeValue);
    alert(lista.childNodes[6]);
      alert(lista.childNodes[6].nodeValue);
   lista.childNodes[0].style.color='#ff0000';  
  lista.childNodes[1].style.color='#ff0000';
  lista.childNodes[3].style.color='#00ff00';
  lista.childNodes[5].style.color='#0000ff';

}