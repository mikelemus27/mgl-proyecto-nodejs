function CalculateFactorial(numero)
{
	var numero=parseInt(numero);
	var temporal=numero;
	var i=0;
	for(i=1; i<=numero; i++)
	{
		temporal=temporal*(numero-1);
		numero=numero-1;
	
	}
	console.log(temporal);
	self.postMessage({'factorial':temporal});
}
self.onmessage = function(e) 
{
	CalculateFactorial(e.data.value);
}

