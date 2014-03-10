// Constructor
var Class = function(value1, value2) {
  this.value1 = value1;
  }
  // properties and methods
  Class.prototype = {
    value1: "default_value",
      method: function(argument) {
          this.value2 = argument + 100;
	    },
	getValue: function () {                                                                                                                                                    
          return this.value1;                                                                                                                                               
            }    
	    };
	    // node.js module export
	    module.exports = Class;
	    // constructor call
	    var object = new Class("Hello", "2");
console.log(object.getValue());
console.log(object.method(3));
