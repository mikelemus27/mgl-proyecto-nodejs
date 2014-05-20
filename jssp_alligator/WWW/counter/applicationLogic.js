(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText("");
	var counter = 1;
	application.get("counter",function(value){
		log.debug("ApplicationLOGIC.JSSP, value - " + value);
		if(value == undefined){
			application.set("counter",1);
		}else{
			counter = value+1;
			application.set("counter",counter);
		}
		request.parameters.counter = counter;
		commands.forward("http://localhost:8888/counter/view.jssp");				
	});				

})