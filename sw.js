(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.2.4"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.2.4"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.2.4"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.2.4"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=y(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"cf51973f4b2304bd46baec1bbe6a0cac","url":"404.html"},{"revision":"2048b1804b336c621a596f5087b41444","url":"assets/css/styles.977700f3.css"},{"revision":"7094e2aecfce3bfc245d3f00fbacf68b","url":"assets/js/01a85c17.bc947396.js"},{"revision":"9ee627883c4dcd34cac17cca47d57c7e","url":"assets/js/01db9603.fbf51b85.js"},{"revision":"47e32a85fbba0a7036e47a8d3d408126","url":"assets/js/0339aa28.7a5e9230.js"},{"revision":"5824d2bccbfdf5428331e3b9905316ae","url":"assets/js/06dd7867.d5bff2dc.js"},{"revision":"44e1c81e8fdfad9dd8d42161e6287b7c","url":"assets/js/08ac8579.a9a8741a.js"},{"revision":"02071b507a0da66d1c551fa9c8c119e8","url":"assets/js/0e384e19.001e6d96.js"},{"revision":"04e1420f60ad9f20f78bdda574f9e615","url":"assets/js/17896441.e9be9832.js"},{"revision":"39656f05c946ca526faa31277f2f8a55","url":"assets/js/18007095.81972da1.js"},{"revision":"dcf6006958e46acc466232830389379d","url":"assets/js/1be78505.9c0b8d23.js"},{"revision":"49e632afd7b5ae037929109ab1ad3080","url":"assets/js/1c4f1457.c30f9bbf.js"},{"revision":"77b80028890ff01c7ecb0c09549793af","url":"assets/js/1f391b9e.31239d14.js"},{"revision":"a84cb6b7825c2c9182762ea9dd413cb0","url":"assets/js/24584499.6c234236.js"},{"revision":"1c24de4b3a39eb2f7645ea05ce7a42a4","url":"assets/js/293f897f.b3c6de2d.js"},{"revision":"1156bb0988f3368e3140ad1f0c929c10","url":"assets/js/32d144c9.902df2ea.js"},{"revision":"643f704ba27d32490d3986353d3e789f","url":"assets/js/3720c009.fba89830.js"},{"revision":"bae2eb21a4740e4c7c34ae0e521bc088","url":"assets/js/3938.95dbeb57.js"},{"revision":"be0f81204a95a3c0df9a1270bc1c0159","url":"assets/js/393be207.dc8e6a15.js"},{"revision":"03acc8b20899a24666ecbe37737aa86a","url":"assets/js/3a0b5694.000359b1.js"},{"revision":"a36ba7497665b9b810c13f8051afd506","url":"assets/js/40227597.fa7be0ac.js"},{"revision":"e1d4de761056500b8b5460d22708b3df","url":"assets/js/4608.1aa61735.js"},{"revision":"457d5410a032b43d47c2af30acc2f5fa","url":"assets/js/4852ba84.f652a89d.js"},{"revision":"583660d68007b9d519b1b3f01befe861","url":"assets/js/4f806ca3.2f8af07c.js"},{"revision":"631f498774aba01eebee44c2c825740c","url":"assets/js/5131.817a014e.js"},{"revision":"b57aba6ce5bfb7d86953717e93a102c0","url":"assets/js/5410.b4872a59.js"},{"revision":"9692be214f1d6e37fa60cf514c81e61a","url":"assets/js/55960ee5.b9d97bb8.js"},{"revision":"0ddd65f4dc69161ccf263d16a628999d","url":"assets/js/6403.2a21d758.js"},{"revision":"483bc27bfa08d084a5db6430adff5f3d","url":"assets/js/6875c492.715ad9a6.js"},{"revision":"1bd824f51c9fdb2c5651a9f5ed05bd64","url":"assets/js/6b2346a3.7eaea29d.js"},{"revision":"0a1feae5e3dfc131a6d406c89ac1f48e","url":"assets/js/6ebfc125.aac12d71.js"},{"revision":"2d6d58554b8ba9f7dadf97b3254696f6","url":"assets/js/7f9d7439.b40e49e2.js"},{"revision":"9026d6e407d9389f789b1df793e80393","url":"assets/js/80f5e4fa.07212ef8.js"},{"revision":"10db8b11ecc1f57244d97fd8a1eec82f","url":"assets/js/814f3328.8e706dfd.js"},{"revision":"b70e8fd3b9d13941097d24af9453e5d9","url":"assets/js/88c6804c.e425d40e.js"},{"revision":"9a91459e9234df8b7f20d98464fe0a1b","url":"assets/js/8b0f4364.32d069df.js"},{"revision":"b7b8087a1bbee44b8635e2c1af639da8","url":"assets/js/8c7972ff.4e89f51b.js"},{"revision":"2d4af4228435a2dbd45d8715da403971","url":"assets/js/923.7ee9b2b8.js"},{"revision":"6f1d55dd7351c25751611a8508e87db1","url":"assets/js/935f2afb.69f99895.js"},{"revision":"f6cfd163cff627e4d932297a45f007d3","url":"assets/js/9429132a.93c6fbae.js"},{"revision":"cd7cb60596e2b177b3df3dc90f09b252","url":"assets/js/95c2e7b4.34342fb1.js"},{"revision":"54cc3f6cc231f2b4a3e5dd0801e5d1b8","url":"assets/js/971286d5.7e9ea24a.js"},{"revision":"4e7362fb771061bc0ed1dc161ad6852a","url":"assets/js/9e4087bc.9090e43b.js"},{"revision":"2caf233eac82b4b43237a02507dbeae3","url":"assets/js/9e94c6cd.e7dfb032.js"},{"revision":"b0bc5d2dea0eada91f0570f713ce2785","url":"assets/js/a6aa9e1f.8519f1d7.js"},{"revision":"0c7dcb1b2e9fa8f4970a3af536551cfc","url":"assets/js/a98860cd.61298954.js"},{"revision":"d1713143dbc5d5034f12e297871d27ef","url":"assets/js/a9e12450.215a8db6.js"},{"revision":"b918023f1ba01c43b775a8e3d48f2555","url":"assets/js/aaf1daa5.9344f63b.js"},{"revision":"7f303a83d5e9639789a428baa1620cbc","url":"assets/js/b11ca90c.8740f65f.js"},{"revision":"58f55aa306acd4c8a1ef3331cebcff65","url":"assets/js/bc1b9aeb.5c0df8fc.js"},{"revision":"c58e3a05a6afe1d83a3927163faec5a5","url":"assets/js/bc88f846.f608ae2e.js"},{"revision":"b1f90e0abca136dbb33bd8771fa42fd9","url":"assets/js/c4f5d8e4.5ccb5365.js"},{"revision":"9b553b542b9c3d52a3abe4b832b92bdc","url":"assets/js/ccc49370.7820f90a.js"},{"revision":"7117403e5e9abf34e905a0a1c8d7ee81","url":"assets/js/dca7ddc3.4ffc1972.js"},{"revision":"1e2f7b242b10663f52b9c794ee69ba7e","url":"assets/js/df203c0f.549eeb1c.js"},{"revision":"f21ef2da30b22a0d8df349b8c112c532","url":"assets/js/e240f1d8.b5f1466a.js"},{"revision":"ea232b7c9daeaaeaa5b65c5fa7309820","url":"assets/js/e4ffd996.9278da13.js"},{"revision":"73071ff24bc52353dfd286391fd01727","url":"assets/js/e9f408b4.70a0faef.js"},{"revision":"84e1308795931682d61301b02c5fdecf","url":"assets/js/main.06d2bb35.js"},{"revision":"5c8a9476c209e2c1574c8087d8a12368","url":"assets/js/runtime~main.11ce27b7.js"},{"revision":"a230d5a920de702f83514f013ac309a5","url":"docs/advanced/access-transformer/index.html"},{"revision":"324ce295dc041e8148552d4658384693","url":"docs/advanced/dist-executor/index.html"},{"revision":"6a0a814a6c1fd7cde2833706f0b31254","url":"docs/bases/base_du_mod/index.html"},{"revision":"7e7946ad476db08bf18d82bc9df164d6","url":"docs/bases/exporter-le-mod/index.html"},{"revision":"a5626e68e0b226b983a4692156020fb4","url":"docs/bases/installation/index.html"},{"revision":"26db80ebdaac18491112584f3d95e499","url":"docs/bases/mods_toml/index.html"},{"revision":"c4c57037de2d4eb3d8ecffb3cfa94e68","url":"docs/blocs/bloc-basic/index.html"},{"revision":"b8b5b0332a11404e7251beb61e60b674","url":"docs/blocs/properties/index.html"},{"revision":"f3225ef7326ca096542fd9fc7b071eaa","url":"docs/data/data_generator/index.html"},{"revision":"cf76008c6795671c401990ed04de8f52","url":"docs/data/recipe_data_generator/index.html"},{"revision":"eff96992be22cc851000951963e32529","url":"docs/data/trad_data_generator/index.html"},{"revision":"d6477c746378c1cb3de18a1a10a334b2","url":"docs/intro/index.html"},{"revision":"d362a4f6b333174cc66dc1c4ff2fedde","url":"docs/items/item-basic/index.html"},{"revision":"14f80bd377978aabc51562ac8165412d","url":"docs/items/properties/index.html"},{"revision":"cf24ac14849518a847f884f3449e0008","url":"docs/register/deferred_register/index.html"},{"revision":"e5ae9162cc25bcd2ca34164f5d13b4b0","url":"docs/tags/avance/index.html"},{"revision":"8ec12967f90f7390002a12256853f27d","url":"docs/tags/bases/index.html"},{"revision":"c931ab1b20b19d7425c00bbe37b2d28a","url":"docs/tags/blocs/index.html"},{"revision":"1cfabbd6a79c2d48a0e807add35077ce","url":"docs/tags/data-generators/index.html"},{"revision":"d93a8fd76b55ff89fe7666222ea486be","url":"docs/tags/data-generatos/index.html"},{"revision":"fa054e780dc73ad87b4dda3b0070a352","url":"docs/tags/enregistrement/index.html"},{"revision":"155cc8b3758fb27a5a4794b2d95c011e","url":"docs/tags/index.html"},{"revision":"efaa16964b5a7e04dce17666bfa69a24","url":"docs/tags/introduction/index.html"},{"revision":"eefee0b2c165c7ed5e2ce4e93429ca04","url":"docs/tags/items/index.html"},{"revision":"dedec259e1021e20645920f3e55d6f6e","url":"docs/tags/proprietes/index.html"},{"revision":"08680b3aeb332106e6453a94304f1014","url":"index.html"},{"revision":"ed551f1a0440858f073b67854edd7464","url":"manifest.json"},{"revision":"07c8611235d6c24fe60adf59ab3cf037","url":"markdown-page/index.html"},{"revision":"e1b98c8da60003919116facd7b0e2412","url":"news/archive/index.html"},{"revision":"89b45526802f4008e4576f90cfb8fa4d","url":"news/forge-116-362/index.html"},{"revision":"a30c9ea0894c133d091120c08002d32e","url":"news/forge-117-370/index.html"},{"revision":"90c9e0dc40afe318ecd15f090bcbd1b5","url":"news/index.html"},{"revision":"77806a0a9c4d734d3c309070fa8cee46","url":"news/tags/1-16-5/index.html"},{"revision":"e15ff38919f4b4212887dcd6731946ba","url":"news/tags/1-17-1/index.html"},{"revision":"497a1db0f54c422ed6ef87553f835237","url":"news/tags/forge/index.html"},{"revision":"26c0a1ff730864bf032de85792ad43cc","url":"news/tags/index.html"},{"revision":"188328665de562b642c14fdaad988c3b","url":"news/tags/update/index.html"},{"revision":"842ea3a3a6ee2f3e2cc7f0ddbff3627e","url":"assets/images/le_moddeur_ultime-2e81b939fe9ef4f1fe6e4a27f1938717.jpg"},{"revision":"88e78a62a091bba22ba8d8f4563d5070","url":"img/docs/exemple_craft_shaped.png"},{"revision":"59997f5229d5d5b38bbaac98d596ea41","url":"img/favicon.ico"},{"revision":"8d636572dafed78ac1aeb163ee116aa4","url":"img/icons/icon-128x128.png"},{"revision":"caafa06a8b3770cbfa8a14977612e6c1","url":"img/icons/icon-256x256.png"},{"revision":"26c9e9a5b20f4add80ca1fae7c08566e","url":"img/icons/icon-512x512.png"},{"revision":"e96a9a5d0ba709b54de2e9b25a65ed32","url":"img/icons/icon-64x64.png"},{"revision":"842ea3a3a6ee2f3e2cc7f0ddbff3627e","url":"img/le_moddeur_ultime.jpg"},{"revision":"2807337cf671833e2751019cfa6dd6dd","url":"img/logo.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()})()})();