// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/Deferred dojo/dom-construct dojo/dom-class dijit/Dialog dijit/form/Select dojo/_base/lang".split(" "),function(d,e,b,f,g,h,c){return d([g],{baseClass:"jimu-coordinate-control",numberOfInputs:0,selectOptions:{},comboOptions:{},dfd:null,constructor:function(a){c.mixin(this,a);this.numberOfInputs=a.options.length;this.selectOptions=a.options},postCreate:function(){this.inherited("postCreate",arguments);"DartTheme"===this.theme&&f.add(this.containerNode,"coordinateControlDialog");
this.message=b.create("div",{style:"margin-bottom: 5px"},this.containerNode,"first");this.message.innerHTML=this.numberOfInputs+" "+this.nls.multipleNotationLabel;this.comboOptions=new h({},b.create("div",{},this.containerNode,"last"));for(var a=0;a<this.selectOptions.length;a++)this.comboOptions.addOption({value:this.selectOptions[a].name,label:this.selectOptions[a].notationType});this.buttonDiv=b.create("div",{"class":"buttonContainer",style:"text-align: right; margin-top: 10px"},this.containerNode,
"last");this.okButton=b.create("div",{innerHTML:this.nls.applyButtonLabel,"class":"jimu-btn",onclick:c.hitch(this,function(){this.hide();this.dfd.resolve()})},this.buttonDiv,"first");this.cancelButton=b.create("div",{innerHTML:this.nls.cancelButtonLabel,"class":"jimu-btn",style:"margin-left: 5px",onclick:c.hitch(this,function(){this.hide();this.dfd.cancel()})},this.buttonDiv,"last")},show:function(){this.inherited("show",arguments);return this.dfd=new e}})});