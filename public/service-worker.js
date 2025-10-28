self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("bhanu-portfolio-v1").then(cache => {
      return cache.addAll([
        "/bhanu-portfolio/",
        "/bhanu-portfolio/index.html",
        "/bhanu-portfolio/icons/icon-192.png",
        "/bhanu-portfolio/icons/icon-512.png",
        "/bhanu-portfolio/manifest.json"
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== "bhanu-portfolio-v1") {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
