(function(){"use strict";var e={4712:function(e,t,n){var r=n(5130),o=n(6768),a=n(4232),i=n(1297),u=n(6450),c=n(5763),s=n(5381),f=n(1051);function d(e,t,n,r,d,l){const p=(0,o.g2)("qrcode-stream");return(0,o.uX)(),(0,o.Wv)(u.E,null,{default:(0,o.k6)((()=>[(0,o.bF)(f.Y,null,{default:(0,o.k6)((()=>[(0,o.bF)(s.I,{class:"text-center"},{default:(0,o.k6)((()=>[t[2]||(t[2]=(0,o.Lk)("h1",null,"QR Code Scanner",-1)),(0,o.bF)(c.D,{color:"primary",large:"",onClick:l.startScanning},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)(" Scan QR ")]))),_:1},8,["onClick"]),d.showScanner?((0,o.uX)(),(0,o.Wv)(p,{key:0,onDecode:l.onDecode,onInit:l.onInit,paused:d.paused,facingMode:"environment",qrbox:250,class:"mt-4"},null,8,["onDecode","onInit","paused"])):(0,o.Q3)("",!0),d.decodedText?((0,o.uX)(),(0,o.Wv)(i.l,{key:1,type:"success",class:"mt-4"},{default:(0,o.k6)((()=>[(0,o.eW)(" Decoded: "+(0,a.v_)(d.decodedText),1)])),_:1})):(0,o.Q3)("",!0),d.errorMessage?((0,o.uX)(),(0,o.Wv)(i.l,{key:2,type:"error",class:"mt-4"},{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)(d.errorMessage),1)])),_:1})):(0,o.Q3)("",!0),(0,o.bF)(c.D,{class:"mt-4",color:"primary",onClick:l.restartCamera},{default:(0,o.k6)((()=>t[1]||(t[1]=[(0,o.eW)(" Restart Camera ")]))),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}var l=n(7158),p={components:{QrcodeStream:l.tR},data(){return{decodedText:"",errorMessage:"",showScanner:!1,paused:!1}},methods:{startScanning(){this.showScanner=!0,this.errorMessage="",this.decodedText=""},onDecode(e){this.decodedText=e,this.errorMessage="",this.paused=!0},onInit(e){e.catch((()=>{this.errorMessage="Unable to access camera. Please allow camera permissions or check your browser settings."}))},restartCamera(){this.paused=!1,this.decodedText="",this.errorMessage=""}}},v=n(1241);const b=(0,v.A)(p,[["render",d],["__scopeId","data-v-dbc7cdde"]]);var h=b,m=(n(5524),n(1480)),g=(0,m.$N)();async function y(){const e=await n.e(53).then(n.t.bind(n,8874,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}y(),(0,r.Ef)(h).use(g).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],a=e[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&r;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){i[e]=function(){return r[e]}}));return i["default"]=function(){return r},n.d(a,i),a}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.6b2e1c8e.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="qr-web-app:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var d=s[f];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var l=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=l.bind(null,u.onerror),u.onload=l.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/vue-js-qr/"}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var f=c(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(f)},r=self["webpackChunkqr_web_app"]=self["webpackChunkqr_web_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(4712)}));r=n.O(r)})();
//# sourceMappingURL=app.a4a29eb9.js.map