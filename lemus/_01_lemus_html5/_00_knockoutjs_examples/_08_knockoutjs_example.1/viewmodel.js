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
                    
                   // var x= new AppSpace.AppViewModel();
                ko.applyBindings(new TaskListViewModel());
             
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
          src[1]='jquery-2.1.0.min.js';
                 
               AppSpace.loadjs(src,AppSpace.execute);
            }
   
            AppSpace.start=start;
      })();
        
         /*****************************************************************/       
        function Task(data) {
    this.title = ko.observable(data.title);
    this.isDone = ko.observable(data.isDone);
}

function TaskListViewModel() {
    // Data
    var self = this;
    self.tasks = ko.observableArray([]);
    self.num1 = ko.observable();
    self.num2 = ko.observable();

    // Operations
  
   
    self.save = function() {
        $.ajax("https://mgl-proyecto-nodejs-c9-mike27.c9.io/form-test.html", {
            data: ko.toJSON({ tasks: self.tasks }),
            type: "post", contentType: "application/json",
            success: function(result) { alert(result) }
        });
    };

    // Load initial state from server, convert it to Task instances, then populate self.tasks
   /* $.getJSON("/tasks", function(allData) {
        var mappedTasks = $.map(allData, function(item) { return new Task(item) });
        self.tasks(mappedTasks);
    });  */  
}


         
         