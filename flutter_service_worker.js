'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1724fb4edaef5b06b20f56bdb5b24705",
"assets/assets/img/box_icon.png": "5f121e6717488943b0b16bd5bda2ef2f",
"assets/assets/img/cart_icon.png": "7e2bb86760315f2e1597540b6117b4fa",
"assets/assets/img/estet_simbol.png": "a921f70a9eccd78ae236eaaa720010aa",
"assets/assets/img/logoSpymed-splash.png": "b3965fb89ed06c352d83797f705b0e60",
"assets/assets/img/logoSpymed.png": "a54b8451440e09924088f1b00c5cbc8d",
"assets/FontManifest.json": "66a307dc52ef46a1d8957afffdc35ae6",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/Nunito/Nunito-Black.ttf": "529509f5501c7f45315210d280a456d4",
"assets/fonts/Nunito/Nunito-BlackItalic.ttf": "8bf9ce6e0c5434ca0ac97f90196d0c66",
"assets/fonts/Nunito/Nunito-Bold.ttf": "c0844c990ecaaeb9f124758d38df4f3f",
"assets/fonts/Nunito/Nunito-BoldItalic.ttf": "b21199decd37bf9a096e0f495bb20ffd",
"assets/fonts/Nunito/Nunito-ExtraBold.ttf": "438598eadc302471a495b3133620f621",
"assets/fonts/Nunito/Nunito-ExtraBoldItalic.ttf": "5f67429d0ff76ec74d98b915439692ee",
"assets/fonts/Nunito/Nunito-ExtraLight.ttf": "4470502486a612e2bf6f38d5bff77ce8",
"assets/fonts/Nunito/Nunito-ExtraLightItalic.ttf": "ade1717e588935bdec3d38ca19bd1050",
"assets/fonts/Nunito/Nunito-Italic.ttf": "380d3172fab0055a8d74ab12636f5a9b",
"assets/fonts/Nunito/Nunito-Light.ttf": "08bc5f85e4505782d3fa279944f2feab",
"assets/fonts/Nunito/Nunito-LightItalic.ttf": "55032f4e811253da318f967e0db3d7e9",
"assets/fonts/Nunito/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/fonts/Nunito/Nunito-SemiBold.ttf": "876701bc4fbf6166f07f152691b15159",
"assets/fonts/Nunito/Nunito-SemiBoldItalic.ttf": "59cf0995782240777656a355cf08b234",
"assets/fonts/Poppins/Poppins-Black.ttf": "0573b9231a8316427ad6e751b52e87a4",
"assets/fonts/Poppins/Poppins-BlackItalic.ttf": "3fb21c8084013f3d0176bc98bcf76e60",
"assets/fonts/Poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/Poppins/Poppins-BoldItalic.ttf": "09775bde3e9448b38c063b746e21cb6b",
"assets/fonts/Poppins/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "29f7dd016eeed2bcd79ba482eb3f27ec",
"assets/fonts/Poppins/Poppins-ExtraLight.ttf": "86a2f13e91ac85080ebaeaab9463b9f1",
"assets/fonts/Poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/fonts/Poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/Poppins/Poppins-LightItalic.ttf": "1eaf3af47612e6163a2e27e847c6ac7d",
"assets/fonts/Poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/Poppins/Poppins-MediumItalic.ttf": "1749e4b603749026393f64506a3bcbbe",
"assets/fonts/Poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/Poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "378a091bc1b1e6e6d6327beb6bfb07b9",
"assets/fonts/Poppins/Poppins-Thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"assets/fonts/Poppins/Poppins-ThinItalic.ttf": "c93e22e98b7a8d58f83ce42b278815eb",
"assets/fonts/Roboto/Roboto-Black.ttf": "301fe70f8f0f41c236317504ec05f820",
"assets/fonts/Roboto/Roboto-BlackItalic.ttf": "c470ca2b5b4f4437a3fe71b113a289a2",
"assets/fonts/Roboto/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/fonts/Roboto/Roboto-BoldItalic.ttf": "0be9fa8f2863998d1e52c84165976880",
"assets/fonts/Roboto/Roboto-Italic.ttf": "465d1affcd03e9c6096f3313a47e0bf5",
"assets/fonts/Roboto/Roboto-Light.ttf": "6090d256d88dcd7f0244eaa4a3eafbba",
"assets/fonts/Roboto/Roboto-LightItalic.ttf": "2ffc058ddedacfeaa23542026c8108e2",
"assets/fonts/Roboto/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/fonts/Roboto/Roboto-MediumItalic.ttf": "cabdb4a12e5de710afde298809306937",
"assets/fonts/Roboto/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/fonts/Roboto/Roboto-Thin.ttf": "4f0b85f5b601a405bdc7b23aad6d2a47",
"assets/fonts/Roboto/Roboto-ThinItalic.ttf": "7384da64612787e3662872e9d19cbc2d",
"assets/NOTICES": "18e4a226d5a5ba5394edeeeab81b52a9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "e68285c407636a2715392e3131371ee6",
"icons/android-icon-144x144.png": "3de7655045a087e4419502abc9dbad64",
"icons/android-icon-192x192.png": "b0fd23f4dc07159c8665bce41004d8de",
"icons/android-icon-36x36.png": "5109f9fa078cbf09ce92308a2a7c4575",
"icons/android-icon-48x48.png": "3c5ff670ce5345b0bad81edac7a3e4fb",
"icons/android-icon-72x72.png": "b7fbd2c01ed70b34d25075533a57858d",
"icons/android-icon-96x96.png": "9114e7196e70f4a02739d1ce86bb6b9a",
"icons/apple-icon-114x114.png": "b8b1c14b6d1c5d4be08cfd8b0d9381d8",
"icons/apple-icon-120x120.png": "3e4b2449da7e6b1b6bbc11f3968ce7e0",
"icons/apple-icon-144x144.png": "3de7655045a087e4419502abc9dbad64",
"icons/apple-icon-152x152.png": "de5dbfd9285ce9fdc3489f98513bb3cb",
"icons/apple-icon-180x180.png": "c5e657d7f8971409ef730218a3b76f12",
"icons/apple-icon-57x57.png": "79d368bc702fb3185a746a9833530cc9",
"icons/apple-icon-60x60.png": "5c3ce783d8c06f53c45d04b88f5aadc7",
"icons/apple-icon-72x72.png": "b7fbd2c01ed70b34d25075533a57858d",
"icons/apple-icon-76x76.png": "4fa39c1f9b24bb8ab5a31d8933463553",
"icons/apple-icon-precomposed.png": "cb666e1f42fb50b25805abb102d15164",
"icons/apple-icon.png": "cb666e1f42fb50b25805abb102d15164",
"icons/favicon-16x16.png": "04515f61e38944fa6e87f8f128da097a",
"icons/favicon-32x32.png": "7dd490f8d1f1e05cfc14a436eddab420",
"icons/favicon-96x96.png": "9114e7196e70f4a02739d1ce86bb6b9a",
"icons/ms-icon-144x144.png": "3de7655045a087e4419502abc9dbad64",
"icons/ms-icon-150x150.png": "75c84aa6dbd2a614f577d846a1832cc3",
"icons/ms-icon-310x310.png": "90de650b0aa2ebb12bd7f1c0e4aad487",
"icons/ms-icon-70x70.png": "6c23a6de3fff8617716362032082932b",
"index.html": "421510e078f2194a6cd633ae8c89cb0d",
"/": "421510e078f2194a6cd633ae8c89cb0d",
"main.dart.js": "883568c6e303152ed5794dc1a7a958d5",
"manifest.json": "afcbee1ab62c58b26828295bfad47fba",
"splash/img/dark-1x.png": "cb12e9ede9c3dc9ea60fc84769bdef47",
"splash/img/dark-2x.png": "6e0b153bde8faf1c75d2447df39f1253",
"splash/img/dark-3x.png": "eaef6b0bbdec449be14c0fa9861864e3",
"splash/img/dark-4x.png": "dc14906d2994c8662d8d3986f7966fec",
"splash/img/light-1x.png": "cb12e9ede9c3dc9ea60fc84769bdef47",
"splash/img/light-2x.png": "6e0b153bde8faf1c75d2447df39f1253",
"splash/img/light-3x.png": "eaef6b0bbdec449be14c0fa9861864e3",
"splash/img/light-4x.png": "dc14906d2994c8662d8d3986f7966fec",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "db6178791b6369b77311c0ae92809585",
"version.json": "1349245f2906b83c274fb817b749b61c"
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
