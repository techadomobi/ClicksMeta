const VERSION = "v1";
const CORE_CACHE = `core-${VERSION}`;
const RUNTIME_CACHE = `runtime-${VERSION}`;
const CORE_ASSETS = [
  "/",
  "/index.html",
  "/favicon.ico",
  "/clicksmeta-logo.png",
  "/sitemap.xml",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CORE_CACHE).then((cache) => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CORE_CACHE && key !== RUNTIME_CACHE)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => warmAssetCache())
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(navigationCacheFirst(request));
    return;
  }

  if (isStaticAsset(url.pathname)) {
    event.respondWith(cacheFirstWithRevalidate(request));
  }
});

function isStaticAsset(pathname) {
  return /\.(?:js|css|mjs|png|jpg|jpeg|webp|avif|svg|ico|woff2?)$/i.test(pathname) || pathname.startsWith("/assets/");
}

async function navigationCacheFirst(request) {
  const cache = await caches.open(CORE_CACHE);
  const cached = await cache.match(request);
  if (cached) {
    void refreshNavigationCache(request, cache);
    return cached;
  }

  const rootShell = await cache.match("/") || await cache.match("/index.html");
  if (rootShell) {
    void refreshNavigationCache(request, cache);
    return rootShell;
  }

  return refreshNavigationCache(request, cache);
}

async function refreshNavigationCache(request, cache) {
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone());
      if (request.mode === "navigate") {
        cache.put("/", response.clone());
        cache.put("/index.html", response.clone());
      }
    }
    return response;
  } catch {
    const cached = await cache.match(request);
    if (cached) return cached;
    return cache.match("/index.html");
  }
}

async function cacheFirstWithRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  if (cached) {
    void fetchAndCache(request, cache);
    return cached;
  }

  return fetchAndCache(request, cache);
}

async function fetchAndCache(request, cache) {
  const networkResponse = await fetch(request).catch(() => undefined);
  if (networkResponse && networkResponse.ok) {
    cache.put(request, networkResponse.clone());
    return networkResponse;
  }

  const cached = await cache.match(request);
  if (cached) return cached;
  throw new Error("Network and cache miss for static asset");
}

async function warmAssetCache() {
  const runtimeCache = await caches.open(RUNTIME_CACHE);
  const homeResponse = await fetch("/", { cache: "no-store" }).catch(() => undefined);
  if (!homeResponse || !homeResponse.ok) return;

  const html = await homeResponse.text();
  const assetPaths = extractAssetPaths(html);
  if (assetPaths.length === 0) return;

  await Promise.all(
    assetPaths.map(async (assetPath) => {
      const response = await fetch(assetPath).catch(() => undefined);
      if (response && response.ok) {
        await runtimeCache.put(assetPath, response.clone());
      }
    })
  );
}

function extractAssetPaths(html) {
  const matches = [
    ...html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi),
    ...html.matchAll(/<link[^>]+href=["']([^"']+)["']/gi),
  ];

  const assets = matches
    .map((match) => match[1])
    .filter((path) => path && (path.startsWith("/assets/") || path.endsWith(".css") || path.endsWith(".js")));

  return [...new Set(assets)];
}
