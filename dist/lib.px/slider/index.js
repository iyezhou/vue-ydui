/*! vue-ydui v1.2.2 by YDCSS (c) 2019 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="/dist/",e(0)}([function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SliderItem=e.Slider=void 0;var s=i(25),r=n(s),o=i(24),a=n(o);e.Slider=r.default,e.SliderItem=a.default},function(t,e){t.exports=function(t,e,i,n){var s,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(s=t,r=t.default);var a="function"==typeof r?r.options:r;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),i&&(a._scopeId=i),n){var l=a.computed||(a.computed={});Object.keys(n).forEach(function(t){var e=n[t];l[t]=function(){return e}})}return{esModule:s,exports:r,options:a}}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(n[r]=!0)}for(s=0;s<e.length;s++){var o=e[s];"number"==typeof o[0]&&n[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),t.push(o))}},t}},function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=c[i.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](i.parts[s]);for(;s<i.parts.length;s++)n.parts.push(r(i.parts[s]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var o=[],s=0;s<i.parts.length;s++)o.push(r(i.parts[s]));c[i.id]={id:i.id,refs:1,parts:o}}}}function s(){var t=document.createElement("style");return t.type="text/css",h.appendChild(t),t}function r(t){var e,i,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(p)return m;n.parentNode.removeChild(n)}if(v){var r=f++;n=u||(u=s()),e=o.bind(null,n,r,!1),i=o.bind(null,n,r,!0)}else n=s(),e=a.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function o(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,s);else{var r=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function a(t,e){var i=e.css,n=e.media,s=e.sourceMap;if(n&&t.setAttribute("media",n),s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var l="undefined"!=typeof document,d=i(4),c={},h=l&&(document.head||document.getElementsByTagName("head")[0]),u=null,f=0,p=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){p=i;var s=d(t,e);return n(s),function(e){for(var i=[],r=0;r<s.length;r++){var o=s[r],a=c[o.id];a.refs--,i.push(a)}e?(s=d(t,e),n(s)):s=[];for(var r=0;r<i.length;r++){var a=i[r];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete c[a.id]}}}};var y=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var i=[],n={},s=0;s<e.length;s++){var r=e[s],o=r[0],a=r[1],l=r[2],d=r[3],c={id:t+":"+s,css:a,media:l,sourceMap:d};n[o]?n[o].parts.push(c):i.push(n[o]={id:o,parts:[c]})}return i}},,,,,,,,,,,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-slider-item",mounted:function(){this.$nextTick(this.$parent.init)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-slider",data:function(){return{firstItem:"",lastItem:"",currentIndex:0,itemNums:0,itemsArr:[],autoPlayTimer:null,paginationIndex:0,itemHeight:{height:null},dragStyleObject:{transform:0,speed:0},touches:{moveTag:0,moveOffset:0,touchStartTime:0,isTouchEvent:!1,allowClick:!1,isDraging:!1}}},props:{index:{default:0,validator:function(t){return/^\d*$/.test(t)}},speed:{default:300,validator:function(t){return/^\d*$/.test(t)}},autoplay:{default:0,validator:function(t){return/^\d*$/.test(t)}},direction:{validator:function(t){return["horizontal","vertical"].indexOf(t)>-1},default:"horizontal"},showPagination:{type:Boolean,default:!0},callback:{type:Function},loop:{type:Boolean,default:!0}},watch:{index:function(t){t=~~t,t>this.itemNums&&(t=this.itemNums),this.currentIndex=this.loop?t+1:t,this.showItem(this.currentIndex)},currentIndex:function(t){var e=this.itemNums,i=(t-1)%e;this.loop?this.paginationIndex=i<0?e-1:i:this.paginationIndex=t}},methods:{init:function(){this.destroy(),this.isVertical="vertical"===this.direction,this.itemsArr=this.$children.filter(function(t){return"yd-slider-item"===t.$options.name}),this.itemNums=this.itemsArr.length,this.loop?(this.currentIndex=1,this.index>0&&(this.currentIndex=~~this.index+1)):(this.currentIndex=0,this.index>0&&(this.currentIndex=~~this.index)),this.cloneItem(),this.showItem(this.currentIndex),this.bindEvents(),this.autoPlay()},showItem:function(t){if(this.isVertical){this.$refs.slider.style.height="100%";var e=this.$el.clientHeight;this.itemHeight.height=e+"px",this.setTranslate(0,-e*t),this.itemsArr.forEach(function(t){t.$el.style.height=e+"px"})}else this.setTranslate(0,-this.$refs.warpper.offsetWidth*t)},cloneItem:function(){if(!(this.itemsArr.length<=1)&&this.loop){var t=this.itemsArr;this.firstItem=t[0].$el.innerHTML,this.lastItem=t[t.length-1].$el.innerHTML}},touchStartHandler:function(t){var e=this.touches;if(e.allowClick=!0,e.isTouchEvent="touchstart"===t.type,(e.isTouchEvent||!("which"in t)||3!==t.which)&&0===e.moveTag){e.moveTag=1,e.startX=t.touches?t.touches[0].clientX:t.clientX,e.startY=t.touches?t.touches[0].clientY:t.clientY,e.touchStartTime=Date.now();var i=this.itemNums;if(this.loop){if(0===this.currentIndex)return this.currentIndex=i,void this.setTranslate(0,-i*(this.isVertical?this.$el.clientHeight:this.$refs.warpper.offsetWidth));this.currentIndex>i&&(this.currentIndex=1,this.setTranslate(0,this.isVertical?-this.$el.clientHeight:-this.$refs.warpper.offsetWidth))}else{if(this.currentIndex===-1)return this.currentIndex=i-1,void this.setTranslate(0,-(i-1)*(this.isVertical?this.$el.clientHeight:this.$refs.warpper.offsetWidth));this.currentIndex>i-1&&(this.currentIndex=1,this.setTranslate(0,this.isVertical?-this.$el.clientHeight:-this.$refs.warpper.offsetWidth))}}},touchMoveHandler:function(t){this.supportTouch&&!this.isVertical||t.preventDefault();var e=this.touches;if(e.allowClick=!1,!e.isTouchEvent||"mousemove"!==t.type){var i=t.touches?t.touches[0].clientY:t.clientY,n=t.touches?t.touches[0].clientX:t.clientX,s=180*Math.atan2(Math.abs(i-e.startY),Math.abs(n-e.startX))/Math.PI;if((this.isVertical?90-s>45:s>45)&&this.supportTouch)return e.moveTag=3,this.stopAutoplay(),void this.setTranslate(0,-this.currentIndex*(this.isVertical?this.$el.clientHeight:this.$refs.warpper.offsetWidth));e.isDraging=!0;var r=e.moveOffset=this.isVertical?i-e.startY:n-e.startX;0!==r&&0!==e.moveTag&&(1===e.moveTag&&(this.stopAutoplay(),e.moveTag=2),2===e.moveTag&&this.setTranslate(0,-this.currentIndex*(this.isVertical?this.$el.clientHeight:this.$refs.warpper.offsetWidth)+r/2))}},touchEndHandler:function(){var t=this.touches,e=t.moveOffset,i=this.isVertical?this.$el.clientHeight:this.$refs.warpper.offsetWidth;if(1===t.moveTag&&(t.moveTag=0),setTimeout(function(){t.allowClick=!0,t.isDraging=!1},this.speed),2===t.moveTag){t.moveTag=0;var n=Date.now()-t.touchStartTime,s=!this.loop&&(0===this.currentIndex&&e>0||this.currentIndex>=this.itemNums-1&&e<0);return n>300&&Math.abs(e)<=.5*i||this.itemsArr.length<=1||s?this.setTranslate(this.speed,-this.currentIndex*i):(this.setTranslate(this.speed,-((e>0?--this.currentIndex:++this.currentIndex)*i)),this.sendIndex()),void this.autoPlay()}3===t.moveTag&&(t.moveTag=0,this.autoPlay())},autoPlay:function(){var t=this;this.autoplay<=0||this.itemsArr.length<=1||(this.autoPlayTimer=setInterval(function(){var e=t.isVertical?t.$el.clientHeight:t.$refs.warpper.offsetWidth;return t.loop||t.currentIndex+1>=t.itemNums&&(t.currentIndex=-1),t.currentIndex>t.itemNums?(t.currentIndex=1,t.setTranslate(0,-e),setTimeout(function(){t.setTranslate(t.speed,-(++t.currentIndex*e))},100),void(t.callback&&t.callback(t.currentIndex))):(t.setTranslate(t.speed,-(++t.currentIndex*e)),void t.sendIndex())},this.autoplay))},sendIndex:function(){if(this.loop){var t=this.currentIndex%this.itemNums;this.callback&&this.callback(0===t?this.itemNums-1:t-1)}else this.callback&&this.callback(this.currentIndex)},stopAutoplay:function(){clearInterval(this.autoPlayTimer)},stopDrag:function(t){this.touches.isDraging&&t.preventDefault()},bindEvents:function(){var t=this;this.$el.addEventListener("touchstart",this.touchStartHandler),this.$el.addEventListener("touchmove",this.touchMoveHandler),this.$el.addEventListener("touchend",this.touchEndHandler),this.$el.addEventListener("click",function(e){t.touches.allowClick||e.preventDefault()}),window.addEventListener("resize",this.resizeSlides),document.body.addEventListener("touchmove",this.stopDrag,{passive:!1})},unbindEvents:function(){this.$el.removeEventListener("touchstart",this.touchStartHandler),this.$el.removeEventListener("touchmove",this.touchMoveHandler),this.$el.removeEventListener("touchend",this.touchEndHandler),window.removeEventListener("resize",this.resizeSlides),document.body.removeEventListener("touchmove",this.stopDrag,{passive:!1})},setTranslate:function(t,e){this.dragStyleObject.transitionDuration=t+"ms",this.isVertical?this.dragStyleObject.transform="translate3d(0, "+e+"px, 0)":this.dragStyleObject.transform="translate3d("+e+"px, 0, 0)"},resizeSlides:function(){if(this.isVertical){var t=this.$el.clientHeight;this.dragStyleObject.transform="translate3d(0, "+-this.currentIndex*t+"px, 0)"}else{var e=this.$refs.warpper.offsetWidth;this.dragStyleObject.transform="translate3d("+-this.currentIndex*e+"px, 0, 0)"}},destroy:function(){this.unbindEvents(),this.stopAutoplay()}},mounted:function(){this.supportTouch=window.Modernizr&&!!window.Modernizr.touch||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}()},beforeDestroy:function(){this.destroy()}}},,function(t,e,i){e=t.exports=i(2)(),e.push([t.id,"@-webkit-keyframes yd-kf-opacity-in{0%{opacity:0}to{opacity:1}}@keyframes yd-kf-opacity-in{0%{opacity:0}to{opacity:1}}.yd-slider{width:100%;overflow:hidden;position:relative}.yd-slider-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);position:relative;z-index:1;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.yd-slider-wrapper-vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.yd-slider-item{width:100%;height:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.yd-slider-item a{display:block}.yd-slider-item img{width:100%;display:block}.yd-slider-pagination{position:absolute;width:100%;z-index:2;left:0;bottom:5px;pointer-events:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;opacity:0;-webkit-animation:yd-kf-opacity-in .3s linear .4s forwards;animation:yd-kf-opacity-in .3s linear .4s forwards}.yd-slider-pagination,.yd-slider-pagination-vertical{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.yd-slider-pagination-vertical{width:0;height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;bottom:0;left:auto;right:5px}.yd-slider-pagination-item{margin:2px;width:6px;height:6px;display:inline-block;border-radius:100%;background-color:#b7d0e1}.yd-slider-pagination-item-active{background-color:#ff0005}",""])},,,,function(t,e,i){var n=i(1)(i(17),i(26),null,null);t.exports=n.exports},function(t,e,i){i(31);var n=i(1)(i(18),i(28),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"yd-slider-item"},[t._t("default")],2)},staticRenderFns:[]}},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"slider",staticClass:"yd-slider"},[i("div",{ref:"warpper",staticClass:"yd-slider-wrapper",class:"vertical"==t.direction?"yd-slider-wrapper-vertical":"",style:t.dragStyleObject},[t.loop?i("div",{staticClass:"yd-slider-item",style:t.itemHeight,domProps:{innerHTML:t._s(t.lastItem)}}):t._e(),t._v(" "),t._t("default"),t._v(" "),t.loop?i("div",{staticClass:"yd-slider-item",style:t.itemHeight,domProps:{innerHTML:t._s(t.firstItem)}}):t._e()],2),t._v(" "),t.itemsArr.length>1&&t.showPagination?i("div",{staticClass:"yd-slider-pagination",class:"vertical"==t.direction?"yd-slider-pagination-vertical":""},t._l(t.itemNums,function(e,n){return i("span",{key:n,staticClass:"yd-slider-pagination-item",class:t.paginationIndex==n?"yd-slider-pagination-item-active":""})}),0):t._e()])},staticRenderFns:[]}},,,function(t,e,i){var n=i(20);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);i(3)("82676cca",n,!0)}])});