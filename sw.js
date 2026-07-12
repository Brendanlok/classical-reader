/* Service worker for PWA installability + minimal offline fallback.
   Network-first for everything: this app deploys frequently and a previous
   bug (stale localStorage/CDN caching) already caused hours of "why won't
   this update" debugging — a cache-first SW would reintroduce that class of
   bug. We only fall back to cache when the network genuinely fails (offline). */

const CACHE_NAME = 'four-classics-shell-v1';
const SHELL_ASSETS = ['./', './index.html', './icon.svg', './manifest.json'];
const CACHEABLE_SUFFIXES = ['index.html', 'icon.svg', 'manifest.json'];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_ASSETS).catch(() => {}))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  event.respondWith(
    fetch(req)
      .then((resp) => {
        // Refresh the offline-fallback cache in the background for shell assets only
        const isShellAsset = req.mode === 'navigate' || CACHEABLE_SUFFIXES.some((s) => req.url.endsWith(s));
        if (isShellAsset) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return resp;
      })
      .catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
  );
});
