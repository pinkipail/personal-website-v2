(this["webpackJsonppersonal-website-v2"]=this["webpackJsonppersonal-website-v2"]||[]).push([[6],{27:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return c}));var r=n(8),i=n(26),o=n(1),s="theme";var u="need-invert";function c(){var e=Object(o.useState)(function(){var e,t=null===(e=localStorage.getItem(s))||void 0===e||e;return JSON.parse(t)}()),t=Object(r.a)(e,2),n=t[0],c=t[1];function l(e){!function(e){var t=JSON.stringify(e);localStorage.setItem(s,t)}(e),function(e){var t=document.getElementsByClassName(u);Array.from(t).forEach((function(t){!function(e,t){i.b.to(e,{filter:"invert(".concat(+!t,")"),duration:1,ease:"power2.inOut"})}(t,e)}))}(e),c(e)}return Object(o.useEffect)((function(){true!==n&&l(n)}),[]),[n,l]}},87:function(e,t,n){"use strict";var r,i="object"===typeof Reflect?Reflect:null,o=i&&"function"===typeof i.apply?i.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=i&&"function"===typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!==e};function u(){u.init.call(this)}e.exports=u,e.exports.once=function(e,t){return new Promise((function(n,r){function i(n){e.removeListener(t,o),r(n)}function o(){"function"===typeof e.removeListener&&e.removeListener("error",i),n([].slice.call(arguments))}m(e,t,o,{once:!0}),"error"!==t&&function(e,t,n){"function"===typeof e.on&&m(e,"error",t,n)}(e,i,{once:!0})}))},u.EventEmitter=u,u.prototype._events=void 0,u.prototype._eventsCount=0,u.prototype._maxListeners=void 0;var c=10;function l(e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function a(e){return void 0===e._maxListeners?u.defaultMaxListeners:e._maxListeners}function f(e,t,n,r){var i,o,s,u;if(l(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]),void 0===s)s=o[t]=n,++e._eventsCount;else if("function"===typeof s?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(i=a(e))>0&&s.length>i&&!s.warned){s.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=s.length,u=c,console&&console.warn&&console.warn(u)}return e}function d(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function v(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=d.bind(r);return i.listener=n,r.wrapFn=i,i}function h(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"===typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):y(i,i.length)}function p(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function y(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function m(e,t,n,r){if("function"===typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!==typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function i(o){r.once&&e.removeEventListener(t,i),n(o)}))}}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(e){if("number"!==typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");c=e}}),u.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(e){if("number"!==typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},u.prototype.getMaxListeners=function(){return a(this)},u.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var c=i[e];if(void 0===c)return!1;if("function"===typeof c)o(c,this,t);else{var l=c.length,a=y(c,l);for(n=0;n<l;++n)o(a[n],this,t)}return!0},u.prototype.addListener=function(e,t){return f(this,e,t,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(e,t){return f(this,e,t,!0)},u.prototype.once=function(e,t){return l(t),this.on(e,v(this,e,t)),this},u.prototype.prependOnceListener=function(e,t){return l(t),this.prependListener(e,v(this,e,t)),this},u.prototype.removeListener=function(e,t){var n,r,i,o,s;if(l(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0===--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!==typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},u.prototype.off=u.prototype.removeListener,u.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"===typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},u.prototype.listeners=function(e){return h(this,e,!0)},u.prototype.rawListeners=function(e){return h(this,e,!1)},u.listenerCount=function(e,t){return"function"===typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},u.prototype.listenerCount=p,u.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},88:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n(34),i=n(1),o=n(29),s=n(38),u=n(36),c=n(30),l=n(31),a=n(2),f=n(33),d=a.y.registerPlugin(f.a)||a.y,v=(d.core.Tween,n(87)),h={x:0,y:0};window.addEventListener("mousemove",(function(e){var t;h={x:(t=e).clientX,y:t.clientY}}));var p=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this)).DOM={el:e},r.DOM.circleInner=r.DOM.el.querySelector(".cursor__inner"),r.dot=document.querySelector(".cursor__dot"),r.filterId="#filter-1",r.DOM.feTurbulence=document.querySelector("".concat(r.filterId," > feTurbulence")),r.primitiveValues={turbulence:0},r.createTimeline(),r.bounds=r.DOM.el.getBoundingClientRect(),r.renderedStyles={tx:{previous:0,current:0,amt:.2},ty:{previous:0,current:0,amt:.2},radius:{previous:30,current:30,amt:.2},stroke:{previous:1,current:1,amt:.2}},r.dot.style.top="".concat(r.renderedStyles.ty.current,"px"),r.dot.style.left="".concat(r.renderedStyles.tx.current,"px"),r.listen(),r.onMouseMove=function(){r.renderedStyles.tx.current=h.x-r.bounds.width/2,r.renderedStyles.ty.current=h.y-r.bounds.height/2,r.renderedStyles.tx.previous=r.renderedStyles.tx.current,r.renderedStyles.ty.previous=r.renderedStyles.ty.current,d.to(r.DOM.el,{duration:.9,ease:"Power3.easeOut",opacity:1}),requestAnimationFrame((function(){return r.render()})),window.removeEventListener("mousemove",r.onMouseMove)},window.addEventListener("mousemove",r.onMouseMove),window.addEventListener("mouseup",r.onMouseUp.bind(Object(u.a)(r))),window.addEventListener("mousedown",r.onMouseDown.bind(Object(u.a)(r))),r}return Object(s.a)(n,[{key:"render",value:function(){var e=this;this.renderedStyles.tx.current=h.x-this.bounds.width/2,this.renderedStyles.ty.current=h.y-this.bounds.height/2,this.DOM.el.style.top="".concat(this.renderedStyles.ty.previous,"px"),this.DOM.el.style.left="".concat(this.renderedStyles.tx.previous,"px"),Object.keys(this.renderedStyles).forEach((function(t){var n,r,i;e.renderedStyles[t].previous=(n=e.renderedStyles[t].previous,r=e.renderedStyles[t].current,(1-(i=e.renderedStyles[t].amt))*n+i*r)})),this.dot.style.top="".concat(this.renderedStyles.ty.current+this.bounds.width/2-5,"px"),this.dot.style.left="".concat(this.renderedStyles.tx.current+this.bounds.width/2-5,"px"),this.DOM.circleInner.setAttribute("r",this.renderedStyles.radius.previous),this.DOM.circleInner.style.strokeWidth="".concat(this.renderedStyles.stroke.previous,"px"),requestAnimationFrame((function(){return e.render()}))}},{key:"createTimeline",value:function(){var e=this;this.tl=d.timeline({paused:!0,onStart:function(){e.DOM.circleInner.style.filter="url(".concat(e.filterId)},onUpdate:function(){e.DOM.feTurbulence.setAttribute("baseFrequency",e.primitiveValues.turbulence)},onComplete:function(){e.DOM.circleInner.style.filter="none"}}).to(this.primitiveValues,{duration:.4,ease:"rough({ template: none.out, strength: 2, points: 120, taper: 'none', randomize: true, clamp: false})",startAt:{turbulence:.07},turbulence:0})}},{key:"enter",value:function(){this.renderedStyles.radius.current=20,this.renderedStyles.stroke.current=3,this.tl.restart()}},{key:"leave",value:function(){this.renderedStyles.radius.current=40,this.renderedStyles.stroke.current=1,this.tl.progress(1).kill()}},{key:"listen",value:function(){var e=this;this.on("enter",(function(){return e.enter()})),this.on("leave",(function(){return e.leave()}))}},{key:"onMouseUp",value:function(){this.dot.style.transform="scale(1, 1)"}},{key:"onMouseDown",value:function(){this.dot.style.transform="scale(2, 2)"}}]),n}(v.EventEmitter),y=(n(88),n(27)),m=n(0);function b(){return Object(i.useEffect)((function(){var e=new p(document.querySelector(".cursor"));Object(r.a)(document.querySelectorAll(".cursor-anumation")).forEach((function(t){t.addEventListener("mouseenter",(function(){return e.emit("enter")})),t.addEventListener("mouseleave",(function(){return e.emit("leave")}))}))})),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("svg",{className:"cursor ".concat(y.a),width:"90",height:"90",viewBox:"0 0 90 90",children:[Object(m.jsx)("defs",{children:Object(m.jsxs)("filter",{id:"filter-1",x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",children:[Object(m.jsx)("feTurbulence",{type:"fractalNoise",baseFrequency:"0",numOctaves:"10",result:"warp"}),Object(m.jsx)("feDisplacementMap",{xChannelSelector:"R",yChannelSelector:"G",scale:"40",in:"SourceGraphic",in2:"warp"})]})}),Object(m.jsx)("circle",{className:"cursor__inner",cx:"45",cy:"45",r:"40"})]}),Object(m.jsx)("div",{className:"cursor__dot"})]})}}}]);
//# sourceMappingURL=6.733ce39b.chunk.js.map