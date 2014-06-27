function potencia(n,b){
	//b=1.000000001;
	for (var i=1,r=1;i<=n;i++) {
		r=r*b;
    }
    self.postMessage({'PowValue': r});
}
self.onmessage = function(n) {
  potencia(n.data.value,n.data.value1);
}