importScripts('/cache-polyfill.js');


self.addEventListener('install', function (e) {
  self.addEventListener('fetch', function (event) {
    console.log(event.request.url);
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      };
    e.waitUntil(
      caches.open('EthanP1').then(function (cache) {
        return cache.addAll([
          '/',
          '/app/index.html',
          '/index.html?homescreen=1',
          '/?homescreen=1',
          '/css/main.css',
          '/scripts/main.min.js',
        ]);
    })
  );
});

  self.addEventListener('fetch', function (event) {

    console.log(event.request.url);

  });
  ;
