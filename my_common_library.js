/*pegar  aqui el codigo*/



/*primera parte*/

function nyfield{args_cus_Obj){

if((typeof args_cus_Obj.attributes.typ !='undefined')  &&
  args_cus_Obj.attributes.typ!==null){
  this._fieldtype=args_cus_Obj.attributes.typ.value;
	 }

	 var ev_att=args_cus_Obj.attributes.callback;
	 this._callbk_click=(typeof ev_att !='undefined' && ev_att!==null)?ev_att.value:null;
	 
     var t_mx_ln= parseInt(args_cus_Obj.attributes.len.value,10);




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
