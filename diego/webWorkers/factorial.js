function factorial(c){
	r=1
	for (var a=1;a<=c;a++) {
		r=r*a
    }
    self.postMessage({'FactValue': r });
}
self.onmessage = function(c) {
  factorial(c.data.value);
}