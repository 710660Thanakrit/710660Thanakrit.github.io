'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d134ad009086c3c6462cee827ca6813f",
"assets/assets/images/background/background3.jpg": "07bfde58a25086f1b76398f79f2f714e",
"assets/assets/images/background/backgroundpc.jpg": "0a61332a00f55059f47230ea70472b62",
"assets/assets/images/background/backgroundprofile.jpg": "d8676245ff544b8d58b4f47fae9a5bc0",
"assets/assets/images/background/backgroundpsn.png": "0a61332a00f55059f47230ea70472b62",
"assets/assets/images/background/backgroundxbox.png": "0a61332a00f55059f47230ea70472b62",
"assets/assets/images/background/kawjao.jpg": "58904b68a96dda4e41ba61221a0c51f6",
"assets/assets/images/pc/ae.png": "3569ff00a7d0e5be4ee873ceee5c51fb",
"assets/assets/images/pc/Civilization_VI.png": "88e2ee819dfafb64744d9eafa0bfe050",
"assets/assets/images/pc/cyberpunk_2077.png": "1f017675eb6f55dd44412bee92fe0f7e",
"assets/assets/images/pc/dead_by_daylight_pc.png": "86b46cd9f2b4b9fa3135b2d4481e86d3",
"assets/assets/images/pc/death-stranding.png": "490addd6dbb92909d80631cdc483aa20",
"assets/assets/images/pc/ds3-deluxe.png": "97dfa0b16aa22ee7ce151c2d54041af9",
"assets/assets/images/pc/hunt__showdown.png": "4553842a366c8801b4bc83140e5bf280",
"assets/assets/images/pc/monster-hunter-world.png": "ffa47597fbcbb3a411383bda54ee9617",
"assets/assets/images/pc/MONSTER_HUNTER_RISE_DELUXE_EDITION.png": "1eeff6d65b944cc12acace6dbf6985bf",
"assets/assets/images/pc/RED_DEAD%2520_REDEMPTION%2520_2.png": "744ab4c141f649008193243cd7d69316",
"assets/assets/images/pc/resident_evil_village.png": "c7f67dd4671cbcdfb6f4cdaf427877f7",
"assets/assets/images/pc/Steam.png": "73920f786db286e5bf9cf2850a06fa7b",
"assets/assets/images/pc/the_elder_scrolls_v_skyrim.png": "0264db60f4f97823c96fb7330a6aa3a2",
"assets/assets/images/PSN/14-days.png": "ee2208cc15e66943ce1be7c4ac8a7c6a",
"assets/assets/images/PSN/5de6658946177c5f23698932_32_.png": "f7be41cefa31aa60ee9afb3b383e2df9",
"assets/assets/images/PSN/call-of.png": "896ff21a18cb458b9b3d9848fde57063",
"assets/assets/images/PSN/fifa-21-fut-dlc.png": "f8bab1c6f0aa56659e334dcb53c89540",
"assets/assets/images/PSN/fifa-21.png": "91a89776886d843ebb2410e11502ee18",
"assets/assets/images/PSN/images.png": "4716055dfef2efaa48cdd522e480283c",
"assets/assets/images/PSN/playstation-plus-1-month.png": "9c9ea715e58fee51532bbd196ce54c1e",
"assets/assets/images/PSN/playstation-plus-12-month.png": "c71bb4505c5e1ba0b53e5fdca2edf48e",
"assets/assets/images/PSN/playstation-plus-3-month.png": "23c55f09bfeae256cad410918c6a6e16",
"assets/assets/images/PSN/star-wars.png": "e317519ab3165f3ac847340a3afa897c",
"assets/assets/images/xbox/5de6658946177c5f23698932_3__4.png": "9f389c2dca38e6b51e09fae911afb316",
"assets/assets/images/xbox/assassin_s_creed_origins.png": "19c653beeae28f7e68681f12f4e8b25b",
"assets/assets/images/xbox/elden_ring.png": "234247ba16d1d3f0495a649666cc34fb",
"assets/assets/images/xbox/far-cry-new-dawn.png": "f7ff31f441ca5c2c4306fd8e061cffaf",
"assets/assets/images/xbox/far_cry_5.png": "5c2632e27d8c379ba0fa2cc86ea245db",
"assets/assets/images/xbox/far_cry_primal.png": "0830e23645b674ec70aa7e3329be4fcd",
"assets/assets/images/xbox/frh4.png": "30aa4b0333c9ae74f77cd4f7f08f5104",
"assets/assets/images/xbox/iconshoes1.png": "fb9692c822ba1e512e2c775a88f9dd53",
"assets/assets/images/xbox/star_wars_battlefront_2.png": "3c396915ec862f69602ec03d57fafe79",
"assets/assets/images/xbox/untitled-1.png": "22006e5f14bb5e45abcb35c0014c25dd",
"assets/assets/images/xbox/watch-dogs-legion.png": "efa8fa0e5fe3fd6ec11d1ebf16d1053e",
"assets/assets/images/xbox/xbox.png": "3aca1abce10745cae6e3ed10cb49121f",
"assets/assets/images/xbox/xbox_one_xbox.png": "e37cd09fa1d8c5a6fe63383e73b361e1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "2ceedb153a9ddf191c47e7cb8b46fda6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "08d4aa4b25ca5c39f592e2fec6dd4294",
"/": "08d4aa4b25ca5c39f592e2fec6dd4294",
"main.dart.js": "05b180456bc3ba2c1c00fe6b98ad2439",
"manifest.json": "c714891b110a4808978bfd02a04424ee",
"version.json": "52f4066d94d2db8e10d365fdff691d75"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
