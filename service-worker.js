"use strict";var precacheConfig=[["/baguide/index.html","8d587be589064c28fc8188baeef3ad34"],["/baguide/static/css/main.cb9fbc60.css","69d7d5c19cd11910d9475a859f7802dc"],["/baguide/static/js/main.86a0759d.js","0dd4cf360f034fa2bf510e2aac4a9fc6"],["/baguide/static/media/allstats.1e2fe27f.JPEG","1e2fe27f465070ef308de7c71eb407ec"],["/baguide/static/media/amnesiadebuff.410b700d.JPG","410b700d50219d8cf22fd2e21994c161"],["/baguide/static/media/attbuff.995b9473.JPG","995b9473b23f1a612e743327b5398a9f"],["/baguide/static/media/attdebuff.96b81ae7.JPG","96b81ae7333123edbe02a6e84f44e354"],["/baguide/static/media/blinddebuff.1e15a38b.JPG","1e15a38bab19deb774c3632bad2d9b20"],["/baguide/static/media/bluepattern.2fedbced.JPG","2fedbced6c08fbacd834c089381b4a6b"],["/baguide/static/media/brave.24bc9f81.JPG","24bc9f81ac7aca08344d9db24af666e5"],["/baguide/static/media/buffexample.964132d1.JPG","964132d1ad39f801e2154416bfc1642b"],["/baguide/static/media/critbuff.3a1d5a01.JPG","3a1d5a01c1c19e85bb10d27ecd1a2d01"],["/baguide/static/media/critresisbuff.d38b017e.JPG","d38b017eb73686ecdc4305cba65a6621"],["/baguide/static/media/default.dbcd30e1.JPG","dbcd30e13a3b62c42b6d4083c0fe9f86"],["/baguide/static/media/defbuff.7853c801.JPG","7853c801e5f2a1dad3fb371c64785e50"],["/baguide/static/media/defdebuff.c57d668a.JPG","c57d668a14c991b880ad296e17f689d3"],["/baguide/static/media/enduringhealbuff.fa3ff56c.JPG","fa3ff56c18c7de0db5635917bd1075aa"],["/baguide/static/media/freezedebuff.8a1629b5.JPG","8a1629b5a4146a904198acd9c39aeec4"],["/baguide/static/media/healforbdebuff.d163fbb2.JPG","d163fbb28cb98c5bf430bb69232f7ac9"],["/baguide/static/media/immunitybuff.d1cda9a1.JPG","d1cda9a1242285784f0b17b2709bc133"],["/baguide/static/media/inertiadebuff.2fde43a3.JPG","2fde43a3da18dc58fa5090409ab1a771"],["/baguide/static/media/injurydebuff.fdffb329.JPG","fdffb32911812dc9792352d1f0c3d405"],["/baguide/static/media/orangepattern.3f62330a.JPG","3f62330ae7656b918bcd96a9fc9ee706"],["/baguide/static/media/poisondebuff.89a29b44.JPG","89a29b44beb615aa8a2d41fc989982dc"],["/baguide/static/media/purplepattern.6292594d.JPG","6292594d6055310621939fdb9b349683"],["/baguide/static/media/shieldbuff.19e3c1e9.JPG","19e3c1e9cf1044a7c2f9b094e2ad353e"],["/baguide/static/media/silencedebuff.1053dd98.JPG","1053dd98da7c509dac049d242182e83e"],["/baguide/static/media/sleepdebuff.179d2c66.JPG","179d2c666568158af043655e12f3c2d8"],["/baguide/static/media/slowdebuff.18cadfce.JPG","18cadfcee2fceb619e52e9761ad323eb"],["/baguide/static/media/speedbuff.aa53161e.JPG","aa53161e1f2845b2feff010cb13c8586"],["/baguide/static/media/stackdebuff.532d5301.JPG","532d5301231450037bc45fd458b3391d"],["/baguide/static/media/stats.bdff06db.JPG","bdff06dbea90b7a18c14f95f3aaca73e"],["/baguide/static/media/stundebuff.d6174ce5.JPG","d6174ce562933b7e69cff1fd034a9757"],["/baguide/static/media/tauntdebuff.4dab269f.JPG","4dab269faf968c515630690314685a21"],["/baguide/static/media/unyieldingbuff.2d7c16da.JPG","2d7c16da21ddd9cf6bde0ba54ac81235"],["/baguide/static/media/whitepattern.6eaa2114.JPG","6eaa21140a4a3361b3c9bae6086be739"],["/baguide/static/media/wild.4ebda48c.JPG","4ebda48c09395f92ededc9d34e4626a3"],["/baguide/static/media/wise.8056b54c.JPG","8056b54c92590824c1a3444df671effd"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,d){var c=new URL(e);return d&&c.pathname.match(d)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],d=new URL(a,self.location),c=createCacheKey(d,hashParamName,t,/\.\w{8}\./);return[d.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(d){return setOfCachedUrls(d).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return d.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),d="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,d),e=urlsToCacheKeys.has(t));var c="/baguide/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});