if(!self.define){let e,i={};const r=(r,n)=>(r=new URL(r+".js",n).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let u={};const t=e=>r(e,s),l={module:{uri:s},exports:u,require:t};i[s]=Promise.all(n.map((e=>l[e]||t(e)))).then((e=>(o(...e),u)))}}define(["./workbox-4f586afe"],(function(e){"use strict";e.setCacheNameDetails({prefix:"quiz-app"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/quiz-app/css/app.3db7794a.css",revision:null},{url:"/quiz-app/fonts/Montserrat-Bold.267932f0.woff2",revision:null},{url:"/quiz-app/fonts/Montserrat-Bold.4faeb873.woff",revision:null},{url:"/quiz-app/fonts/Montserrat-Light.1a14aab5.woff",revision:null},{url:"/quiz-app/fonts/Montserrat-Light.ed21cb51.woff2",revision:null},{url:"/quiz-app/fonts/Montserrat-Medium.73f41727.woff2",revision:null},{url:"/quiz-app/fonts/Montserrat-Medium.dc7f77ea.woff",revision:null},{url:"/quiz-app/fonts/Montserrat-Regular.866167e5.woff",revision:null},{url:"/quiz-app/fonts/Montserrat-Regular.c52f5341.woff2",revision:null},{url:"/quiz-app/index.html",revision:"f31d3dd6df6ca3f82939f3779a0c0838"},{url:"/quiz-app/js/app.b66c1160.js",revision:null},{url:"/quiz-app/js/chunk-vendors.84d1586d.js",revision:null},{url:"/quiz-app/manifest.json",revision:"3fdef390786d44aef1f5c613d4cc99d5"},{url:"/quiz-app/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
