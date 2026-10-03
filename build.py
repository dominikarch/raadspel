# Builds the stand-alone iPad app page (docs/) from the game (index.html).
# index.html stays the one source; run this after every change: python3 build.py
from pathlib import Path
import time
here = Path(__file__).parent
game = (here / 'index.html').read_text()
head = '''<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Raadspel">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="theme-color" content="#fff7e8">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<link rel="icon" href="icon-192.png">
<link rel="manifest" href="manifest.webmanifest">
<style>[hidden]{display:none!important} body{padding-top:max(16px, env(safe-area-inset-top))!important}</style>
'''
tail = '''
<script>
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
</script>
</body>
</html>
'''
# The game's <style> block ends the head; everything after it is the body
cut = game.index('</style>') + len('</style>')
page = head + game[:cut] + '\n</head>\n<body>\n' + game[cut:] + tail
(here / 'docs' / 'index.html').write_text(page)

(here / 'docs' / 'manifest.webmanifest').write_text('''{
  "name": "Raad het getal",
  "short_name": "Raadspel",
  "start_url": "./",
  "display": "standalone",
  "background_color": "#fff7e8",
  "theme_color": "#fff7e8",
  "icons": [
    {"src": "icon-192.png", "sizes": "192x192", "type": "image/png"},
    {"src": "icon-512.png", "sizes": "512x512", "type": "image/png"}
  ]
}
''')

# Offline: keep a copy of the game on the iPad. A new version number makes the iPad fetch the update.
version = time.strftime('%Y%m%d%H%M%S')
(here / 'docs' / 'sw.js').write_text(f'''const CACHE = 'raadspel-{version}';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => {{
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
}});
self.addEventListener('activate', e => {{
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
}});
// Online first, so updates arrive; the saved copy when there is no internet.
// 'no-cache' makes the iPad ask GitHub whether the game changed, instead of reusing a copy for 10 minutes.
self.addEventListener('fetch', e => {{
  if (e.request.method !== 'GET') return;
  const sameSite = new URL(e.request.url).origin === self.location.origin;
  e.respondWith((sameSite ? fetch(e.request.url, {{ cache: 'no-cache' }}) : fetch(e.request)).then(r => {{
    const copy = r.clone();
    caches.open(CACHE).then(c => c.put(e.request, copy));
    return r;
  }}).catch(() => caches.match(e.request, {{ ignoreSearch: true }})));
}});
''')
print('built docs/')
