const CACHE = 'raadspel-20261003112446';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// Online first, so updates arrive; the saved copy when there is no internet.
// 'no-cache' makes the iPad ask GitHub whether the game changed, instead of reusing a copy for 10 minutes.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const sameSite = new URL(e.request.url).origin === self.location.origin;
  e.respondWith((sameSite ? fetch(e.request.url, { cache: 'no-cache' }) : fetch(e.request)).then(r => {
    const copy = r.clone();
    caches.open(CACHE).then(c => c.put(e.request, copy));
    return r;
  }).catch(() => caches.match(e.request, { ignoreSearch: true })));
});
