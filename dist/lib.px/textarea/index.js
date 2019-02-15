/*! vue-ydui v1.2.2 by YDCSS (c) 2019 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TextArea=void 0;var o=n(215),a=r(o);t.TextArea=a.default},1:function(e,t){e.exports=function(e,t,n,r){var o,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,a=e.default);var i="function"==typeof a?a.options:a;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),n&&(i._scopeId=n),r){var u=i.computed||(i.computed={});Object.keys(r).forEach(function(e){var t=r[e];u[e]=function(){return t}})}return{esModule:o,exports:a,options:i}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},3:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(a(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(a(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function a(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(m){var a=p++;r=f||(f=o()),t=s.bind(null,r,a,!1),n=s.bind(null,r,a,!0)}else r=o(),t=i.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var a=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function i(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document,l=n(4),d={},c=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var o=l(e,t);return r(o),function(t){for(var n=[],a=0;a<o.length;a++){var s=o[a],i=d[s.id];i.refs--,n.push(i)}t?(o=l(e,t),r(o)):o=[];for(var a=0;a<n.length;a++){var i=n[a];if(0===i.refs){for(var u=0;u<i.parts.length;u++)i.parts[u]();delete d[i.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],s=a[0],i=a[1],u=a[2],l=a[3],d={id:e+":"+o,css:i,media:u,sourceMap:l};r[s]?r[s].parts.push(d):n.push(r[s]={id:s,parts:[d]})}return n}},99:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-textarea",data:function(){return{num:0,mlstr:""}},props:{maxlength:{validator:function(e){return!e||/^(([1-9]\d*)|0)$/.test(e)}},placeholder:{type:String},readonly:{type:Boolean,default:!1},value:{type:String},showCounter:{type:Boolean,default:!0},change:{type:Function},callback:{type:Function}},watch:{mlstr:function(e){this.$emit("input",e),this.callback&&this.change(),this.showCounter&&(this.num=e.length)},value:function(e){this.mlstr=e}},mounted:function(){var e=this;this.$nextTick(function(){var t=e.value;t&&(e.mlstr=t.length>e.maxlength?t.substr(t,e.maxlength):t)})}}},117:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,".yd-textarea{padding:10px 0;background-color:#fff;width:100%}.yd-textarea>textarea{border:none;width:100%;display:block;height:75px;font-size:15px;color:inherit;background-color:transparent}.yd-textarea-readonly{opacity:.3}.yd-textarea-counter{font-size:16px;color:#b2b2b2;text-align:right;padding-top:3px}",""])},215:function(e,t,n){n(294);var r=n(1)(n(99),n(236),null,null);e.exports=r.exports},236:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"yd-textarea",class:e.readonly?"yd-textarea-readonly":""},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.mlstr,expression:"mlstr"}],attrs:{placeholder:e.placeholder,maxlength:e.maxlength,readonly:e.readonly},domProps:{value:e.mlstr},on:{input:function(t){t.target.composing||(e.mlstr=t.target.value)}}}),e._v(" "),e.showCounter&&e.maxlength?n("div",{staticClass:"yd-textarea-counter"},[e._v(e._s(e.num)+"/"+e._s(e.maxlength))]):e._e()])},staticRenderFns:[]}},294:function(e,t,n){var r=n(117);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);n(3)("c531fca6",r,!0)}})});