function CalculateExponente(numero, exponente)
{
	var numero=parseInt(numero);
	var temporal=numero;
	var exponente=parseInt(exponente)
	var i=0;
	for(i=1; i<exponente; i++)
	{
		temporal=temporal*numero;
	
	}
	console.log(temporal);
	self.postMessage({'exp':temporal});
}
self.onmessage = function(e) 
{
	CalculateExponente(e.data.value, e.data.valor);
}

