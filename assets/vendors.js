/*!
 * Flickity PACKAGED v2.2.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */

!function(e,i){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("jquery")):e.jQueryBridget=i(e,e.jQuery)}(window,function(t,e){"use strict";var i=Array.prototype.slice,n=t.console,d=void 0===n?function(){}:function(t){n.error(t)};function s(h,s,c){(c=c||e||t.jQuery)&&(s.prototype.option||(s.prototype.option=function(t){c.isPlainObject(t)&&(this.options=c.extend(!0,this.options,t))}),c.fn[h]=function(t){return"string"==typeof t?function(t,o,r){var a,l="$()."+h+'("'+o+'")';return t.each(function(t,e){var i=c.data(e,h);if(i){var n=i[o];if(n&&"_"!=o.charAt(0)){var s=n.apply(i,r);a=void 0===a?s:a}else d(l+" is not a valid method")}else d(h+" not initialized. Cannot call methods, i.e. "+l)}),void 0!==a?a:t}(this,t,i.call(arguments,1)):(function(t,n){t.each(function(t,e){var i=c.data(e,h);i?(i.option(n),i._init()):(i=new s(e,n),c.data(e,h,i))})}(this,t),this)},o(c))}function o(t){!t||t&&t.bridget||(t.bridget=s)}return o(e||t.jQuery),s}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],s=0;s<i.length;s++){var o=i[s];n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function m(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var i="undefined"==typeof console?function(){}:function(t){console.error(t)},y=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],b=y.length;function E(t){var e=getComputedStyle(t);return e||i("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}var S,C=!1;function x(t){if(function(){if(!C){C=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var e=document.body||document.documentElement;e.appendChild(t);var i=E(t);S=200==Math.round(m(i.width)),x.isBoxSizeOuter=S,e.removeChild(t)}}(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=E(t);if("none"==e.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<b;e++){t[y[e]]=0}return t}();var i={};i.width=t.offsetWidth,i.height=t.offsetHeight;for(var n=i.isBorderBox="border-box"==e.boxSizing,s=0;s<b;s++){var o=y[s],r=e[o],a=parseFloat(r);i[o]=isNaN(a)?0:a}var l=i.paddingLeft+i.paddingRight,h=i.paddingTop+i.paddingBottom,c=i.marginLeft+i.marginRight,d=i.marginTop+i.marginBottom,u=i.borderLeftWidth+i.borderRightWidth,f=i.borderTopWidth+i.borderBottomWidth,p=n&&S,g=m(e.width);!1!==g&&(i.width=g+(p?0:l+u));var v=m(e.height);return!1!==v&&(i.height=v+(p?0:h+f)),i.innerWidth=i.width-(l+u),i.innerHeight=i.height-(h+f),i.outerWidth=i.width+c,i.outerHeight=i.height+d,i}}return x}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var i=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(t,e){return t[i](e)}}),function(e,i){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("desandro-matches-selector")):e.fizzyUIUtils=i(e,e.matchesSelector)}(window,function(h,o){var c={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},e=Array.prototype.slice;c.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?e.call(t):[t]},c.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},c.getParent=function(t,e){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,o(t,e))return t},c.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},c.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},c.filterFindElements=function(t,n){t=c.makeArray(t);var s=[];return t.forEach(function(t){if(t instanceof HTMLElement)if(n){o(t,n)&&s.push(t);for(var e=t.querySelectorAll(n),i=0;i<e.length;i++)s.push(e[i])}else s.push(t)}),s},c.debounceMethod=function(t,e,n){n=n||100;var s=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,i=this;this[o]=setTimeout(function(){s.apply(i,e),delete i[o]},n)}},c.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},c.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var d=h.console;return c.htmlInit=function(a,l){c.docReady(function(){var t=c.toDashed(l),s="data-"+t,e=document.querySelectorAll("["+s+"]"),i=document.querySelectorAll(".js-"+t),n=c.makeArray(e).concat(c.makeArray(i)),o=s+"-options",r=h.jQuery;n.forEach(function(e){var t,i=e.getAttribute(s)||e.getAttribute(o);try{t=i&&JSON.parse(i)}catch(t){return void(d&&d.error("Error parsing "+s+" on "+e.className+": "+t))}var n=new a(e,t);r&&r.data(e,l,n)})})},c}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("get-size")):(e.Flickity=e.Flickity||{},e.Flickity.Cell=i(e,e.getSize))}(window,function(t,e){function i(t,e){this.element=t,this.parent=e,this.create()}var n=i.prototype;return n.create=function(){this.element.style.position="absolute",this.element.setAttribute("aria-hidden","true"),this.x=0,this.shift=0},n.destroy=function(){this.unselect(),this.element.style.position="";var t=this.parent.originSide;this.element.style[t]=""},n.getSize=function(){this.size=e(this.element)},n.setPosition=function(t){this.x=t,this.updateTarget(),this.renderPosition(t)},n.updateTarget=n.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},n.renderPosition=function(t){var e=this.parent.originSide;this.element.style[e]=this.parent.getPositionValue(t)},n.select=function(){this.element.classList.add("is-selected"),this.element.removeAttribute("aria-hidden")},n.unselect=function(){this.element.classList.remove("is-selected"),this.element.setAttribute("aria-hidden","true")},n.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},n.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/slide",e):"object"==typeof module&&module.exports?module.exports=e():(t.Flickity=t.Flickity||{},t.Flickity.Slide=e())}(window,function(){"use strict";function t(t){this.parent=t,this.isOriginLeft="left"==t.originSide,this.cells=[],this.outerWidth=0,this.height=0}var e=t.prototype;return e.addCell=function(t){if(this.cells.push(t),this.outerWidth+=t.size.outerWidth,this.height=Math.max(t.size.outerHeight,this.height),1==this.cells.length){this.x=t.x;var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}},e.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft",e=this.getLastCell(),i=e?e.size[t]:0,n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign},e.getLastCell=function(){return this.cells[this.cells.length-1]},e.select=function(){this.cells.forEach(function(t){t.select()})},e.unselect=function(){this.cells.forEach(function(t){t.unselect()})},e.getCellElements=function(){return this.cells.map(function(t){return t.element})},t}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/animate",["fizzy-ui-utils/utils"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("fizzy-ui-utils")):(e.Flickity=e.Flickity||{},e.Flickity.animatePrototype=i(e,e.fizzyUIUtils))}(window,function(t,e){var i={startAnimation:function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},animate:function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;requestAnimationFrame(function(){e.animate()})}},positionSlider:function(){var t=this.x;this.options.wrapAround&&1<this.cells.length&&(t=e.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),this.setTranslateX(t,this.isAnimating),this.dispatchScrollEvent()},setTranslateX:function(t,e){t+=this.cursorPosition,t=this.options.rightToLeft?-t:t;var i=this.getPositionValue(t);this.slider.style.transform=e?"translate3d("+i+",0,0)":"translateX("+i+")"},dispatchScrollEvent:function(){var t=this.slides[0];if(t){var e=-this.x-t.target,i=e/this.slidesWidth;this.dispatchEvent("scroll",null,[i,e])}},positionSliderAtSelected:function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},getPositionValue:function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},settle:function(t){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*t)||this.restingFrames++,2<this.restingFrames&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},shiftWrapCells:function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},_shiftCells:function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n],o=0<e?i:0;s.wrapShift(o),e-=s.size.outerWidth}},_unshiftCells:function(t){if(t&&t.length)for(var e=0;e<t.length;e++)t[e].wrapShift(0)},integratePhysics:function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},applyForce:function(t){this.velocity+=t},getFrictionFactor:function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},getRestingPosition:function(){return this.x+this.velocity/(1-this.getFrictionFactor())},applyDragForce:function(){if(this.isDraggable&&this.isPointerDown){var t=this.dragX-this.x-this.velocity;this.applyForce(t)}},applySelectedAttraction:function(){if(!(this.isDraggable&&this.isPointerDown)&&!this.isFreeScrolling&&this.slides.length){var t=(-1*this.selectedSlide.target-this.x)*this.options.selectedAttraction;this.applyForce(t)}}};return i}),function(r,a){if("function"==typeof define&&define.amd)define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(t,e,i,n,s,o){return a(r,t,e,i,n,s,o)});else if("object"==typeof module&&module.exports)module.exports=a(r,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"));else{var t=r.Flickity;r.Flickity=a(r,r.EvEmitter,r.getSize,r.fizzyUIUtils,t.Cell,t.Slide,t.animatePrototype)}}(window,function(n,t,e,a,i,r,s){var l=n.jQuery,o=n.getComputedStyle,h=n.console;function c(t,e){for(t=a.makeArray(t);t.length;)e.appendChild(t.shift())}var d=0,u={};function f(t,e){var i=a.getQueryElement(t);if(i){if(this.element=i,this.element.flickityGUID){var n=u[this.element.flickityGUID];return n.option(e),n}l&&(this.$element=l(this.element)),this.options=a.extend({},this.constructor.defaults),this.option(e),this._create()}else h&&h.error("Bad element for Flickity: "+(i||t))}f.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},f.createMethods=[];var p=f.prototype;a.extend(p,t.prototype),p._create=function(){var t=this.guid=++d;for(var e in this.element.flickityGUID=t,(u[t]=this).selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&n.addEventListener("resize",this),this.options.on){var i=this.options.on[e];this.on(e,i)}f.createMethods.forEach(function(t){this[t]()},this),this.options.watchCSS?this.watchCSS():this.activate()},p.option=function(t){a.extend(this.options,t)},p.activate=function(){this.isActive||(this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize(),c(this._filterFindCellElements(this.element.children),this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate"),this.selectInitialIndex(),this.isInitActivated=!0,this.dispatchEvent("ready"))},p._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider",t.style[this.originSide]=0,this.slider=t},p._filterFindCellElements=function(t){return a.filterFindElements(t,this.options.cellSelector)},p.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},p._makeCells=function(t){return this._filterFindCellElements(t).map(function(t){return new i(t,this)},this)},p.getLastCell=function(){return this.cells[this.cells.length-1]},p.getLastSlide=function(){return this.slides[this.slides.length-1]},p.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},p._positionCells=function(t){t=t||0,this.maxCellHeight=t&&this.maxCellHeight||0;var e=0;if(0<t){var i=this.cells[t-1];e=i.x+i.size.outerWidth}for(var n=this.cells.length,s=t;s<n;s++){var o=this.cells[s];o.setPosition(e),e+=o.size.outerWidth,this.maxCellHeight=Math.max(o.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e,this.updateSlides(),this._containSlides(),this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0},p._sizeCells=function(t){t.forEach(function(t){t.getSize()})},p.updateSlides=function(){if(this.slides=[],this.cells.length){var n=new r(this);this.slides.push(n);var s="left"==this.originSide?"marginRight":"marginLeft",o=this._getCanCellFit();this.cells.forEach(function(t,e){if(n.cells.length){var i=n.outerWidth-n.firstMargin+(t.size.outerWidth-t.size[s]);o.call(this,e,i)||(n.updateTarget(),n=new r(this),this.slides.push(n)),n.addCell(t)}else n.addCell(t)},this),n.updateTarget(),this.updateSelectedSlide()}},p._getCanCellFit=function(){var t=this.options.groupCells;if(!t)return function(){return!1};if("number"==typeof t){var e=parseInt(t,10);return function(t){return t%e!=0}}var i="string"==typeof t&&t.match(/^(\d+)%$/),n=i?parseInt(i[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*n}},p._init=p.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},p.getSize=function(){this.size=e(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var g={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};return p.setCellAlign=function(){var t=g[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},p.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=t+"px"}},p._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},p._getGapCells=function(t,e,i){for(var n=[];0<t;){var s=this.cells[e];if(!s)break;n.push(s),e+=i,t-=s.size.outerWidth}return n},p._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var t=this.options.rightToLeft,e=t?"marginRight":"marginLeft",i=t?"marginLeft":"marginRight",n=this.slideableWidth-this.getLastCell().size[i],s=n<this.size.innerWidth,o=this.cursorPosition+this.cells[0].size[e],r=n-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(t){s?t.target=n*this.cellAlign:(t.target=Math.max(t.target,o),t.target=Math.min(t.target,r))},this)}},p.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),l&&this.$element){var s=t+=this.options.namespaceJQueryEvents?".flickity":"";if(e){var o=l.Event(e);o.type=t,s=o}this.$element.trigger(s,i)}},p.select=function(t,e,i){if(this.isActive&&(t=parseInt(t,10),this._wrapSelect(t),(this.options.wrapAround||e)&&(t=a.modulo(t,this.slides.length)),this.slides[t])){var n=this.selectedIndex;this.selectedIndex=t,this.updateSelectedSlide(),i?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select",null,[t]),t!=n&&this.dispatchEvent("change",null,[t]),this.dispatchEvent("cellSelect")}},p._wrapSelect=function(t){var e=this.slides.length;if(!(this.options.wrapAround&&1<e))return t;var i=a.modulo(t,e),n=Math.abs(i-this.selectedIndex),s=Math.abs(i+e-this.selectedIndex),o=Math.abs(i-e-this.selectedIndex);!this.isDragSelect&&s<n?t+=e:!this.isDragSelect&&o<n&&(t-=e),t<0?this.x-=this.slideableWidth:e<=t&&(this.x+=this.slideableWidth)},p.previous=function(t,e){this.select(this.selectedIndex-1,t,e)},p.next=function(t,e){this.select(this.selectedIndex+1,t,e)},p.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];t&&(this.unselectSelectedSlide(),(this.selectedSlide=t).select(),this.selectedCells=t.cells,this.selectedElements=t.getCellElements(),this.selectedCell=t.cells[0],this.selectedElement=this.selectedElements[0])},p.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},p.selectInitialIndex=function(){var t=this.options.initialIndex;if(this.isInitActivated)this.select(this.selectedIndex,!1,!0);else{if(t&&"string"==typeof t)if(this.queryCell(t))return void this.selectCell(t,!1,!0);var e=0;t&&this.slides[t]&&(e=t),this.select(e,!1,!0)}},p.selectCell=function(t,e,i){var n=this.queryCell(t);if(n){var s=this.getCellSlideIndex(n);this.select(s,e,i)}},p.getCellSlideIndex=function(t){for(var e=0;e<this.slides.length;e++){if(-1!=this.slides[e].cells.indexOf(t))return e}},p.getCell=function(t){for(var e=0;e<this.cells.length;e++){var i=this.cells[e];if(i.element==t)return i}},p.getCells=function(t){t=a.makeArray(t);var i=[];return t.forEach(function(t){var e=this.getCell(t);e&&i.push(e)},this),i},p.getCellElements=function(){return this.cells.map(function(t){return t.element})},p.getParentCell=function(t){var e=this.getCell(t);return e||(t=a.getParent(t,".flickity-slider > *"),this.getCell(t))},p.getAdjacentCellElements=function(t,e){if(!t)return this.selectedSlide.getCellElements();e=void 0===e?this.selectedIndex:e;var i=this.slides.length;if(i<=1+2*t)return this.getCellElements();for(var n=[],s=e-t;s<=e+t;s++){var o=this.options.wrapAround?a.modulo(s,i):s,r=this.slides[o];r&&(n=n.concat(r.getCellElements()))}return n},p.queryCell=function(t){if("number"==typeof t)return this.cells[t];if("string"==typeof t){if(t.match(/^[#\.]?[\d\/]/))return;t=this.element.querySelector(t)}return this.getCell(t)},p.uiChange=function(){this.emitEvent("uiChange")},p.childUIPointerDown=function(t){"touchstart"!=t.type&&t.preventDefault(),this.focus()},p.onresize=function(){this.watchCSS(),this.resize()},a.debounceMethod(f,"onresize",150),p.resize=function(){if(this.isActive){this.getSize(),this.options.wrapAround&&(this.x=a.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,!1,!0)}},p.watchCSS=function(){this.options.watchCSS&&(-1!=o(this.element,":after").content.indexOf("flickity")?this.activate():this.deactivate())},p.onkeydown=function(t){var e=document.activeElement&&document.activeElement!=this.element;if(this.options.accessibility&&!e){var i=f.keyboardHandlers[t.keyCode];i&&i.call(this)}},f.keyboardHandlers={37:function(){var t=this.options.rightToLeft?"next":"previous";this.uiChange(),this[t]()},39:function(){var t=this.options.rightToLeft?"previous":"next";this.uiChange(),this[t]()}},p.focus=function(){var t=n.pageYOffset;this.element.focus({preventScroll:!0}),n.pageYOffset!=t&&n.scrollTo(n.pageXOffset,t)},p.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),this.cells.forEach(function(t){t.destroy()}),this.element.removeChild(this.viewport),c(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},p.destroy=function(){this.deactivate(),n.removeEventListener("resize",this),this.allOff(),this.emitEvent("destroy"),l&&this.$element&&l.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete u[this.guid]},a.extend(p,s),f.data=function(t){var e=(t=a.getQueryElement(t))&&t.flickityGUID;return e&&u[e]},a.htmlInit(f,"flickity"),l&&l.bridget&&l.bridget("flickity",f),f.setJQuery=function(t){l=t},f.Cell=i,f.Slide=r,f}),function(e,i){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.Unipointer=i(e,e.EvEmitter)}(window,function(s,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindStartEvent=function(t){this._bindStartEvent(t,!0)},i.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},i._bindStartEvent=function(t,e){var i=(e=void 0===e||e)?"addEventListener":"removeEventListener",n="mousedown";s.PointerEvent?n="pointerdown":"ontouchstart"in s&&(n="touchstart"),t[i](n,this)},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier)return i}},i.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},i.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},i.onpointerdown=function(t){this._pointerDown(t,t)},i._pointerDown=function(t,e){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},i.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var n={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return i._bindPostStartEvents=function(t){if(t){var e=n[t.type];e.forEach(function(t){s.addEventListener(t,this)},this),this._boundPointerEvents=e}},i._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(t){s.removeEventListener(t,this)},this),delete this._boundPointerEvents)},i.onmousemove=function(t){this._pointerMove(t,t)},i.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},i.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},i._pointerMove=function(t,e){this.pointerMove(t,e)},i.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},i.onmouseup=function(t){this._pointerUp(t,t)},i.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},i.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},i._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},i._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},i._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},i.pointerDone=function(){},i.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},i.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},i._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},i.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},e.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},e}),function(e,i){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("unipointer")):e.Unidragger=i(e,e.Unipointer)}(window,function(o,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindHandles=function(){this._bindHandles(!0)},i.unbindHandles=function(){this._bindHandles(!1)},i._bindHandles=function(t){for(var e=(t=void 0===t||t)?"addEventListener":"removeEventListener",i=t?this._touchActionValue:"",n=0;n<this.handles.length;n++){var s=this.handles[n];this._bindStartEvent(s,t),s[e]("click",this),o.PointerEvent&&(s.style.touchAction=i)}},i._touchActionValue="none",i.pointerDown=function(t,e){this.okayPointerDown(t)&&(this.pointerDownPointer=e,t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e]))};var s={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},r={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return i.okayPointerDown=function(t){var e=s[t.target.nodeName],i=r[t.target.type],n=!e||i;return n||this._pointerReset(),n},i.pointerDownBlur=function(){var t=document.activeElement;t&&t.blur&&t!=document.body&&t.blur()},i.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},i._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(i)&&this._dragStart(t,e),i},i.hasDragStarted=function(t){return 3<Math.abs(t.x)||3<Math.abs(t.y)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},i._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},i._dragStart=function(t,e){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,e)},i.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},i._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},i.dragMove=function(t,e,i){t.preventDefault(),this.emitEvent("dragMove",[t,e,i])},i._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},i.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},i.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},i._staticClick=function(t,e){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},i.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},e.getPointerPoint=t.getPointerPoint,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):n.Flickity=s(n,n.Flickity,n.Unidragger,n.fizzyUIUtils)}(window,function(i,t,e,a){a.extend(t.defaults,{draggable:">1",dragThreshold:3}),t.createMethods.push("_createDrag");var n=t.prototype;a.extend(n,e.prototype),n._touchActionValue="pan-y";var s="createTouch"in document,o=!1;n._createDrag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable),s&&!o&&(i.addEventListener("touchmove",function(){}),o=!0)},n.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},n.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},n.updateDraggable=function(){">1"==this.options.draggable?this.isDraggable=1<this.slides.length:this.isDraggable=this.options.draggable,this.isDraggable?this.element.classList.add("is-draggable"):this.element.classList.remove("is-draggable")},n.bindDrag=function(){this.options.draggable=!0,this.updateDraggable()},n.unbindDrag=function(){this.options.draggable=!1,this.updateDraggable()},n._uiChangeDrag=function(){delete this.isFreeScrolling},n.pointerDown=function(t,e){this.isDraggable?this.okayPointerDown(t)&&(this._pointerDownPreventDefault(t),this.pointerDownFocus(t),document.activeElement!=this.element&&this.pointerDownBlur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=l(),i.addEventListener("scroll",this),this._pointerDownDefault(t,e)):this._pointerDownDefault(t,e)},n._pointerDownDefault=function(t,e){this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},this._bindPostStartEvents(t),this.dispatchEvent("pointerDown",t,[e])};var r={INPUT:!0,TEXTAREA:!0,SELECT:!0};function l(){return{x:i.pageXOffset,y:i.pageYOffset}}return n.pointerDownFocus=function(t){r[t.target.nodeName]||this.focus()},n._pointerDownPreventDefault=function(t){var e="touchstart"==t.type,i="touch"==t.pointerType,n=r[t.target.nodeName];e||i||n||t.preventDefault()},n.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold},n.pointerUp=function(t,e){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[e]),this._dragPointerUp(t,e)},n.pointerDone=function(){i.removeEventListener("scroll",this),delete this.pointerDownScroll},n.dragStart=function(t,e){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),i.removeEventListener("scroll",this),this.dispatchEvent("dragStart",t,[e]))},n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,i]),this._dragMove(t,e,i)},n.dragMove=function(t,e,i){if(this.isDraggable){t.preventDefault(),this.previousDragX=this.dragX;var n=this.options.rightToLeft?-1:1;this.options.wrapAround&&(i.x=i.x%this.slideableWidth);var s=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.slides.length){var o=Math.max(-this.slides[0].target,this.dragStartPosition);s=o<s?.5*(s+o):s;var r=Math.min(-this.getLastSlide().target,this.dragStartPosition);s=s<r?.5*(s+r):s}this.dragX=s,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",t,[e,i])}},n.dragEnd=function(t,e){if(this.isDraggable){this.options.freeScroll&&(this.isFreeScrolling=!0);var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition();this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(i),delete this.isDragSelect,this.dispatchEvent("dragEnd",t,[e])}},n.dragEndRestingSelect=function(){var t=this.getRestingPosition(),e=Math.abs(this.getSlideDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1);return i.distance<n.distance?i.index:n.index},n._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,s=1/0,o=this.options.contain&&!this.options.wrapAround?function(t,e){return t<=e}:function(t,e){return t<e};o(e,s)&&(n+=i,s=e,null!==(e=this.getSlideDistance(-t,n)));)e=Math.abs(e);return{distance:s,index:n-i}},n.getSlideDistance=function(t,e){var i=this.slides.length,n=this.options.wrapAround&&1<i,s=n?a.modulo(e,i):e,o=this.slides[s];if(!o)return null;var r=n?this.slideableWidth*Math.floor(e/i):0;return t-(o.target+r)},n.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||100<new Date-this.dragMoveTime)return 0;var t=this.getSlideDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return 0<t&&0<e?1:t<0&&e<0?-1:0},n.staticClick=function(t,e){var i=this.getParentCell(t.target),n=i&&i.element,s=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",t,[e,n,s])},n.onscroll=function(){var t=l(),e=this.pointerDownScroll.x-t.x,i=this.pointerDownScroll.y-t.y;(3<Math.abs(e)||3<Math.abs(i))&&this._pointerDone()},t}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/prev-next-button",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){"use strict";var s="http://www.w3.org/2000/svg";function o(t,e){this.direction=t,this.parent=e,this._create()}(o.prototype=Object.create(i.prototype))._create=function(){this.isEnabled=!0,this.isPrevious=-1==this.direction;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickity-button flickity-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),this.disable(),e.setAttribute("aria-label",this.isPrevious?"Previous":"Next");var i=this.createSVG();e.appendChild(i),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},o.prototype.activate=function(){this.bindStartEvent(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},o.prototype.deactivate=function(){this.parent.element.removeChild(this.element),this.unbindStartEvent(this.element),this.element.removeEventListener("click",this)},o.prototype.createSVG=function(){var t=document.createElementNS(s,"svg");t.setAttribute("class","flickity-button-icon"),t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(s,"path"),i=function(t){return"string"!=typeof t?"M "+t.x0+",50 L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50  L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z":t}(this.parent.options.arrowShape);return e.setAttribute("d",i),e.setAttribute("class","arrow"),this.isLeft||e.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(e),t},o.prototype.handleEvent=n.handleEvent,o.prototype.onclick=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},o.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},o.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},o.prototype.update=function(){var t=this.parent.slides;if(this.parent.options.wrapAround&&1<t.length)this.enable();else{var e=t.length?t.length-1:0,i=this.isPrevious?0:e;this[this.parent.selectedIndex==i?"disable":"enable"]()}},o.prototype.destroy=function(){this.deactivate(),this.allOff()},n.extend(e.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),e.createMethods.push("_createPrevNextButtons");var r=e.prototype;return r._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new o(-1,this),this.nextButton=new o(1,this),this.on("activate",this.activatePrevNextButtons))},r.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},r.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},e.PrevNextButton=o,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/page-dots",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){function s(t){this.parent=t,this._create()}(s.prototype=Object.create(i.prototype))._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",this.dots=[],this.handleClick=this.onClick.bind(this),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.setDots(),this.holder.addEventListener("click",this.handleClick),this.bindStartEvent(this.holder),this.parent.element.appendChild(this.holder)},s.prototype.deactivate=function(){this.holder.removeEventListener("click",this.handleClick),this.unbindStartEvent(this.holder),this.parent.element.removeChild(this.holder)},s.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length;0<t?this.addDots(t):t<0&&this.removeDots(-t)},s.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[],n=this.dots.length,s=n+t,o=n;o<s;o++){var r=document.createElement("li");r.className="dot",r.setAttribute("aria-label","Page dot "+(o+1)),e.appendChild(r),i.push(r)}this.holder.appendChild(e),this.dots=this.dots.concat(i)},s.prototype.removeDots=function(t){this.dots.splice(this.dots.length-t,t).forEach(function(t){this.holder.removeChild(t)},this)},s.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot",this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected",this.selectedDot.setAttribute("aria-current","step"))},s.prototype.onTap=s.prototype.onClick=function(t){var e=t.target;if("LI"==e.nodeName){this.parent.uiChange();var i=this.dots.indexOf(e);this.parent.select(i)}},s.prototype.destroy=function(){this.deactivate(),this.allOff()},e.PageDots=s,n.extend(e.defaults,{pageDots:!0}),e.createMethods.push("_createPageDots");var o=e.prototype;return o._createPageDots=function(){this.options.pageDots&&(this.pageDots=new s(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},o.activatePageDots=function(){this.pageDots.activate()},o.updateSelectedPageDots=function(){this.pageDots.updateSelected()},o.updatePageDots=function(){this.pageDots.setDots()},o.deactivatePageDots=function(){this.pageDots.deactivate()},e.PageDots=s,e}),function(t,n){"function"==typeof define&&define.amd?define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],function(t,e,i){return n(t,e,i)}):"object"==typeof module&&module.exports?module.exports=n(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity")):n(t.EvEmitter,t.fizzyUIUtils,t.Flickity)}(window,function(t,e,i){function n(t){this.parent=t,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}(n.prototype=Object.create(t.prototype)).play=function(){"playing"!=this.state&&(document.hidden?document.addEventListener("visibilitychange",this.onVisibilityPlay):(this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()))},n.prototype.tick=function(){if("playing"==this.state){var t=this.parent.options.autoPlay;t="number"==typeof t?t:3e3;var e=this;this.clear(),this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},n.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},n.prototype.unpause=function(){"paused"==this.state&&this.play()},n.prototype.visibilityChange=function(){this[document.hidden?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},e.extend(i.defaults,{pauseAutoPlayOnHover:!0}),i.createMethods.push("_createPlayer");var s=i.prototype;return s._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},s.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},s.playPlayer=function(){this.player.play()},s.stopPlayer=function(){this.player.stop()},s.pausePlayer=function(){this.player.pause()},s.unpausePlayer=function(){this.player.unpause()},s.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},s.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},s.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},i.Player=n,i}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,n){var i=e.prototype;return i.insert=function(t,e){var i=this._makeCells(t);if(i&&i.length){var n=this.cells.length;e=void 0===e?n:e;var s=function(t){var e=document.createDocumentFragment();return t.forEach(function(t){e.appendChild(t.element)}),e}(i),o=e==n;if(o)this.slider.appendChild(s);else{var r=this.cells[e].element;this.slider.insertBefore(s,r)}if(0===e)this.cells=i.concat(this.cells);else if(o)this.cells=this.cells.concat(i);else{var a=this.cells.splice(e,n-e);this.cells=this.cells.concat(i).concat(a)}this._sizeCells(i),this.cellChange(e,!0)}},i.append=function(t){this.insert(t,this.cells.length)},i.prepend=function(t){this.insert(t,0)},i.remove=function(t){var e=this.getCells(t);if(e&&e.length){var i=this.cells.length-1;e.forEach(function(t){t.remove();var e=this.cells.indexOf(t);i=Math.min(e,i),n.removeFrom(this.cells,t)},this),this.cellChange(i,!0)}},i.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var i=this.cells.indexOf(e);this.cellChange(i)}},i.cellChange=function(t,e){var i=this.selectedElement;this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize();var n=this.getCell(i);n&&(this.selectedIndex=this.getCellSlideIndex(n)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[t]),this.select(this.selectedIndex),e&&this.positionSliderAtSelected()},e}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,o){"use strict";e.createMethods.push("_createLazyload");var i=e.prototype;function s(t,e){this.img=t,this.flickity=e,this.load()}return i._createLazyload=function(){this.on("select",this.lazyLoad)},i.lazyLoad=function(){var t=this.options.lazyLoad;if(t){var e="number"==typeof t?t:0,i=this.getAdjacentCellElements(e),n=[];i.forEach(function(t){var e=function(t){if("IMG"==t.nodeName){var e=t.getAttribute("data-flickity-lazyload"),i=t.getAttribute("data-flickity-lazyload-src"),n=t.getAttribute("data-flickity-lazyload-srcset");if(e||i||n)return[t]}var s=t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");return o.makeArray(s)}(t);n=n.concat(e)}),n.forEach(function(t){new s(t,this)},this)}},s.prototype.handleEvent=o.handleEvent,s.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);var t=this.img.getAttribute("data-flickity-lazyload")||this.img.getAttribute("data-flickity-lazyload-src"),e=this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src=t,e&&this.img.setAttribute("srcset",e),this.img.removeAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload-src"),this.img.removeAttribute("data-flickity-lazyload-srcset")},s.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")},s.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")},s.prototype.complete=function(t,e){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);var i=this.flickity.getParentCell(this.img),n=i&&i.element;this.flickity.cellSizeChange(n),this.img.classList.add(e),this.flickity.dispatchEvent("lazyLoad",t,n)},e.LazyLoader=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(t){return t}),function(t,e){"function"==typeof define&&define.amd?define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickity"),require("fizzy-ui-utils")):t.Flickity=e(t.Flickity,t.fizzyUIUtils)}(window,function(n,s){n.createMethods.push("_createAsNavFor");var t=n.prototype;return t._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var t=this.options.asNavFor;if(t){var e=this;setTimeout(function(){e.setNavCompanion(t)})}},t.setNavCompanion=function(t){t=s.getQueryElement(t);var e=n.data(t);if(e&&e!=this){this.navCompanion=e;var i=this;this.onNavCompanionSelect=function(){i.navCompanionSelect()},e.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0)}},t.navCompanionSelect=function(t){var e=this.navCompanion&&this.navCompanion.selectedCells;if(e){var i=e[0],n=this.navCompanion.cells.indexOf(i),s=n+e.length-1,o=Math.floor(function(t,e,i){return(e-t)*i+t}(n,s,this.navCompanion.cellAlign));if(this.selectCell(o,!1,t),this.removeNavSelectedElements(),!(o>=this.cells.length)){var r=this.cells.slice(n,1+s);this.navSelectedElements=r.map(function(t){return t.element}),this.changeNavSelectedClass("add")}}},t.changeNavSelectedClass=function(e){this.navSelectedElements.forEach(function(t){t.classList[e]("is-nav-selected")})},t.activateAsNavFor=function(){this.navCompanionSelect(!0)},t.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},t.onNavStaticClick=function(t,e,i,n){"number"==typeof n&&this.navCompanion.selectCell(n)},t.deactivateAsNavFor=function(){this.removeNavSelectedElements()},t.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},n}),function(e,i){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.imagesLoaded=i(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){var s=e.jQuery,o=e.console;function r(t,e){for(var i in e)t[i]=e[i];return t}var a=Array.prototype.slice;function l(t,e,i){if(!(this instanceof l))return new l(t,e,i);var n=t;"string"==typeof t&&(n=document.querySelectorAll(t)),n?(this.elements=function(t){return Array.isArray(t)?t:"object"==typeof t&&"number"==typeof t.length?a.call(t):[t]}(n),this.options=r({},this.options),"function"==typeof e?i=e:r(this.options,e),i&&this.on("always",i),this.getImages(),s&&(this.jqDeferred=new s.Deferred),setTimeout(this.check.bind(this))):o.error("Bad element for imagesLoaded "+(n||t))}(l.prototype=Object.create(t.prototype)).options={},l.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},l.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&h[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var s=i[n];this.addImage(s)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(n=0;n<o.length;n++){var r=o[n];this.addElementBackgroundImages(r)}}}};var h={1:!0,9:!0,11:!0};function i(t){this.img=t}function n(t,e){this.url=t,this.element=e,this.img=new Image}return l.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var s=n&&n[2];s&&this.addBackground(s,t),n=i.exec(e.backgroundImage)}},l.prototype.addImage=function(t){var e=new i(t);this.images.push(e)},l.prototype.addBackground=function(t,e){var i=new n(t,e);this.images.push(i)},l.prototype.check=function(){var n=this;function e(t,e,i){setTimeout(function(){n.progress(t,e,i)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(t){t.once("progress",e),t.check()}):this.complete()},l.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&o&&o.log("progress: "+i,t,e)},l.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},(i.prototype=Object.create(t.prototype)).check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},i.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},i.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},i.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},(n.prototype=Object.create(i.prototype)).check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},n.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},n.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},l.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((s=t).fn.imagesLoaded=function(t,e){return new l(this,t,e).jqDeferred.promise(s(this))})},l.makeJQueryPlugin(),l}),function(i,n){"function"==typeof define&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("flickity"),require("imagesloaded")):i.Flickity=n(i,i.Flickity,i.imagesLoaded)}(window,function(t,e,i){"use strict";e.createMethods.push("_createImagesLoaded");var n=e.prototype;return n._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},n.imagesLoaded=function(){if(this.options.imagesLoaded){var n=this;i(this.slider).on("progress",function(t,e){var i=n.getParentCell(e.img);n.cellSizeChange(i&&i.element),n.options.freeScroll||n.positionSliderAtSelected()})}},e});



/**
 * Flickity fade v1.0.0
 * Fade between Flickity slides
 */

/* jshint browser: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'flickity/js/index',
      'fizzy-ui-utils/utils',
    ], factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( this, function factory( Flickity, utils ) {

// ---- Slide ---- //

var Slide = Flickity.Slide;

var slideUpdateTarget = Slide.prototype.updateTarget;
Slide.prototype.updateTarget = function() {
  slideUpdateTarget.apply( this, arguments );
  if ( !this.parent.options.fade ) {
    return;
  }
  // position cells at selected target
  var slideTargetX = this.target - this.x;
  var firstCellX = this.cells[0].x;
  this.cells.forEach( function( cell ) {
    var targetX = cell.x - firstCellX - slideTargetX;
    cell.renderPosition( targetX );
  });
};

Slide.prototype.setOpacity = function( alpha ) {
  this.cells.forEach( function( cell ) {
    cell.element.style.opacity = alpha;
  });
};

// ---- Flickity ---- //

var proto = Flickity.prototype;

Flickity.createMethods.push('_createFade');

proto._createFade = function() {
  this.fadeIndex = this.selectedIndex;
  this.prevSelectedIndex = this.selectedIndex;
  this.on( 'select', this.onSelectFade );
  this.on( 'dragEnd', this.onDragEndFade );
  this.on( 'settle', this.onSettleFade );
  this.on( 'activate', this.onActivateFade );
  this.on( 'deactivate', this.onDeactivateFade );
};

var updateSlides = proto.updateSlides;
proto.updateSlides = function() {
  updateSlides.apply( this, arguments );
  if ( !this.options.fade ) {
    return;
  }
  // set initial opacity
  this.slides.forEach( function( slide, i ) {
    var alpha = i == this.selectedIndex ? 1 : 0;
    slide.setOpacity( alpha );
  }, this );
};

/* ---- events ---- */

proto.onSelectFade = function() {
  // in case of resize, keep fadeIndex within current count
  this.fadeIndex = Math.min( this.prevSelectedIndex, this.slides.length - 1 );
  this.prevSelectedIndex = this.selectedIndex;
};

proto.onSettleFade = function() {
  delete this.didDragEnd;
  if ( !this.options.fade ) {
    return;
  }
  // set full and 0 opacity on selected & faded slides
  this.selectedSlide.setOpacity( 1 );
  var fadedSlide = this.slides[ this.fadeIndex ];
  if ( fadedSlide && this.fadeIndex != this.selectedIndex ) {
    this.slides[ this.fadeIndex ].setOpacity( 0 );
  }
};

proto.onDragEndFade = function() {
  // set flag
  this.didDragEnd = true;
};

proto.onActivateFade = function() {
  if ( this.options.fade ) {
    this.element.classList.add('is-fade');
  }
};

proto.onDeactivateFade = function() {
  if ( !this.options.fade ) {
    return;
  }
  this.element.classList.remove('is-fade');
  // reset opacity
  this.slides.forEach( function( slide ) {
    slide.setOpacity('');
  });
};

/* ---- position & fading ---- */

var positionSlider = proto.positionSlider;
proto.positionSlider = function() {
  if ( !this.options.fade ) {
    positionSlider.apply( this, arguments );
    return;
  }

  this.fadeSlides();
  this.dispatchScrollEvent();
};

var positionSliderAtSelected = proto.positionSliderAtSelected;
proto.positionSliderAtSelected = function() {
  if ( this.options.fade ) {
    // position fade slider at origin
    this.setTranslateX( 0 );
  }
  positionSliderAtSelected.apply( this, arguments );
};

proto.fadeSlides = function() {
  if ( this.slides.length < 2 ) {
    return;
  }
  // get slides to fade-in & fade-out
  var indexes = this.getFadeIndexes();
  var fadeSlideA = this.slides[ indexes.a ];
  var fadeSlideB = this.slides[ indexes.b ];
  var distance = this.wrapDifference( fadeSlideA.target, fadeSlideB.target );
  var progress = this.wrapDifference( fadeSlideA.target, -this.x );
  progress = progress / distance;

  fadeSlideA.setOpacity( 1 - progress );
  fadeSlideB.setOpacity( progress );

  // hide previous slide
  var fadeHideIndex = indexes.a;
  if ( this.isDragging ) {
    fadeHideIndex = progress > 0.5 ? indexes.a : indexes.b;
  }
  var isNewHideIndex = this.fadeHideIndex != undefined &&
    this.fadeHideIndex != fadeHideIndex &&
    this.fadeHideIndex != indexes.a &&
    this.fadeHideIndex != indexes.b;
  if ( isNewHideIndex ) {
    // new fadeHideSlide set, hide previous
    this.slides[ this.fadeHideIndex ].setOpacity( 0 );
  }
  this.fadeHideIndex = fadeHideIndex;
};

proto.getFadeIndexes = function() {
  if ( !this.isDragging && !this.didDragEnd ) {
    return {
      a: this.fadeIndex,
      b: this.selectedIndex,
    };
  }
  if ( this.options.wrapAround ) {
    return this.getFadeDragWrapIndexes();
  } else {
    return this.getFadeDragLimitIndexes();
  }
};

proto.getFadeDragWrapIndexes = function() {
  var distances = this.slides.map( function( slide, i ) {
    return this.getSlideDistance( -this.x, i );
  }, this );
  var absDistances = distances.map( function( distance ) {
    return Math.abs( distance );
  });
  var minDistance = Math.min.apply( Math, absDistances );
  var closestIndex = absDistances.indexOf( minDistance );
  var distance = distances[ closestIndex ];
  var len = this.slides.length;

  var delta = distance >= 0 ? 1 : -1;
  return {
    a: closestIndex,
    b: utils.modulo( closestIndex + delta, len ),
  };
};

proto.getFadeDragLimitIndexes = function() {
  // calculate closest previous slide
  var dragIndex = 0;
  for ( var i=0; i < this.slides.length - 1; i++ ) {
    var slide = this.slides[i];
    if ( -this.x < slide.target ) {
      break;
    }
    dragIndex = i;
  }
  return {
    a: dragIndex,
    b: dragIndex + 1,
  };
};

proto.wrapDifference = function( a, b ) {
  var diff = b - a;

  if ( !this.options.wrapAround ) {
    return diff;
  }

  var diffPlus = diff + this.slideableWidth;
  var diffMinus = diff - this.slideableWidth;
  if ( Math.abs( diffPlus ) < Math.abs( diff ) ) {
    diff = diffPlus;
  }
  if ( Math.abs( diffMinus ) < Math.abs( diff ) ) {
    diff = diffMinus;
  }
  return diff;
};

// ---- wrapAround ---- //

var _getWrapShiftCells = proto._getWrapShiftCells;
proto._getWrapShiftCells = function() {
  if ( !this.options.fade ) {
    _getWrapShiftCells.apply( this, arguments );
  }
};

var shiftWrapCells = proto.shiftWrapCells;
proto.shiftWrapCells = function() {
  if ( !this.options.fade ) {
    shiftWrapCells.apply( this, arguments );
  }
};

return Flickity;

}));

















/*!
 * Parsley.js
 * Version 2.9.2 - built Tue, Dec 10th 2019, 6:18 pm
 * http://parsleyjs.org
 * Guillaume Potier - <guillaume@wisembly.com>
 * Marc-Andre Lafortune - <petroselinum@marc-andre.ca>
 * MIT Licensed
 */

// The source code below is generated by babel as
// Parsley is written in ECMAScript 6
//

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
        typeof define === 'function' && define.amd ? define(['jquery'], factory) :
        (global = global || self, global.parsley = factory(global.jQuery));
}(this, (function ($) {
    'use strict';

    function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function (obj) {
                return typeof obj;
            };
        } else {
            _typeof = function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
        }

        return _typeof(obj);
    }

    function _extends() {
        _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];

                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }

            return target;
        };

        return _extends.apply(this, arguments);
    }

    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
    }

    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

            return arr2;
        }
    }

    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }

    function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }

    function _iterableToArrayLimit(arr, i) {
        if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
            return;
        }

        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);

                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally {
            try {
                if (!_n && _i["return"] != null) _i["return"]();
            } finally {
                if (_d) throw _e;
            }
        }

        return _arr;
    }

    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    var globalID = 1;
    var pastWarnings = {};
    var Utils = {
        // Parsley DOM-API
        // returns object from dom attributes and values
        attr: function attr(element, namespace, obj) {
            var i;
            var attribute;
            var attributes;
            var regex = new RegExp('^' + namespace, 'i');
            if ('undefined' === typeof obj) obj = {};
            else {
                // Clear all own properties. This won't affect prototype's values
                for (i in obj) {
                    if (obj.hasOwnProperty(i)) delete obj[i];
                }
            }
            if (!element) return obj;
            attributes = element.attributes;

            for (i = attributes.length; i--;) {
                attribute = attributes[i];

                if (attribute && attribute.specified && regex.test(attribute.name)) {
                    obj[this.camelize(attribute.name.slice(namespace.length))] = this.deserializeValue(attribute.value);
                }
            }

            return obj;
        },
        checkAttr: function checkAttr(element, namespace, _checkAttr) {
            return element.hasAttribute(namespace + _checkAttr);
        },
        setAttr: function setAttr(element, namespace, attr, value) {
            element.setAttribute(this.dasherize(namespace + attr), String(value));
        },
        getType: function getType(element) {
            return element.getAttribute('type') || 'text';
        },
        generateID: function generateID() {
            return '' + globalID++;
        },

        /** Third party functions **/
        deserializeValue: function deserializeValue(value) {
            var num;

            try {
                return value ? value == "true" || (value == "false" ? false : value == "null" ? null : !isNaN(num = Number(value)) ? num : /^[\[\{]/.test(value) ? JSON.parse(value) : value) : value;
            } catch (e) {
                return value;
            }
        },
        // Zepto camelize function
        camelize: function camelize(str) {
            return str.replace(/-+(.)?/g, function (match, chr) {
                return chr ? chr.toUpperCase() : '';
            });
        },
        // Zepto dasherize function
        dasherize: function dasherize(str) {
            return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
        },
        warn: function warn() {
            var _window$console;

            if (window.console && 'function' === typeof window.console.warn)(_window$console = window.console).warn.apply(_window$console, arguments);
        },
        warnOnce: function warnOnce(msg) {
            if (!pastWarnings[msg]) {
                pastWarnings[msg] = true;
                this.warn.apply(this, arguments);
            }
        },
        _resetWarnings: function _resetWarnings() {
            pastWarnings = {};
        },
        trimString: function trimString(string) {
            return string.replace(/^\s+|\s+$/g, '');
        },
        parse: {
            date: function date(string) {
                var parsed = string.match(/^(\d{4,})-(\d\d)-(\d\d)$/);
                if (!parsed) return null;

                var _parsed$map = parsed.map(function (x) {
                        return parseInt(x, 10);
                    }),
                    _parsed$map2 = _slicedToArray(_parsed$map, 4),
                    _ = _parsed$map2[0],
                    year = _parsed$map2[1],
                    month = _parsed$map2[2],
                    day = _parsed$map2[3];

                var date = new Date(year, month - 1, day);
                if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) return null;
                return date;
            },
            string: function string(_string) {
                return _string;
            },
            integer: function integer(string) {
                if (isNaN(string)) return null;
                return parseInt(string, 10);
            },
            number: function number(string) {
                if (isNaN(string)) throw null;
                return parseFloat(string);
            },
            'boolean': function _boolean(string) {
                return !/^\s*false\s*$/i.test(string);
            },
            object: function object(string) {
                return Utils.deserializeValue(string);
            },
            regexp: function regexp(_regexp) {
                var flags = ''; // Test if RegExp is literal, if not, nothing to be done, otherwise, we need to isolate flags and pattern

                if (/^\/.*\/(?:[gimy]*)$/.test(_regexp)) {
                    // Replace the regexp literal string with the first match group: ([gimy]*)
                    // If no flag is present, this will be a blank string
                    flags = _regexp.replace(/.*\/([gimy]*)$/, '$1'); // Again, replace the regexp literal string with the first match group:
                    // everything excluding the opening and closing slashes and the flags

                    _regexp = _regexp.replace(new RegExp('^/(.*?)/' + flags + '$'), '$1');
                } else {
                    // Anchor regexp:
                    _regexp = '^' + _regexp + '$';
                }

                return new RegExp(_regexp, flags);
            }
        },
        parseRequirement: function parseRequirement(requirementType, string) {
            var converter = this.parse[requirementType || 'string'];
            if (!converter) throw 'Unknown requirement specification: "' + requirementType + '"';
            var converted = converter(string);
            if (converted === null) throw "Requirement is not a ".concat(requirementType, ": \"").concat(string, "\"");
            return converted;
        },
        namespaceEvents: function namespaceEvents(events, namespace) {
            events = this.trimString(events || '').split(/\s+/);
            if (!events[0]) return '';
            return $.map(events, function (evt) {
                return "".concat(evt, ".").concat(namespace);
            }).join(' ');
        },
        difference: function difference(array, remove) {
            // This is O(N^2), should be optimized
            var result = [];
            $.each(array, function (_, elem) {
                if (remove.indexOf(elem) == -1) result.push(elem);
            });
            return result;
        },
        // Alter-ego to native Promise.all, but for jQuery
        all: function all(promises) {
            // jQuery treats $.when() and $.when(singlePromise) differently; let's avoid that and add spurious elements
            return $.when.apply($, _toConsumableArray(promises).concat([42, 42]));
        },
        // Object.create polyfill, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill
        objectCreate: Object.create || function () {
            var Object = function Object() {};

            return function (prototype) {
                if (arguments.length > 1) {
                    throw Error('Second argument not supported');
                }

                if (_typeof(prototype) != 'object') {
                    throw TypeError('Argument must be an object');
                }

                Object.prototype = prototype;
                var result = new Object();
                Object.prototype = null;
                return result;
            };
        }(),
        _SubmitSelector: 'input[type="submit"], button:submit'
    };

    // All these options could be overriden and specified directly in DOM using
    // `data-parsley-` default DOM-API
    // eg: `inputs` can be set in DOM using `data-parsley-inputs="input, textarea"`
    // eg: `data-parsley-stop-on-first-failing-constraint="false"`
    var Defaults = {
        // ### General
        // Default data-namespace for DOM API
        namespace: 'data-parsley-',
        // Supported inputs by default
        inputs: 'input, textarea, select',
        // Excluded inputs by default
        excluded: 'input[type=button], input[type=submit], input[type=reset], input[type=hidden]',
        // Stop validating field on highest priority failing constraint
        priorityEnabled: true,
        // ### Field only
        // identifier used to group together inputs (e.g. radio buttons...)
        multiple: null,
        // identifier (or array of identifiers) used to validate only a select group of inputs
        group: null,
        // ### UI
        // Enable\Disable error messages
        uiEnabled: true,
        // Key events threshold before validation
        validationThreshold: 3,
        // Focused field on form validation error. 'first'|'last'|'none'
        focus: 'first',
        // event(s) that will trigger validation before first failure. eg: `input`...
        trigger: false,
        // event(s) that will trigger validation after first failure.
        triggerAfterFailure: 'input',
        // Class that would be added on every failing validation Parsley field
        errorClass: 'parsley-error',
        // Same for success validation
        successClass: 'parsley-success',
        // Return the `$element` that will receive these above success or error classes
        // Could also be (and given directly from DOM) a valid selector like `'#div'`
        classHandler: function classHandler(Field) {},
        // Return the `$element` where errors will be appended
        // Could also be (and given directly from DOM) a valid selector like `'#div'`
        errorsContainer: function errorsContainer(Field) {},
        // ul elem that would receive errors' list
        errorsWrapper: '<ul class="parsley-errors-list"></ul>',
        // li elem that would receive error message
        errorTemplate: '<li></li>'
    };

    var Base = function Base() {
        this.__id__ = Utils.generateID();
    };

    Base.prototype = {
        asyncSupport: true,
        // Deprecated
        _pipeAccordingToValidationResult: function _pipeAccordingToValidationResult() {
            var _this = this;

            var pipe = function pipe() {
                var r = $.Deferred();
                if (true !== _this.validationResult) r.reject();
                return r.resolve().promise();
            };

            return [pipe, pipe];
        },
        actualizeOptions: function actualizeOptions() {
            Utils.attr(this.element, this.options.namespace, this.domOptions);
            if (this.parent && this.parent.actualizeOptions) this.parent.actualizeOptions();
            return this;
        },
        _resetOptions: function _resetOptions(initOptions) {
            this.domOptions = Utils.objectCreate(this.parent.options);
            this.options = Utils.objectCreate(this.domOptions); // Shallow copy of ownProperties of initOptions:

            for (var i in initOptions) {
                if (initOptions.hasOwnProperty(i)) this.options[i] = initOptions[i];
            }

            this.actualizeOptions();
        },
        _listeners: null,
        // Register a callback for the given event name
        // Callback is called with context as the first argument and the `this`
        // The context is the current parsley instance, or window.Parsley if global
        // A return value of `false` will interrupt the calls
        on: function on(name, fn) {
            this._listeners = this._listeners || {};
            var queue = this._listeners[name] = this._listeners[name] || [];
            queue.push(fn);
            return this;
        },
        // Deprecated. Use `on` instead
        subscribe: function subscribe(name, fn) {
            $.listenTo(this, name.toLowerCase(), fn);
        },
        // Unregister a callback (or all if none is given) for the given event name
        off: function off(name, fn) {
            var queue = this._listeners && this._listeners[name];

            if (queue) {
                if (!fn) {
                    delete this._listeners[name];
                } else {
                    for (var i = queue.length; i--;) {
                        if (queue[i] === fn) queue.splice(i, 1);
                    }
                }
            }

            return this;
        },
        // Deprecated. Use `off`
        unsubscribe: function unsubscribe(name, fn) {
            $.unsubscribeTo(this, name.toLowerCase());
        },
        // Trigger an event of the given name
        // A return value of `false` interrupts the callback chain
        // Returns false if execution was interrupted
        trigger: function trigger(name, target, extraArg) {
            target = target || this;
            var queue = this._listeners && this._listeners[name];
            var result;

            if (queue) {
                for (var i = queue.length; i--;) {
                    result = queue[i].call(target, target, extraArg);
                    if (result === false) return result;
                }
            }

            if (this.parent) {
                return this.parent.trigger(name, target, extraArg);
            }

            return true;
        },
        asyncIsValid: function asyncIsValid(group, force) {
            Utils.warnOnce("asyncIsValid is deprecated; please use whenValid instead");
            return this.whenValid({
                group: group,
                force: force
            });
        },
        _findRelated: function _findRelated() {
            return this.options.multiple ? $(this.parent.element.querySelectorAll("[".concat(this.options.namespace, "multiple=\"").concat(this.options.multiple, "\"]"))) : this.$element;
        }
    };

    var convertArrayRequirement = function convertArrayRequirement(string, length) {
        var m = string.match(/^\s*\[(.*)\]\s*$/);
        if (!m) throw 'Requirement is not an array: "' + string + '"';
        var values = m[1].split(',').map(Utils.trimString);
        if (values.length !== length) throw 'Requirement has ' + values.length + ' values when ' + length + ' are needed';
        return values;
    };

    var convertExtraOptionRequirement = function convertExtraOptionRequirement(requirementSpec, string, extraOptionReader) {
        var main = null;
        var extra = {};

        for (var key in requirementSpec) {
            if (key) {
                var value = extraOptionReader(key);
                if ('string' === typeof value) value = Utils.parseRequirement(requirementSpec[key], value);
                extra[key] = value;
            } else {
                main = Utils.parseRequirement(requirementSpec[key], string);
            }
        }

        return [main, extra];
    }; // A Validator needs to implement the methods `validate` and `parseRequirements`

    var Validator = function Validator(spec) {
        $.extend(true, this, spec);
    };

    Validator.prototype = {
        // Returns `true` iff the given `value` is valid according the given requirements.
        validate: function validate(value, requirementFirstArg) {
            if (this.fn) {
                // Legacy style validator
                if (arguments.length > 3) // If more args then value, requirement, instance...
                    requirementFirstArg = [].slice.call(arguments, 1, -1); // Skip first arg (value) and last (instance), combining the rest

                return this.fn(value, requirementFirstArg);
            }

            if (Array.isArray(value)) {
                if (!this.validateMultiple) throw 'Validator `' + this.name + '` does not handle multiple values';
                return this.validateMultiple.apply(this, arguments);
            } else {
                var instance = arguments[arguments.length - 1];

                if (this.validateDate && instance._isDateInput()) {
                    arguments[0] = Utils.parse.date(arguments[0]);
                    if (arguments[0] === null) return false;
                    return this.validateDate.apply(this, arguments);
                }

                if (this.validateNumber) {
                    if (!value) // Builtin validators all accept empty strings, except `required` of course
                        return true;
                    if (isNaN(value)) return false;
                    arguments[0] = parseFloat(arguments[0]);
                    return this.validateNumber.apply(this, arguments);
                }

                if (this.validateString) {
                    return this.validateString.apply(this, arguments);
                }

                throw 'Validator `' + this.name + '` only handles multiple values';
            }
        },
        // Parses `requirements` into an array of arguments,
        // according to `this.requirementType`
        parseRequirements: function parseRequirements(requirements, extraOptionReader) {
            if ('string' !== typeof requirements) {
                // Assume requirement already parsed
                // but make sure we return an array
                return Array.isArray(requirements) ? requirements : [requirements];
            }

            var type = this.requirementType;

            if (Array.isArray(type)) {
                var values = convertArrayRequirement(requirements, type.length);

                for (var i = 0; i < values.length; i++) {
                    values[i] = Utils.parseRequirement(type[i], values[i]);
                }

                return values;
            } else if ($.isPlainObject(type)) {
                return convertExtraOptionRequirement(type, requirements, extraOptionReader);
            } else {
                return [Utils.parseRequirement(type, requirements)];
            }
        },
        // Defaults:
        requirementType: 'string',
        priority: 2
    };

    var ValidatorRegistry = function ValidatorRegistry(validators, catalog) {
        this.__class__ = 'ValidatorRegistry'; // Default Parsley locale is en

        this.locale = 'en';
        this.init(validators || {}, catalog || {});
    };

    var typeTesters = {
        email: /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))$/,
        // Follow https://www.w3.org/TR/html5/infrastructure.html#floating-point-numbers
        number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,
        integer: /^-?\d+$/,
        digits: /^\d+$/,
        alphanum: /^\w+$/i,
        date: {
            test: function test(value) {
                return Utils.parse.date(value) !== null;
            }
        },
        url: new RegExp("^" + // protocol identifier
            "(?:(?:https?|ftp)://)?" + // ** mod: make scheme optional
            // user:pass authentication
            "(?:\\S+(?::\\S*)?@)?" + "(?:" + // IP address exclusion
            // private & local networks
            // "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +   // ** mod: allow local networks
            // "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +  // ** mod: allow local networks
            // "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +  // ** mod: allow local networks
            // IP address dotted notation octets
            // excludes loopback network 0.0.0.0
            // excludes reserved space >= 224.0.0.0
            // excludes network & broacast addresses
            // (first & last IP address of each class)
            "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" + "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" + "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" + "|" + // host name
            "(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)" + // domain name
            "(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)*" + // TLD identifier
            "(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,}))" + ")" + // port number
            "(?::\\d{2,5})?" + // resource path
            "(?:/\\S*)?" + "$")
    };
    typeTesters.range = typeTesters.number; // See http://stackoverflow.com/a/10454560/8279

    var decimalPlaces = function decimalPlaces(num) {
        var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);

        if (!match) {
            return 0;
        }

        return Math.max(0, // Number of digits right of decimal point.
            (match[1] ? match[1].length : 0) - ( // Adjust for scientific notation.
                match[2] ? +match[2] : 0));
    }; // parseArguments('number', ['1', '2']) => [1, 2]

    var parseArguments = function parseArguments(type, args) {
        return args.map(Utils.parse[type]);
    }; // operatorToValidator returns a validating function for an operator function, applied to the given type

    var operatorToValidator = function operatorToValidator(type, operator) {
        return function (value) {
            for (var _len = arguments.length, requirementsAndInput = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                requirementsAndInput[_key - 1] = arguments[_key];
            }

            requirementsAndInput.pop(); // Get rid of `input` argument

            return operator.apply(void 0, [value].concat(_toConsumableArray(parseArguments(type, requirementsAndInput))));
        };
    };

    var comparisonOperator = function comparisonOperator(operator) {
        return {
            validateDate: operatorToValidator('date', operator),
            validateNumber: operatorToValidator('number', operator),
            requirementType: operator.length <= 2 ? 'string' : ['string', 'string'],
            // Support operators with a 1 or 2 requirement(s)
            priority: 30
        };
    };

    ValidatorRegistry.prototype = {
        init: function init(validators, catalog) {
            this.catalog = catalog; // Copy prototype's validators:

            this.validators = _extends({}, this.validators);

            for (var name in validators) {
                this.addValidator(name, validators[name].fn, validators[name].priority);
            }

            window.Parsley.trigger('parsley:validator:init');
        },
        // Set new messages locale if we have dictionary loaded in ParsleyConfig.i18n
        setLocale: function setLocale(locale) {
            if ('undefined' === typeof this.catalog[locale]) throw new Error(locale + ' is not available in the catalog');
            this.locale = locale;
            return this;
        },
        // Add a new messages catalog for a given locale. Set locale for this catalog if set === `true`
        addCatalog: function addCatalog(locale, messages, set) {
            if ('object' === _typeof(messages)) this.catalog[locale] = messages;
            if (true === set) return this.setLocale(locale);
            return this;
        },
        // Add a specific message for a given constraint in a given locale
        addMessage: function addMessage(locale, name, message) {
            if ('undefined' === typeof this.catalog[locale]) this.catalog[locale] = {};
            this.catalog[locale][name] = message;
            return this;
        },
        // Add messages for a given locale
        addMessages: function addMessages(locale, nameMessageObject) {
            for (var name in nameMessageObject) {
                this.addMessage(locale, name, nameMessageObject[name]);
            }

            return this;
        },
        // Add a new validator
        //
        //    addValidator('custom', {
        //        requirementType: ['integer', 'integer'],
        //        validateString: function(value, from, to) {},
        //        priority: 22,
        //        messages: {
        //          en: "Hey, that's no good",
        //          fr: "Aye aye, pas bon du tout",
        //        }
        //    })
        //
        // Old API was addValidator(name, function, priority)
        //
        addValidator: function addValidator(name, arg1, arg2) {
            if (this.validators[name]) Utils.warn('Validator "' + name + '" is already defined.');
            else if (Defaults.hasOwnProperty(name)) {
                Utils.warn('"' + name + '" is a restricted keyword and is not a valid validator name.');
                return;
            }
            return this._setValidator.apply(this, arguments);
        },
        hasValidator: function hasValidator(name) {
            return !!this.validators[name];
        },
        updateValidator: function updateValidator(name, arg1, arg2) {
            if (!this.validators[name]) {
                Utils.warn('Validator "' + name + '" is not already defined.');
                return this.addValidator.apply(this, arguments);
            }

            return this._setValidator.apply(this, arguments);
        },
        removeValidator: function removeValidator(name) {
            if (!this.validators[name]) Utils.warn('Validator "' + name + '" is not defined.');
            delete this.validators[name];
            return this;
        },
        _setValidator: function _setValidator(name, validator, priority) {
            if ('object' !== _typeof(validator)) {
                // Old style validator, with `fn` and `priority`
                validator = {
                    fn: validator,
                    priority: priority
                };
            }

            if (!validator.validate) {
                validator = new Validator(validator);
            }

            this.validators[name] = validator;

            for (var locale in validator.messages || {}) {
                this.addMessage(locale, name, validator.messages[locale]);
            }

            return this;
        },
        getErrorMessage: function getErrorMessage(constraint) {
            var message; // Type constraints are a bit different, we have to match their requirements too to find right error message

            if ('type' === constraint.name) {
                var typeMessages = this.catalog[this.locale][constraint.name] || {};
                message = typeMessages[constraint.requirements];
            } else message = this.formatMessage(this.catalog[this.locale][constraint.name], constraint.requirements);

            return message || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage;
        },
        // Kind of light `sprintf()` implementation
        formatMessage: function formatMessage(string, parameters) {
            if ('object' === _typeof(parameters)) {
                for (var i in parameters) {
                    string = this.formatMessage(string, parameters[i]);
                }

                return string;
            }

            return 'string' === typeof string ? string.replace(/%s/i, parameters) : '';
        },
        // Here is the Parsley default validators list.
        // A validator is an object with the following key values:
        //  - priority: an integer
        //  - requirement: 'string' (default), 'integer', 'number', 'regexp' or an Array of these
        //  - validateString, validateMultiple, validateNumber: functions returning `true`, `false` or a promise
        // Alternatively, a validator can be a function that returns such an object
        //
        validators: {
            notblank: {
                validateString: function validateString(value) {
                    return /\S/.test(value);
                },
                priority: 2
            },
            required: {
                validateMultiple: function validateMultiple(values) {
                    return values.length > 0;
                },
                validateString: function validateString(value) {
                    return /\S/.test(value);
                },
                priority: 512
            },
            type: {
                validateString: function validateString(value, type) {
                    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                        _ref$step = _ref.step,
                        step = _ref$step === void 0 ? 'any' : _ref$step,
                        _ref$base = _ref.base,
                        base = _ref$base === void 0 ? 0 : _ref$base;

                    var tester = typeTesters[type];

                    if (!tester) {
                        throw new Error('validator type `' + type + '` is not supported');
                    }

                    if (!value) return true; // Builtin validators all accept empty strings, except `required` of course

                    if (!tester.test(value)) return false;

                    if ('number' === type) {
                        if (!/^any$/i.test(step || '')) {
                            var nb = Number(value);
                            var decimals = Math.max(decimalPlaces(step), decimalPlaces(base));
                            if (decimalPlaces(nb) > decimals) // Value can't have too many decimals
                                return false; // Be careful of rounding errors by using integers.

                            var toInt = function toInt(f) {
                                return Math.round(f * Math.pow(10, decimals));
                            };

                            if ((toInt(nb) - toInt(base)) % toInt(step) != 0) return false;
                        }
                    }

                    return true;
                },
                requirementType: {
                    '': 'string',
                    step: 'string',
                    base: 'number'
                },
                priority: 256
            },
            pattern: {
                validateString: function validateString(value, regexp) {
                    if (!value) return true; // Builtin validators all accept empty strings, except `required` of course

                    return regexp.test(value);
                },
                requirementType: 'regexp',
                priority: 64
            },
            minlength: {
                validateString: function validateString(value, requirement) {
                    if (!value) return true; // Builtin validators all accept empty strings, except `required` of course

                    return value.length >= requirement;
                },
                requirementType: 'integer',
                priority: 30
            },
            maxlength: {
                validateString: function validateString(value, requirement) {
                    return value.length <= requirement;
                },
                requirementType: 'integer',
                priority: 30
            },
            length: {
                validateString: function validateString(value, min, max) {
                    if (!value) return true; // Builtin validators all accept empty strings, except `required` of course

                    return value.length >= min && value.length <= max;
                },
                requirementType: ['integer', 'integer'],
                priority: 30
            },
            mincheck: {
                validateMultiple: function validateMultiple(values, requirement) {
                    return values.length >= requirement;
                },
                requirementType: 'integer',
                priority: 30
            },
            maxcheck: {
                validateMultiple: function validateMultiple(values, requirement) {
                    return values.length <= requirement;
                },
                requirementType: 'integer',
                priority: 30
            },
            check: {
                validateMultiple: function validateMultiple(values, min, max) {
                    return values.length >= min && values.length <= max;
                },
                requirementType: ['integer', 'integer'],
                priority: 30
            },
            min: comparisonOperator(function (value, requirement) {
                return value >= requirement;
            }),
            max: comparisonOperator(function (value, requirement) {
                return value <= requirement;
            }),
            range: comparisonOperator(function (value, min, max) {
                return value >= min && value <= max;
            }),
            equalto: {
                validateString: function validateString(value, refOrValue) {
                    if (!value) return true; // Builtin validators all accept empty strings, except `required` of course

                    var $reference = $(refOrValue);
                    if ($reference.length) return value === $reference.val();
                    else return value === refOrValue;
                },
                priority: 256
            },
            euvatin: {
                validateString: function validateString(value, refOrValue) {
                    if (!value) {
                        return true; // Builtin validators all accept empty strings, except `required` of course
                    }

                    var re = /^[A-Z][A-Z][A-Za-z0-9 -]{2,}$/;
                    return re.test(value);
                },
                priority: 30
            }
        }
    };

    var UI = {};

    var diffResults = function diffResults(newResult, oldResult, deep) {
        var added = [];
        var kept = [];

        for (var i = 0; i < newResult.length; i++) {
            var found = false;

            for (var j = 0; j < oldResult.length; j++) {
                if (newResult[i].assert.name === oldResult[j].assert.name) {
                    found = true;
                    break;
                }
            }

            if (found) kept.push(newResult[i]);
            else added.push(newResult[i]);
        }

        return {
            kept: kept,
            added: added,
            removed: !deep ? diffResults(oldResult, newResult, true).added : []
        };
    };

    UI.Form = {
        _actualizeTriggers: function _actualizeTriggers() {
            var _this = this;

            this.$element.on('submit.Parsley', function (evt) {
                _this.onSubmitValidate(evt);
            });
            this.$element.on('click.Parsley', Utils._SubmitSelector, function (evt) {
                _this.onSubmitButton(evt);
            }); // UI could be disabled

            if (false === this.options.uiEnabled) return;
            this.element.setAttribute('novalidate', '');
        },
        focus: function focus() {
            this._focusedField = null;
            if (true === this.validationResult || 'none' === this.options.focus) return null;

            for (var i = 0; i < this.fields.length; i++) {
                var field = this.fields[i];

                if (true !== field.validationResult && field.validationResult.length > 0 && 'undefined' === typeof field.options.noFocus) {
                    this._focusedField = field.$element;
                    if ('first' === this.options.focus) break;
                }
            }

            if (null === this._focusedField) return null;
            return this._focusedField.focus();
        },
        _destroyUI: function _destroyUI() {
            // Reset all event listeners
            this.$element.off('.Parsley');
        }
    };
    UI.Field = {
        _reflowUI: function _reflowUI() {
            this._buildUI(); // If this field doesn't have an active UI don't bother doing something

            if (!this._ui) return; // Diff between two validation results

            var diff = diffResults(this.validationResult, this._ui.lastValidationResult); // Then store current validation result for next reflow

            this._ui.lastValidationResult = this.validationResult; // Handle valid / invalid / none field class

            this._manageStatusClass(); // Add, remove, updated errors messages

            this._manageErrorsMessages(diff); // Triggers impl

            this._actualizeTriggers(); // If field is not valid for the first time, bind keyup trigger to ease UX and quickly inform user

            if ((diff.kept.length || diff.added.length) && !this._failedOnce) {
                this._failedOnce = true;

                this._actualizeTriggers();
            }
        },
        // Returns an array of field's error message(s)
        getErrorsMessages: function getErrorsMessages() {
            // No error message, field is valid
            if (true === this.validationResult) return [];
            var messages = [];

            for (var i = 0; i < this.validationResult.length; i++) {
                messages.push(this.validationResult[i].errorMessage || this._getErrorMessage(this.validationResult[i].assert));
            }

            return messages;
        },
        // It's a goal of Parsley that this method is no longer required [#1073]
        addError: function addError(name) {
            var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                message = _ref.message,
                assert = _ref.assert,
                _ref$updateClass = _ref.updateClass,
                updateClass = _ref$updateClass === void 0 ? true : _ref$updateClass;

            this._buildUI();

            this._addError(name, {
                message: message,
                assert: assert
            });

            if (updateClass) this._errorClass();
        },
        // It's a goal of Parsley that this method is no longer required [#1073]
        updateError: function updateError(name) {
            var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                message = _ref2.message,
                assert = _ref2.assert,
                _ref2$updateClass = _ref2.updateClass,
                updateClass = _ref2$updateClass === void 0 ? true : _ref2$updateClass;

            this._buildUI();

            this._updateError(name, {
                message: message,
                assert: assert
            });

            if (updateClass) this._errorClass();
        },
        // It's a goal of Parsley that this method is no longer required [#1073]
        removeError: function removeError(name) {
            var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref3$updateClass = _ref3.updateClass,
                updateClass = _ref3$updateClass === void 0 ? true : _ref3$updateClass;

            this._buildUI();

            this._removeError(name); // edge case possible here: remove a standard Parsley error that is still failing in this.validationResult
            // but highly improbable cuz' manually removing a well Parsley handled error makes no sense.

            if (updateClass) this._manageStatusClass();
        },
        _manageStatusClass: function _manageStatusClass() {
            if (this.hasConstraints() && this.needsValidation() && true === this.validationResult) this._successClass();
            else if (this.validationResult.length > 0) this._errorClass();
            else this._resetClass();
        },
        _manageErrorsMessages: function _manageErrorsMessages(diff) {
            if ('undefined' !== typeof this.options.errorsMessagesDisabled) return; // Case where we have errorMessage option that configure an unique field error message, regardless failing validators

            if ('undefined' !== typeof this.options.errorMessage) {
                if (diff.added.length || diff.kept.length) {
                    this._insertErrorWrapper();

                    if (0 === this._ui.$errorsWrapper.find('.parsley-custom-error-message').length) this._ui.$errorsWrapper.append($(this.options.errorTemplate).addClass('parsley-custom-error-message'));

                    this._ui.$errorClassHandler.attr('aria-describedby', this._ui.errorsWrapperId);

                    return this._ui.$errorsWrapper.addClass('filled').attr('aria-hidden', 'false').find('.parsley-custom-error-message').html(this.options.errorMessage);
                }

                this._ui.$errorClassHandler.removeAttr('aria-describedby');

                return this._ui.$errorsWrapper.removeClass('filled').attr('aria-hidden', 'true').find('.parsley-custom-error-message').remove();
            } // Show, hide, update failing constraints messages

            for (var i = 0; i < diff.removed.length; i++) {
                this._removeError(diff.removed[i].assert.name);
            }

            for (i = 0; i < diff.added.length; i++) {
                this._addError(diff.added[i].assert.name, {
                    message: diff.added[i].errorMessage,
                    assert: diff.added[i].assert
                });
            }

            for (i = 0; i < diff.kept.length; i++) {
                this._updateError(diff.kept[i].assert.name, {
                    message: diff.kept[i].errorMessage,
                    assert: diff.kept[i].assert
                });
            }
        },
        _addError: function _addError(name, _ref4) {
            var message = _ref4.message,
                assert = _ref4.assert;

            this._insertErrorWrapper();

            this._ui.$errorClassHandler.attr('aria-describedby', this._ui.errorsWrapperId);

            this._ui.$errorsWrapper.addClass('filled').attr('aria-hidden', 'false').append($(this.options.errorTemplate).addClass('parsley-' + name).html(message || this._getErrorMessage(assert)));
        },
        _updateError: function _updateError(name, _ref5) {
            var message = _ref5.message,
                assert = _ref5.assert;

            this._ui.$errorsWrapper.addClass('filled').find('.parsley-' + name).html(message || this._getErrorMessage(assert));
        },
        _removeError: function _removeError(name) {
            this._ui.$errorClassHandler.removeAttr('aria-describedby');

            this._ui.$errorsWrapper.removeClass('filled').attr('aria-hidden', 'true').find('.parsley-' + name).remove();
        },
        _getErrorMessage: function _getErrorMessage(constraint) {
            var customConstraintErrorMessage = constraint.name + 'Message';
            if ('undefined' !== typeof this.options[customConstraintErrorMessage]) return window.Parsley.formatMessage(this.options[customConstraintErrorMessage], constraint.requirements);
            return window.Parsley.getErrorMessage(constraint);
        },
        _buildUI: function _buildUI() {
            // UI could be already built or disabled
            if (this._ui || false === this.options.uiEnabled) return;
            var _ui = {}; // Give field its Parsley id in DOM

            this.element.setAttribute(this.options.namespace + 'id', this.__id__);
            /** Generate important UI elements and store them in this **/
            // $errorClassHandler is the $element that woul have parsley-error and parsley-success classes

            _ui.$errorClassHandler = this._manageClassHandler(); // $errorsWrapper is a div that would contain the various field errors, it will be appended into $errorsContainer

            _ui.errorsWrapperId = 'parsley-id-' + (this.options.multiple ? 'multiple-' + this.options.multiple : this.__id__);
            _ui.$errorsWrapper = $(this.options.errorsWrapper).attr('id', _ui.errorsWrapperId); // ValidationResult UI storage to detect what have changed bwt two validations, and update DOM accordingly

            _ui.lastValidationResult = [];
            _ui.validationInformationVisible = false; // Store it in this for later

            this._ui = _ui;
        },
        // Determine which element will have `parsley-error` and `parsley-success` classes
        _manageClassHandler: function _manageClassHandler() {
            // Class handled could also be determined by function given in Parsley options
            if ('string' === typeof this.options.classHandler && $(this.options.classHandler).length) return $(this.options.classHandler); // Class handled could also be determined by function given in Parsley options

            var $handlerFunction = this.options.classHandler; // It might also be the function name of a global function

            if ('string' === typeof this.options.classHandler && 'function' === typeof window[this.options.classHandler]) $handlerFunction = window[this.options.classHandler];

            if ('function' === typeof $handlerFunction) {
                var $handler = $handlerFunction.call(this, this); // If this function returned a valid existing DOM element, go for it

                if ('undefined' !== typeof $handler && $handler.length) return $handler;
            } else if ('object' === _typeof($handlerFunction) && $handlerFunction instanceof jQuery && $handlerFunction.length) {
                return $handlerFunction;
            } else if ($handlerFunction) {
                Utils.warn('The class handler `' + $handlerFunction + '` does not exist in DOM nor as a global JS function');
            }

            return this._inputHolder();
        },
        _inputHolder: function _inputHolder() {
            // if simple element (input, texatrea, select...) it will perfectly host the classes and precede the error container
            if (!this.options.multiple || this.element.nodeName === 'SELECT') return this.$element; // But if multiple element (radio, checkbox), that would be their parent

            return this.$element.parent();
        },
        _insertErrorWrapper: function _insertErrorWrapper() {
            var $errorsContainer = this.options.errorsContainer; // Nothing to do if already inserted

            if (0 !== this._ui.$errorsWrapper.parent().length) return this._ui.$errorsWrapper.parent();

            if ('string' === typeof $errorsContainer) {
                if ($($errorsContainer).length) return $($errorsContainer).append(this._ui.$errorsWrapper);
                else if ('function' === typeof window[$errorsContainer]) $errorsContainer = window[$errorsContainer];
                else Utils.warn('The errors container `' + $errorsContainer + '` does not exist in DOM nor as a global JS function');
            }

            if ('function' === typeof $errorsContainer) $errorsContainer = $errorsContainer.call(this, this);
            if ('object' === _typeof($errorsContainer) && $errorsContainer.length) return $errorsContainer.append(this._ui.$errorsWrapper);
            return this._inputHolder().after(this._ui.$errorsWrapper);
        },
        _actualizeTriggers: function _actualizeTriggers() {
            var _this2 = this;

            var $toBind = this._findRelated();

            var trigger; // Remove Parsley events already bound on this field

            $toBind.off('.Parsley');
            if (this._failedOnce) $toBind.on(Utils.namespaceEvents(this.options.triggerAfterFailure, 'Parsley'), function () {
                _this2._validateIfNeeded();
            });
            else if (trigger = Utils.namespaceEvents(this.options.trigger, 'Parsley')) {
                $toBind.on(trigger, function (event) {
                    _this2._validateIfNeeded(event);
                });
            }
        },
        _validateIfNeeded: function _validateIfNeeded(event) {
            var _this3 = this;

            // For keyup, keypress, keydown, input... events that could be a little bit obstrusive
            // do not validate if val length < min threshold on first validation. Once field have been validated once and info
            // about success or failure have been displayed, always validate with this trigger to reflect every yalidation change.
            if (event && /key|input/.test(event.type))
                if (!(this._ui && this._ui.validationInformationVisible) && this.getValue().length <= this.options.validationThreshold) return;

            if (this.options.debounce) {
                window.clearTimeout(this._debounced);
                this._debounced = window.setTimeout(function () {
                    return _this3.validate();
                }, this.options.debounce);
            } else this.validate();
        },
        _resetUI: function _resetUI() {
            // Reset all event listeners
            this._failedOnce = false;

            this._actualizeTriggers(); // Nothing to do if UI never initialized for this field

            if ('undefined' === typeof this._ui) return; // Reset all errors' li

            this._ui.$errorsWrapper.removeClass('filled').children().remove(); // Reset validation class

            this._resetClass(); // Reset validation flags and last validation result

            this._ui.lastValidationResult = [];
            this._ui.validationInformationVisible = false;
        },
        _destroyUI: function _destroyUI() {
            this._resetUI();

            if ('undefined' !== typeof this._ui) this._ui.$errorsWrapper.remove();
            delete this._ui;
        },
        _successClass: function _successClass() {
            this._ui.validationInformationVisible = true;

            this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass);
        },
        _errorClass: function _errorClass() {
            this._ui.validationInformationVisible = true;

            this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass);
        },
        _resetClass: function _resetClass() {
            this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass);
        }
    };

    var Form = function Form(element, domOptions, options) {
        this.__class__ = 'Form';
        this.element = element;
        this.$element = $(element);
        this.domOptions = domOptions;
        this.options = options;
        this.parent = window.Parsley;
        this.fields = [];
        this.validationResult = null;
    };

    var statusMapping = {
        pending: null,
        resolved: true,
        rejected: false
    };
    Form.prototype = {
        onSubmitValidate: function onSubmitValidate(event) {
            var _this = this;

            // This is a Parsley generated submit event, do not validate, do not prevent, simply exit and keep normal behavior
            if (true === event.parsley) return; // If we didn't come here through a submit button, use the first one in the form

            var submitSource = this._submitSource || this.$element.find(Utils._SubmitSelector)[0];
            this._submitSource = null;
            this.$element.find('.parsley-synthetic-submit-button').prop('disabled', true);
            if (submitSource && null !== submitSource.getAttribute('formnovalidate')) return;
            window.Parsley._remoteCache = {};
            var promise = this.whenValidate({
                event: event
            });

            if ('resolved' === promise.state() && false !== this._trigger('submit'));
            else {
                // Rejected or pending: cancel this submit
                event.stopImmediatePropagation();
                event.preventDefault();
                if ('pending' === promise.state()) promise.done(function () {
                    _this._submit(submitSource);
                });
            }
        },
        onSubmitButton: function onSubmitButton(event) {
            this._submitSource = event.currentTarget;
        },
        // internal
        // _submit submits the form, this time without going through the validations.
        // Care must be taken to "fake" the actual submit button being clicked.
        _submit: function _submit(submitSource) {
            if (false === this._trigger('submit')) return; // Add submit button's data

            if (submitSource) {
                var $synthetic = this.$element.find('.parsley-synthetic-submit-button').prop('disabled', false);
                if (0 === $synthetic.length) $synthetic = $('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element);
                $synthetic.attr({
                    name: submitSource.getAttribute('name'),
                    value: submitSource.getAttribute('value')
                });
            }

            this.$element.trigger(_extends($.Event('submit'), {
                parsley: true
            }));
        },
        // Performs validation on fields while triggering events.
        // @returns `true` if all validations succeeds, `false`
        // if a failure is immediately detected, or `null`
        // if dependant on a promise.
        // Consider using `whenValidate` instead.
        validate: function validate(options) {
            if (arguments.length >= 1 && !$.isPlainObject(options)) {
                Utils.warnOnce('Calling validate on a parsley form without passing arguments as an object is deprecated.');

                var _arguments = Array.prototype.slice.call(arguments),
                    group = _arguments[0],
                    force = _arguments[1],
                    event = _arguments[2];

                options = {
                    group: group,
                    force: force,
                    event: event
                };
            }

            return statusMapping[this.whenValidate(options).state()];
        },
        whenValidate: function whenValidate() {
            var _this2 = this,
                _Utils$all$done$fail$;

            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                group = _ref.group,
                force = _ref.force,
                event = _ref.event;

            this.submitEvent = event;

            if (event) {
                this.submitEvent = _extends({}, event, {
                    preventDefault: function preventDefault() {
                        Utils.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`");
                        _this2.validationResult = false;
                    }
                });
            }

            this.validationResult = true; // fire validate event to eventually modify things before every validation

            this._trigger('validate'); // Refresh form DOM options and form's fields that could have changed

            this._refreshFields();

            var promises = this._withoutReactualizingFormOptions(function () {
                return $.map(_this2.fields, function (field) {
                    return field.whenValidate({
                        force: force,
                        group: group
                    });
                });
            });

            return (_Utils$all$done$fail$ = Utils.all(promises).done(function () {
                _this2._trigger('success');
            }).fail(function () {
                _this2.validationResult = false;

                _this2.focus();

                _this2._trigger('error');
            }).always(function () {
                _this2._trigger('validated');
            })).pipe.apply(_Utils$all$done$fail$, _toConsumableArray(this._pipeAccordingToValidationResult()));
        },
        // Iterate over refreshed fields, and stop on first failure.
        // Returns `true` if all fields are valid, `false` if a failure is detected
        // or `null` if the result depends on an unresolved promise.
        // Prefer using `whenValid` instead.
        isValid: function isValid(options) {
            if (arguments.length >= 1 && !$.isPlainObject(options)) {
                Utils.warnOnce('Calling isValid on a parsley form without passing arguments as an object is deprecated.');

                var _arguments2 = Array.prototype.slice.call(arguments),
                    group = _arguments2[0],
                    force = _arguments2[1];

                options = {
                    group: group,
                    force: force
                };
            }

            return statusMapping[this.whenValid(options).state()];
        },
        // Iterate over refreshed fields and validate them.
        // Returns a promise.
        // A validation that immediately fails will interrupt the validations.
        whenValid: function whenValid() {
            var _this3 = this;

            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                group = _ref2.group,
                force = _ref2.force;

            this._refreshFields();

            var promises = this._withoutReactualizingFormOptions(function () {
                return $.map(_this3.fields, function (field) {
                    return field.whenValid({
                        group: group,
                        force: force
                    });
                });
            });

            return Utils.all(promises);
        },
        refresh: function refresh() {
            this._refreshFields();

            return this;
        },
        // Reset UI
        reset: function reset() {
            // Form case: emit a reset event for each field
            for (var i = 0; i < this.fields.length; i++) {
                this.fields[i].reset();
            }

            this._trigger('reset');
        },
        // Destroy Parsley instance (+ UI)
        destroy: function destroy() {
            // Field case: emit destroy event to clean UI and then destroy stored instance
            this._destroyUI(); // Form case: destroy all its fields and then destroy stored instance

            for (var i = 0; i < this.fields.length; i++) {
                this.fields[i].destroy();
            }

            this.$element.removeData('Parsley');

            this._trigger('destroy');
        },
        _refreshFields: function _refreshFields() {
            return this.actualizeOptions()._bindFields();
        },
        _bindFields: function _bindFields() {
            var _this4 = this;

            var oldFields = this.fields;
            this.fields = [];
            this.fieldsMappedById = {};

            this._withoutReactualizingFormOptions(function () {
                _this4.$element.find(_this4.options.inputs).not(_this4.options.excluded).not("[".concat(_this4.options.namespace, "excluded=true]")).each(function (_, element) {
                    var fieldInstance = new window.Parsley.Factory(element, {}, _this4); // Only add valid and not excluded `Field` and `FieldMultiple` children

                    if ('Field' === fieldInstance.__class__ || 'FieldMultiple' === fieldInstance.__class__) {
                        var uniqueId = fieldInstance.__class__ + '-' + fieldInstance.__id__;

                        if ('undefined' === typeof _this4.fieldsMappedById[uniqueId]) {
                            _this4.fieldsMappedById[uniqueId] = fieldInstance;

                            _this4.fields.push(fieldInstance);
                        }
                    }
                });

                $.each(Utils.difference(oldFields, _this4.fields), function (_, field) {
                    field.reset();
                });
            });

            return this;
        },
        // Internal only.
        // Looping on a form's fields to do validation or similar
        // will trigger reactualizing options on all of them, which
        // in turn will reactualize the form's options.
        // To avoid calling actualizeOptions so many times on the form
        // for nothing, _withoutReactualizingFormOptions temporarily disables
        // the method actualizeOptions on this form while `fn` is called.
        _withoutReactualizingFormOptions: function _withoutReactualizingFormOptions(fn) {
            var oldActualizeOptions = this.actualizeOptions;

            this.actualizeOptions = function () {
                return this;
            };

            var result = fn();
            this.actualizeOptions = oldActualizeOptions;
            return result;
        },
        // Internal only.
        // Shortcut to trigger an event
        // Returns true iff event is not interrupted and default not prevented.
        _trigger: function _trigger(eventName) {
            return this.trigger('form:' + eventName);
        }
    };

    var Constraint = function Constraint(parsleyField, name, requirements, priority, isDomConstraint) {
        var validatorSpec = window.Parsley._validatorRegistry.validators[name];
        var validator = new Validator(validatorSpec);
        priority = priority || parsleyField.options[name + 'Priority'] || validator.priority;
        isDomConstraint = true === isDomConstraint;

        _extends(this, {
            validator: validator,
            name: name,
            requirements: requirements,
            priority: priority,
            isDomConstraint: isDomConstraint
        });

        this._parseRequirements(parsleyField.options);
    };

    var capitalize = function capitalize(str) {
        var cap = str[0].toUpperCase();
        return cap + str.slice(1);
    };

    Constraint.prototype = {
        validate: function validate(value, instance) {
            var _this$validator;

            return (_this$validator = this.validator).validate.apply(_this$validator, [value].concat(_toConsumableArray(this.requirementList), [instance]));
        },
        _parseRequirements: function _parseRequirements(options) {
            var _this = this;

            this.requirementList = this.validator.parseRequirements(this.requirements, function (key) {
                return options[_this.name + capitalize(key)];
            });
        }
    };

    var Field = function Field(field, domOptions, options, parsleyFormInstance) {
        this.__class__ = 'Field';
        this.element = field;
        this.$element = $(field); // Set parent if we have one

        if ('undefined' !== typeof parsleyFormInstance) {
            this.parent = parsleyFormInstance;
        }

        this.options = options;
        this.domOptions = domOptions; // Initialize some properties

        this.constraints = [];
        this.constraintsByName = {};
        this.validationResult = true; // Bind constraints

        this._bindConstraints();
    };

    var statusMapping$1 = {
        pending: null,
        resolved: true,
        rejected: false
    };
    Field.prototype = {
        // # Public API
        // Validate field and trigger some events for mainly `UI`
        // @returns `true`, an array of the validators that failed, or
        // `null` if validation is not finished. Prefer using whenValidate
        validate: function validate(options) {
            if (arguments.length >= 1 && !$.isPlainObject(options)) {
                Utils.warnOnce('Calling validate on a parsley field without passing arguments as an object is deprecated.');
                options = {
                    options: options
                };
            }

            var promise = this.whenValidate(options);
            if (!promise) // If excluded with `group` option
                return true;

            switch (promise.state()) {
                case 'pending':
                    return null;

                case 'resolved':
                    return true;

                case 'rejected':
                    return this.validationResult;
            }
        },
        // Validate field and trigger some events for mainly `UI`
        // @returns a promise that succeeds only when all validations do
        // or `undefined` if field is not in the given `group`.
        whenValidate: function whenValidate() {
            var _this$whenValid$alway,
                _this = this;

            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                force = _ref.force,
                group = _ref.group;

            // do not validate a field if not the same as given validation group
            this.refresh();
            if (group && !this._isInGroup(group)) return;
            this.value = this.getValue(); // Field Validate event. `this.value` could be altered for custom needs

            this._trigger('validate');

            return (_this$whenValid$alway = this.whenValid({
                force: force,
                value: this.value,
                _refreshed: true
            }).always(function () {
                _this._reflowUI();
            }).done(function () {
                _this._trigger('success');
            }).fail(function () {
                _this._trigger('error');
            }).always(function () {
                _this._trigger('validated');
            })).pipe.apply(_this$whenValid$alway, _toConsumableArray(this._pipeAccordingToValidationResult()));
        },
        hasConstraints: function hasConstraints() {
            return 0 !== this.constraints.length;
        },
        // An empty optional field does not need validation
        needsValidation: function needsValidation(value) {
            if ('undefined' === typeof value) value = this.getValue(); // If a field is empty and not required, it is valid
            // Except if `data-parsley-validate-if-empty` explicitely added, useful for some custom validators

            if (!value.length && !this._isRequired() && 'undefined' === typeof this.options.validateIfEmpty) return false;
            return true;
        },
        _isInGroup: function _isInGroup(group) {
            if (Array.isArray(this.options.group)) return -1 !== $.inArray(group, this.options.group);
            return this.options.group === group;
        },
        // Just validate field. Do not trigger any event.
        // Returns `true` iff all constraints pass, `false` if there are failures,
        // or `null` if the result can not be determined yet (depends on a promise)
        // See also `whenValid`.
        isValid: function isValid(options) {
            if (arguments.length >= 1 && !$.isPlainObject(options)) {
                Utils.warnOnce('Calling isValid on a parsley field without passing arguments as an object is deprecated.');

                var _arguments = Array.prototype.slice.call(arguments),
                    force = _arguments[0],
                    value = _arguments[1];

                options = {
                    force: force,
                    value: value
                };
            }

            var promise = this.whenValid(options);
            if (!promise) // Excluded via `group`
                return true;
            return statusMapping$1[promise.state()];
        },
        // Just validate field. Do not trigger any event.
        // @returns a promise that succeeds only when all validations do
        // or `undefined` if the field is not in the given `group`.
        // The argument `force` will force validation of empty fields.
        // If a `value` is given, it will be validated instead of the value of the input.
        whenValid: function whenValid() {
            var _this2 = this;

            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref2$force = _ref2.force,
                force = _ref2$force === void 0 ? false : _ref2$force,
                value = _ref2.value,
                group = _ref2.group,
                _refreshed = _ref2._refreshed;

            // Recompute options and rebind constraints to have latest changes
            if (!_refreshed) this.refresh(); // do not validate a field if not the same as given validation group

            if (group && !this._isInGroup(group)) return;
            this.validationResult = true; // A field without constraint is valid

            if (!this.hasConstraints()) return $.when(); // Value could be passed as argument, needed to add more power to 'field:validate'

            if ('undefined' === typeof value || null === value) value = this.getValue();
            if (!this.needsValidation(value) && true !== force) return $.when();

            var groupedConstraints = this._getGroupedConstraints();

            var promises = [];
            $.each(groupedConstraints, function (_, constraints) {
                // Process one group of constraints at a time, we validate the constraints
                // and combine the promises together.
                var promise = Utils.all($.map(constraints, function (constraint) {
                    return _this2._validateConstraint(value, constraint);
                }));
                promises.push(promise);
                if (promise.state() === 'rejected') return false; // Interrupt processing if a group has already failed
            });
            return Utils.all(promises);
        },
        // @returns a promise
        _validateConstraint: function _validateConstraint(value, constraint) {
            var _this3 = this;

            var result = constraint.validate(value, this); // Map false to a failed promise

            if (false === result) result = $.Deferred().reject(); // Make sure we return a promise and that we record failures

            return Utils.all([result]).fail(function (errorMessage) {
                if (!(_this3.validationResult instanceof Array)) _this3.validationResult = [];

                _this3.validationResult.push({
                    assert: constraint,
                    errorMessage: 'string' === typeof errorMessage && errorMessage
                });
            });
        },
        // @returns Parsley field computed value that could be overrided or configured in DOM
        getValue: function getValue() {
            var value; // Value could be overriden in DOM or with explicit options

            if ('function' === typeof this.options.value) value = this.options.value(this);
            else if ('undefined' !== typeof this.options.value) value = this.options.value;
            else value = this.$element.val(); // Handle wrong DOM or configurations

            if ('undefined' === typeof value || null === value) return '';
            return this._handleWhitespace(value);
        },
        // Reset UI
        reset: function reset() {
            this._resetUI();

            return this._trigger('reset');
        },
        // Destroy Parsley instance (+ UI)
        destroy: function destroy() {
            // Field case: emit destroy event to clean UI and then destroy stored instance
            this._destroyUI();

            this.$element.removeData('Parsley');
            this.$element.removeData('FieldMultiple');

            this._trigger('destroy');
        },
        // Actualize options and rebind constraints
        refresh: function refresh() {
            this._refreshConstraints();

            return this;
        },
        _refreshConstraints: function _refreshConstraints() {
            return this.actualizeOptions()._bindConstraints();
        },
        refreshConstraints: function refreshConstraints() {
            Utils.warnOnce("Parsley's refreshConstraints is deprecated. Please use refresh");
            return this.refresh();
        },

        /**
         * Add a new constraint to a field
         *
         * @param {String}   name
         * @param {Mixed}    requirements      optional
         * @param {Number}   priority          optional
         * @param {Boolean}  isDomConstraint   optional
         */
        addConstraint: function addConstraint(name, requirements, priority, isDomConstraint) {
            if (window.Parsley._validatorRegistry.validators[name]) {
                var constraint = new Constraint(this, name, requirements, priority, isDomConstraint); // if constraint already exist, delete it and push new version

                if ('undefined' !== this.constraintsByName[constraint.name]) this.removeConstraint(constraint.name);
                this.constraints.push(constraint);
                this.constraintsByName[constraint.name] = constraint;
            }

            return this;
        },
        // Remove a constraint
        removeConstraint: function removeConstraint(name) {
            for (var i = 0; i < this.constraints.length; i++) {
                if (name === this.constraints[i].name) {
                    this.constraints.splice(i, 1);
                    break;
                }
            }

            delete this.constraintsByName[name];
            return this;
        },
        // Update a constraint (Remove + re-add)
        updateConstraint: function updateConstraint(name, parameters, priority) {
            return this.removeConstraint(name).addConstraint(name, parameters, priority);
        },
        // # Internals
        // Internal only.
        // Bind constraints from config + options + DOM
        _bindConstraints: function _bindConstraints() {
            var constraints = [];
            var constraintsByName = {}; // clean all existing DOM constraints to only keep javascript user constraints

            for (var i = 0; i < this.constraints.length; i++) {
                if (false === this.constraints[i].isDomConstraint) {
                    constraints.push(this.constraints[i]);
                    constraintsByName[this.constraints[i].name] = this.constraints[i];
                }
            }

            this.constraints = constraints;
            this.constraintsByName = constraintsByName; // then re-add Parsley DOM-API constraints

            for (var name in this.options) {
                this.addConstraint(name, this.options[name], undefined, true);
            } // finally, bind special HTML5 constraints

            return this._bindHtml5Constraints();
        },
        // Internal only.
        // Bind specific HTML5 constraints to be HTML5 compliant
        _bindHtml5Constraints: function _bindHtml5Constraints() {
            // html5 required
            if (null !== this.element.getAttribute('required')) this.addConstraint('required', true, undefined, true); // html5 pattern

            if (null !== this.element.getAttribute('pattern')) this.addConstraint('pattern', this.element.getAttribute('pattern'), undefined, true); // range

            var min = this.element.getAttribute('min');
            var max = this.element.getAttribute('max');
            if (null !== min && null !== max) this.addConstraint('range', [min, max], undefined, true); // HTML5 min
            else if (null !== min) this.addConstraint('min', min, undefined, true); // HTML5 max
            else if (null !== max) this.addConstraint('max', max, undefined, true); // length

            if (null !== this.element.getAttribute('minlength') && null !== this.element.getAttribute('maxlength')) this.addConstraint('length', [this.element.getAttribute('minlength'), this.element.getAttribute('maxlength')], undefined, true); // HTML5 minlength
            else if (null !== this.element.getAttribute('minlength')) this.addConstraint('minlength', this.element.getAttribute('minlength'), undefined, true); // HTML5 maxlength
            else if (null !== this.element.getAttribute('maxlength')) this.addConstraint('maxlength', this.element.getAttribute('maxlength'), undefined, true); // html5 types

            var type = Utils.getType(this.element); // Small special case here for HTML5 number: integer validator if step attribute is undefined or an integer value, number otherwise

            if ('number' === type) {
                return this.addConstraint('type', ['number', {
                    step: this.element.getAttribute('step') || '1',
                    base: min || this.element.getAttribute('value')
                }], undefined, true); // Regular other HTML5 supported types
            } else if (/^(email|url|range|date)$/i.test(type)) {
                return this.addConstraint('type', type, undefined, true);
            }

            return this;
        },
        // Internal only.
        // Field is required if have required constraint without `false` value
        _isRequired: function _isRequired() {
            if ('undefined' === typeof this.constraintsByName.required) return false;
            return false !== this.constraintsByName.required.requirements;
        },
        // Internal only.
        // Shortcut to trigger an event
        _trigger: function _trigger(eventName) {
            return this.trigger('field:' + eventName);
        },
        // Internal only
        // Handles whitespace in a value
        // Use `data-parsley-whitespace="squish"` to auto squish input value
        // Use `data-parsley-whitespace="trim"` to auto trim input value
        _handleWhitespace: function _handleWhitespace(value) {
            if (true === this.options.trimValue) Utils.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"');
            if ('squish' === this.options.whitespace) value = value.replace(/\s{2,}/g, ' ');
            if ('trim' === this.options.whitespace || 'squish' === this.options.whitespace || true === this.options.trimValue) value = Utils.trimString(value);
            return value;
        },
        _isDateInput: function _isDateInput() {
            var c = this.constraintsByName.type;
            return c && c.requirements === 'date';
        },
        // Internal only.
        // Returns the constraints, grouped by descending priority.
        // The result is thus an array of arrays of constraints.
        _getGroupedConstraints: function _getGroupedConstraints() {
            if (false === this.options.priorityEnabled) return [this.constraints];
            var groupedConstraints = [];
            var index = {}; // Create array unique of priorities

            for (var i = 0; i < this.constraints.length; i++) {
                var p = this.constraints[i].priority;
                if (!index[p]) groupedConstraints.push(index[p] = []);
                index[p].push(this.constraints[i]);
            } // Sort them by priority DESC

            groupedConstraints.sort(function (a, b) {
                return b[0].priority - a[0].priority;
            });
            return groupedConstraints;
        }
    };

    var Multiple = function Multiple() {
        this.__class__ = 'FieldMultiple';
    };

    Multiple.prototype = {
        // Add new `$element` sibling for multiple field
        addElement: function addElement($element) {
            this.$elements.push($element);
            return this;
        },
        // See `Field._refreshConstraints()`
        _refreshConstraints: function _refreshConstraints() {
            var fieldConstraints;
            this.constraints = []; // Select multiple special treatment

            if (this.element.nodeName === 'SELECT') {
                this.actualizeOptions()._bindConstraints();

                return this;
            } // Gather all constraints for each input in the multiple group

            for (var i = 0; i < this.$elements.length; i++) {
                // Check if element have not been dynamically removed since last binding
                if (!$('html').has(this.$elements[i]).length) {
                    this.$elements.splice(i, 1);
                    continue;
                }

                fieldConstraints = this.$elements[i].data('FieldMultiple')._refreshConstraints().constraints;

                for (var j = 0; j < fieldConstraints.length; j++) {
                    this.addConstraint(fieldConstraints[j].name, fieldConstraints[j].requirements, fieldConstraints[j].priority, fieldConstraints[j].isDomConstraint);
                }
            }

            return this;
        },
        // See `Field.getValue()`
        getValue: function getValue() {
            // Value could be overriden in DOM
            if ('function' === typeof this.options.value) return this.options.value(this);
            else if ('undefined' !== typeof this.options.value) return this.options.value; // Radio input case

            if (this.element.nodeName === 'INPUT') {
                var type = Utils.getType(this.element);
                if (type === 'radio') return this._findRelated().filter(':checked').val() || ''; // checkbox input case

                if (type === 'checkbox') {
                    var values = [];

                    this._findRelated().filter(':checked').each(function () {
                        values.push($(this).val());
                    });

                    return values;
                }
            } // Select multiple case

            if (this.element.nodeName === 'SELECT' && null === this.$element.val()) return []; // Default case that should never happen

            return this.$element.val();
        },
        _init: function _init() {
            this.$elements = [this.$element];
            return this;
        }
    };

    var Factory = function Factory(element, options, parsleyFormInstance) {
        this.element = element;
        this.$element = $(element); // If the element has already been bound, returns its saved Parsley instance

        var savedparsleyFormInstance = this.$element.data('Parsley');

        if (savedparsleyFormInstance) {
            // If the saved instance has been bound without a Form parent and there is one given in this call, add it
            if ('undefined' !== typeof parsleyFormInstance && savedparsleyFormInstance.parent === window.Parsley) {
                savedparsleyFormInstance.parent = parsleyFormInstance;

                savedparsleyFormInstance._resetOptions(savedparsleyFormInstance.options);
            }

            if ('object' === _typeof(options)) {
                _extends(savedparsleyFormInstance.options, options);
            }

            return savedparsleyFormInstance;
        } // Parsley must be instantiated with a DOM element or jQuery $element

        if (!this.$element.length) throw new Error('You must bind Parsley on an existing element.');
        if ('undefined' !== typeof parsleyFormInstance && 'Form' !== parsleyFormInstance.__class__) throw new Error('Parent instance must be a Form instance');
        this.parent = parsleyFormInstance || window.Parsley;
        return this.init(options);
    };

    Factory.prototype = {
        init: function init(options) {
            this.__class__ = 'Parsley';
            this.__version__ = '2.9.2';
            this.__id__ = Utils.generateID(); // Pre-compute options

            this._resetOptions(options); // A Form instance is obviously a `<form>` element but also every node that is not an input and has the `data-parsley-validate` attribute

            if (this.element.nodeName === 'FORM' || Utils.checkAttr(this.element, this.options.namespace, 'validate') && !this.$element.is(this.options.inputs)) return this.bind('parsleyForm'); // Every other element is bound as a `Field` or `FieldMultiple`

            return this.isMultiple() ? this.handleMultiple() : this.bind('parsleyField');
        },
        isMultiple: function isMultiple() {
            var type = Utils.getType(this.element);
            return type === 'radio' || type === 'checkbox' || this.element.nodeName === 'SELECT' && null !== this.element.getAttribute('multiple');
        },
        // Multiples fields are a real nightmare :(
        // Maybe some refactoring would be appreciated here...
        handleMultiple: function handleMultiple() {
            var _this = this;

            var name;
            var parsleyMultipleInstance; // Handle multiple name

            this.options.multiple = this.options.multiple || (name = this.element.getAttribute('name')) || this.element.getAttribute('id'); // Special select multiple input

            if (this.element.nodeName === 'SELECT' && null !== this.element.getAttribute('multiple')) {
                this.options.multiple = this.options.multiple || this.__id__;
                return this.bind('parsleyFieldMultiple'); // Else for radio / checkboxes, we need a `name` or `data-parsley-multiple` to properly bind it
            } else if (!this.options.multiple) {
                Utils.warn('To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.', this.$element);
                return this;
            } // Remove special chars

            this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ''); // Add proper `data-parsley-multiple` to siblings if we have a valid multiple name

            if (name) {
                $('input[name="' + name + '"]').each(function (i, input) {
                    var type = Utils.getType(input);
                    if (type === 'radio' || type === 'checkbox') input.setAttribute(_this.options.namespace + 'multiple', _this.options.multiple);
                });
            } // Check here if we don't already have a related multiple instance saved

            var $previouslyRelated = this._findRelated();

            for (var i = 0; i < $previouslyRelated.length; i++) {
                parsleyMultipleInstance = $($previouslyRelated.get(i)).data('Parsley');

                if ('undefined' !== typeof parsleyMultipleInstance) {
                    if (!this.$element.data('FieldMultiple')) {
                        parsleyMultipleInstance.addElement(this.$element);
                    }

                    break;
                }
            } // Create a secret Field instance for every multiple field. It will be stored in `data('FieldMultiple')`
            // And will be useful later to access classic `Field` stuff while being in a `FieldMultiple` instance

            this.bind('parsleyField', true);
            return parsleyMultipleInstance || this.bind('parsleyFieldMultiple');
        },
        // Return proper `Form`, `Field` or `FieldMultiple`
        bind: function bind(type, doNotStore) {
            var parsleyInstance;

            switch (type) {
                case 'parsleyForm':
                    parsleyInstance = $.extend(new Form(this.element, this.domOptions, this.options), new Base(), window.ParsleyExtend)._bindFields();
                    break;

                case 'parsleyField':
                    parsleyInstance = $.extend(new Field(this.element, this.domOptions, this.options, this.parent), new Base(), window.ParsleyExtend);
                    break;

                case 'parsleyFieldMultiple':
                    parsleyInstance = $.extend(new Field(this.element, this.domOptions, this.options, this.parent), new Multiple(), new Base(), window.ParsleyExtend)._init();
                    break;

                default:
                    throw new Error(type + 'is not a supported Parsley type');
            }

            if (this.options.multiple) Utils.setAttr(this.element, this.options.namespace, 'multiple', this.options.multiple);

            if ('undefined' !== typeof doNotStore) {
                this.$element.data('FieldMultiple', parsleyInstance);
                return parsleyInstance;
            } // Store the freshly bound instance in a DOM element for later access using jQuery `data()`

            this.$element.data('Parsley', parsleyInstance); // Tell the world we have a new Form or Field instance!

            parsleyInstance._actualizeTriggers();

            parsleyInstance._trigger('init');

            return parsleyInstance;
        }
    };

    var vernums = $.fn.jquery.split('.');

    if (parseInt(vernums[0]) <= 1 && parseInt(vernums[1]) < 8) {
        throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
    }

    if (!vernums.forEach) {
        Utils.warn('Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim');
    } // Inherit `on`, `off` & `trigger` to Parsley:

    var Parsley = _extends(new Base(), {
        element: document,
        $element: $(document),
        actualizeOptions: null,
        _resetOptions: null,
        Factory: Factory,
        version: '2.9.2'
    }); // Supplement Field and Form with Base
    // This way, the constructors will have access to those methods

    _extends(Field.prototype, UI.Field, Base.prototype);

    _extends(Form.prototype, UI.Form, Base.prototype); // Inherit actualizeOptions and _resetOptions:

    _extends(Factory.prototype, Base.prototype); // ### jQuery API
    // `$('.elem').parsley(options)` or `$('.elem').psly(options)`

    $.fn.parsley = $.fn.psly = function (options) {
        if (this.length > 1) {
            var instances = [];
            this.each(function () {
                instances.push($(this).parsley(options));
            });
            return instances;
        } // Return undefined if applied to non existing DOM element

        if (this.length == 0) {
            return;
        }

        return new Factory(this[0], options);
    }; // ### Field and Form extension
    // Ensure the extension is now defined if it wasn't previously

    if ('undefined' === typeof window.ParsleyExtend) window.ParsleyExtend = {}; // ### Parsley config
    // Inherit from ParsleyDefault, and copy over any existing values

    Parsley.options = _extends(Utils.objectCreate(Defaults), window.ParsleyConfig);
    window.ParsleyConfig = Parsley.options; // Old way of accessing global options
    // ### Globals

    window.Parsley = window.psly = Parsley;
    Parsley.Utils = Utils;
    window.ParsleyUtils = {};
    $.each(Utils, function (key, value) {
        if ('function' === typeof value) {
            window.ParsleyUtils[key] = function () {
                Utils.warnOnce('Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead.');
                return Utils[key].apply(Utils, arguments);
            };
        }
    }); // ### Define methods that forward to the registry, and deprecate all access except through window.Parsley

    var registry = window.Parsley._validatorRegistry = new ValidatorRegistry(window.ParsleyConfig.validators, window.ParsleyConfig.i18n);
    window.ParsleyValidator = {};
    $.each('setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator hasValidator'.split(' '), function (i, method) {
        window.Parsley[method] = function () {
            return registry[method].apply(registry, arguments);
        };

        window.ParsleyValidator[method] = function () {
            var _window$Parsley;

            Utils.warnOnce("Accessing the method '".concat(method, "' through Validator is deprecated. Simply call 'window.Parsley.").concat(method, "(...)'"));
            return (_window$Parsley = window.Parsley)[method].apply(_window$Parsley, arguments);
        };
    }); // ### UI
    // Deprecated global object

    window.Parsley.UI = UI;
    window.ParsleyUI = {
        removeError: function removeError(instance, name, doNotUpdateClass) {
            var updateClass = true !== doNotUpdateClass;
            Utils.warnOnce("Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method.");
            return instance.removeError(name, {
                updateClass: updateClass
            });
        },
        getErrorsMessages: function getErrorsMessages(instance) {
            Utils.warnOnce("Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly.");
            return instance.getErrorsMessages();
        }
    };
    $.each('addError updateError'.split(' '), function (i, method) {
        window.ParsleyUI[method] = function (instance, name, message, assert, doNotUpdateClass) {
            var updateClass = true !== doNotUpdateClass;
            Utils.warnOnce("Accessing UI is deprecated. Call '".concat(method, "' on the instance directly. Please comment in issue 1073 as to your need to call this method."));
            return instance[method](name, {
                message: message,
                assert: assert,
                updateClass: updateClass
            });
        };
    }); // ### PARSLEY auto-binding
    // Prevent it by setting `ParsleyConfig.autoBind` to `false`

    if (false !== window.ParsleyConfig.autoBind) {
        $(function () {
            // Works only on `data-parsley-validate`.
            if ($('[data-parsley-validate]').length) $('[data-parsley-validate]').parsley();
        });
    }

    var o = $({});

    var deprecated = function deprecated() {
        Utils.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley");
    }; // Returns an event handler that calls `fn` with the arguments it expects

    function adapt(fn, context) {
        // Store to allow unbinding
        if (!fn.parsleyAdaptedCallback) {
            fn.parsleyAdaptedCallback = function () {
                var args = Array.prototype.slice.call(arguments, 0);
                args.unshift(this);
                fn.apply(context || o, args);
            };
        }

        return fn.parsleyAdaptedCallback;
    }

    var eventPrefix = 'parsley:'; // Converts 'parsley:form:validate' into 'form:validate'

    function eventName(name) {
        if (name.lastIndexOf(eventPrefix, 0) === 0) return name.substr(eventPrefix.length);
        return name;
    } // $.listen is deprecated. Use Parsley.on instead.

    $.listen = function (name, callback) {
        var context;
        deprecated();

        if ('object' === _typeof(arguments[1]) && 'function' === typeof arguments[2]) {
            context = arguments[1];
            callback = arguments[2];
        }

        if ('function' !== typeof callback) throw new Error('Wrong parameters');
        window.Parsley.on(eventName(name), adapt(callback, context));
    };

    $.listenTo = function (instance, name, fn) {
        deprecated();
        if (!(instance instanceof Field) && !(instance instanceof Form)) throw new Error('Must give Parsley instance');
        if ('string' !== typeof name || 'function' !== typeof fn) throw new Error('Wrong parameters');
        instance.on(eventName(name), adapt(fn));
    };

    $.unsubscribe = function (name, fn) {
        deprecated();
        if ('string' !== typeof name || 'function' !== typeof fn) throw new Error('Wrong arguments');
        window.Parsley.off(eventName(name), fn.parsleyAdaptedCallback);
    };

    $.unsubscribeTo = function (instance, name) {
        deprecated();
        if (!(instance instanceof Field) && !(instance instanceof Form)) throw new Error('Must give Parsley instance');
        instance.off(eventName(name));
    };

    $.unsubscribeAll = function (name) {
        deprecated();
        window.Parsley.off(eventName(name));
        $('form,input,textarea,select').each(function () {
            var instance = $(this).data('Parsley');

            if (instance) {
                instance.off(eventName(name));
            }
        });
    }; // $.emit is deprecated. Use jQuery events instead.

    $.emit = function (name, instance) {
        var _instance;

        deprecated();
        var instanceGiven = instance instanceof Field || instance instanceof Form;
        var args = Array.prototype.slice.call(arguments, instanceGiven ? 2 : 1);
        args.unshift(eventName(name));

        if (!instanceGiven) {
            instance = window.Parsley;
        }

        (_instance = instance).trigger.apply(_instance, _toConsumableArray(args));
    };

    $.extend(true, Parsley, {
        asyncValidators: {
            'default': {
                fn: function fn(xhr) {
                    // By default, only status 2xx are deemed successful.
                    // Note: we use status instead of state() because responses with status 200
                    // but invalid messages (e.g. an empty body for content type set to JSON) will
                    // result in state() === 'rejected'.
                    return xhr.status >= 200 && xhr.status < 300;
                },
                url: false
            },
            reverse: {
                fn: function fn(xhr) {
                    // If reverse option is set, a failing ajax request is considered successful
                    return xhr.status < 200 || xhr.status >= 300;
                },
                url: false
            }
        },
        addAsyncValidator: function addAsyncValidator(name, fn, url, options) {
            Parsley.asyncValidators[name] = {
                fn: fn,
                url: url || false,
                options: options || {}
            };
            return this;
        }
    });
    Parsley.addValidator('remote', {
        requirementType: {
            '': 'string',
            'validator': 'string',
            'reverse': 'boolean',
            'options': 'object'
        },
        validateString: function validateString(value, url, options, instance) {
            var data = {};
            var ajaxOptions;
            var csr;
            var validator = options.validator || (true === options.reverse ? 'reverse' : 'default');
            if ('undefined' === typeof Parsley.asyncValidators[validator]) throw new Error('Calling an undefined async validator: `' + validator + '`');
            url = Parsley.asyncValidators[validator].url || url; // Fill current value

            if (url.indexOf('{value}') > -1) {
                url = url.replace('{value}', encodeURIComponent(value));
            } else {
                data[instance.element.getAttribute('name') || instance.element.getAttribute('id')] = value;
            } // Merge options passed in from the function with the ones in the attribute

            var remoteOptions = $.extend(true, options.options || {}, Parsley.asyncValidators[validator].options); // All `$.ajax(options)` could be overridden or extended directly from DOM in `data-parsley-remote-options`

            ajaxOptions = $.extend(true, {}, {
                url: url,
                data: data,
                type: 'GET'
            }, remoteOptions); // Generate store key based on ajax options

            instance.trigger('field:ajaxoptions', instance, ajaxOptions);
            csr = $.param(ajaxOptions); // Initialise querry cache

            if ('undefined' === typeof Parsley._remoteCache) Parsley._remoteCache = {}; // Try to retrieve stored xhr

            var xhr = Parsley._remoteCache[csr] = Parsley._remoteCache[csr] || $.ajax(ajaxOptions);

            var handleXhr = function handleXhr() {
                var result = Parsley.asyncValidators[validator].fn.call(instance, xhr, url, options);
                if (!result) // Map falsy results to rejected promise
                    result = $.Deferred().reject();
                return $.when(result);
            };

            return xhr.then(handleXhr, handleXhr);
        },
        priority: -1
    });
    Parsley.on('form:submit', function () {
        Parsley._remoteCache = {};
    });

    Base.prototype.addAsyncValidator = function () {
        Utils.warnOnce('Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`');
        return Parsley.addAsyncValidator.apply(Parsley, arguments);
    };

    // This is included with the Parsley library itself,
    Parsley.addMessages('en', {
        defaultMessage: "This value seems to be invalid.",
        type: {
            email: "This value should be a valid email.",
            url: "This value should be a valid url.",
            number: "This value should be a valid number.",
            integer: "This value should be a valid integer.",
            digits: "This value should be digits.",
            alphanum: "This value should be alphanumeric."
        },
        notblank: "This value should not be blank.",
        required: "This value is required.",
        pattern: "This value seems to be invalid.",
        min: "This value should be greater than or equal to %s.",
        max: "This value should be lower than or equal to %s.",
        range: "This value should be between %s and %s.",
        minlength: "This value is too short. It should have %s characters or more.",
        maxlength: "This value is too long. It should have %s characters or fewer.",
        length: "This value length is invalid. It should be between %s and %s characters long.",
        mincheck: "You must select at least %s choices.",
        maxcheck: "You must select %s choices or fewer.",
        check: "You must select between %s and %s choices.",
        equalto: "This value should be the same.",
        euvatin: "It's not a valid VAT Identification Number."
    });
    Parsley.setLocale('en');

    function InputEvent() {
        var _this = this;

        var globals = window || global; // Slightly odd way construct our object. This way methods are force bound.
        // Used to test for duplicate library.

        _extends(this, {
            // For browsers that do not support isTrusted, assumes event is native.
            isNativeEvent: function isNativeEvent(evt) {
                return evt.originalEvent && evt.originalEvent.isTrusted !== false;
            },
            fakeInputEvent: function fakeInputEvent(evt) {
                if (_this.isNativeEvent(evt)) {
                    $(evt.target).trigger('input');
                }
            },
            misbehaves: function misbehaves(evt) {
                if (_this.isNativeEvent(evt)) {
                    _this.behavesOk(evt);

                    $(document).on('change.inputevent', evt.data.selector, _this.fakeInputEvent);

                    _this.fakeInputEvent(evt);
                }
            },
            behavesOk: function behavesOk(evt) {
                if (_this.isNativeEvent(evt)) {
                    $(document) // Simply unbinds the testing handler
                        .off('input.inputevent', evt.data.selector, _this.behavesOk).off('change.inputevent', evt.data.selector, _this.misbehaves);
                }
            },
            // Bind the testing handlers
            install: function install() {
                if (globals.inputEventPatched) {
                    return;
                }

                globals.inputEventPatched = '0.0.3';

                for (var _i = 0, _arr = ['select', 'input[type="checkbox"]', 'input[type="radio"]', 'input[type="file"]']; _i < _arr.length; _i++) {
                    var selector = _arr[_i];
                    $(document).on('input.inputevent', selector, {
                        selector: selector
                    }, _this.behavesOk).on('change.inputevent', selector, {
                        selector: selector
                    }, _this.misbehaves);
                }
            },
            uninstall: function uninstall() {
                delete globals.inputEventPatched;
                $(document).off('.inputevent');
            }
        });
    }
    var inputevent = new InputEvent();

    inputevent.install();

    return Parsley;

})));
//# sourceMappingURL=parsley.js.map

















/*!
 * jQuery Color Animations v@VERSION
 * https://github.com/jquery/jquery-color
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: @DATE
 */

( function( root, factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "jquery" ], factory );
	} else if ( typeof exports === "object" ) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( root.jQuery );
	}
} )( this, function( jQuery, undefined ) {

	var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor " +
		"borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",

	class2type = {},
	toString = class2type.toString,

	// plusequals test for += 100 -= 100
	rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,

	// a set of RE's that can match strings and generate color tuples.
	stringParsers = [ {
			re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			parse: function( execResult ) {
				return [
					execResult[ 1 ],
					execResult[ 2 ],
					execResult[ 3 ],
					execResult[ 4 ]
				];
			}
		}, {
			re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			parse: function( execResult ) {
				return [
					execResult[ 1 ] * 2.55,
					execResult[ 2 ] * 2.55,
					execResult[ 3 ] * 2.55,
					execResult[ 4 ]
				];
			}
		}, {

			// this regex ignores A-F because it's compared against an already lowercased string
			re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
			parse: function( execResult ) {
				return [
					parseInt( execResult[ 1 ], 16 ),
					parseInt( execResult[ 2 ], 16 ),
					parseInt( execResult[ 3 ], 16 )
				];
			}
		}, {

			// this regex ignores A-F because it's compared against an already lowercased string
			re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
			parse: function( execResult ) {
				return [
					parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
					parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
					parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
				];
			}
		}, {
			re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			space: "hsla",
			parse: function( execResult ) {
				return [
					execResult[ 1 ],
					execResult[ 2 ] / 100,
					execResult[ 3 ] / 100,
					execResult[ 4 ]
				];
			}
		} ],

	// jQuery.Color( )
	color = jQuery.Color = function( color, green, blue, alpha ) {
		return new jQuery.Color.fn.parse( color, green, blue, alpha );
	},
	spaces = {
		rgba: {
			props: {
				red: {
					idx: 0,
					type: "byte"
				},
				green: {
					idx: 1,
					type: "byte"
				},
				blue: {
					idx: 2,
					type: "byte"
				}
			}
		},

		hsla: {
			props: {
				hue: {
					idx: 0,
					type: "degrees"
				},
				saturation: {
					idx: 1,
					type: "percent"
				},
				lightness: {
					idx: 2,
					type: "percent"
				}
			}
		}
	},
	propTypes = {
		"byte": {
			floor: true,
			max: 255
		},
		"percent": {
			max: 1
		},
		"degrees": {
			mod: 360,
			floor: true
		}
	},

	// colors = jQuery.Color.names
	colors,

	// local aliases of functions called often
	each = jQuery.each;

// define cache name and alpha properties
// for rgba and hsla spaces
each( spaces, function( spaceName, space ) {
	space.cache = "_" + spaceName;
	space.props.alpha = {
		idx: 3,
		type: "percent",
		def: 1
	};
} );

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function getType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	return typeof obj === "object" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}

function clamp( value, prop, allowEmpty ) {
	var type = propTypes[ prop.type ] || {};

	if ( value == null ) {
		return ( allowEmpty || !prop.def ) ? null : prop.def;
	}

	// ~~ is an short way of doing floor for positive numbers
	value = type.floor ? ~~value : parseFloat( value );

	if ( type.mod ) {

		// we add mod before modding to make sure that negatives values
		// get converted properly: -10 -> 350
		return ( value + type.mod ) % type.mod;
	}

	// for now all property types without mod have min and max
	return Math.min( type.max, Math.max( 0, value ) );
}

function stringParse( string ) {
	var inst = color(),
		rgba = inst._rgba = [];

	string = string.toLowerCase();

	each( stringParsers, function( _i, parser ) {
		var parsed,
			match = parser.re.exec( string ),
			values = match && parser.parse( match ),
			spaceName = parser.space || "rgba";

		if ( values ) {
			parsed = inst[ spaceName ]( values );

			// if this was an rgba parse the assignment might happen twice
			// oh well....
			inst[ spaces[ spaceName ].cache ] = parsed[ spaces[ spaceName ].cache ];
			rgba = inst._rgba = parsed._rgba;

			// exit each( stringParsers ) here because we matched
			return false;
		}
	} );

	// Found a stringParser that handled it
	if ( rgba.length ) {

		// if this came from a parsed string, force "transparent" when alpha is 0
		// chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
		if ( rgba.join() === "0,0,0,0" ) {
			jQuery.extend( rgba, colors.transparent );
		}
		return inst;
	}

	// named colors
	return colors[ string ];
}

color.fn = jQuery.extend( color.prototype, {
	parse: function( red, green, blue, alpha ) {
		if ( red === undefined ) {
			this._rgba = [ null, null, null, null ];
			return this;
		}
		if ( red.jquery || red.nodeType ) {
			red = jQuery( red ).css( green );
			green = undefined;
		}

		var inst = this,
			type = getType( red ),
			rgba = this._rgba = [];

		// more than 1 argument specified - assume ( red, green, blue, alpha )
		if ( green !== undefined ) {
			red = [ red, green, blue, alpha ];
			type = "array";
		}

		if ( type === "string" ) {
			return this.parse( stringParse( red ) || colors._default );
		}

		if ( type === "array" ) {
			each( spaces.rgba.props, function( _key, prop ) {
				rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
			} );
			return this;
		}

		if ( type === "object" ) {
			if ( red instanceof color ) {
				each( spaces, function( _spaceName, space ) {
					if ( red[ space.cache ] ) {
						inst[ space.cache ] = red[ space.cache ].slice();
					}
				} );
			} else {
				each( spaces, function( _spaceName, space ) {
					var cache = space.cache;
					each( space.props, function( key, prop ) {

						// if the cache doesn't exist, and we know how to convert
						if ( !inst[ cache ] && space.to ) {

							// if the value was null, we don't need to copy it
							// if the key was alpha, we don't need to copy it either
							if ( key === "alpha" || red[ key ] == null ) {
								return;
							}
							inst[ cache ] = space.to( inst._rgba );
						}

						// this is the only case where we allow nulls for ALL properties.
						// call clamp with alwaysAllowEmpty
						inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
					} );

					// everything defined but alpha?
					if ( inst[ cache ] && jQuery.inArray( null, inst[ cache ].slice( 0, 3 ) ) < 0 ) {

						// use the default of 1
						if ( inst[ cache ][ 3 ] == null ) {
							inst[ cache ][ 3 ] = 1;
						}

						if ( space.from ) {
							inst._rgba = space.from( inst[ cache ] );
						}
					}
				} );
			}
			return this;
		}
	},
	is: function( compare ) {
		var is = color( compare ),
			same = true,
			inst = this;

		each( spaces, function( _, space ) {
			var localCache,
				isCache = is[ space.cache ];
			if ( isCache ) {
				localCache = inst[ space.cache ] || space.to && space.to( inst._rgba ) || [];
				each( space.props, function( _, prop ) {
					if ( isCache[ prop.idx ] != null ) {
						same = ( isCache[ prop.idx ] === localCache[ prop.idx ] );
						return same;
					}
				} );
			}
			return same;
		} );
		return same;
	},
	_space: function() {
		var used = [],
			inst = this;
		each( spaces, function( spaceName, space ) {
			if ( inst[ space.cache ] ) {
				used.push( spaceName );
			}
		} );
		return used.pop();
	},
	transition: function( other, distance ) {
		var end = color( other ),
			spaceName = end._space(),
			space = spaces[ spaceName ],
			startColor = this.alpha() === 0 ? color( "transparent" ) : this,
			start = startColor[ space.cache ] || space.to( startColor._rgba ),
			result = start.slice();

		end = end[ space.cache ];
		each( space.props, function( _key, prop ) {
			var index = prop.idx,
				startValue = start[ index ],
				endValue = end[ index ],
				type = propTypes[ prop.type ] || {};

			// if null, don't override start value
			if ( endValue === null ) {
				return;
			}

			// if null - use end
			if ( startValue === null ) {
				result[ index ] = endValue;
			} else {
				if ( type.mod ) {
					if ( endValue - startValue > type.mod / 2 ) {
						startValue += type.mod;
					} else if ( startValue - endValue > type.mod / 2 ) {
						startValue -= type.mod;
					}
				}
				result[ index ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
			}
		} );
		return this[ spaceName ]( result );
	},
	blend: function( opaque ) {

		// if we are already opaque - return ourself
		if ( this._rgba[ 3 ] === 1 ) {
			return this;
		}

		var rgb = this._rgba.slice(),
			a = rgb.pop(),
			blend = color( opaque )._rgba;

		return color( jQuery.map( rgb, function( v, i ) {
			return ( 1 - a ) * blend[ i ] + a * v;
		} ) );
	},
	toRgbaString: function() {
		var prefix = "rgba(",
			rgba = jQuery.map( this._rgba, function( v, i ) {
                if ( v != null ) {
                    return v;
                }
				return i > 2 ? 1 : 0;
			} );

		if ( rgba[ 3 ] === 1 ) {
			rgba.pop();
			prefix = "rgb(";
		}

		return prefix + rgba.join() + ")";
	},
	toHslaString: function() {
		var prefix = "hsla(",
			hsla = jQuery.map( this.hsla(), function( v, i ) {
				if ( v == null ) {
					v = i > 2 ? 1 : 0;
				}

				// catch 1 and 2
				if ( i && i < 3 ) {
					v = Math.round( v * 100 ) + "%";
				}
				return v;
			} );

		if ( hsla[ 3 ] === 1 ) {
			hsla.pop();
			prefix = "hsl(";
		}
		return prefix + hsla.join() + ")";
	},
	toHexString: function( includeAlpha ) {
		var rgba = this._rgba.slice(),
			alpha = rgba.pop();

		if ( includeAlpha ) {
			rgba.push( ~~( alpha * 255 ) );
		}

		return "#" + jQuery.map( rgba, function( v ) {

			// default to 0 when nulls exist
			return ( "0" + ( v || 0 ).toString( 16 ) ).substr( -2 );
		} ).join( "" );
	},
	toString: function() {
		return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
	}
} );
color.fn.parse.prototype = color.fn;

// hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

function hue2rgb( p, q, h ) {
	h = ( h + 1 ) % 1;
	if ( h * 6 < 1 ) {
		return p + ( q - p ) * h * 6;
	}
	if ( h * 2 < 1 ) {
		return q;
	}
	if ( h * 3 < 2 ) {
		return p + ( q - p ) * ( ( 2 / 3 ) - h ) * 6;
	}
	return p;
}

spaces.hsla.to = function( rgba ) {
	if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
		return [ null, null, null, rgba[ 3 ] ];
	}
	var r = rgba[ 0 ] / 255,
		g = rgba[ 1 ] / 255,
		b = rgba[ 2 ] / 255,
		a = rgba[ 3 ],
		max = Math.max( r, g, b ),
		min = Math.min( r, g, b ),
		diff = max - min,
		add = max + min,
		l = add * 0.5,
		h, s;

	if ( min === max ) {
		h = 0;
	} else if ( r === max ) {
		h = ( 60 * ( g - b ) / diff ) + 360;
	} else if ( g === max ) {
		h = ( 60 * ( b - r ) / diff ) + 120;
	} else {
		h = ( 60 * ( r - g ) / diff ) + 240;
	}

	// chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
	// otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
	if ( diff === 0 ) {
		s = 0;
	} else if ( l <= 0.5 ) {
		s = diff / add;
	} else {
		s = diff / ( 2 - add );
	}
	return [ Math.round( h ) % 360, s, l, a == null ? 1 : a ];
};

spaces.hsla.from = function( hsla ) {
	if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
		return [ null, null, null, hsla[ 3 ] ];
	}
	var h = hsla[ 0 ] / 360,
		s = hsla[ 1 ],
		l = hsla[ 2 ],
		a = hsla[ 3 ],
		q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
		p = 2 * l - q;

	return [
		Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
		Math.round( hue2rgb( p, q, h ) * 255 ),
		Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
		a
	];
};


each( spaces, function( spaceName, space ) {
	var props = space.props,
		cache = space.cache,
		to = space.to,
		from = space.from;

	// makes rgba() and hsla()
	color.fn[ spaceName ] = function( value ) {

		// generate a cache for this space if it doesn't exist
		if ( to && !this[ cache ] ) {
			this[ cache ] = to( this._rgba );
		}
		if ( value === undefined ) {
			return this[ cache ].slice();
		}

		var ret,
			type = getType( value ),
			arr = ( type === "array" || type === "object" ) ? value : arguments,
			local = this[ cache ].slice();

		each( props, function( key, prop ) {
			var val = arr[ type === "object" ? key : prop.idx ];
			if ( val == null ) {
				val = local[ prop.idx ];
			}
			local[ prop.idx ] = clamp( val, prop );
		} );

		if ( from ) {
			ret = color( from( local ) );
			ret[ cache ] = local;
			return ret;
		} else {
			return color( local );
		}
	};

	// makes red() green() blue() alpha() hue() saturation() lightness()
	each( props, function( key, prop ) {

		// alpha is included in more than one space
		if ( color.fn[ key ] ) {
			return;
		}
		color.fn[ key ] = function( value ) {
			var local, cur, match, fn,
				vtype = getType( value );

			if ( key === "alpha" ) {
				fn = this._hsla ? "hsla" : "rgba";
			} else {
				fn = spaceName;
			}
			local = this[ fn ]();
			cur = local[ prop.idx ];

			if ( vtype === "undefined" ) {
				return cur;
			}

			if ( vtype === "function" ) {
				value = value.call( this, cur );
				vtype = getType( value );
			}
			if ( value == null && prop.empty ) {
				return this;
			}
			if ( vtype === "string" ) {
				match = rplusequals.exec( value );
				if ( match ) {
					value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
				}
			}
			local[ prop.idx ] = value;
			return this[ fn ]( local );
		};
	} );
} );

// add cssHook and .fx.step function for each named hook.
// accept a space separated string of properties
color.hook = function( hook ) {
	var hooks = hook.split( " " );
	each( hooks, function( _i, hook ) {
		jQuery.cssHooks[ hook ] = {
			set: function( elem, value ) {
				var parsed;

				if ( value !== "transparent" && ( getType( value ) !== "string" || ( parsed = stringParse( value ) ) ) ) {
					value = color( parsed || value );
					value = value.toRgbaString();
				}
				elem.style[ hook ] = value;
			}
		};
		jQuery.fx.step[ hook ] = function( fx ) {
			if ( !fx.colorInit ) {
				fx.start = color( fx.elem, hook );
				fx.end = color( fx.end );
				fx.colorInit = true;
			}
			jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
		};
	} );

};

color.hook( stepHooks );

jQuery.cssHooks.borderColor = {
	expand: function( value ) {
		var expanded = {};

		each( [ "Top", "Right", "Bottom", "Left" ], function( _i, part ) {
			expanded[ "border" + part + "Color" ] = value;
		} );
		return expanded;
	}
};

// Basic color names only.
// Usage of any of the other color names requires adding yourself or including
// jquery.color.svg-names.js.
colors = jQuery.Color.names = {

	// 4.1. Basic color keywords
	aqua: "#00ffff",
	black: "#000000",
	blue: "#0000ff",
	fuchsia: "#ff00ff",
	gray: "#808080",
	green: "#008000",
	lime: "#00ff00",
	maroon: "#800000",
	navy: "#000080",
	olive: "#808000",
	purple: "#800080",
	red: "#ff0000",
	silver: "#c0c0c0",
	teal: "#008080",
	white: "#ffffff",
	yellow: "#ffff00",

	// 4.2.3. "transparent" color keyword
	transparent: [ null, null, null, 0 ],

	_default: "#ffffff"
};

} );



















!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.AOS=t()}(this,function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t="Expected a function",n=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,l=u||d||Function("return this")(),f=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return l.Date.now()};function v(e,n,o){var i,a,r,c,s,u,d=0,l=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError(t);function y(t){var n=i,o=a;return i=a=void 0,d=t,c=e.apply(o,n)}function h(e){var t=e-u;return void 0===u||t>=n||t<0||f&&e-d>=r}function k(){var e=b();if(h(e))return x(e);s=setTimeout(k,function(e){var t=n-(e-u);return f?p(t,r-(e-d)):t}(e))}function x(e){return s=void 0,v&&i?y(e):(i=a=void 0,c)}function O(){var e=b(),t=h(e);if(i=arguments,a=this,u=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(k,n),l?y(e):c}(u);if(f)return s=setTimeout(k,n),y(u)}return void 0===s&&(s=setTimeout(k,n)),c}return n=w(n)||0,g(o)&&(l=!!o.leading,r=(f="maxWait"in o)?m(w(o.maxWait)||0,n):r,v="trailing"in o?!!o.trailing:v),O.cancel=function(){void 0!==s&&clearTimeout(s),d=0,i=u=a=s=void 0},O.flush=function(){return void 0===s?c:x(b())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==o}(e))return n;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var u=r.test(e);return u||c.test(e)?s(e.slice(2),u?2:8):a.test(e)?n:+e}var y=function(e,n,o){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(t);return g(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),v(e,n,{leading:i,maxWait:n,trailing:a})},h="Expected a function",k=NaN,x="[object Symbol]",O=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,N=/^0o[0-7]+$/i,z=parseInt,C="object"==typeof e&&e&&e.Object===Object&&e,A="object"==typeof self&&self&&self.Object===Object&&self,q=C||A||Function("return this")(),L=Object.prototype.toString,T=Math.max,M=Math.min,S=function(){return q.Date.now()};function D(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function H(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&L.call(e)==x}(e))return k;if(D(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=D(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(O,"");var n=E.test(e);return n||N.test(e)?z(e.slice(2),n?2:8):j.test(e)?k:+e}var $=function(e,t,n){var o,i,a,r,c,s,u=0,d=!1,l=!1,f=!0;if("function"!=typeof e)throw new TypeError(h);function m(t){var n=o,a=i;return o=i=void 0,u=t,r=e.apply(a,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||l&&e-u>=a}function b(){var e=S();if(p(e))return v(e);c=setTimeout(b,function(e){var n=t-(e-s);return l?M(n,a-(e-u)):n}(e))}function v(e){return c=void 0,f&&o?m(e):(o=i=void 0,r)}function g(){var e=S(),n=p(e);if(o=arguments,i=this,s=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(b,t),d?m(e):r}(s);if(l)return c=setTimeout(b,t),m(s)}return void 0===c&&(c=setTimeout(b,t)),r}return t=H(t)||0,D(n)&&(d=!!n.leading,a=(l="maxWait"in n)?T(H(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=s=i=c=void 0},g.flush=function(){return void 0===c?r:v(S())},g},W=function(){};function P(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1){if((o=t[n]).dataset&&o.dataset.aos)return!0;if(o.children&&e(o.children))return!0}return!1}(t.concat(n)))return W()})}function Y(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var _={isSupported:function(){return!!Y()},ready:function(e,t){var n=window.document,o=new(Y())(P);W=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},K=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,G=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,J=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Q=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function R(){return navigator.userAgent||navigator.vendor||window.opera||""}var U=new(function(){function e(){B(this,e)}return F(e,[{key:"phone",value:function(){var e=R();return!(!K.test(e)&&!G.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=R();return!(!J.test(e)&&!Q.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),V=function(e,t){var n=void 0;return U.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},X=function(e){return e.forEach(function(e,t){return function(e,t){var n=e.options,o=e.position,i=e.node,a=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach(function(t){return e.classList.remove(t)})}(i,n.animatedClassNames),V("aos:out",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!1)});n.mirror&&t>=o.out&&!n.once?a():t>=o.in?e.animated||(function(e,t){t&&t.forEach(function(t){return e.classList.add(t)})}(i,n.animatedClassNames),V("aos:in",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!n.once&&a()}(e,window.pageYOffset)})},Z=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},ee=function(e,t,n){var o=e.getAttribute("data-aos-"+t);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}return o||n},te=function(e,t){return e.forEach(function(e,n){var o=ee(e.node,"mirror",t.mirror),i=ee(e.node,"once",t.once),a=ee(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),c=[t.animatedClassName].concat(r?r.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var o=window.innerHeight,i=ee(e,"anchor"),a=ee(e,"anchor-placement"),r=Number(ee(e,"offset",a?0:t)),c=a||n,s=e;i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]);var u=Z(s).top-o;switch(c){case"top-bottom":break;case"center-bottom":u+=s.offsetHeight/2;break;case"bottom-bottom":u+=s.offsetHeight;break;case"top-center":u+=o/2;break;case"center-center":u+=o/2+s.offsetHeight/2;break;case"bottom-center":u+=o/2+s.offsetHeight;break;case"top-top":u+=o;break;case"bottom-top":u+=o+s.offsetHeight;break;case"center-top":u+=o+s.offsetHeight/2}return u+r}(e.node,t.offset,t.anchorPlacement),out:o&&function(e,t){window.innerHeight;var n=ee(e,"anchor"),o=ee(e,"offset",t),i=e;return n&&document.querySelectorAll(n)&&(i=document.querySelectorAll(n)[0]),Z(i).top+i.offsetHeight-o}(e.node,t.offset)},e.options={once:i,mirror:o,animatedClassNames:c,id:a}}),e},ne=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},oe=[],ie=!1,ae={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},re=function(){return document.all&&!window.atob},ce=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ie=!0),ie&&(oe=te(oe,ae),X(oe),window.addEventListener("scroll",y(function(){X(oe,ae.once)},ae.throttleDelay)))},se=function(){if(oe=ne(),de(ae.disable)||re())return ue();ce()},ue=function(){oe.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),ae.initClassName&&e.node.classList.remove(ae.initClassName),ae.animatedClassName&&e.node.classList.remove(ae.animatedClassName)})},de=function(e){return!0===e||"mobile"===e&&U.mobile()||"phone"===e&&U.phone()||"tablet"===e&&U.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return ae=I(ae,e),oe=ne(),ae.disableMutationObserver||_.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),ae.disableMutationObserver=!0),ae.disableMutationObserver||_.ready("[data-aos]",se),de(ae.disable)||re()?ue():(document.querySelector("body").setAttribute("data-aos-easing",ae.easing),document.querySelector("body").setAttribute("data-aos-duration",ae.duration),document.querySelector("body").setAttribute("data-aos-delay",ae.delay),-1===["DOMContentLoaded","load"].indexOf(ae.startEvent)?document.addEventListener(ae.startEvent,function(){ce(!0)}):window.addEventListener("load",function(){ce(!0)}),"DOMContentLoaded"===ae.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ce(!0),window.addEventListener("resize",$(ce,ae.debounceDelay,!0)),window.addEventListener("orientationchange",$(ce,ae.debounceDelay,!0)),oe)},refresh:ce,refreshHard:se}});