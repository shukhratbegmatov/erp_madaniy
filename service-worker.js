if(!self.define){let e,s={};const r=(r,n)=>(r=new URL(r+".js",n).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const l=e=>r(e,c),u={module:{uri:c},exports:o,require:l};s[c]=Promise.all(n.map((e=>u[e]||l(e)))).then((e=>(i(...e),o)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"erp.madaniymeros.uz"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.fc29ac46.css",revision:null},{url:"/css/chunk-vendors.fe7b80f8.css",revision:null},{url:"/img/user.99e6fb41.png",revision:null},{url:"/index.html",revision:"4eca5c92e7a14cedc757b53cf4926d84"},{url:"/js/about.bd1ae9d4.js",revision:null},{url:"/js/app.b0c3cace.js",revision:null},{url:"/js/chunk-vendors.5c145db9.js",revision:null},{url:"/manifest.json",revision:"615e05bdbf7fcb1c97ac19ff913593dd"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
