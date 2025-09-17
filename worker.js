addEventListener("fetch", event => {
  const url = new URL(event.request.url);

  // Forward request to your origin server
  const originURL = `https://relay.mangosigma67.qzz.io${url.pathname}`;
  
  event.respondWith(fetch(originURL, event.request));
});
