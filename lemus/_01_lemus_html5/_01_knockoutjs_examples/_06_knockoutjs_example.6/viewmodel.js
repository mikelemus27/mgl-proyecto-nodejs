var AppSpace = AppSpace || {};

(function()
{
    loadjs= function(callback){
        alert("hi loadjs");
        var head= document.getElementsByTagName('head')[0];

    var script = document.createElement("script")
    script.type = "text/javascript";
 
    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src='knockout-3.1.0.js';
   // script.src='saludo.js';
     head.appendChild(script);
};
  

  AppSpace.loadjs=loadjs;
})();

 
    AppViewModel=function () 
            {
                this.firstName = ko.observable("Bert");
                this.lastName = ko.observable("Bertington");
            
                this.fullName = ko.computed(function() {
                    return this.firstName() + " " + this.lastName();    
                }, this);
            
                this.capitalizeLastName = function() {
                    var currentVal = this.lastName();        // Read the current value
                    this.lastName(currentVal.toUpperCase()); // Write back a modified value
                };    
            };    