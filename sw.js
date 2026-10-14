// Caches the app shell so Ozzy OS opens offline once installed.
const CACHE = "ozzy-os-v4";
const SHELL = ["./", "./index.html", "./src/parts/parts.json", "./src/parts/01.html", "./src/parts/02.html", "./src/parts/03.html", "./src/parts/04.html", "./src/parts/05.html", "./src/parts/06.html", "./manifest.webmanifest", "./icons/icon.svg"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {}); return r; }).catch(() => caches.match(e.request)));
});
