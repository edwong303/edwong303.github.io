'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "abbc66c1d1de9a57b9d7b4f770c54071",
"/": "abbc66c1d1de9a57b9d7b4f770c54071",
"main.dart.js": "0141a439603210be9405742b62feb868",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "a163a9457fdeba8ac29a27cbf5e35fd9",
"icons/Icon-192.png": "629d84e69745ac66a491b74d1cfb9c41",
"icons/Icon-maskable-192.png": "629d84e69745ac66a491b74d1cfb9c41",
"icons/Icon-maskable-512.png": "41a568e52c19f9b29a87cbcedfa9ae6b",
"icons/Icon-512.png": "41a568e52c19f9b29a87cbcedfa9ae6b",
"manifest.json": "0df6c98d30658aba836ceaf8baf218f2",
"assets/AssetManifest.json": "730e12fbd553f47577fd6eeaaaad324c",
"assets/NOTICES": "c27f51a48428a271ab21ad7048de5f21",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/favicon.ico": "c4b1f1e9b0fa1a38f358b167bee127b9",
"assets/assets/images/chromeOS.jpg": "337a5655b34941b76881867358dc6057",
"assets/assets/images/projects/trip_planning_application_4.png": "580a6893ac6af087cd9a885a92ed6ad7",
"assets/assets/images/projects/trip_planning_application_3.png": "aa6680c7dd3f398f5f7f2ad17d1f78b5",
"assets/assets/images/projects/trip_planning_application_2.png": "7b1589661b149ca607d4357ce8f90543",
"assets/assets/images/projects/trip_planning_application_1.png": "d8d2b5ca00b64513d0597c3fe3dc7ec7",
"assets/assets/images/projects/puzzle_helper_2.png": "cb15b0830a9b6d53431d486bbb2ab4ad",
"assets/assets/images/projects/fitness_1.png": "06b6626a971e06633978cfcdc5b0213a",
"assets/assets/images/projects/puzzle_helper_1.png": "031e0c34003a9033e5baecd95b7401db",
"assets/assets/images/projects/forum_1.png": "cae6bd877616c347c98112d5f2a6d8f3",
"assets/assets/images/projects/vehicle_5.png": "9caa854f72b80fc543b8a80be79ad585",
"assets/assets/images/projects/ios_1.png": "828644d1291aa0e30c1f62b0aae48d44",
"assets/assets/images/projects/vehicle_4.png": "cd888b407a8f08de0f30acd6cb2a032e",
"assets/assets/images/projects/vehicle_3.png": "ae905116632bea69b6fca3338feea5b0",
"assets/assets/images/projects/vehicle_2.png": "32225a14ca82e36414f145279c4ad1e4",
"assets/assets/images/projects/vehicle_1.png": "74fb14b0ab2a7d6068cbe772ef634a51",
"assets/assets/images/projects/sudoku_helper_1.png": "bf91c8b4634d59b5d1e3a9180ef11580",
"assets/assets/images/projects/python_android_1.png": "1065e312658e82f17f82e68add3e6aa4",
"assets/assets/images/linux.jpg": "98da9bcb89dcb6b455c5e6cf5decc2a1",
"assets/assets/images/resume.png": "6d3418fe72fed6f3b9e1bd0a2f015161",
"assets/assets/images/window11.jpg": "50a94eb216b729dfe33704f2d466ef71",
"assets/assets/images/project.png": "ecdd0b721eb883a4a9057773417ef69b",
"assets/assets/images/macOS.jpeg": "885ee578f5b519b36b5c5e9b8bc2b2d6",
"assets/assets/images/company.png": "1d19873882c3c947c5c0d3ad4e5d199a",
"assets/assets/images/profile.png": "055a91979264664a1ee12b9453610d82",
"assets/assets/images/skills/jira.png": "6b6deabad5676259a3f78ce5f86d13e1",
"assets/assets/images/skills/lua.png": "e40b6170e36e82794b13127c974e386e",
"assets/assets/images/skills/oracledb.png": "50ca2cf708d6a2e05e786e0b94e75ac9",
"assets/assets/images/skills/code.png": "1d03b329bd9f1f3f6242bbb2c3b975db",
"assets/assets/images/skills/git.png": "150140b2bd5a9ee94633a87850cad7db",
"assets/assets/images/skills/docker.png": "938e34f7f86b4e9a25d607a082925ea8",
"assets/assets/images/skills/python.png": "d3c746b2baa87534de255e2da8d49620",
"assets/assets/images/skills/flutter.png": "280061a25e491cd2ab4a6ffd889bc66c",
"assets/assets/images/skills/angular.png": "8abae078f0cb1483a5419055ec4a9ad8",
"assets/assets/images/skills/confluence.png": "ab7263f08cf25a0f51aabb77b23602b9",
"assets/assets/images/skills/extjs.png": "ae2709d206699d1c4db1f540a9d732f6",
"assets/assets/images/skills/jquery.png": "fb43f7be966613617f8f533bf06f00ca",
"assets/assets/images/skills/firebase.png": "3602dbeac7b595e78e75ceda8f0e9002",
"assets/assets/images/skills/aws.png": "ce71ea88ce2901c956f82e07638142ea",
"assets/assets/images/skills/javascript.png": "63cf9c6f8153aef1e884b7ae2815e06d",
"assets/assets/images/skills/figma.png": "ad64f0f4d2b1ef94ca2e7e9540cfb1fb",
"assets/assets/images/skills/bootstrap.png": "5468e5a656b7ecebab30cd7095dc8e4c",
"assets/assets/images/skills/springboot.png": "50e687d24370ae983f971709ed3d74fe",
"assets/assets/images/skills/mysql.png": "b625b91a75fe5d57653f71046df35060",
"assets/assets/images/skills/swift.png": "4b43fdc59e1e22f6890769ca6c2383ec",
"assets/assets/images/skills/liferay.png": "b3e34d3d08be8728bba76e368737f07b",
"assets/assets/images/skills/react.png": "22808bae77c66bd1b33e298ea2f4320e",
"assets/assets/images/skills/methodology.png": "dcd5cdb581660d50185e920f3aab70e9",
"assets/assets/images/skills/expressjs.png": "e812bec137af36c10dfe4b944efa000b",
"assets/assets/images/skills/mssql.png": "c746da501cd070fb6e2c88ce82136115",
"assets/assets/images/skills/rxjs.png": "29708abea20c942666f33387b874d302",
"assets/assets/images/skills/kafka.png": "a3874100d59c5ee2bbcb37ff65715feb",
"assets/assets/images/skills/swiftui.png": "670a046e35c89e3f9cda8ae00860003e",
"assets/assets/images/skills/photoshop.png": "de025f6a485a3eb0e52f8f700d2de919",
"assets/assets/images/skills/redux.png": "fa8371b5e326ed4b34d46353d2f6d0ca",
"assets/assets/images/skills/typescript.png": "bff6b2788849ed735b91799212e1d4c4",
"assets/assets/images/skills/css.png": "621f21fa891b48023ff7c4dff12c7aa0",
"assets/assets/images/skills/dart.png": "9facb0eecb231b0ffc7a4443ca397b4c",
"assets/assets/images/skills/mongodb.png": "20d8652c9fd1853ac11a27da7b915ac1",
"assets/assets/images/skills/java.webp": "95003276b0742a18ce49718b582aa296",
"assets/assets/images/skills/html5.png": "837b7493a63d0b927e50ea17f95dfeb5",
"assets/assets/images/skills/kotlin.png": "44fc3a0d1004a766a28c07ecc0a59540",
"assets/assets/images/skills/nodejs.png": "99d580e2755af3d2ee4c763d408f6359",
"assets/assets/images/contacts.png": "519a3a6020629845e12d54405bfdcd3e",
"assets/assets/images/companies/ais.png": "a4693fbd4be59393a0be5361f27f97e6",
"assets/assets/images/companies/hkedcity.png": "e3f0d4cc7c01b1e24f20f53bf388150c",
"assets/assets/images/companies/pv.png": "18fcf3e6ea70425043854cab0b391f10",
"assets/assets/images/companies/semper8.png": "e2cdb535b57e3e97bbf0271f9db8d4f1",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
