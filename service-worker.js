const CACHE_NAME = 'monitoramento-cache-v1';
const urlsToCache = [
  '/webapp-localizacao/index.html',
  '/webapp-localizacao/manifest.json',
  '/webapp-localizacao/icon-192.png',
  '/webapp-localizacao/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});