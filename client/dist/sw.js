if(!self.define){let e,d={};const i=(i,n)=>(i=new URL(i+".js",n).href,d[i]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=d,document.head.appendChild(e)}else e=i,importScripts(i),d()})).then((()=>{let e=d[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(d[s])return;let t={};const f=e=>i(e,s),l={module:{uri:s},exports:t,require:f};d[s]=Promise.all(n.map((e=>l[e]||f(e)))).then((e=>(r(...e),t)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"database.bundle.js",revision:"dc14923860740def98dd103f3475e9ea"},{url:"database.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"editor.bundle.js",revision:"19625354746baa233d545b160a768db0"},{url:"editor.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"header.bundle.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"index.html",revision:"f113611df6d169c2e3a60ac4f63f0887"},{url:"install.bundle.js",revision:"df1e9b4d74c04c8b41e6369570b732bf"},{url:"install.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"main.bundle.js",revision:"994be64f132d75cd6b09d9a3e23cf72a"},{url:"main.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"}],{})}));