if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const u=e=>s(e,o),c={module:{uri:o},exports:t,require:u};i[o]=Promise.all(r.map((e=>c[e]||u(e)))).then((e=>(n(...e),t)))}}define(["./workbox-4f586afe"],(function(e){"use strict";e.setCacheNameDetails({prefix:"quiz-app"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/quiz-app/css/app.712ee44b.css",revision:null},{url:"/quiz-app/index.html",revision:"dbdea06b298ba4c7769c402e0fc086db"},{url:"/quiz-app/js/app.0c1aa105.js",revision:null},{url:"/quiz-app/js/chunk-vendors.ff83f124.js",revision:null},{url:"/quiz-app/manifest.json",revision:"3fdef390786d44aef1f5c613d4cc99d5"},{url:"/quiz-app/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map