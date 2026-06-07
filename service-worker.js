const CACHE_NAME = "meter-app-v2";

const urlsToCache = [
  "./",
  "./index.html",
  "./rate1115.html",
  "./rate1125.html",
  "./rate2125.html",
  "./rate8115.html",
  "./manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});