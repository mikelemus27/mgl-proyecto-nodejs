/*pegar  aqui el codigo*/

/*Segunda parte */
this.fld_txt_inp=document.createElement("input");//create an input field
this.fld_txt_inp.type= "text";
this.fld_txt_inp.className= //define  class nane through attributes

this.fld_txt_inp.style.width= //compute length
this.fld_txt_inp.naxLength = t_mx_ln; //assign max len






//3 parte by Luis
this.fid_txt_inp.onblur=function(){
var _rg_zr=/^0+/;
var tmpval=(removeNumberFormat(self.fld_txt_inp.value)).replace(_rg_zr,'');
tmpval=(tmpval=='')?'0':tmpval;
self.fld_txt_inp.value=addNumberFormat(tmpval);

};

this.fld_txt_inp.onkeypress=funtion(eve){
var rg=/^([0-9,\b])/;
var kn=window.event?event.keyCode : eve.which;
kc=String.fromharCode(kn);
return rg.test(kc);
};
var self=this;
args_cus_obj.appendChild(this.fld_txt_inp);

//4 parte_Eduardo

function initializeUI(){
	 var arr= document.getElementsByTagName("+");
	 
	 for(var i=0; i<arr.length;i++){
		var tgNm= arr.item(i).nodeName;
		var obj=null;
		if(tgNm.toLowerCase()=='myfield'){
			obj=new myfield(arr.item(i));
		}
		else if (tgNm.toLowerCase()=='myselect'){
			obj=new myselect(arr.item(i));
		}
		...
	}//end of for loop
}


