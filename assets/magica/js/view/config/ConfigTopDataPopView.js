define(["underscore","backbone","backboneCommon","ajaxControl","command"],function(d,e,a,f,b){return e.View.extend({events:function(){var b={};b[a.cgti+" .dataDecide"]=this.dataDecide;return b},initialize:function(a){this.option=a;this.template=d.template(this.template);this.createDom()},render:function(){this.$el.html(this.template({model:this.option}));return this},createDom:function(){a.content.append(this.render().el)},dataDecide:function(d){d.preventDefault();if(!a.isScrolled()){a.androidKeyStop=
!0;var c=this;if(this.option.onFlag){switch(this.option.type){case "voice":$("#commandDiv").on("nativeCallback",function(){c.rootView.configAllReGet();new a.PopupClass({title:"Deleting Data",content:"Data deleted.",popupType:"typeC",closeBtnText:"OK"});a.androidKeyStop=!1;$("#commandDiv").off()});b.removeAsset("voice","nativeCallback");break;case "movie":if("off"!==this.option.newType)$("#commandDiv").on("nativeCallback",function(){$("#commandDiv").off();$("#commandDiv").on("nativeCallback",function(){c.rootView.configAllReGet();
b.startBgm(a.settingBgm);b.setWebView(!0);new a.PopupClass({title:"Downloading Data",content:"Data downloaded.",popupType:"typeC",closeBtnText:"OK"});a.androidKeyStop=!1;$("#commandDiv").off()});"high"===c.option.newType?b.downloadFileConfigPage("movie_high"):b.downloadFileConfigPage("movie_low")}),b.setWebView(!1);else $("#commandDiv").on("nativeCallback",function(){c.rootView.configAllReGet();new a.PopupClass({title:"Deleting Data",content:"Data deleted.",popupType:"typeC",closeBtnText:"OK"});a.androidKeyStop=
!1;$("#commandDiv").off()});b.removeAsset("movie","nativeCallback")}c.rootView.configAllReGet()}else{if(window.isBrowser)a.addClass(a.doc.getElementById(c.option.type+"DataWrap"),"on"),c.rootView.resourceConfig[c.option.type]=1,new a.PopupClass({title:"Downloading Data",content:"Data downloaded.",popupType:"typeC",closeBtnText:"OK"}),a.androidKeyStop=!1;else $("#commandDiv").on("nativeCallback",function(){b.setWebView(!0);b.startBgm(a.settingBgm);c.rootView.configAllReGet();new a.PopupClass({title:"Downloading Data",
content:"Data downloaded.",popupType:"typeC",closeBtnText:"OK"},null,null,function(){"voice"===c.option.type&&(console.log("callBack"),a.removeClass(a.doc.getElementById("fullVoiceBtn"),"off"))});a.androidKeyStop=!1;$("#commandDiv").off()});switch(this.option.type){case "voice":b.setWebView(!1);b.downloadFileConfigPage("voice");break;case "movie":b.setWebView(!1),"high"===this.option.newType?b.downloadFileConfigPage("movie_high"):b.downloadFileConfigPage("movie_low")}}}},removeView:function(){this.off();
this.remove()}})});