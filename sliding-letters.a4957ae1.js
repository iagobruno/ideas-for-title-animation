parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"B9rA":[function(require,module,exports) {
var define;
var t;!function(e,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof t&&t.amd?t("scrollMonitor",[],i):"object"==typeof exports?exports.scrollMonitor=i():e.scrollMonitor=i()}(this,function(){return function(t){function e(o){if(i[o])return i[o].exports;var s=i[o]={exports:{},id:o,loaded:!1};return t[o].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";var o=i(1).isInBrowser,s=new(i(2))(o?document.body:null);s.setStateFromDOM(null),s.listenToDOM(),o&&(window.scrollMonitor=s),t.exports=s},function(t,e){"use strict";e.VISIBILITYCHANGE="visibilityChange",e.ENTERVIEWPORT="enterViewport",e.FULLYENTERVIEWPORT="fullyEnterViewport",e.EXITVIEWPORT="exitViewport",e.PARTIALLYEXITVIEWPORT="partiallyExitViewport",e.LOCATIONCHANGE="locationChange",e.STATECHANGE="stateChange",e.eventTypes=[e.VISIBILITYCHANGE,e.ENTERVIEWPORT,e.FULLYENTERVIEWPORT,e.EXITVIEWPORT,e.PARTIALLYEXITVIEWPORT,e.LOCATIONCHANGE,e.STATECHANGE],e.isOnServer="undefined"==typeof window,e.isInBrowser=!e.isOnServer,e.defaultOffsets={top:0,bottom:0}},function(t,e,i){"use strict";function o(t){return h?0:t===document.body?window.innerHeight||document.documentElement.clientHeight:t.clientHeight}function s(t){return h?0:t===document.body?Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight):t.scrollHeight}function n(t){return h?0:t===document.body?window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop}var r=i(1),h=r.isOnServer,c=r.isInBrowser,a=r.eventTypes,l=i(3),p=!1;if(c)try{var u=Object.defineProperty({},"passive",{get:function(){p=!0}});window.addEventListener("test",null,u)}catch(t){}var w=!!p&&{capture:!1,passive:!0},d=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var r,h,c,l=this;this.item=e,this.watchers=[],this.viewportTop=null,this.viewportBottom=null,this.documentHeight=s(e),this.viewportHeight=o(e),this.DOMListener=function(){t.prototype.DOMListener.apply(l,arguments)},this.eventTypes=a,i&&(this.containerWatcher=i.create(e)),this.update=function(){(function(){if(l.viewportTop=n(e),l.viewportBottom=l.viewportTop+l.viewportHeight,l.documentHeight=s(e),l.documentHeight!==r){for(h=l.watchers.length;h--;)l.watchers[h].recalculateLocation();r=l.documentHeight}})(),function(){for(c=l.watchers.length;c--;)l.watchers[c].update();for(c=l.watchers.length;c--;)l.watchers[c].triggerCallbacks()}()},this.recalculateLocations=function(){this.documentHeight=0,this.update()}}return t.prototype.listenToDOM=function(){c&&(window.addEventListener?(this.item===document.body?window.addEventListener("scroll",this.DOMListener,w):this.item.addEventListener("scroll",this.DOMListener,w),window.addEventListener("resize",this.DOMListener)):(this.item===document.body?window.attachEvent("onscroll",this.DOMListener):this.item.attachEvent("onscroll",this.DOMListener),window.attachEvent("onresize",this.DOMListener)),this.destroy=function(){window.addEventListener?(this.item===document.body?(window.removeEventListener("scroll",this.DOMListener,w),this.containerWatcher.destroy()):this.item.removeEventListener("scroll",this.DOMListener,w),window.removeEventListener("resize",this.DOMListener)):(this.item===document.body?(window.detachEvent("onscroll",this.DOMListener),this.containerWatcher.destroy()):this.item.detachEvent("onscroll",this.DOMListener),window.detachEvent("onresize",this.DOMListener))})},t.prototype.destroy=function(){},t.prototype.DOMListener=function(t){this.setStateFromDOM(t)},t.prototype.setStateFromDOM=function(t){var e=n(this.item),i=o(this.item),r=s(this.item);this.setState(e,i,r,t)},t.prototype.setState=function(t,e,i,o){var s=e!==this.viewportHeight||i!==this.contentHeight;if(this.latestEvent=o,this.viewportTop=t,this.viewportHeight=e,this.viewportBottom=t+e,this.contentHeight=i,s)for(var n=this.watchers.length;n--;)this.watchers[n].recalculateLocation();this.updateAndTriggerWatchers(o)},t.prototype.updateAndTriggerWatchers=function(t){for(var e=this.watchers.length;e--;)this.watchers[e].update();for(e=this.watchers.length;e--;)this.watchers[e].triggerCallbacks(t)},t.prototype.createCustomContainer=function(){return new t},t.prototype.createContainer=function(e){"string"==typeof e?e=document.querySelector(e):e&&e.length>0&&(e=e[0]);var i=new t(e,this);return i.setStateFromDOM(),i.listenToDOM(),i},t.prototype.create=function(t,e){"string"==typeof t?t=document.querySelector(t):t&&t.length>0&&(t=t[0]);var i=new l(this,t,e);return this.watchers.push(i),i},t.prototype.beget=function(t,e){return this.create(t,e)},t}();t.exports=d},function(t,e,i){"use strict";function o(t,e,i){function o(t,e){if(0!==t.length)for(v=t.length;v--;)(b=t[v]).callback.call(I,e,I),b.isOne&&t.splice(v,1)}var s,d,f,m,v,b,I=this;this.watchItem=e,this.container=t,this.offsets=i?i===+i?{top:i,bottom:i}:{top:i.top||w.top,bottom:i.bottom||w.bottom}:w,this.callbacks={};for(var E=0,y=u.length;E<y;E++)I.callbacks[u[E]]=[];this.locked=!1,this.triggerCallbacks=function(t){switch(this.isInViewport&&!s&&o(this.callbacks[r],t),this.isFullyInViewport&&!d&&o(this.callbacks[h],t),this.isAboveViewport!==f&&this.isBelowViewport!==m&&(o(this.callbacks[n],t),d||this.isFullyInViewport||(o(this.callbacks[h],t),o(this.callbacks[a],t)),s||this.isInViewport||(o(this.callbacks[r],t),o(this.callbacks[c],t))),!this.isFullyInViewport&&d&&o(this.callbacks[a],t),!this.isInViewport&&s&&o(this.callbacks[c],t),this.isInViewport!==s&&o(this.callbacks[n],t),!0){case s!==this.isInViewport:case d!==this.isFullyInViewport:case f!==this.isAboveViewport:case m!==this.isBelowViewport:o(this.callbacks[p],t)}s=this.isInViewport,d=this.isFullyInViewport,f=this.isAboveViewport,m=this.isBelowViewport},this.recalculateLocation=function(){if(!this.locked){var t=this.top,e=this.bottom;if(this.watchItem.nodeName){var i=this.watchItem.style.display;"none"===i&&(this.watchItem.style.display="");for(var s=0,n=this.container;n.containerWatcher;)s+=n.containerWatcher.top-n.containerWatcher.container.viewportTop,n=n.containerWatcher.container;var r=this.watchItem.getBoundingClientRect();this.top=r.top+this.container.viewportTop-s,this.bottom=r.bottom+this.container.viewportTop-s,"none"===i&&(this.watchItem.style.display=i)}else this.watchItem===+this.watchItem?this.watchItem>0?this.top=this.bottom=this.watchItem:this.top=this.bottom=this.container.documentHeight-this.watchItem:(this.top=this.watchItem.top,this.bottom=this.watchItem.bottom);this.top-=this.offsets.top,this.bottom+=this.offsets.bottom,this.height=this.bottom-this.top,void 0===t&&void 0===e||this.top===t&&this.bottom===e||o(this.callbacks[l],null)}},this.recalculateLocation(),this.update(),s=this.isInViewport,d=this.isFullyInViewport,f=this.isAboveViewport,m=this.isBelowViewport}var s=i(1),n=s.VISIBILITYCHANGE,r=s.ENTERVIEWPORT,h=s.FULLYENTERVIEWPORT,c=s.EXITVIEWPORT,a=s.PARTIALLYEXITVIEWPORT,l=s.LOCATIONCHANGE,p=s.STATECHANGE,u=s.eventTypes,w=s.defaultOffsets;o.prototype={on:function(t,e,i){switch(!0){case t===n&&!this.isInViewport&&this.isAboveViewport:case t===r&&this.isInViewport:case t===h&&this.isFullyInViewport:case t===c&&this.isAboveViewport&&!this.isInViewport:case t===a&&this.isInViewport&&this.isAboveViewport:if(e.call(this,this.container.latestEvent,this),i)return}if(!this.callbacks[t])throw new Error("Tried to add a scroll monitor listener of type "+t+". Your options are: "+u.join(", "));this.callbacks[t].push({callback:e,isOne:i||!1})},off:function(t,e){if(!this.callbacks[t])throw new Error("Tried to remove a scroll monitor listener of type "+t+". Your options are: "+u.join(", "));for(var i,o=0;i=this.callbacks[t][o];o++)if(i.callback===e){this.callbacks[t].splice(o,1);break}},one:function(t,e){this.on(t,e,!0)},recalculateSize:function(){this.height=this.watchItem.offsetHeight+this.offsets.top+this.offsets.bottom,this.bottom=this.top+this.height},update:function(){this.isAboveViewport=this.top<this.container.viewportTop,this.isBelowViewport=this.bottom>this.container.viewportBottom,this.isInViewport=this.top<this.container.viewportBottom&&this.bottom>this.container.viewportTop,this.isFullyInViewport=this.top>=this.container.viewportTop&&this.bottom<=this.container.viewportBottom||this.isAboveViewport&&this.isBelowViewport},destroy:function(){var t=this.container.watchers.indexOf(this);this.container.watchers.splice(t,1);for(var e=0,i=u.length;e<i;e++)this.callbacks[u[e]].length=0},lock:function(){this.locked=!0},unlock:function(){this.locked=!1}};for(var d=function(t){return function(e,i){this.on.call(this,t,e,i)}},f=0,m=u.length;f<m;f++){var v=u[f];o.prototype[v]=d(v)}t.exports=o}])});
},{}],"peUa":[function(require,module,exports) {
var define;
var t;(function(){var e,n,i,o,r,s,a,u,l,d,h,p,c,m,f,g,v,w,M,y,b,T,E=[].slice;n=/^\(?([^)]*)\)?(?:(.)(d+))?$/,e=2e3,i=2,o=1e3/30,f=document.createElement("div").style,a=null!=f.transition||null!=f.webkitTransition||null!=f.mozTransition||null!=f.oTransition,c=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,l=function(t){var e;return(e=document.createElement("div")).innerHTML=t,e.children[0]},p=function(t,e){return t.className=t.className.replace(new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi")," ")},u=function(t,e){return p(t,e),t.className+=" "+e},g=function(t,e){var n;if(null!=document.createEvent)return(n=document.createEvent("HTMLEvents")).initEvent(e,!0,!0),t.dispatchEvent(n)},h=function(){var t,e;return null!=(t=null!=(e=window.performance)&&"function"==typeof e.now?e.now():void 0)?t:+new Date},m=function(t,e){return null==e&&(e=0),e?(t*=Math.pow(10,e),t+=.5,(t=Math.floor(t))/Math.pow(10,e)):Math.round(t)},v=function(t){return t<0?Math.ceil(t):Math.floor(t)},d=function(t){return t-m(t)},M=!1,(w=function(){var t,e,n,i,o;if(!M&&null!=window.jQuery){for(M=!0,o=[],e=0,n=(i=["html","text"]).length;e<n;e++)t=i[e],o.push(function(t){var e;return e=window.jQuery.fn[t],window.jQuery.fn[t]=function(t){var n;return null==t||null==(null!=(n=this[0])?n.odometer:void 0)?e.apply(this,arguments):this[0].odometer.update(t)}}(t));return o}})(),setTimeout(w,0),(s=function(){function t(n){var r,s,a,u,l,d,h,p,c,m=this;if(this.options=n,this.el=this.options.el,null!=this.el.odometer)return this.el.odometer;for(r in this.el.odometer=this,h=t.options)a=h[r],null==this.options[r]&&(this.options[r]=a);null==(u=this.options).duration&&(u.duration=e),this.MAX_VALUES=this.options.duration/o/i|0,this.resetFormat(),this.value=this.cleanValue(null!=(p=this.options.value)?p:""),this.renderInside(),this.render();try{for(l=0,d=(c=["innerHTML","innerText","textContent"]).length;l<d;l++)s=c[l],null!=this.el[s]&&function(t){Object.defineProperty(m.el,t,{get:function(){var e;return"innerHTML"===t?m.inside.outerHTML:null!=(e=m.inside.innerText)?e:m.inside.textContent},set:function(t){return m.update(t)}})}(s)}catch(f){f,this.watchForMutations()}}return t.prototype.renderInside=function(){return this.inside=document.createElement("div"),this.inside.className="odometer-inside",this.el.innerHTML="",this.el.appendChild(this.inside)},t.prototype.watchForMutations=function(){var t=this;if(null!=r)try{return null==this.observer&&(this.observer=new r(function(e){var n;return n=t.el.innerText,t.renderInside(),t.render(t.value),t.update(n)})),this.watchMutations=!0,this.startWatchingMutations()}catch(e){e}},t.prototype.startWatchingMutations=function(){if(this.watchMutations)return this.observer.observe(this.el,{childList:!0})},t.prototype.stopWatchingMutations=function(){var t;return null!=(t=this.observer)?t.disconnect():void 0},t.prototype.cleanValue=function(t){var e;return"string"==typeof t&&(t=(t=(t=t.replace(null!=(e=this.format.radix)?e:".","<radix>")).replace(/[.,]/g,"")).replace("<radix>","."),t=parseFloat(t,10)||0),m(t,this.format.precision)},t.prototype.bindTransitionEnd=function(){var t,e,n,i,o,r,s=this;if(!this.transitionEndBound){for(this.transitionEndBound=!0,e=!1,r=[],n=0,i=(o="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd".split(" ")).length;n<i;n++)t=o[n],r.push(this.el.addEventListener(t,function(){return!!e||(e=!0,setTimeout(function(){return s.render(),e=!1,g(s.el,"odometerdone")},0),!0)},!1));return r}},t.prototype.resetFormat=function(){var t,e,i,o,r,s,a,u;if((t=null!=(a=this.options.format)?a:"(,ddd).dd")||(t="d"),!(i=n.exec(t)))throw new Error("Odometer: Unparsable digit format");return s=(u=i.slice(1,4))[0],r=u[1],o=(null!=(e=u[2])?e.length:void 0)||0,this.format={repeating:s,radix:r,precision:o}},t.prototype.render=function(t){var e,n,i,o,r,s,u;for(null==t&&(t=this.value),this.stopWatchingMutations(),this.resetFormat(),this.inside.innerHTML="",r=this.options.theme,o=[],s=0,u=(e=this.el.className.split(" ")).length;s<u;s++)(n=e[s]).length&&((i=/^odometer-theme-(.+)$/.exec(n))?r=i[1]:/^odometer(-|$)/.test(n)||o.push(n));return o.push("odometer"),a||o.push("odometer-no-transitions"),r?o.push("odometer-theme-"+r):o.push("odometer-auto-theme"),this.el.className=o.join(" "),this.ribbons={},this.formatDigits(t),this.startWatchingMutations()},t.prototype.formatDigits=function(t){var e,n,i,o,r,s,a,u,l;if(this.digits=[],this.options.formatFunction)for(o=0,s=(u=this.options.formatFunction(t).split("").reverse()).length;o<s;o++)(n=u[o]).match(/0-9/)?((e=this.renderDigit()).querySelector(".odometer-value").innerHTML=n,this.digits.push(e),this.insertDigit(e)):this.addSpacer(n);else for(i=!this.format.precision||!d(t)||!1,r=0,a=(l=t.toString().split("").reverse()).length;r<a;r++)"."===(e=l[r])&&(i=!0),this.addDigit(e,i)},t.prototype.update=function(t){var e,n=this;if(e=(t=this.cleanValue(t))-this.value)return p(this.el,"odometer-animating-up odometer-animating-down odometer-animating"),u(this.el,e>0?"odometer-animating-up":"odometer-animating-down"),this.stopWatchingMutations(),this.animate(t),this.startWatchingMutations(),setTimeout(function(){return n.el.offsetHeight,u(n.el,"odometer-animating")},0),this.value=t},t.prototype.renderDigit=function(){return l('<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value"></span></span></span></span></span>')},t.prototype.insertDigit=function(t,e){return null!=e?this.inside.insertBefore(t,e):this.inside.children.length?this.inside.insertBefore(t,this.inside.children[0]):this.inside.appendChild(t)},t.prototype.addSpacer=function(t,e,n){var i;return(i=l('<span class="odometer-formatting-mark"></span>')).innerHTML=t,n&&u(i,n),this.insertDigit(i,e)},t.prototype.addDigit=function(t,e){var n,i,o,r;if(null==e&&(e=!0),"-"===t)return this.addSpacer(t,null,"odometer-negation-mark");if("."===t)return this.addSpacer(null!=(r=this.format.radix)?r:".",null,"odometer-radix-mark");if(e)for(o=!1;;){if(!this.format.repeating.length){if(o)throw new Error("Bad odometer format without digits");this.resetFormat(),o=!0}if(n=this.format.repeating[this.format.repeating.length-1],this.format.repeating=this.format.repeating.substring(0,this.format.repeating.length-1),"d"===n)break;this.addSpacer(n)}return(i=this.renderDigit()).querySelector(".odometer-value").innerHTML=t,this.digits.push(i),this.insertDigit(i)},t.prototype.animate=function(t){return a&&"count"!==this.options.animation?this.animateSlide(t):this.animateCount(t)},t.prototype.animateCount=function(t){var e,n,i,o,r,s=this;if(n=+t-this.value)return o=i=h(),e=this.value,(r=function(){var a,u;return h()-o>s.options.duration?(s.value=t,s.render(),void g(s.el,"odometerdone")):((a=h()-i)>50&&(i=h(),u=a/s.options.duration,e+=n*u,s.render(Math.round(e))),null!=c?c(r):setTimeout(r,50))})()},t.prototype.getDigitCount=function(){var t,e,n,i,o,r;for(t=o=0,r=(i=1<=arguments.length?E.call(arguments,0):[]).length;o<r;t=++o)n=i[t],i[t]=Math.abs(n);return e=Math.max.apply(Math,i),Math.ceil(Math.log(e+1)/Math.log(10))},t.prototype.getFractionalDigitCount=function(){var t,e,n,i,o,r,s;for(e=/^\-?\d*\.(\d*?)0*$/,t=r=0,s=(o=1<=arguments.length?E.call(arguments,0):[]).length;r<s;t=++r)i=o[t],o[t]=i.toString(),n=e.exec(o[t]),o[t]=null==n?0:n[1].length;return Math.max.apply(Math,o)},t.prototype.resetDigits=function(){return this.digits=[],this.ribbons=[],this.inside.innerHTML="",this.resetFormat()},t.prototype.animateSlide=function(t){var e,n,i,o,r,s,a,l,d,h,p,c,m,f,g,w,M,y,b,T,E,x,S,D,L,F,A;if(w=this.value,(l=this.getFractionalDigitCount(w,t))&&(t*=Math.pow(10,l),w*=Math.pow(10,l)),i=t-w){for(this.bindTransitionEnd(),o=this.getDigitCount(w,t),r=[],e=0,p=b=0;0<=o?b<o:b>o;p=0<=o?++b:--b){if(M=v(w/Math.pow(10,o-p-1)),s=(a=v(t/Math.pow(10,o-p-1)))-M,Math.abs(s)>this.MAX_VALUES){for(h=[],c=s/(this.MAX_VALUES+this.MAX_VALUES*e*.5),n=M;s>0&&n<a||s<0&&n>a;)h.push(Math.round(n)),n+=c;h[h.length-1]!==a&&h.push(a),e++}else h=function(){A=[];for(var t=M;M<=a?t<=a:t>=a;M<=a?t++:t--)A.push(t);return A}.apply(this);for(p=T=0,x=h.length;T<x;p=++T)d=h[p],h[p]=Math.abs(d%10);r.push(h)}for(this.resetDigits(),p=E=0,S=(F=r.reverse()).length;E<S;p=++E)for(h=F[p],this.digits[p]||this.addDigit(" ",p>=l),null==(y=this.ribbons)[p]&&(y[p]=this.digits[p].querySelector(".odometer-ribbon-inner")),this.ribbons[p].innerHTML="",i<0&&(h=h.reverse()),m=L=0,D=h.length;L<D;m=++L)d=h[m],(g=document.createElement("div")).className="odometer-value",g.innerHTML=d,this.ribbons[p].appendChild(g),m===h.length-1&&u(g,"odometer-last-value"),0===m&&u(g,"odometer-first-value");return M<0&&this.addDigit("-"),null!=(f=this.inside.querySelector(".odometer-radix-mark"))&&f.parent.removeChild(f),l?this.addSpacer(this.format.radix,this.digits[l-1],"odometer-radix-mark"):void 0}},t}()).options=null!=(b=window.odometerOptions)?b:{},setTimeout(function(){var t,e,n,i,o;if(window.odometerOptions){for(t in o=[],i=window.odometerOptions)e=i[t],o.push(null!=(n=s.options)[t]?(n=s.options)[t]:n[t]=e);return o}},0),s.init=function(){var t,e,n,i,o,r;if(null!=document.querySelectorAll){for(r=[],n=0,i=(e=document.querySelectorAll(s.options.selector||".odometer")).length;n<i;n++)t=e[n],r.push(t.odometer=new s({el:t,value:null!=(o=t.innerText)?o:t.textContent}));return r}},null!=(null!=(T=document.documentElement)?T.doScroll:void 0)&&null!=document.createEventObject?(y=document.onreadystatechange,document.onreadystatechange=function(){return"complete"===document.readyState&&!1!==s.options.auto&&s.init(),null!=y?y.apply(this,arguments):void 0}):document.addEventListener("DOMContentLoaded",function(){if(!1!==s.options.auto)return s.init()},!1),"function"==typeof t&&t.amd?t([],function(){return s}):"undefined"!=typeof exports&&null!==exports?module.exports=s:window.Odometer=s}).call(this);
},{}],"u7YK":[function(require,module,exports) {
"use strict";function e(e){return new Promise(function(t){return setTimeout(t,e)})}function t(e,t,n){return new Promise(function(r){var o=0,u=setInterval(function(){var t=e[o];n(t,o),o>=e.length-1?(clearInterval(u),r()):o++},t)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.sleep=e,exports.loopWithDelay=t;
},{}],"iD6K":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function i(e){try{l(r.next(e))}catch(t){u(t)}}function a(e){try{l(r.throw(e))}catch(t){u(t)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,a)}l((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(a){u=[6,a],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r=this;Object.defineProperty(exports,"__esModule",{value:!0});var o=n(require("scrollmonitor")),u=n(require("odometer")),i=require("./utils"),a=document.querySelector("#sliding-letters h2"),l=a.querySelector(".text"),c=a.getBoundingClientRect().height+"px",s=250,f=l.innerText.split("").map(function(e){var t=document.createElement("span");return t.className="letter",t.style.top=c,t.innerText=e,t}),p=new u.default({el:a.querySelector(".background-number"),value:(new Date).getFullYear(),format:"",duration:s});l.innerHTML="",f.forEach(function(e){return l.append(e)});var h=o.default.create(a);h.enterViewport(function(){return e(r,void 0,void 0,function(){return t(this,function(e){switch(e.label){case 0:return[4,i.sleep(500)];case 1:return e.sent(),p.update(1902),[4,i.loopWithDelay(f,1e3/f.length,function(e){e.style.top="0px"})];case 2:return e.sent(),[2]}})})}),h.exitViewport(function(){return e(r,void 0,void 0,function(){return t(this,function(e){return f.forEach(function(e){e.style.top=c}),p.update((new Date).getFullYear()),[2]})})});
},{"scrollmonitor":"B9rA","odometer":"peUa","./utils":"u7YK"}]},{},["iD6K"], null)
//# sourceMappingURL=https://httpiago.github.io/title-revelation-styles/sliding-letters.a4957ae1.js.map