const CACHE_NAME = 'monitoramento-cache-v1';
const urlsToCache = [
  '/index_pwa_final.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/WebAPP_Logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});