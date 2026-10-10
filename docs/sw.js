const CACHE = 'raadspel-20261010193534';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png', 'hands/hand-1.jpg', 'hands/hand-2.jpg', 'hands/hand-3.jpg', 'hands/woman-1.jpg', 'hands/woman-2.jpg', 'hands/woman-3.jpg', 'pieces/kpop-bB.png', 'pieces/kpop-bK.png', 'pieces/kpop-bN.png', 'pieces/kpop-bP.png', 'pieces/kpop-bQ.png', 'pieces/kpop-bR.png', 'pieces/kpop-wB.png', 'pieces/kpop-wK.png', 'pieces/kpop-wN.png', 'pieces/kpop-wP.png', 'pieces/kpop-wQ.png', 'pieces/kpop-wR.png'];
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
