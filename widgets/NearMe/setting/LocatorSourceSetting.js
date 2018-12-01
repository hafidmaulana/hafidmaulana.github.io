// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/NearMe/setting/LocatorSourceSetting.html":'\x3cdiv\x3e\r\n  \x3c!--Select Locator URL --\x3e\r\n  \x3cdiv class\x3d"esriCTSourceUrlSection"\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv class\x3d"esriCTURLWidthLabel esriCTlabel" title\x3d"${nls.locatorUrl}"\x3e\r\n        ${nls.locatorUrl}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceURLField"\x3e\r\n        \x3cdiv class\x3d"esriCTSearchSourceLayer" data-dojo-attach-point\x3d"locatorUrl" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"required:true,trim:true,disabled:true,style:{width:\'100%\'}"\x3e\x3c/div\x3e\r\n        \x3cdiv title\x3d"${nls.set}" class\x3d"esriCTURLSetButton jimu-btn jimu-float-trailing jimu-leading-margin1" data-dojo-attach-point\x3d"setButtonNode"  \x3e${nls.set}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"messageTr"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"messageNode" class\x3d"esriCTHint"\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3c!--Locator Details section --\x3e\r\n  \x3cdiv class\x3d"esriCTSourceDetailsSection" ata-dojo-attach-point\x3d"detailsSection"\x3e\r\n    \x3c!--Details section: locatorName --\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLabel esriCTlabel" title\x3d"${nls.locatorName}"\x3e\r\n        ${nls.locatorName}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLayerField esriCTLayerField"\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-attach-point\x3d"locatorName"\r\n         placeHolder\x3d"${nls.locatorName}"\r\n        required\x3d"true" data-dojo-props\x3d\'style:{width:"100%"}\'\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--Details section: placeholder --\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLabel esriCTlabel" title\x3d"${nls.placeholder}"\x3e\r\n        ${nls.placeholder}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLayerField esriCTLayerField"\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-attach-point\x3d"placeholder"\r\n         placeHolder\x3d"${nls.placeholder}" data-dojo-props\x3d\'style:{width:"100%"}\'\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--Details section: country --\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"countryCodeRow"\x3e\r\n        \x3cdiv class\x3d"esriCTSearchSourceLabel esriCTlabel" title\x3d"${nls.countryCode}"\x3e\r\n          ${nls.countryCode}\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTSearchSourceLayerField esriCTLayerField"\x3e\r\n          \x3cdiv type\x3d"text" data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"countryCode"\r\n          placeHolder\x3d"${nls.countryCodeEg} USA,CHN" data-dojo-props\x3d\'style:{width:"97%"}\'\x3e\x3c/div\x3e\r\n          \x3ca class\x3d"jimu-float-trailing" target\x3d"_blank" href\x3d"https://developers.arcgis.com/rest/geocode/api-reference/geocode-coverage.htm"\r\n            style\x3d"line-height:30px;"\x3e${nls.questionMark}\x3c/a\x3e\r\n          \x3cdiv class\x3d"esriCTHint"\x3e${nls.countryCodeHint}\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--Details section: max suggestion --\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLabel esriCTlabel" title\x3d"${nls.maxSuggestions}"\x3e\r\n        ${nls.maxSuggestions}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLayerField esriCTLayerField"\x3e\r\n        \x3cdiv class\x3d"esriCTHint" title\x3d"${nls.locatorTips}" data-dojo-attach-point\x3d"tipsNode"\x3e\r\n          ${nls.locatorTips}\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"maxSuggestions" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"constraints:{min:1,places:0},style:{width:\'100%\'},value:6"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--Details section: max result --\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLabel esriCTlabel" title\x3d"${nls.maxResults}"\x3e\r\n        ${nls.maxResults}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLayerField esriCTLayerField"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"maxResults" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"constraints:{min:1,places:0},style:{width:\'100%\'},value:6"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--Details section: zoom Scale --\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLabel esriCTlabel" title\x3d"${nls.zoomScale}"\x3e\r\n        ${nls.zoomScale}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLayerField esriCTLayerField"\x3e\r\n        \x3cdiv class\x3d"jimu-float-leading esriCTSearchSourceLabelFont" style\x3d"line-height:30px;"\x3e1: \x3c/div\x3e\r\n        \x3cdiv class\x3d"jimu-float-trailing" data-dojo-attach-point\x3d"zoomScale" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"constraints:{min:1},style:{width:\'96%\'},value:50000"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--Details section: local search --\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLabelFont" data-dojo-attach-point\x3d"enableLocalSearch"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--Details section: local search - minimum scale --\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row" data-dojo-attach-point\x3d"minScaleNode"\x3e\r\n      \x3cdiv class\x3d"esriCTLocalSearchLabel esriCTlabel" title\x3d"${nls.minScale}"\x3e\r\n        ${nls.minScale}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLayerField esriCTLayerField"\x3e\r\n        \x3cdiv class\x3d"jimu-float-leading esriCTSearchSourceLabelFont" style\x3d"line-height:30px;"\x3e1: \x3c/div\x3e\r\n        \x3cdiv class\x3d"jimu-float-trailing" data-dojo-attach-point\x3d"localSearchMinScale" data-dojo-type\x3d"dijit/form/NumberTextBox"\r\n        data-dojo-props\x3d"constraints:{min:1},style:{width:\'96%\'},value:300000"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTHint" title\x3d"${nls.minScaleHint}"\x3e${nls.minScaleHint}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--Details section: local search - radius --\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row" data-dojo-attach-point\x3d"radiusNode"\x3e\r\n      \x3cdiv class\x3d"esriCTLocalSearchLabel esriCTlabel" title\x3d"${nls.radius}"\x3e\r\n        ${nls.radius}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLayerField esriCTLayerField"\x3e\r\n        \x3cdiv class\x3d"jimu-float-leading" data-dojo-attach-point\x3d"localSearchDistance"\r\n        data-dojo-type\x3d"dijit/form/NumberTextBox"\r\n        data-dojo-props\x3d"constraints:{min:1},style:{width:\'75%\'},value:50000"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTHint esriCTLocalSearchRadiusUnit"\x3e${nls.meters}\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTHint" data-dojo-attach-point\x3d"radiusHintNode" title\x3d"${nls.radiusHint}"\x3e${nls.radiusHint}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--Details section: Search in current map extent --\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLabelFont" data-dojo-attach-point\x3d"searchInCurrentMapExtent"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--Details section: loading shelter --\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d"hidden:true"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dojo/Evented dojo/Deferred dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin jimu/portalUrlUtils jimu/dijit/Message jimu/dijit/_GeocodeServiceChooserContent jimu/dijit/Popup jimu/dijit/LoadingShelter esri/request esri/lang ../searchSourceUtils jimu/utils dojo/text!./LocatorSourceSetting.html jimu/dijit/CheckBox dijit/form/ValidationTextBox dijit/form/NumberTextBox".split(" "),function(n,d,c,f,p,q,r,t,u,g,h,v,w,
x,k,l,y,e,z,m){return n([r,t,u,p],{baseClass:"jimu-widget-nearme-locator-source-setting",tr:null,nls:null,config:null,singleLineFieldName:null,templateString:z,_suggestible:!1,_locatorDefinition:null,_esriLocatorRegExp:/http(s)?:\/\/geocode(.){0,3}\.arcgis.com\/arcgis\/rest\/services\/World\/GeocodeServer/g,serviceChooserContent:null,geocoderPopup:null,_clickSet:!1,postCreate:function(){this.inherited(arguments);this.exampleHint=this.nls.locatorExample+": http://\x26lt;myServerName\x26gt;/arcgis/rest/services/World/GeocodeServer";
this.own(f(this.setButtonNode,"click",d.hitch(this,this._onSetLocatorUrlClick)));this.own(f(this.locatorName,"Blur",d.hitch(this,this._onLocatorNameBlur)));this.own(f(this.placeholder,"Blur",d.hitch(this,this._onPlaceholderBlur)));this.own(f(this.countryCode,"Blur",d.hitch(this,this._onCountryCodeBlur)));this.searchInCurrentMapExtent=new m({checked:!1,label:this.nls.searchInCurrentMapExtent},this.searchInCurrentMapExtent);this.enableLocalSearch=new m({checked:!1,label:this.nls.enableLocalSearch},
this.enableLocalSearch);this._processlocalSearchTable(!1);this.own(f(this.enableLocalSearch,"change",d.hitch(this,function(){this._processlocalSearchTable(this.enableLocalSearch.getValue())})));c.setStyle(this.enableLocalSearch.domNode,"display","none");this._setMessageNodeContent(this.exampleHint);this.config=this.config?this.config:{};this.setConfig(this.config)},setRelatedTr:function(a){this.tr=a},getRelatedTr:function(){return this.tr},setDefinition:function(a){this._locatorDefinition=a||{}},
getDefinition:function(){return this._locatorDefinition},setConfig:function(a){if("[object Object]"===Object.prototype.toString.call(a)){var b=a.url;b&&(this.config=a,this.shelter.show(),this._locatorDefinition.url!==b?this._getDefinitionFromRemote(b).then(d.hitch(this,function(a){b&&a&&"error"!==a.type?(this._locatorDefinition=a,this._locatorDefinition.url=b,this._setSourceItems(),this._setMessageNodeContent(this.exampleHint)):b&&a&&"error"===a.type&&(this._setSourceItems(),this._disableSourceItems(),
this._setMessageNodeContent(l.substitute({URL:a.url},d.clone(this.nls.invalidUrlTip)),!0));this.shelter.hide()})):(this._setSourceItems(),this._setMessageNodeContent(this.exampleHint),this.shelter.hide()))}},isValidConfig:function(){var a=this.getConfig();return a.url&&a.name&&a.singleLineFieldName?!0:!1},showValidationTip:function(){this._showValidationErrorTip(this.locatorUrl);this._showValidationErrorTip(this.locatorName)},getConfig:function(){return{url:this.locatorUrl.get("value"),name:e.stripHTML(this.locatorName.get("value")),
singleLineFieldName:this.singleLineFieldName,placeholder:e.stripHTML(this.placeholder.get("value")),countryCode:e.stripHTML(this.countryCode.get("value")),zoomScale:this.zoomScale.get("value")||5E4,maxSuggestions:this.maxSuggestions.get("value")||6,maxResults:this.maxResults.get("value")||6,searchInCurrentMapExtent:this.searchInCurrentMapExtent.checked,enableLocalSearch:this.enableLocalSearch.getValue(),localSearchMinScale:this.localSearchMinScale.get("value"),localSearchDistance:this.localSearchDistance.get("value"),
type:"locator"}},_onLocatorNameBlur:function(){this.locatorName.set("value",e.stripHTML(this.locatorName.get("value")))},_onPlaceholderBlur:function(){this.placeholder.set("value",e.stripHTML(this.placeholder.get("value")))},_onCountryCodeBlur:function(){this.countryCode.set("value",e.stripHTML(this.countryCode.get("value")))},_disableSourceItems:function(){this.locatorName.set("disabled",!0);this.placeholder.set("disabled",!0);this.countryCode.set("disabled",!0);this.maxSuggestions.set("disabled",
!0);this.maxResults.set("disabled",!0);this.zoomScale.set("disabled",!0)},_enableSourceItems:function(){this.locatorName.set("disabled",!1);this.placeholder.set("disabled",!1);this.countryCode.set("disabled",!1);this.maxSuggestions.set("disabled",!1);this.maxResults.set("disabled",!1);this.zoomScale.set("disabled",!1)},_setSourceItems:function(){var a=this.config;a.url&&(this.locatorUrl.set("value",a.url),this._processCountryCodeRow(a.url));a.name&&this.locatorName.set("value",e.stripHTML(a.name));
a.singleLineFieldName&&(this.singleLineFieldName=a.singleLineFieldName);a.placeholder&&this.placeholder.set("value",e.stripHTML(a.placeholder));a.countryCode&&this.countryCode.set("value",e.stripHTML(a.countryCode));"capabilities"in this._locatorDefinition?(c.setStyle(this.enableLocalSearch.domNode,"display",""),this._processlocalSearchTable(a.enableLocalSearch),this.enableLocalSearch.setValue(a.enableLocalSearch),a.localSearchMinScale&&a.enableLocalSearch&&this.localSearchMinScale.set("value",a.localSearchMinScale),
a.localSearchDistance&&a.enableLocalSearch&&this.localSearchDistance.set("value",a.localSearchDistance)):(this.enableLocalSearch.setValue(!1),c.setStyle(this.enableLocalSearch.domNode,"display","none"));(this._suggestible=this._locatorDefinition&&this._locatorDefinition.capabilities&&-1<this._locatorDefinition.capabilities.indexOf("Suggest"))?this._hideSuggestibleTips():this._showSuggestibleTips();this.searchInCurrentMapExtent.setValue(!!a.searchInCurrentMapExtent);this.zoomScale.set("value",a.zoomScale||
5E4);this.maxSuggestions.set("value",a.maxSuggestions||6);this.maxResults.set("value",a.maxResults||6);this._enableSourceItems()},_isEsriLocator:function(a){this._esriLocatorRegExp.lastIndex=0;return this._esriLocatorRegExp.test(a)},_getDefinitionFromRemote:function(a){var b=new q;if(this._isEsriLocator(a))b.resolve({singleLineAddressField:{name:"SingleLine",type:"esriFieldTypeString",alias:"Single Line Input",required:!1,length:200,localizedNames:{},recognizedNames:{}},capabilities:"Geocode,ReverseGeocode,Suggest"});
else{var c=k({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback"});this.own(c);c.then(d.hitch(this,function(a){b.resolve(a)}),d.hitch(this,function(c){console.error(c);b.resolve({type:"error",url:this._getRequestUrl(a)})}))}return b.promise},_setMessageNodeContent:function(a,b){c.empty(this.messageNode);a.nodeType||(a=c.toDom(a));c.place(a,this.messageNode);b?c.addClass(this.messageNode,"esriCTErrorMessage"):c.removeClass(this.messageNode,"esriCTErrorMessage")},_getRequestUrl:function(a){var b=
window.location.protocol;return"http:"===b?g.setHttpProtocol(a):"https:"===b?g.setHttpsProtocol(a):a},_onSetLocatorUrlClick:function(){this._clickSet=!0;this._openServiceChooser()},_openLocatorChooser:function(){this._clickSet=!1;this._openServiceChooser()},_openServiceChooser:function(){this.serviceChooserContent=new v({url:this.locatorUrl.get("value")||""});this.shelter=new x({hidden:!0});this.geocoderPopup=new w({titleLabel:this.nls.setGeocoderURL,autoHeight:!0,content:this.serviceChooserContent.domNode,
container:window.jimuConfig.layoutId,width:640});this.shelter.placeAt(this.geocoderPopup.domNode);c.setStyle(this.serviceChooserContent.domNode,"width","580px");c.addClass(this.serviceChooserContent.domNode,"override-geocode-service-chooser-content");this.serviceChooserContent.own(f(this.serviceChooserContent,"validate-click",d.hitch(this,function(){c.removeClass(this.serviceChooserContent.domNode,"override-geocode-service-chooser-content")})));this.serviceChooserContent.own(f(this.serviceChooserContent,
"ok",d.hitch(this,"_onSelectLocatorUrlOk")));this.serviceChooserContent.own(f(this.serviceChooserContent,"cancel",d.hitch(this,"_onSelectLocatorUrlCancel")))},_onSelectLocatorUrlOk:function(a){a&&a[0]&&a[0].url&&this.domNode&&(this.shelter.show(),k({url:a[0].url,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(d.hitch(this,function(b){this.shelter.hide();b&&b.singleLineAddressField&&b.singleLineAddressField.name?(this._enableSourceItems(),this.locatorUrl.set("value",a[0].url),
this.locatorName.get("value")||this.locatorName.set("value",y.getGeocoderName(a[0].url)),"capabilities"in b?(c.setStyle(this.enableLocalSearch.domNode,"display",""),this._isEsriLocator(a[0].url)?this.enableLocalSearch.setValue(!0):this.enableLocalSearch.setValue(!1)):(this.enableLocalSearch.setValue(!1),c.setStyle(this.enableLocalSearch.domNode,"display","none")),this.singleLineFieldName=b.singleLineAddressField.name,this._processCountryCodeRow(a[0].url),this._locatorDefinition=b,this._locatorDefinition.url=
a[0].url,(this._suggestible=b.capabilities&&-1<this._locatorDefinition.capabilities.indexOf("Suggest"))?this._hideSuggestibleTips():this._showSuggestibleTips(),this._clickSet?this.emit("reselect-locator-url-ok",this.getConfig()):this.emit("select-locator-url-ok",this.getConfig()),this.geocoderPopup&&(this.geocoderPopup.close(),this.geocoderPopup=null),this._setMessageNodeContent(this.exampleHint)):new h({message:this.nls.locatorWarning})}),d.hitch(this,function(b){console.error(b);this.shelter.hide();
new h({message:l.substitute({URL:this._getRequestUrl(a[0].url)},d.clone(this.nls.invalidUrlTip))})})))},_onSelectLocatorUrlCancel:function(){this.geocoderPopup&&(this.geocoderPopup.close(),this.geocoderPopup=null,this.emit("select-locator-url-cancel"))},_processlocalSearchTable:function(a){a?(c.removeClass(this.minScaleNode,"esriCTHidden"),c.removeClass(this.radiusNode,"esriCTHidden"),this.emit("enable-local-search")):(c.addClass(this.minScaleNode,"esriCTHidden"),c.addClass(this.radiusNode,"esriCTHidden"),
this.emit("disable-local-search"))},_processCountryCodeRow:function(a){this._isEsriLocator(a)?(this.countryCode.set("value",""),c.removeClass(this.countryCodeRow,"hide-country-code-row")):c.addClass(this.countryCodeRow,"hide-country-code-row")},_showSuggestibleTips:function(){c.removeClass(this.tipsNode,"esriCTHidden");c.setStyle(this.maxSuggestions.domNode,"display","none")},_hideSuggestibleTips:function(){c.addClass(this.tipsNode,"esriCTHidden");c.setStyle(this.maxSuggestions.domNode,"display",
"block")},_showValidationErrorTip:function(a){if(!a.validate()&&a.domNode&&a.focusNode){var b=a.get("disabled");b&&a.set("disabled",!1);a.focusNode.focus();setTimeout(d.hitch(this,function(){a.focusNode.blur();b&&a.set("disabled",!0);a=null}),100)}}})});