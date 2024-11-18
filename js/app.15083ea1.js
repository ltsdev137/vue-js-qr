(function(){"use strict";var e={5141:function(e,t,n){var r=n(5130),o=n(6768),u=n(4232),i=n(5056),a=n(6450),c=n(5381),f=n(1051);function s(e,t,n,r,s,l){return(0,o.uX)(),(0,o.Wv)(a.E,null,{default:(0,o.k6)((()=>[(0,o.bF)(f.Y,null,{default:(0,o.k6)((()=>[(0,o.bF)(c.I,{class:"text-center"},{default:(0,o.k6)((()=>[t[0]||(t[0]=(0,o.Lk)("h1",null,"QR Code Scanner",-1)),t[1]||(t[1]=(0,o.Lk)("div",{id:"reader",style:{width:"500px",margin:"auto"}},null,-1)),s.decodedText?((0,o.uX)(),(0,o.Wv)(i.l,{key:0,type:"success",class:"mt-4"},{default:(0,o.k6)((()=>[(0,o.eW)(" Decoded: "+(0,u.v_)(s.decodedText),1)])),_:1})):(0,o.Q3)("",!0),s.errorMessage?((0,o.uX)(),(0,o.Wv)(i.l,{key:1,type:"error",class:"mt-4"},{default:(0,o.k6)((()=>[(0,o.eW)((0,u.v_)(s.errorMessage),1)])),_:1})):(0,o.Q3)("",!0)])),_:1})])),_:1})])),_:1})}var l=n(9143),d={data(){return{decodedText:"",errorMessage:""}},mounted(){this.initiateQrScanner()},methods:{initiateQrScanner(){const e={fps:10,qrbox:250},t=e=>{this.decodedText=e,this.errorMessage=""},n=e=>{this.errorMessage=e},r=new l.TF("reader",e,!1);r.render(t,n)}}},p=n(1241);const v=(0,p.A)(d,[["render",s]]);var b=v,h=(n(5524),n(1480)),g=(0,h.$N)();async function y(){const e=await n.e(53).then(n.t.bind(n,8874,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}y(),(0,r.Ef)(b).use(g).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r].call(u.exports,u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,u){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],u=e[s][2];for(var a=!0,c=0;c<r.length;c++)(!1&u||i>=u)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,u<i&&(i=u));if(a){e.splice(s--,1);var f=o();void 0!==f&&(t=f)}}return t}u=u||0;for(var s=e.length;s>0&&e[s-1][2]>u;s--)e[s]=e[s-1];e[s]=[r,o,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var u=Object.create(null);n.r(u);var i={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){i[e]=function(){return r[e]}}));return i["default"]=function(){return r},n.d(u,i),u}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.6b2e1c8e.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="qr-web-app:";n.l=function(r,o,u,i){if(e[r])e[r].push(o);else{var a,c;if(void 0!==u)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+u){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+u),a.src=r),e[r]=[o];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/vue-js-qr/"}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=u);var i=n.p+n.u(t),a=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,o[1](a)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,u,i=r[0],a=r[1],c=r[2],f=0;if(i.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var s=c(n)}for(t&&t(r);f<i.length;f++)u=i[f],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(s)},r=self["webpackChunkqr_web_app"]=self["webpackChunkqr_web_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(5141)}));r=n.O(r)})();
//# sourceMappingURL=app.15083ea1.js.map