(()=>{var e={10:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(537),s=n.n(i),r=n(645),a=n.n(r)()(s());a.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,s,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);i&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),t.push(d))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",c="quarter",d="year",u="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},_=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},m={s:_,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+_(i,2,"0")+":"+_(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,l),r=n-s<0,a=t.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:o,d:a,D:u,h:r,m:s,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",b={};b[y]=h;var g=function(e){return e instanceof S},$=function e(t,n,i){var s;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();b[r]&&(s=r),n&&(b[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;b[o]=t,s=o}return!i&&s&&(y=s),s||!i&&y},M=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new S(n)},w=m;w.l=$,w.i=g,w.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function h(e){this.$L=$(e.locale,null,!0),this.parse(e)}var _=h.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(f);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return w},_.isValid=function(){return!(this.$d.toString()===p)},_.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},_.isAfter=function(e,t){return M(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<M(e)},_.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var n=this,c=!!w.u(t)||t,p=w.p(e),f=function(e,t){var i=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?i:i.endOf(a)},v=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,_=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case d:return c?f(1,0):f(31,11);case l:return c?f(1,_):f(0,_+1);case o:var b=this.$locale().weekStart||0,g=(h<b?h+7:h)-b;return f(c?m-g:m+(6-g),_);case a:case u:return v(y+"Hours",0);case r:return v(y+"Minutes",1);case s:return v(y+"Seconds",2);case i:return v(y+"Milliseconds",3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var o,c=w.p(e),p="set"+(this.$u?"UTC":""),f=(o={},o[a]=p+"Date",o[u]=p+"Date",o[l]=p+"Month",o[d]=p+"FullYear",o[r]=p+"Hours",o[s]=p+"Minutes",o[i]=p+"Seconds",o[n]=p+"Milliseconds",o)[c],v=c===a?this.$D+(t-this.$W):t;if(c===l||c===d){var h=this.clone().set(u,1);h.$d[f](v),h.init(),this.$d=h.set(u,Math.min(this.$D,h.daysInMonth())).$d}else f&&this.$d[f](v);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[w.p(e)]()},_.add=function(n,c){var u,p=this;n=Number(n);var f=w.p(c),v=function(e){var t=M(p);return w.w(t.date(t.date()+Math.round(e*n)),p)};if(f===l)return this.set(l,this.$M+n);if(f===d)return this.set(d,this.$y+n);if(f===a)return v(1);if(f===o)return v(7);var h=(u={},u[s]=e,u[r]=t,u[i]=1e3,u)[f]||1,_=this.$d.getTime()+n*h;return w.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,d=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},u=function(e){return w.s(r%12||12,e,"0")},f=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:w.s(o+1,2,"0"),MMM:d(n.monthsShort,o,c,3),MMMM:d(c,o),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,l,2),ddd:d(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:w.s(r,2,"0"),h:u(1),hh:u(2),a:f(r,a,!0),A:f(r,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:s};return i.replace(v,(function(e,t){return t||h[e]||s.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(n,u,p){var f,v=w.p(u),h=M(n),_=(h.utcOffset()-this.utcOffset())*e,m=this-h,y=w.m(this,h);return y=(f={},f[d]=y/12,f[l]=y,f[c]=y/3,f[o]=(m-_)/6048e5,f[a]=(m-_)/864e5,f[r]=m/t,f[s]=m/e,f[i]=m/1e3,f)[v]||m,p?y:w.a(y)},_.daysInMonth=function(){return this.endOf(l).$D},_.$locale=function(){return b[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},_.clone=function(){return w.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},h}(),A=S.prototype;return M.prototype=A,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",d],["$D",u]].forEach((function(e){A[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,S,M),e.$i=!0),M},M.locale=$,M.isDayjs=g,M.unix=function(e){return M(1e3*e)},M.en=b[y],M.Ls=b,M.p={},M}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},a=[],o=0;o<e.length;o++){var l=e[o],c=i.base?l[0]+i.base:l[0],d=r[c]||0,u="".concat(c," ").concat(d);r[c]=d+1;var p=n(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var v=s(f,i);i.byIndex=o,t.splice(o,0,{identifier:u,updater:v,references:1})}a.push(u)}return a}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var r=i(e=e||[],s=s||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var o=n(r[a]);t[o].references--}for(var l=i(e,s),c=0;c<r.length;c++){var d=n(r[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={id:i,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";function e(e,t,n="beforeend"){if(!(e instanceof y))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function t(e,t){if(!(e instanceof y&&t instanceof y))throw new Error("Can replace only components");const n=e.element,i=t.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}var i=n(379),s=n.n(i),r=n(795),a=n.n(r),o=n(569),l=n.n(o),c=n(565),d=n.n(c),u=n(216),p=n.n(u),f=n(589),v=n.n(f),h=n(10),_={};_.styleTagTransform=v(),_.setAttributes=d(),_.insert=l().bind(null,"head"),_.domAPI=a(),_.insertStyleElement=p(),s()(h.Z,_),h.Z&&h.Z.locals&&h.Z.locals;const m="shake";class y{#e=null;constructor(){if(new.target===y)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(m),setTimeout((()=>{this.element.classList.remove(m),e?.()}),600)}}class b extends y{get template(){return'<form class="trip-filters" action="#" method="get">\n            <div class="trip-filters__filter">\n              <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n              <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n            </div>\n\n            <div class="trip-filters__filter">\n              <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n              <label class="trip-filters__filter-label" for="filter-future">Future</label>\n            </div>\n\n            <div class="trip-filters__filter">\n              <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n              <label class="trip-filters__filter-label" for="filter-present">Present</label>\n            </div>\n\n            <div class="trip-filters__filter">\n              <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n              <label class="trip-filters__filter-label" for="filter-past">Past</label>\n            </div>\n\n            <button class="visually-hidden" type="submit">Accept filter</button>\n          </form>'}}var g=n(484),$=n.n(g);const M=40,w=180,S=[{type:"taxi",offers:[{id:"201e539d-7173-4fad-82e0-788c26dfb7a9",title:"Choose the radio station",price:k(M,w)},{id:"3efdd2b3-e091-459a-b4bd-c0f94005d1e1",title:"Choose temperature",price:k(M,w)},{id:"0a6f3595-450a-4d55-b917-90a1ef1af044",title:"Drive quickly, I'm in a hurry",price:k(M,w)},{id:"0e7993d4-2111-41f1-b5d4-452ec166cfa5",title:"Drive slowly",price:k(M,w)}]},{type:"check-in",offers:[{id:"761e2ddb-b5cc-4590-8104-82f0643ffc06",title:"Choose the time of check-in",price:k(M,w)},{id:"e4feb9d2-05e6-4dbe-8bec-aafde193afc0",title:"Choose the time of check-out",price:k(M,w)},{id:"70e1751f-0a4a-4cfe-bbd1-c51289cc713d",title:"Add breakfast",price:k(M,w)},{id:"99a58311-3190-4222-94e3-b2c61e8fbe67",title:"Laundry",price:k(M,w)},{id:"060dc342-12eb-49d9-bc4b-2ace53288cc9",title:"Order a meal from the restaurant",price:k(M,w)}]},{type:"sightseeing",offers:[]}];function A(e,t){return $()(e).format(t)}function x(e,t){return t.find((t=>t.id===e))}function E(e){return S.find((t=>t.type===e.type)).offers}function k(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}const C="HH:mm",D="D/MM/YY HH:mm";class T extends y{#t=null;#n=null;constructor({point:e,destinations:t,onRollButtonClick:n,onSubmitClick:i}){super(),this.#t=e,this.#n=t,this.element.querySelector(".event__rollup-btn").addEventListener("click",(e=>{e.preventDefault(),n()})),this.element.querySelector(".event__save-btn").addEventListener("submit",i)}get template(){return function(e,t){const{basePrice:n,dataFrom:i,dataTo:s,destination:r,type:a}=e,o=e=>e===a?"checked":"",l=x(r,t),c=A(i,D),d=A(s,D),u=E(e).map((t=>{const n=e.offers.includes(t.id)?"checked":"",i=t.title.toLowerCase().split(" ").join("-");return`<div class="event__offer-selector">\n        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${i}-${t.id}" type="checkbox" name="event-offer-${i}" ${n}>\n        <label class="event__offer-label" for="event-offer-${i}-${t.id}">\n        <span class="event__offer-title">${t.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${t.price}</span>\n        </label>\n      </div>`})).join("");return`<form class="event event--edit" action="#" method="post">\n            <header class="event__header">\n              <div class="event__type-wrapper">\n                <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                  <span class="visually-hidden">Choose event type</span>\n                  <img class="event__type-icon" width="17" height="17" src="img/icons/${a}.png" alt="Event type icon">\n                </label>\n                <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n                <div class="event__type-list">\n                  <fieldset class="event__type-group">\n                    <legend class="visually-hidden">Event type</legend>\n\n                    <div class="event__type-item">\n                      <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi" ${o("taxi")}>\n                      <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus" ${o("bus")}>\n                      <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train" ${o("train")}>\n                      <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship" ${o("ship")}>\n                      <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive" ${o("drive")}>\n                      <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" ${o("flight")}>\n                      <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in" ${o("check-in")}>\n                      <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing" ${o("sightseeinf")}>\n                      <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant" ${o("restaurant")}>\n                      <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n                    </div>\n                  </fieldset>\n                </div>\n              </div>\n\n              <div class="event__field-group  event__field-group--destination">\n                <label class="event__label  event__type-output" for="event-destination-1">\n                  ${a}\n                </label>\n                <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${l.name}" list="destination-list-1">\n                <datalist id="destination-list-1">\n                  <option value="Amsterdam"></option>\n                  <option value="Geneva"></option>\n                  <option value="Chamonix"></option>\n                </datalist>\n              </div>\n\n              <div class="event__field-group  event__field-group--time">\n                <label class="visually-hidden" for="event-start-time-1">From</label>\n                <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${c}">\n                &mdash;\n                <label class="visually-hidden" for="event-end-time-1">To</label>\n                <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${d}">\n              </div>\n\n              <div class="event__field-group  event__field-group--price">\n                <label class="event__label" for="event-price-1">\n                  <span class="visually-hidden">Price</span>\n                  &euro;\n                </label>\n                <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${n}">\n              </div>\n\n              <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n              <button class="event__reset-btn" type="reset">Delete</button>\n              <button class="event__rollup-btn" type="button">\n                <span class="visually-hidden">Open event</span>\n              </button>\n            </header>\n            <section class="event__details">\n              <section class="event__section  event__section--offers">\n                <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n                <div class="event__available-offers">\n                  ${u}\n                </div>\n              </section>\n\n              <section class="event__section  event__section--destination">\n                <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n                <p class="event__destination-description">${l.description}</p>\n              </section>\n            </section>\n          </form>`}(this.#t,this.#n)}}class O extends y{get template(){return'<ul class="trip-events__list"></ul>'}}class L extends y{#t=null;#n=null;constructor({point:e,destinations:t,onRollButtonClick:n}){super(),this.#t=e,this.#n=t,this.element.querySelector(".event__rollup-btn").addEventListener("click",(e=>{e.preventDefault(),n()}))}get template(){return function(e,t){const{basePrice:n,dateFrom:i,dateTo:s,destination:r,isFavorite:a,type:o}=e,l=A(i,"YYYY-MM-DD"),c=A(i,"MMM D"),d=A(i,C),u=A(s,C),p=x(r,t),f=function(e,t){const n=$()(e),i=$()(t).diff(n,"minute");if(i>1440){const e=Math.floor(i/1440),t=i%1440,n=Math.floor(t/60),s=t%60;return`${String(e).padStart(2,"0")}D ${String(n).padStart(2,"0")}H ${String(s).padStart(2,"0")}M`}if(i>60){const e=Math.floor(i/60),t=i%60;return`${String(e).padStart(2,"0")}H ${String(t).padStart(2,"0")}M`}return`${String(i).padStart(2,"0")}M`}(i,s),v=E(e).filter((t=>e.offers.includes(t.id))).map((e=>`\n      <li class="event__offer">\n        <span class="event__offer-title">${e.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${e.price}</span>\n      </li>\n    `)).join(""),h=a?"event__favorite-btn--active":"";return`<li class="trip-events__item">\n            <div class="event">\n              <time class="event__date" datetime=""${l}">${c}</time>\n              <div class="event__type">\n                <img class="event__type-icon" width="42" height="42" src="img/icons/${o}.png" alt="Event type icon">\n              </div>\n              <h3 class="event__title">${o} ${p.name}</h3>\n              <div class="event__schedule">\n                <p class="event__time">\n                  <time class="event__start-time" datetime="${i}">${d}</time>\n                  &mdash;\n                  <time class="event__end-time" datetime="${s}">${u}</time>\n                </p>\n                <p class="event__duration">${f}</p>\n              </div>\n              <p class="event__price">\n                &euro;&nbsp;<span class="event__price-value">${n}</span>\n              </p>\n              <h4 class="visually-hidden">Offers:</h4>\n              <ul class="event__selected-offers">\n                ${v}\n              </ul>\n              <button class="event__favorite-btn ${h}" type="button">\n                <span class="visually-hidden">Add to favorite</span>\n                <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                  <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                </svg>\n              </button>\n              <button class="event__rollup-btn" type="button">\n                <span class="visually-hidden">Open event</span>\n              </button>\n            </div>\n          </li>`}(this.#t,this.#n)}}class j extends y{get template(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n            <div class="trip-sort__item  trip-sort__item--day">\n              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n              <label class="trip-sort__btn" for="sort-day">Day</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--event">\n              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n              <label class="trip-sort__btn" for="sort-event">Event</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--time">\n              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n              <label class="trip-sort__btn" for="sort-time">Time</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--price">\n              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n              <label class="trip-sort__btn" for="sort-price">Price</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--offer">\n              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n              <label class="trip-sort__btn" for="sort-offer">Offers</label>\n            </div>\n          </form>'}}const F=240,B=4100,H=[{id:"bbf2cc7a-f3e8-4609-bd4e-79d58e512287",basePrice:k(F,B),dateFrom:"2025-02-13T22:06:12.821Z",dateTo:"2025-02-14T15:12:12.821Z",destination:"a981d2e5-0324-475a-b814-0779833e6c23",isFavorite:!0,offers:["761e2ddb-b5cc-4590-8104-82f0643ffc06","e4feb9d2-05e6-4dbe-8bec-aafde193afc0","060dc342-12eb-49d9-bc4b-2ace53288cc9"],type:"check-in"},{id:"c5f30a4c-0ef7-41ba-87f9-495e213a18a4",basePrice:k(F,B),dateFrom:"2025-04-10T03:03:12.821Z",dateTo:"2025-04-12T02:16:12.821Z",destination:"e05056ac-f5e8-413e-812e-186059ffa8b5",isFavorite:!1,offers:["201e539d-7173-4fad-82e0-788c26dfb7a9","3efdd2b3-e091-459a-b4bd-c0f94005d1e1","0a6f3595-450a-4d55-b917-90a1ef1af044","0e7993d4-2111-41f1-b5d4-452ec166cfa5"],type:"taxi"},{id:"8677587e-2602-47b1-a200-d28e9cd34bce",basePrice:k(F,B),dateFrom:"2025-04-07T10:38:12.821Z",dateTo:"2025-04-09T10:42:12.821Z",destination:"b447fce3-6400-459e-b4ee-3a7ea0b2d620",isFavorite:!0,offers:[],type:"sightseeing"},{id:"85a2f0c4-248d-4063-ba49-011a1879c988",basePrice:k(F,B),dateFrom:"2025-07-15T16:31:12.821Z",dateTo:"2025-07-16T20:57:12.821Z",destination:"c404e12f-adc3-4d53-bc96-f77c333a17f9",isFavorite:!0,offers:[],type:"taxi"},{id:"d1ef1eb1-5983-40c8-a1f3-6c039909c28c",basePrice:k(F,B),dateFrom:"2025-07-30T11:46:12.821Z",dateTo:"2025-07-01T23:21:12.821Z",destination:"adc0f62d-9592-467b-92d3-1882deda2ca5",isFavorite:!1,offers:["70e1751f-0a4a-4cfe-bbd1-c51289cc713d","99a58311-3190-4222-94e3-b2c61e8fbe67","060dc342-12eb-49d9-bc4b-2ace53288cc9"],type:"check-in"}],P=[{id:"c404e12f-adc3-4d53-bc96-f77c333a17f9",description:"Geneva - with a beautiful old town",name:"Geneva",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/5.jpg",description:"Geneva a perfect place to stay with a family"}]},{id:"b447fce3-6400-459e-b4ee-3a7ea0b2d620",description:"",name:"Den Haag",pictures:[]},{id:"a981d2e5-0324-475a-b814-0779833e6c23",description:"Valencia - middle-eastern paradise",name:"Valencia",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/19.jpg",description:"Valencia for those who value comfort and coziness"}]},{id:"adc0f62d-9592-467b-92d3-1882deda2ca5",description:"Rome - with a beautiful old town",name:"Rome",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/10.jpg",description:"Rome a true asian pearl"},{src:"https://24.objects.htmlacademy.pro/static/destinations/4.jpg",description:"Rome with crowded streets"},{src:"https://24.objects.htmlacademy.pro/static/destinations/20.jpg",description:"Rome full of of cozy canteens where you can try the best coffee in the Middle East"},{src:"https://24.objects.htmlacademy.pro/static/destinations/19.jpg",description:"Rome with crowded streets"}]},{id:"e05056ac-f5e8-413e-812e-186059ffa8b5",description:"",name:"Monaco",pictures:[]}],R=new class{get points(){return[...H]}},Y=new class{get offers(){return[...S]}},Z=new class{get destinations(){return[...P]}},I=new class{#i=new O;#s=null;#r=null;#a=null;#o=null;#l=null;#c=null;#n=null;#d=null;constructor({pointsModel:e,offersModel:t,destinationsModel:n}){this.#s=e,this.#r=t,this.#a=n,this.#o=document.querySelector(".trip-events"),this.#l=document.querySelector(".trip-controls__filters")}init(){this.#c=this.#s.points,this.#d=this.#r.offers,this.#n=this.#a.destinations,e(new b,this.#l),e(new j,this.#o),e(this.#i,this.#o),this.#c.forEach((e=>{this.#u(e)}))}#u(n){const i=e=>{"Escape"===e.key&&(e.preventDefault(),a(),document.removeEventListener("keydown",i))},s=new T({point:n,destinations:this.#n,offers:this.#d,onSubmitClick:()=>{a(),document.removeEventListener("keydown",i)},onRollButtonClick:()=>{a(),document.removeEventListener("keydown",i)}}),r=new L({point:n,destinations:this.#n,offers:this.#d,onRollButtonClick:()=>{t(s,r),document.addEventListener("keydown",i)}});function a(){t(r,s)}e(r,this.#i.element)}}({pointsModel:R,offersModel:Y,destinationsModel:Z});I.init()})()})();
//# sourceMappingURL=bundle.e252e62f3f991e3aa2ee.js.map