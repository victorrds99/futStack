if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const t=e=>n(e,c),r={module:{uri:c},exports:o,require:t};s[c]=Promise.all(i.map((e=>r[e]||t(e)))).then((e=>(a(...e),o)))}}define(["./workbox-5afaf374"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.json",revision:"9134c572173e93ddd7edff3e97e013da"},{url:"/_next/static/FZPQ-0EJWFcoqjdCOsbwq/_buildManifest.js",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/FZPQ-0EJWFcoqjdCOsbwq/_middlewareManifest.js",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/FZPQ-0EJWFcoqjdCOsbwq/_ssgManifest.js",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/chunks/542-0f63e0d30790f7a8.js",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/chunks/647-86695f15eb51adb3.js",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/chunks/ea88be26-4785f7f12099037b.js",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/chunks/main-abd46b0fcf764e93.js",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/chunks/pages/404-0384853081511b1d.js",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/chunks/pages/_app-23e410f2a9842a6a.js",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/chunks/pages/games-e5e791f2b5e4706e.js",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/chunks/pages/index-f823c969a9e7b759.js",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/chunks/pages/login-619825c317f75e6d.js",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/chunks/pages/register-75a2e75b90d47d1e.js",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/chunks/webpack-434fefa8f39d8fbc.js",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/css/40187d52fd5ee7f6.css",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/css/53ba1f43cd930639.css",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/css/6f6b22853d30843c.css",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/css/8241f45c1e009532.css",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/css/c7422a8163e2c600.css",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/_next/static/css/d269e8b0045fda6d.css",revision:"FZPQ-0EJWFcoqjdCOsbwq"},{url:"/curvedLine.svg",revision:"6e4bea24c9fe9e0303f8dec51bd3a30d"},{url:"/favicon-16x16.png",revision:"0c33fd9f3abae07e9a6548dcedb43906"},{url:"/favicon-32x32.png",revision:"00c927bb37a46d77070f6590bc0b0420"},{url:"/favicon.ico",revision:"1714ed831eea52be280426edcb118319"},{url:"/goal.svg",revision:"f9dc8d9b0d113ce0092f998f06d84432"},{url:"/ipad_splash.png",revision:"4788f0ecb9e6330a3b25a65d43ba1eb1"},{url:"/ipadpro1_splash.png",revision:"c2cab31163f4777351c37e316c20172c"},{url:"/ipadpro2_splash.png",revision:"66b03b2341b1af7e1ddfa5d4358a8abd"},{url:"/ipadpro3_splash.png",revision:"6fa32840129feb190ede0db0cbebdd27"},{url:"/iphone5_splash.png",revision:"4fe6b6cb81e2c72d8c364f15a293b83c"},{url:"/iphone6_splash.png",revision:"e7da15a2ba6f8e3c12c98d70347a3f20"},{url:"/iphoneplus_splash.png",revision:"0e1377a37daa027f1921f3f9d0ffa586"},{url:"/iphonex_splash.png",revision:"8fd04bd75189d059c7c9c787936bbe7c"},{url:"/iphonexr_splash.png",revision:"10ea7139190d7c1a71ee4a115a55cdf1"},{url:"/iphonexsmax_splash.png",revision:"de99321fe742096a576193360f8cde74"},{url:"/line.svg",revision:"6d89aed1aad6d93ab0d36829bb0f8c66"},{url:"/logo.json",revision:"88669777d2555bf964e744d0f7a7d86c"},{url:"/logo.svg",revision:"59847573f81c4c35c5588500423a72aa"},{url:"/logo16.png",revision:"08dbdbb8bc8a78a4bcb25a7e1b1d785a"},{url:"/logo192.png",revision:"2e1df6e6144f0dd44c6840d02b5c8ba2"},{url:"/logo24.png",revision:"0dbe581ee4b480ee734f5988151bf3f0"},{url:"/logo32.png",revision:"49d9ea0f1e30f806264d3a16ca4effca"},{url:"/logo512.png",revision:"35fd2a6be0e6284a2cbcecfd5df9f535"},{url:"/logo64.png",revision:"c0bb56b420a952f76b1879325dca07d0"},{url:"/manifest.json",revision:"3957e56bc2ac18de4e46232650ae5006"},{url:"/metaTags.png",revision:"2db62dab212fad58318c9100bd32e7ed"},{url:"/player.png",revision:"56178c469e33158d8cbc378aeed60c07"},{url:"/soccer.svg",revision:"754d0b69a72cc9809e6806034e7f7044"},{url:"/touch-icon-ipad-retina.png",revision:"184226f6dd3beb3b06d133c141976453"},{url:"/touch-icon-ipad.png",revision:"1eaedad9b47b7b26e35afee06b0f7806"},{url:"/touch-icon-iphone-retina.png",revision:"659bd300bbd007264924e3d7bcd12819"},{url:"/up.svg",revision:"c8c3f7256bf05852a11f85d8f1ab2c5c"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
