importScripts('/cache-polyfill.js');


self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('Chaboi').then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/index.html?homescreen=1',
        '/?homescreen=1',
        '/css/style.css',
        'js/main.js',
      ]);
    })
  );
});
self.addEventListener('fetch', function (event) {

  console.log(event.request.url);

});
