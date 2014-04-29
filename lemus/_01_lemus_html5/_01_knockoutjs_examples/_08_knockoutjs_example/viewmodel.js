var AppSpace = AppSpace || {};

(function()
{
    loadjs= function(sources,callback){
        alert("hi loadjs");
        var head= document.getElementsByTagName('head')[0];
var srcs=sources;
for (i=0;i<srcs.length;i++)
{
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

    script.src=srcs[i];
   // script.src='saludo.js';
     head.appendChild(script);
}
};

  AppSpace.loadjs=loadjs;
})();

 // This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
       (function()
        {
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
             AppSpace.AppViewModel=AppViewModel;
        })();
        
        (function(){
             execute=function (){
                       alert("hi dynamic1s"); 
                    
                    var x= new AppSpace.AppViewModel();
                ko.applyBindings(x);
             
                alert("hi dynamic");
                }
                AppSpace.execute=execute;
       
      })();
   
      
         (function()
         {
             start=function ()
             {
                 var src = new Array()
          src[0]='knockout-3.1.0.js';
             src[1]='jquery.js';
                 
               AppSpace.loadjs(src,AppSpace.execute);
            }
   
            AppSpace.start=start;
      })();
        
