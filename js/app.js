!function(t,s,o,e){"use strict";var i={debug:!1,name:"App"},r={view:new Viewport},a={get mobile(){return r.view.width<768},get tablet(){return 768<=r.view.width&&r.view.width<=1024},get desktop(){return 1024<r.view.width},get mac(){return"MacIntel"===navigator.platform||"MacPPC"===navigator.platform}};function l(e){if(!(this instanceof l))return new l(e);var n=this;return n.options=t.extend(!0,{},i,e),n.store=r,n.is=a,n.store.hasDebug=n.options.debug,n.$document=t(o),n.$html=t("html"),n.store.view.onResizeend.setIsClasses=n.setIsClasses.bind(n),n.setIsClasses(),n.$html.removeClass("no-js"),t('a[href*="#"].js-anchor-scroll').on("click",function(){var e=this.href.split("#")[1],t=o.querySelector("#"+e),s=t?t.getBoundingClientRect().top+o.documentElement.scrollTop:0;return t&&(n.$html.scrollTop=s),!1}),n.static_path="/wp-content/themes/divalto/static",t(".js-popin-connexion-toggle").on("click",function(){n.$html.toggleClass("is-popin-connexion-open")}),t(".js-select").selectric({arrowButtonMarkup:'<b class="button"><svg xmlns="http://www.w3.org/2000/svg" width="13px" height="8px" viewBox="0 0 13 8"><polygon fill="currentColor" points="0,1.3 1.4,0 6.5,5.2 11.6,0 13,1.3 6.5,8"/></svg></b>'}),t(".header-lang").on("change",function(){s.location.href=this.value}),n.bLazy=new Blazy({selector:".js-lazy",offset:300,successClass:"is-lazy-loaded",errorClass:"is-lazy-error"}),n}l.prototype=t.extend(!0,l.prototype,{setIsClasses:function(e){for(var t in this.is){var s=this.is[t]?"addClass":"removeClass";this.$html[s]("is-"+t)}this.$html.addClass("is-"+this.getBrowser())},getBrowser:function(){return-1<navigator.userAgent.indexOf("Chrome")?"chrome":-1<navigator.userAgent.indexOf("Safari")?"safari":-1<navigator.userAgent.indexOf("Opera")?"opera":-1<navigator.userAgent.indexOf("Firefox")?"firefox":-1<navigator.userAgent.indexOf("MSIE")||-1<navigator.userAgent.indexOf("Trident")?"ie":"unknow"}}),s.APP=new l({debug:"HAS_DEBUG"in s&&s.HAS_DEBUG,name:"Divalto"})}(jQuery,window,document);
//# sourceMappingURL=maps/app.js.map