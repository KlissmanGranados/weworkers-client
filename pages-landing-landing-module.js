(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-landing-module"],{

/***/ "9a8T":
/*!**************************************!*\
  !*** ./node_modules/aos/dist/aos.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});

/***/ }),

/***/ "CXjK":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-routing.module */ "TzWB");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing.component */ "fsYz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/navbar/navbar.component */ "DY3o");
/* harmony import */ var _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/footer/footer.component */ "MnPY");
/* harmony import */ var _Components_freelancers_freelancers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/freelancers/freelancers.component */ "ciDB");
/* harmony import */ var _Components_trabaja_nosotros_trabaja_nosotros_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/trabaja-nosotros/trabaja-nosotros.component */ "iE7L");
/* harmony import */ var _Components_funciones_funciones_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/funciones/funciones.component */ "PKhO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class LandingModule {
}
LandingModule.ɵfac = function LandingModule_Factory(t) { return new (t || LandingModule)(); };
LandingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: LandingModule });
LandingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_1__["LandingRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](LandingModule, { declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"],
        _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _Components_freelancers_freelancers_component__WEBPACK_IMPORTED_MODULE_6__["FreelancersComponent"],
        _Components_trabaja_nosotros_trabaja_nosotros_component__WEBPACK_IMPORTED_MODULE_7__["TrabajaNosotrosComponent"],
        _Components_funciones_funciones_component__WEBPACK_IMPORTED_MODULE_8__["FuncionesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _landing_routing_module__WEBPACK_IMPORTED_MODULE_1__["LandingRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();


/***/ }),

/***/ "DY3o":
/*!*********************************************************************!*\
  !*** ./src/app/pages/landing/Components/navbar/navbar.component.ts ***!
  \*********************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NavbarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    TuNavigate(path) {
        this.router.navigate([path]);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 22, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["src", "../../../assets/logo/logo-peque\u00F1o.svg", "alt", "", "width", "40", "height", "30", 1, "d-inline-block", "align-text-top"], ["href", "#", 1, "navbar-brand", "mb-0", "h1"], [1, "span-color"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "routerLink", "/landing/freelancers", 1, "nav-link", "active"], ["routerLink", "/landing/funciones", 1, "nav-link"], [1, "d-flex"], ["type", "submit", "routerLink", "/auth/record-type", 1, "btn", "btn-outline-light"], [1, "btn", "btn-outline-light", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Workers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00BFC\u00F3mo funciona?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Pol\u00EDticas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_20_listener() { return ctx.TuNavigate("/auth/login"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Iniciar Sesion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".navbar[_ngcontent-%COMP%]{\n  background-image: url('navbar.jpg');\n}\n\n.container-fluid[_ngcontent-%COMP%]{\n  padding: 0.3rem;\n}\n\n.span-color[_ngcontent-%COMP%]{\n  color: #c8cdf7;\n}\n\n.navbar-brand[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%]{\n  color: #fff !important;\n}\n\n.navbar-nav[_ngcontent-%COMP%]{\n  padding-top: 0.2rem;\n}\n\nbutton[_ngcontent-%COMP%]{\n  margin-right: 0.5rem;\n}\n\n.nav-link[_ngcontent-%COMP%]{\n  font-family: 'Montserrat';\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQTREO0FBQzlEOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2xvZ28vbmF2YmFyLmpwZyk7XG59XG5cbi5jb250YWluZXItZmx1aWR7XG4gIHBhZGRpbmc6IDAuM3JlbTtcbn1cblxuLnNwYW4tY29sb3J7XG4gIGNvbG9yOiAjYzhjZGY3O1xufVxuXG4ubmF2YmFyLWJyYW5kLCAubmF2LWxpbmt7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItbmF2e1xuICBwYWRkaW5nLXRvcDogMC4ycmVtO1xufVxuXG5idXR0b257XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG4ubmF2LWxpbmt7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "MnPY":
/*!*********************************************************************!*\
  !*** ./src/app/pages/landing/Components/footer/footer.component.ts ***!
  \*********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 27, vars: 0, consts: [[1, "text-center", "text-white", 2, "background-color", "#7733ff"], [1, "container"], [1, "row", "text-center", "d-flex", "justify-content-center", "pt-5"], [1, "my-5"], [1, "mb-5"], [1, "row", "d-flex", "justify-content-center"], [1, "col-lg-8"], ["src", "../../../../../assets/logo/venezuela.png", "alt", "", 2, "height", "4rem"], [1, "text-center", "mb-5"], ["href", "", 1, "text-white", "me-4"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-google"], [1, "fab", "fa-instagram"], [1, "fab", "fa-linkedin"], [1, "fab", "fa-github"], [1, "text-center", "p-3", 2, "background-color", "rgba(0, 0, 0, 0.2)"], ["href", "/", 1, "text-white"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u00A9 2021 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "WeWorkersTeam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%]{\n  background-color: #120c2d;\n}\n\n.bg[_ngcontent-%COMP%]{\n  background-color: #120c2d !important;\n  color: #fff;\n  padding: 2rem;\n}\n\n.span-color[_ngcontent-%COMP%]{\n  color: #818cf0;\n}\n\nh2[_ngcontent-%COMP%]{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIwYzJkO1xufVxuXG4uYmd7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjBjMmQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5zcGFuLWNvbG9ye1xuICBjb2xvcjogIzgxOGNmMDtcbn1cblxuaDJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ "PKhO":
/*!***************************************************************************!*\
  !*** ./src/app/pages/landing/Components/funciones/funciones.component.ts ***!
  \***************************************************************************/
/*! exports provided: FuncionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncionesComponent", function() { return FuncionesComponent; });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ "DY3o");



class FuncionesComponent {
    constructor() { }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        this.aosInit();
    }
    ngAfterViewChecked() {
        if (window.innerWidth !== this.innerWidth) {
            this.innerWidth = window.innerWidth;
            this.aosInit();
        }
    }
    aosInit() {
        aos__WEBPACK_IMPORTED_MODULE_0__["init"]({
            disable: this.innerWidth < 800
        });
    }
}
FuncionesComponent.ɵfac = function FuncionesComponent_Factory(t) { return new (t || FuncionesComponent)(); };
FuncionesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FuncionesComponent, selectors: [["app-funciones"]], decls: 40, vars: 0, consts: [[1, "header"], [1, "d-table", "h-100", "w-100"], [1, "text-center", "d-table-cell", "align-middle"], [1, "container"], [1, "row"], [1, "col"], ["data-aos", "zoom-in", "data-aos-offset", "25", "data-aos-duration", "2000", 1, "text-left"], ["src", "../../../../../assets/images/Funcion/output-onlinegiftools.gif", "alt", "", 1, "img-banner"], [1, "container-lg"], [1, "text-center", "m-4"], [1, "text-left", "mb-2", "mt-2"], [1, "text-justify"]], template: function FuncionesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Pol\u00EDticas y Condiciones de uso");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "T\u00E9rminos y Condiciones de Uso");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "INFORMACI\u00D3N RELEVANTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Es requisito necesario para el uso de los servicios que se ofrecen en este sitio, que lea y acepte los siguientes T\u00E9rminos y Condiciones que a continuaci\u00F3n se redactan. El uso de nuestros servicios implica que usted ha le\u00EDdo y aceptado los T\u00E9rminos y Condiciones de Uso en el presente documento. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "El uso de la plataforma queda reservado para ciudadanos que sean mayores de edad, esto implica que tenga una edad mayor o igual a 18 a\u00F1os.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Weworkers asume que los datos proporcionados por el usuario son ver\u00EDdicos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "PRIVACIDAD Y USO DE DATOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "La informaci\u00F3n proporcionada por el usuario quedar\u00E1 registrada en el sistema de weworkers y se usar\u00E1 en caso de ser necesario para mejorar la experiencia del usuario o ejecutar funciones dentro de la plataforma.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Weworkers no se hace responsable si el usuario env\u00EDa o expone datos sensibles por medio de la plataforma a otros usuarios y esos son empleados para fines no \u00E9ticos, por ejemplo: n\u00FAmero de identificaci\u00F3n, registro fiscal, n\u00FAmero de tarjeta de cr\u00E9dito, direcci\u00F3n de casa, entre otros.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "El usuario puede elegir y cambiar la clave para su acceso de administraci\u00F3n de la cuenta en cualquier momento. Weworkers no asume la responsabilidad en caso de que entregue dicha clave a terceros.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "La plataforma podr\u00E1 enviar reportes al correo del usuario y la recuperaci\u00F3n del usuario queda en dependencia de esta v\u00EDa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Weworkers reserva los derechos de cambiar o de modificar estos t\u00E9rminos sin previo aviso.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]], styles: [".header[_ngcontent-%COMP%]{\n  color: white;\n  max-width: 100%;\n  height: 423px;\n  position: relative;\n  background-image: url('landing-background.jpg');\n  background-position: 35% 45%;\n}\n\n.header[_ngcontent-%COMP%]   .d-table[_ngcontent-%COMP%]{\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n.header[_ngcontent-%COMP%]   .d-table[_ngcontent-%COMP%]   .d-table-cell[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  \n  width: 100%;\n  margin: 0 auto;\n}\n\n.img-banner[_ngcontent-%COMP%]{\n  height: 27rem;\n  padding-top: 2rem;\n  padding-right: 5rem;\n}\n\nh1[_ngcontent-%COMP%]{\n  align-self: center;\n}\n\n.row[_ngcontent-%COMP%]{\n  align-items: baseline;\n}\n\n@media screen and (max-width: 800px){\n  .d-flex[_ngcontent-%COMP%]{\n    justify-content: center;\n    flex-direction: column;\n    padding: 3rem;\n  }\n\n  .header[_ngcontent-%COMP%]{\n    height: 530px;\n  }\n\n  h1[_ngcontent-%COMP%]{\n    padding-top: 1rem;\n    padding-bottom: 1.5rem;\n  }\n\n  .img-banner[_ngcontent-%COMP%]{\n    max-width: 100%;\n    height: auto;\n    padding: 0;\n  }\n\n  .row[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmNpb25lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLCtDQUEyRTtFQUMzRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtFQUNaOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4QjtBQUNGIiwiZmlsZSI6ImZ1bmNpb25lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgY29sb3I6IHdoaXRlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDIzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9sYW5kaW5nL2xhbmRpbmctYmFja2dyb3VuZC5qcGcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzNSUgNDUlO1xufVxuXG4uaGVhZGVyIC5kLXRhYmxle1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG59XG5cbi5oZWFkZXIgLmQtdGFibGUgLmQtdGFibGUtY2VsbCBoMXtcbiAgLyogcGFkZGluZy10b3A6IDRyZW07ICovXG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmltZy1iYW5uZXJ7XG4gIGhlaWdodDogMjdyZW07XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBwYWRkaW5nLXJpZ2h0OiA1cmVtO1xufVxuXG5oMXtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ucm93e1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcbiAgLmQtZmxleHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDNyZW07XG4gIH1cblxuICAuaGVhZGVye1xuICAgIGhlaWdodDogNTMwcHg7XG4gIH1cblxuICBoMXtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICB9XG5cbiAgLmltZy1iYW5uZXJ7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLnJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "TzWB":
/*!*********************************************************!*\
  !*** ./src/app/pages/landing/landing-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function() { return LandingRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Components_freelancers_freelancers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/freelancers/freelancers.component */ "ciDB");
/* harmony import */ var _Components_funciones_funciones_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/funciones/funciones.component */ "PKhO");
/* harmony import */ var _Components_trabaja_nosotros_trabaja_nosotros_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/trabaja-nosotros/trabaja-nosotros.component */ "iE7L");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing.component */ "fsYz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"] },
    { path: 'freelancers', component: _Components_freelancers_freelancers_component__WEBPACK_IMPORTED_MODULE_1__["FreelancersComponent"] },
    { path: 'trabaja-con-nosotros', component: _Components_trabaja_nosotros_trabaja_nosotros_component__WEBPACK_IMPORTED_MODULE_3__["TrabajaNosotrosComponent"] },
    { path: 'funciones', component: _Components_funciones_funciones_component__WEBPACK_IMPORTED_MODULE_2__["FuncionesComponent"] },
];
class LandingRoutingModule {
}
LandingRoutingModule.ɵfac = function LandingRoutingModule_Factory(t) { return new (t || LandingRoutingModule)(); };
LandingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: LandingRoutingModule });
LandingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LandingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ciDB":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/landing/Components/freelancers/freelancers.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FreelancersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreelancersComponent", function() { return FreelancersComponent; });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ "DY3o");



class FreelancersComponent {
    constructor() { }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        this.aosInit();
    }
    ngAfterViewChecked() {
        if (window.innerWidth !== this.innerWidth) {
            this.innerWidth = window.innerWidth;
            this.aosInit();
        }
    }
    aosInit() {
        aos__WEBPACK_IMPORTED_MODULE_0__["init"]({
            disable: this.innerWidth < 800
        });
    }
}
FreelancersComponent.ɵfac = function FreelancersComponent_Factory(t) { return new (t || FreelancersComponent)(); };
FreelancersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FreelancersComponent, selectors: [["app-freelancers"]], decls: 47, vars: 0, consts: [[1, "header"], [1, "d-table", "h-100", "w-100"], [1, "text-center", "d-table-cell", "align-middle"], [1, "container"], [1, "row"], [1, "col"], ["data-aos", "zoom-in", "data-aos-offset", "25", "data-aos-duration", "2000", 1, "text-left"], ["src", "../../../../../assets/images/Freelancers/output-onlinegiftools.gif", "alt", "", 1, "img-banner"], [1, "container-lg", "container-fluid"], [1, "text-justify", "mt-4"], [1, "fas", "fa-arrow-right"], [1, "text-justify"]], template: function FreelancersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Contratar a un freelancer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Ambos roles tienen la capacidad de visualizar su perfil, en este perfil son capaces de ver los datos personales y de usuario que registraron antes (para el captador, los datos de su empresa afiliada), en este mismo perfil son capaces de incluir o eliminar tags que se relacionen al campo en el que trabajan y los lenguajes que utilizan, tambi\u00E9n son capaces de relacionar su perfil a redes que posean externos a la aplicaci\u00F3n, poseen la capacidad de incluir que son biling\u00FCes especificando su dominio en el ingl\u00E9s.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Ambos roles tienen la capacidad de buscar otros usuarios por tag o por idioma");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Ambos roles son capaces de buscar proyectos, ya sea por nombre, por modalidad, por tags, por tipos de pago, por moneda y por presupuesto m\u00EDnimo y m\u00E1ximo, tambi\u00E9n en caso de ser captador el usuario es capaz de visualizar una lista de proyectos creados por el mismo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Los captadores ser\u00E1n capaces de crear y actualizar proyectos, estos proyectos poseen nombre, descripci\u00F3n, fecha de inicio y final, el estado del proyecto (por si est\u00E1 activo o no), un presupuesto o monto, la moneda en que se paga el proyecto, el tipo de pago del proyecto y la modalidad, esto junto a tags que se le pueden asociar al proyecto para mayor visibilidad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Los captadores ser\u00E1n capaces de crear y actualizar proyectos, estos proyectos poseen nombre, descripci\u00F3n, fecha de inicio y final, el estado del proyecto (por si est\u00E1 activo o no), un presupuesto o monto, la moneda en que se paga el proyecto, el tipo de pago del proyecto y la modalidad, esto junto a tags que se le pueden asociar al proyecto para mayor visibilidad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Los captadores son capaces de crear encuestas relacionadas al proyecto creado, con el objetivo de determinar quien es el m\u00E1s apto entre los que aplicaron con propuestas al proyecto, estas encuestas ser\u00E1n enviadas a los aplicantes por correo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Los captados pueden crear una propuesta a un proyecto, con un mensaje personalizado, al crear la propuesta se relaciona su informaci\u00F3n de usuario y sus tags para mayor visibilidad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " El captador tendr\u00E1 la opci\u00F3n de ver una lista de propuestas de su proyecto, en esa lista ver\u00E1 en los primeros lugares a las personas m\u00E1s capacitadas en adelante seg\u00FAn el sistema de selecci\u00F3n, estas se posicionan seg\u00FAn un sistema semi-autom\u00E1tico de la aplicaci\u00F3n que consiste en 3 etapas, la primera etapa consiste en conseguir concordancia entre los tags asociados al perfil del captado con los tags asociados a la p\u00E1gina del proyecto, cada tag que haga match se le suman 10 \"puntos\". La segunda etapa consiste en que, una vez el captado env\u00EDe su cuestionario, este ser\u00E1 evaluado seg\u00FAn las respuestas correctas puestas por el captador al momento de crear el cuestionario, se le sumar\u00E1n 10 puntos por respuesta correcta y se le restar\u00E1n 10 puntos por respuesta incorrecta. Por \u00FAltimo a los usuarios que sean biling\u00FCes se les dar\u00E1 una bonificaci\u00F3n de 100 puntos. Una vez el proceso terminado se enlistar\u00E1n las propuestas de manera descendente basada en los puntos que gan\u00F3 cada perfil en la selecci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Ambos roles tienen la capacidad de comunicarse por medio de una sala de chat, pero el captador ser\u00E1 el capacitado para iniciar las conversaciones con los aplicantes que vea aptos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]], styles: [".header[_ngcontent-%COMP%]{\n  color: white;\n  max-width: 100%;\n  height: 423px;\n  position: relative;\n  background-image: url('landing-background.jpg');\n  background-position: 35% 45%;\n}\n\n.header[_ngcontent-%COMP%]   .d-table[_ngcontent-%COMP%]{\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n.header[_ngcontent-%COMP%]   .d-table[_ngcontent-%COMP%]   .d-table-cell[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  \n  width: 100%;\n  margin: 0 auto;\n}\n\n.img-banner[_ngcontent-%COMP%]{\n  height: 21.5rem;\n  padding-top: 2rem;\n  padding-right: 5rem;\n}\n\nh1[_ngcontent-%COMP%]{\n  align-self: center;\n}\n\n.row[_ngcontent-%COMP%]{\n  align-items: baseline;\n}\n\n@media screen and (max-width: 990px){\n  .d-flex[_ngcontent-%COMP%]{\n    justify-content: center;\n    flex-direction: column;\n    padding: 3rem;\n  }\n\n  .header[_ngcontent-%COMP%]{\n    height: 530px;\n  }\n\n  h1[_ngcontent-%COMP%]{\n    padding-bottom: 4rem;\n  }\n\n  .img-banner[_ngcontent-%COMP%]{\n    max-width: 100%;\n    height: auto;\n    padding: 0;\n  }\n\n  .row[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n.container-switcher[_ngcontent-%COMP%]{\n  justify-content: center;\n  display: flex;\n  padding-top: 1.5rem;\n}\n\n.switch-button[_ngcontent-%COMP%]{\n  background: rgba(255, 255, 255, 0.56);\n  border-radius: 30px;\n  overflow: hidden;\n  width: 363px !important;\n  text-align: center;\n  font-size: 16px;\n  color: #155FFF;\n  position: relative;\n  padding-right: 137px;\n  position: relative;\n}\n\n.fa-arrow-right[_ngcontent-%COMP%]{\n  color: #3e34a5 !important;\n}\n\n.switch-button[_ngcontent-%COMP%]:before {\n  content: \"Trabajar como freelancer\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 168px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 3;\n  pointer-events: none;\n}\n\n.switch-button-checkbox[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  z-index: 2;\n}\n\n.switch-button-checkbox[_ngcontent-%COMP%]:checked    + .switch-button-label[_ngcontent-%COMP%]:before {\n  transform: translateX(200px);\n  transition: transform 300ms linear;\n}\n\n.switch-button-checkbox[_ngcontent-%COMP%]    + .switch-button-label[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 15px 0;\n  display: block;\n  -webkit-user-select: none;\n          user-select: none;\n  pointer-events: none;\n}\n\n.switch-button-checkbox[_ngcontent-%COMP%]    + .switch-button-label[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background: #fff;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-radius: 30px;\n  transform: translateX(0);\n  transition: transform 300ms;\n}\n\n.switch-button-checkbox[_ngcontent-%COMP%]    + .switch-button-label[_ngcontent-%COMP%]   .switch-button-label-span[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n@media screen and (max-width: 600px){\n  .container-switcher[_ngcontent-%COMP%]{\n    justify-content: center;\n    display: flex;\n    padding-bottom: 3rem;\n    padding-top: 0;\n  }\n\n  .switch-button[_ngcontent-%COMP%]{\n    width: 297px !important;\n  }\n\n  .switch-button[_ngcontent-%COMP%]:before {\n    width: 139px !important;\n  }\n\n  .switch-button-checkbox[_ngcontent-%COMP%]:checked    + .switch-button-label[_ngcontent-%COMP%]:before {\n    transform: translateX(166px) !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyZWVsYW5jZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsK0NBQTJFO0VBQzNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULFFBQVE7RUFDUixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0U7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsdUNBQXVDO0VBQ3pDO0FBQ0YiLCJmaWxlIjoiZnJlZWxhbmNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQyM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvbGFuZGluZy9sYW5kaW5nLWJhY2tncm91bmQuanBnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzUlIDQ1JTtcbn1cblxuLmhlYWRlciAuZC10YWJsZXtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4uaGVhZGVyIC5kLXRhYmxlIC5kLXRhYmxlLWNlbGwgaDF7XG4gIC8qIHBhZGRpbmctdG9wOiA0cmVtOyAqL1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pbWctYmFubmVye1xuICBoZWlnaHQ6IDIxLjVyZW07XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBwYWRkaW5nLXJpZ2h0OiA1cmVtO1xufVxuXG5oMXtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ucm93e1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MHB4KXtcbiAgLmQtZmxleHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDNyZW07XG4gIH1cblxuICAuaGVhZGVye1xuICAgIGhlaWdodDogNTMwcHg7XG4gIH1cblxuICBoMXtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcbiAgfVxuXG4gIC5pbWctYmFubmVye1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5yb3d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbi5jb250YWluZXItc3dpdGNoZXJ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogMS41cmVtO1xufVxuXG4uc3dpdGNoLWJ1dHRvbntcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU2KTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDM2M3B4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzE1NUZGRjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMzdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZmEtYXJyb3ctcmlnaHR7XG4gIGNvbG9yOiAjM2UzNGE1ICFpbXBvcnRhbnQ7XG59XG5cbi5zd2l0Y2gtYnV0dG9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiVHJhYmFqYXIgY29tbyBmcmVlbGFuY2VyXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTY4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAzO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnN3aXRjaC1idXR0b24tY2hlY2tib3gge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5zd2l0Y2gtYnV0dG9uLWNoZWNrYm94OmNoZWNrZWQgKyAuc3dpdGNoLWJ1dHRvbi1sYWJlbDpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgbGluZWFyO1xufVxuXG4uc3dpdGNoLWJ1dHRvbi1jaGVja2JveCArIC5zd2l0Y2gtYnV0dG9uLWxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5zd2l0Y2gtYnV0dG9uLWNoZWNrYm94ICsgLnN3aXRjaC1idXR0b24tbGFiZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xufVxuXG4uc3dpdGNoLWJ1dHRvbi1jaGVja2JveCArIC5zd2l0Y2gtYnV0dG9uLWxhYmVsIC5zd2l0Y2gtYnV0dG9uLWxhYmVsLXNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICAuY29udGFpbmVyLXN3aXRjaGVye1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cblxuICAuc3dpdGNoLWJ1dHRvbntcbiAgICB3aWR0aDogMjk3cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zd2l0Y2gtYnV0dG9uOmJlZm9yZSB7XG4gICAgd2lkdGg6IDEzOXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc3dpdGNoLWJ1dHRvbi1jaGVja2JveDpjaGVja2VkICsgLnN3aXRjaC1idXR0b24tbGFiZWw6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTY2cHgpICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuIl19 */"] });


/***/ }),

/***/ "fsYz":
/*!****************************************************!*\
  !*** ./src/app/pages/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/navbar/navbar.component */ "DY3o");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/footer/footer.component */ "MnPY");





class LandingComponent {
    constructor() { }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        this.aosInit();
        aos__WEBPACK_IMPORTED_MODULE_0__["refresh"]();
    }
    aosInit() {
        aos__WEBPACK_IMPORTED_MODULE_0__["init"]({
            disable: this.innerWidth < 990
        });
    }
    ngAfterViewChecked() {
        if (window.innerWidth !== this.innerWidth) {
            this.innerWidth = window.innerWidth;
            this.aosInit();
        }
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 205, vars: 0, consts: [[1, "section-one"], [1, "container"], [1, "row"], [1, "col", "col-position1"], [1, "section-one__title"], [1, "text-style"], [1, "register-button"], [1, "col"], ["src", "../../../assets/landing/principal-image.gif", "alt", "", 1, "animated-img"], [1, "separator"], ["width", "100%", "height", "400", "viewBox", "0 0 100 100", "preserveAspectRatio", "none", "fill", "#44A36F", "version", "1.1", 1, "separator__svg"], ["d", "M 100 100 V 10 L 0 100", "fill", "#fff"], ["d", "M 30 73 L 100 18 V 10 Z", "fill", "#3a30a0", "stroke-width", "0"], [1, "section-two"], [1, "text-center", "section-two-text"], ["data-aos", "fade-down", "data-aos-offset", "380", "data-aos-easing", "ease-in-sine", 1, "container-lg"], [1, "card-group"], [1, "card"], ["src", "../../../assets/landing/cards/card-1.gif", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-title", "text-center"], [1, "card-text"], ["src", "../../../assets/landing/cards/card-2.gif", "alt", "...", 1, "card-img-top"], ["src", "../../../assets/landing/cards/card-3.gif", "alt", "...", 1, "card-img-top"], [1, "section-three"], [1, "container-lg"], [1, "text-center"], ["data-aos", "fade-down", "data-aos-offset", "690", "data-aos-easing", "ease-in-sine", 1, "card-group"], [1, "card", "card-steps"], [1, "card-body", "card-body-style"], [1, "fas", "fa-3x", "fa-users"], [1, "card-title", "text-center", "text-size"], [1, "card-text", "lh-base"], [1, "fas", "fa-3x", "fa-mouse-pointer"], [1, "fas", "fa-3x", "fa-meteor"], [1, "section-banner"], ["data-aos", "fade-down", "data-aos-offset", "800", "data-aos-easing", "ease-in-sine", 1, "container-lg"], [1, "col-sm-6"], ["src", "../../../assets/landing/developer.gif", "alt", "", 1, "banners-img"], [1, "col-sm-6", "col-position"], [1, "banners-text", "text-center"], ["src", "../../../assets/landing/venezuela.png", 2, "height", "2.5rem"], ["routerLink", "record-type", 1, "register-button"], [1, "section-four"], ["data-aos", "fade-down", "data-aos-offset", "900", "data-aos-easing", "ease-in-sine", 1, "container-lg"], [1, "card", "card-tec"], ["src", "../../../assets/landing/icons/backend.png", "alt", "", 1, "icons"], [1, "card-text", "text-center"], ["src", "../../../assets/landing/icons/frontend.png", "alt", "", 1, "icons"], ["src", "../../../assets/landing/icons/full-stack.png", "alt", "", 1, "icons"], ["src", "../../../assets/landing/icons/software.png", "alt", "", 1, "icons"], ["src", "../../../assets/landing/icons/smartphone.png", "alt", "", 1, "icons"], ["src", "../../../assets/landing/icons/QA.png", "alt", "", 1, "icons"], ["src", "../../../assets/landing/data.gif", "alt", "", 1, "banners-img"], [1, "section-jornadas"], ["data-aos", "fade-down", "data-aos-offset", "850", "data-aos-easing", "ease-in-sine", 1, "container-lg"], [1, "fas", "fa-2x", "fa-sync-alt"], [1, "fas", "fa-2x", "fa-street-view"], [1, "fas", "fa-2x", "fa-laptop"], [1, "fas", "fa-2x", "fa-comments-dollar"], [1, "testimonials"], [1, "testimonials-clean"], [1, "intro"], ["data-aos", "fade-down", "data-aos-offset", "910", 1, "row", "people"], [1, "col-md-6", "col-lg-4", "item"], [1, "box"], [1, "description"], [1, "author"], ["src", "", 1, "rounded-circle"], [1, "name"], [1, "title"], [1, "rounded-circle"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Miles de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Venezolanos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " listos para descubrir y ocuparse de tus proyectos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Registrate ahora!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Ventajas de elegirnos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Libertad de comunicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Podr\u00E1s comunicarte desde cualquier lugar con tu freelancer o contratador, mediante nuestro chat interno.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Oportunidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Como freelancer tendr\u00E1s la ventaja de destacar mediante tu perfil y podr\u00E1s proponer el sueldo que aspiras a obtener.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Sencillez y efectividad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Propones de manera sencilla tus proyectos y vacantes, posicionando tu empresa con la oportunidad de tener a los mejores freelancers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\u00BFC\u00F3mo funciona?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h5", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Publicar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Cuentanos en simples pasos que propuesta quieres realizar. \u00A1Gratis y sin compromiso!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h5", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Seleccionar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Recibe propuestas de excelentes freelancers. Elige al mejor para tu proyecto y selecciona si deseas la cata automatizada de captaci\u00F3n para escorger al mejor candidato.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "h5", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Empieza ahora");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Comunicate con tu freelancer seleccionado y \u00A1Que comience el trabajo!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Conviertete en freelancer y forma parte de nuestro increible talento Venezolano ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "\u00A1Registrate ahora!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Principales habilidades de nuestros freelancers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " Desarrollador Backend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Se encarga de dise\u00F1ar la l\u00F3gica y las soluciones para que todas las acciones solicitadas en una p\u00E1gina web sean ejecutadas de manera correcta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, " Desarrollador frontend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Trabaja la interfaz desde el punto de vista del c\u00F3digo para que el usuario pueda interactuar con un sistema.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Desarrollador Fullstack");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Maneja todos los aspectos relacionados con la creaci\u00F3n de una aplicaci\u00F3n web. posee conocimientos en desarrollo Front-End y Back-End. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Desarrollador de Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Se encargan de desarrollar los pilares de los sistemas operativos que son creados por los Programadores y de probar el c\u00F3digo de nuevos programas para garantizar su eficiencia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Desarrollador M\u00F3vil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Especializado en el tema se encarga de dise\u00F1ar, programar y ejecutar aplicaciones para dispositivos como tabletas o celulares.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "ingeniero QA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Monitorea cada fase del proceso de desarrollo de software y asegura que el dise\u00F1o y el software cumplan con los est\u00E1ndares de la compa\u00F1\u00EDa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "\u00A1Tu Industria se puede expandir! Amplia tus canales, mercado y productos con We Workers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "\u00A1Comenzar Ahora!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "section", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Encuentra un trabajo...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "h5", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, " Media Jornada");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "h5", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Presencial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "h5", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Teletrabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "h5", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Sueldo al que aspiras");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "section", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Testimonios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "p", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "We Workers se convirti\u00F3 en una herramienta invaluable para la contrataci\u00F3n de profesionales en mi empresa. Sin duda es el mercado de talentos m\u00E1s grande de Venezuela, y adem\u00E1s, \u00A1est\u00E1 en espa\u00F1ol!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "h5", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Ben Johnson");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "CEO of Company Inc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "p", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "En We Workers puedo contratar varios profesionales al mismo tiempo, as\u00ED evito retrasos y el resultado es siempre muy bueno. Claro que tuve problemas, pero tengo autonom\u00EDa para resolverlos y avanzar con un nuevo profesional.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "h5", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Carl Kent");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "Founder of Style Co.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "p", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "El modelo de trabajo de We Workers nos ha facilitado el desarrollo de muchos proyectos. Sin esta herramienta, no hubi\u00E9semos logrado en tiempo, forma y costo lo que ha sido conseguido.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "h5", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Emily Clark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Owner of Creative Ltd.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](204, "app-footer");
    } }, directives: [_Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["h2[_ngcontent-%COMP%]{\n  margin-bottom: 50px;\n  padding-top: 40px;\n  font-family: sans-serif;\n  font-weight: 700;\n}\n\n.section-one[_ngcontent-%COMP%] {\n  background-image: url('landing-background.jpg');\n  background-position: inherit;\n  position: relative;\n  padding: 0 0 239px;\n  height: 10;\n  max-height: 100%;\n}\n\n.section-one__title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 35px;\n  margin-bottom: 30px;\n  text-align: left;\n  font-size: 2.7rem;\n  font-weight: 700;\n}\n\n.section-two[_ngcontent-%COMP%] {\n  background-color: #fff;\n  position: relative;\n  \n  height: 100%;\n}\n\n.row[_ngcontent-%COMP%]{\n  align-items: center;\n}\n\n.col[_ngcontent-%COMP%]{\n  display: flex;\n  align-items: center;\n}\n\n.col-position1[_ngcontent-%COMP%]{\n  flex-direction: column;\n  align-items: baseline;\n}\n\n.text-style[_ngcontent-%COMP%]{\n  color: #b7b4f1;\n}\n\n.btn-outline-success[_ngcontent-%COMP%] {\n  color: #fcfcfc;\n  border-color: #fdfffe;\n}\n\n.btn[_ngcontent-%COMP%]{\n  margin-right: 1rem !important;\n}\n\n.register-button[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background-color: #bdbaed;\n  border: none;\n  color: #120642;\n  font-weight: 700;\n  text-align: center;\n  font-size: 20px;\n  padding: 16px;\n  width: 220px;\n  transition: all 0.5s;\n  cursor: pointer;\n  box-shadow: 0 10px 20px -8px rgb(0 0 0 / 21%);\n}\n\n.register-button[_ngcontent-%COMP%]{\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n\n.register-button[_ngcontent-%COMP%]:after {\n  content: '\u00BB';\n  position: absolute;\n  opacity: 0;\n  top: 14px;\n  right: -20px;\n  transition: 0.5s;\n}\n\n.register-button[_ngcontent-%COMP%]:hover{\n  padding-right: 24px;\n  padding-left:8px;\n}\n\n.register-button[_ngcontent-%COMP%]:hover:after {\n  opacity: 1;\n  right: 10px;\n}\n\n.separator[_ngcontent-%COMP%] {\n  bottom: -4px;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n}\n\n.card-group[_ngcontent-%COMP%]{\n  padding-bottom: 4rem;\n}\n\n.card[_ngcontent-%COMP%]{\n border: 0 !important;\n}\n\n.cards-container[_ngcontent-%COMP%]{\n  padding-bottom: 5rem;\n}\n\n.card-steps[_ngcontent-%COMP%]{\n  background-image: linear-gradient(120deg, #606af4 0%, #7450e9 100%);\n  color: #fff;\n  margin: 20px;\n}\n\n.text-size[_ngcontent-%COMP%]{\n  font-size: 1.5rem;\n}\n\n.card-text[_ngcontent-%COMP%]{\n  text-align: center;\n}\n\n.svg-back[_ngcontent-%COMP%]{\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n  height: 100px;\n  display: block;\n}\n\n.section-one__descr[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 16px;\n  line-height: 1.5;\n  max-width: 300px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.card-text[_ngcontent-%COMP%]{\n  text-align: center;\n}\n\n.section-banner[_ngcontent-%COMP%]{\n  padding-bottom: 3rem;\n  padding-top: 2rem;\n}\n\n.banners-img[_ngcontent-%COMP%]{\n  height: 29rem;\n}\n\n.banners-text[_ngcontent-%COMP%]{\n  font-size: 2rem;\n  font-weight: 700;\n  font-family: sans-serif;\n}\n\n.col-position[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.section-three[_ngcontent-%COMP%]{\n  background: #f8f8f8;\n  padding-top: 3.5rem;\n}\n\n.section-four[_ngcontent-%COMP%]{\n  padding-top: 3rem;\n  background: #f8f8f8;\n  padding-bottom: 1.5rem;\n}\n\n.card-tec[_ngcontent-%COMP%]{\n  background-color: #f8f8f8;\n}\n\n.icons[_ngcontent-%COMP%]{\n  height: 2rem;\n  padding-right: 1rem;\n}\n\n.section-jornadas[_ngcontent-%COMP%]{\n  background-color: #f8f8f8;\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n\n\n\n.testimonials[_ngcontent-%COMP%]{\n  background-image: url('testimonials.gif');\n  background-repeat: no-repeat;\n  padding-bottom: 3rem;\n  background-position: bottom;\n  background-position-x: left;\n}\n\n.testimonials-clean[_ngcontent-%COMP%] {\n  color:#313437;\n}\n\n.testimonials-clean[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom:40px;\n  padding-top:40px;\n}\n\n@media (max-width:767px) {\n  .testimonials-clean[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom:25px;\n    padding-top:25px;\n    font-size:24px;\n  }\n}\n\n.testimonials-clean[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%] {\n  font-size:16px;\n  max-width:500px;\n  margin:0 auto;\n}\n\n.testimonials-clean[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom:0;\n}\n\n.testimonials-clean[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%] {\n  padding:25px 0 20px;\n}\n\n.testimonials-clean[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin-bottom:32px;\n}\n\n@media (min-width:768px) {\n  .testimonials-clean[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    height:220px;\n  }\n}\n\n.testimonials-clean[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  padding:30px;\n  background-color:#eef4f7;\n  position:relative;\n}\n\n.testimonials-clean[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:after {\n  content:'';\n  position:absolute;\n  left:30px;\n  bottom:-24px;\n  width:0;\n  height:0;\n  border:15px solid transparent;\n  border-width:12px 15px;\n  border-top-color:#eef4f7;\n}\n\n.testimonials-clean[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\n  margin-top:28px;\n  padding-left:25px;\n}\n\n.testimonials-clean[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight:bold;\n  margin-bottom:2px;\n  color:inherit;\n}\n\n.testimonials-clean[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size:13px;\n  color:#9da9ae;\n}\n\n.testimonials-clean[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size:15px;\n  margin-bottom:0;\n}\n\n.testimonials-clean[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width:40px;\n  float:left;\n  margin-right:12px;\n  margin-top:-5px;\n}\n\n@media screen and (max-width: 1000px) {\n\n  .section-one[_ngcontent-%COMP%] {\n      \n      padding: 66px 0 190px;\n  }\n\n  .section-one[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n  }\n\n  .section-one__title[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 2rem;\n  }\n\n  .col[_ngcontent-%COMP%]{\n    justify-content: center;\n  }\n\n  .col-position[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .separator[_ngcontent-%COMP%] {\n      bottom: -110px;\n  }\n\n  .separator__svg[_ngcontent-%COMP%] {\n      left: -26%;\n      position: relative;\n      transform: rotate(15deg);\n      width: 140%;\n  }\n\n  .animated-img[_ngcontent-%COMP%], .img-style[_ngcontent-%COMP%], .image-banner[_ngcontent-%COMP%], .banners-img[_ngcontent-%COMP%]{\n      max-width: 100%;\n      height: auto;\n  }\n\n  .section-two[_ngcontent-%COMP%]{\n    height: auto;\n    padding-bottom: 1rem;\n  }\n\n  .register-button[_ngcontent-%COMP%]{\n    align-self: center !important;\n  }\n\n  .card-group[_ngcontent-%COMP%]{\n    padding-bottom: 0;\n  }\n}\n\n.card-body-style[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.fa-3x[_ngcontent-%COMP%], .fa-2x[_ngcontent-%COMP%] {\n  font-size: 3em;\n  padding-bottom: 1rem !important;\n}\n\n .btn-outline-light:hover{\n  background-color: #cdcbf0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLCtDQUFxRTtFQUNyRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtDQUNDLG9CQUFvQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG1FQUFtRTtFQUNuRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixPQUFPO0VBQ1AsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQyxnQkFBZ0I7O0FBQ2pCO0VBQ0UseUNBQStEO0VBQy9ELDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0VBQ1IsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFO01BQ0ksNEJBQTRCO01BQzVCLHFCQUFxQjtFQUN6Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7TUFDSSxjQUFjO0VBQ2xCOztFQUVBO01BQ0ksVUFBVTtNQUNWLGtCQUFrQjtNQUNsQix3QkFBd0I7TUFDeEIsV0FBVztFQUNmOztFQUVBO01BQ0ksZUFBZTtNQUNmLFlBQVk7RUFDaEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEMiLCJmaWxlIjoibGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNlY3Rpb24tb25lIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9sYW5kaW5nL2xhbmRpbmctYmFja2dyb3VuZC5qcGcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBpbmhlcml0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDAgMCAyMzlweDtcbiAgaGVpZ2h0OiAxMDtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLnNlY3Rpb24tb25lX190aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMi43cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc2VjdGlvbi10d28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIHotaW5kZXg6IC0xOyAqL1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yb3d7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb2x7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb2wtcG9zaXRpb24xe1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbi50ZXh0LXN0eWxle1xuICBjb2xvcjogI2I3YjRmMTtcbn1cblxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mge1xuICBjb2xvcjogI2ZjZmNmYztcbiAgYm9yZGVyLWNvbG9yOiAjZmRmZmZlO1xufVxuXG4uYnRue1xuICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLnJlZ2lzdGVyLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGJhZWQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMxMjA2NDI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICB3aWR0aDogMjIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IC04cHggcmdiKDAgMCAwIC8gMjElKTtcbn1cblxuLnJlZ2lzdGVyLWJ1dHRvbntcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnJlZ2lzdGVyLWJ1dHRvbjphZnRlciB7XG4gIGNvbnRlbnQ6ICfCuyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAxNHB4O1xuICByaWdodDogLTIwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5yZWdpc3Rlci1idXR0b246aG92ZXJ7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gIHBhZGRpbmctbGVmdDo4cHg7XG59XG5cbi5yZWdpc3Rlci1idXR0b246aG92ZXI6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xuICByaWdodDogMTBweDtcbn1cblxuLnNlcGFyYXRvciB7XG4gIGJvdHRvbTogLTRweDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQtZ3JvdXB7XG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xufVxuXG4uY2FyZHtcbiBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cblxuLmNhcmRzLWNvbnRhaW5lcntcbiAgcGFkZGluZy1ib3R0b206IDVyZW07XG59XG5cbi5jYXJkLXN0ZXBze1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjNjA2YWY0IDAlLCAjNzQ1MGU5IDEwMCUpO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4udGV4dC1zaXple1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmNhcmQtdGV4dHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3ZnLWJhY2t7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMnB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWN0aW9uLW9uZV9fZGVzY3Ige1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC10ZXh0e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWN0aW9uLWJhbm5lcntcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XG4gIHBhZGRpbmctdG9wOiAycmVtO1xufVxuXG4uYmFubmVycy1pbWd7XG4gIGhlaWdodDogMjlyZW07XG59XG5cbi5iYW5uZXJzLXRleHR7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbi5jb2wtcG9zaXRpb257XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWN0aW9uLXRocmVle1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICBwYWRkaW5nLXRvcDogMy41cmVtO1xufVxuXG4uc2VjdGlvbi1mb3Vye1xuICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbn1cblxuLmNhcmQtdGVje1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xufVxuXG4uaWNvbnN7XG4gIGhlaWdodDogMnJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cblxuLnNlY3Rpb24tam9ybmFkYXN7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIHBhZGRpbmctdG9wOiAzcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbn1cblxuIC8qIHRlc3RpbW9uaW9zICovXG4udGVzdGltb25pYWxze1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2xhbmRpbmcvdGVzdGltb25pYWxzLmdpZik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogbGVmdDtcbn1cblxuLnRlc3RpbW9uaWFscy1jbGVhbiB7XG4gIGNvbG9yOiMzMTM0Mzc7XG59XG5cbi50ZXN0aW1vbmlhbHMtY2xlYW4gaDIge1xuICBtYXJnaW4tYm90dG9tOjQwcHg7XG4gIHBhZGRpbmctdG9wOjQwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KSB7XG4gIC50ZXN0aW1vbmlhbHMtY2xlYW4gaDIge1xuICAgIG1hcmdpbi1ib3R0b206MjVweDtcbiAgICBwYWRkaW5nLXRvcDoyNXB4O1xuICAgIGZvbnQtc2l6ZToyNHB4O1xuICB9XG59XG5cbi50ZXN0aW1vbmlhbHMtY2xlYW4gLmludHJvIHtcbiAgZm9udC1zaXplOjE2cHg7XG4gIG1heC13aWR0aDo1MDBweDtcbiAgbWFyZ2luOjAgYXV0bztcbn1cblxuLnRlc3RpbW9uaWFscy1jbGVhbiAuaW50cm8gcCB7XG4gIG1hcmdpbi1ib3R0b206MDtcbn1cblxuLnRlc3RpbW9uaWFscy1jbGVhbiAucGVvcGxlIHtcbiAgcGFkZGluZzoyNXB4IDAgMjBweDtcbn1cblxuLnRlc3RpbW9uaWFscy1jbGVhbiAuaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206MzJweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIHtcbiAgLnRlc3RpbW9uaWFscy1jbGVhbiAuaXRlbSB7XG4gICAgaGVpZ2h0OjIyMHB4O1xuICB9XG59XG5cbi50ZXN0aW1vbmlhbHMtY2xlYW4gLml0ZW0gLmJveCB7XG4gIHBhZGRpbmc6MzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjojZWVmNGY3O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cblxuLnRlc3RpbW9uaWFscy1jbGVhbiAuaXRlbSAuYm94OmFmdGVyIHtcbiAgY29udGVudDonJztcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGxlZnQ6MzBweDtcbiAgYm90dG9tOi0yNHB4O1xuICB3aWR0aDowO1xuICBoZWlnaHQ6MDtcbiAgYm9yZGVyOjE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci13aWR0aDoxMnB4IDE1cHg7XG4gIGJvcmRlci10b3AtY29sb3I6I2VlZjRmNztcbn1cblxuLnRlc3RpbW9uaWFscy1jbGVhbiAuaXRlbSAuYXV0aG9yIHtcbiAgbWFyZ2luLXRvcDoyOHB4O1xuICBwYWRkaW5nLWxlZnQ6MjVweDtcbn1cblxuLnRlc3RpbW9uaWFscy1jbGVhbiAuaXRlbSAubmFtZSB7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gIG1hcmdpbi1ib3R0b206MnB4O1xuICBjb2xvcjppbmhlcml0O1xufVxuXG4udGVzdGltb25pYWxzLWNsZWFuIC5pdGVtIC50aXRsZSB7XG4gIGZvbnQtc2l6ZToxM3B4O1xuICBjb2xvcjojOWRhOWFlO1xufVxuXG4udGVzdGltb25pYWxzLWNsZWFuIC5pdGVtIC5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZToxNXB4O1xuICBtYXJnaW4tYm90dG9tOjA7XG59XG5cbi50ZXN0aW1vbmlhbHMtY2xlYW4gLml0ZW0gaW1nIHtcbiAgbWF4LXdpZHRoOjQwcHg7XG4gIGZsb2F0OmxlZnQ7XG4gIG1hcmdpbi1yaWdodDoxMnB4O1xuICBtYXJnaW4tdG9wOi01cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuXG4gIC5zZWN0aW9uLW9uZSB7XG4gICAgICAvKiBwYWRkaW5nOiAxMzBweCAwIDE5MHB4OyAqL1xuICAgICAgcGFkZGluZzogNjZweCAwIDE5MHB4O1xuICB9XG5cbiAgLnNlY3Rpb24tb25lIC5yb3d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnNlY3Rpb24tb25lX190aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gIC5jb2x7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuY29sLXBvc2l0aW9uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuc2VwYXJhdG9yIHtcbiAgICAgIGJvdHRvbTogLTExMHB4O1xuICB9XG5cbiAgLnNlcGFyYXRvcl9fc3ZnIHtcbiAgICAgIGxlZnQ6IC0yNiU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gICAgICB3aWR0aDogMTQwJTtcbiAgfVxuXG4gIC5hbmltYXRlZC1pbWcsIC5pbWctc3R5bGUsIC5pbWFnZS1iYW5uZXIsIC5iYW5uZXJzLWltZ3tcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5zZWN0aW9uLXR3b3tcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIH1cblxuICAucmVnaXN0ZXItYnV0dG9ue1xuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNhcmQtZ3JvdXB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbn1cblxuLmNhcmQtYm9keS1zdHlsZXtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZhLTN4LCAuZmEtMngge1xuICBmb250LXNpemU6IDNlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLmJ0bi1vdXRsaW5lLWxpZ2h0OmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RjYmYwICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ "iE7L":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/landing/Components/trabaja-nosotros/trabaja-nosotros.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TrabajaNosotrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajaNosotrosComponent", function() { return TrabajaNosotrosComponent; });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ "DY3o");



class TrabajaNosotrosComponent {
    constructor() { }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        this.aosInit();
    }
    ngAfterViewChecked() {
        if (window.innerWidth !== this.innerWidth) {
            this.innerWidth = window.innerWidth;
            this.aosInit();
        }
    }
    aosInit() {
        aos__WEBPACK_IMPORTED_MODULE_0__["init"]({
            disable: this.innerWidth < 800
        });
    }
}
TrabajaNosotrosComponent.ɵfac = function TrabajaNosotrosComponent_Factory(t) { return new (t || TrabajaNosotrosComponent)(); };
TrabajaNosotrosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TrabajaNosotrosComponent, selectors: [["app-trabaja-nosotros"]], decls: 11, vars: 0, consts: [[1, "header"], [1, "d-table", "h-100", "w-100"], [1, "text-center", "d-table-cell", "align-middle"], [1, "container"], [1, "row"], [1, "col"], ["data-aos", "zoom-in", "data-aos-offset", "25", "data-aos-duration", "2000", 1, "text-left"], ["src", "../../../../../assets/images/captador/output-onlinegiftools.gif", "alt", "", 1, "img-banner"]], template: function TrabajaNosotrosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Trabaja con nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]], styles: [".header[_ngcontent-%COMP%]{\n  color: white;\n  max-width: 100%;\n  height: 423px;\n  position: relative;\n  background-image: url('landing-background.jpg');\n  background-position: 35% 45%;\n}\n\n.header[_ngcontent-%COMP%]   .d-table[_ngcontent-%COMP%]{\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n.header[_ngcontent-%COMP%]   .d-table[_ngcontent-%COMP%]   .d-table-cell[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  \n  width: 100%;\n  margin: 0 auto;\n}\n\n.img-banner[_ngcontent-%COMP%]{\n  height: 26.5rem;\n  padding-top: 2rem;\n}\n\nh1[_ngcontent-%COMP%]{\n  align-self: center;\n}\n\n.row[_ngcontent-%COMP%]{\n  align-items: baseline;\n}\n\n@media screen and (max-width: 990px){\n  .d-flex[_ngcontent-%COMP%]{\n    justify-content: center;\n    flex-direction: column;\n    padding: 3rem;\n  }\n\n  .header[_ngcontent-%COMP%]{\n    height: 530px;\n  }\n\n  h1[_ngcontent-%COMP%]{\n    padding-bottom: 4rem;\n  }\n\n  .img-banner[_ngcontent-%COMP%]{\n    max-width: 100%;\n    height: auto;\n    padding: 0;\n  }\n\n  .row[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWJhamEtbm9zb3Ryb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwrQ0FBMkU7RUFDM0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCO0FBQ0YiLCJmaWxlIjoidHJhYmFqYS1ub3NvdHJvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgY29sb3I6IHdoaXRlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDIzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9sYW5kaW5nL2xhbmRpbmctYmFja2dyb3VuZC5qcGcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzNSUgNDUlO1xufVxuXG4uaGVhZGVyIC5kLXRhYmxle1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG59XG5cbi5oZWFkZXIgLmQtdGFibGUgLmQtdGFibGUtY2VsbCBoMXtcbiAgLyogcGFkZGluZy10b3A6IDRyZW07ICovXG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmltZy1iYW5uZXJ7XG4gIGhlaWdodDogMjYuNXJlbTtcbiAgcGFkZGluZy10b3A6IDJyZW07XG59XG5cbmgxe1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5yb3d7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpe1xuICAuZC1mbGV4e1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogM3JlbTtcbiAgfVxuXG4gIC5oZWFkZXJ7XG4gICAgaGVpZ2h0OiA1MzBweDtcbiAgfVxuXG4gIGgxe1xuICAgIHBhZGRpbmctYm90dG9tOiA0cmVtO1xuICB9XG5cbiAgLmltZy1iYW5uZXJ7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLnJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=pages-landing-landing-module.js.map