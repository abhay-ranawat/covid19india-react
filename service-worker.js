if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"410079d037f1e9570b12e042b6bd4fc8","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"e1f0cf91c3c19dc35580d13ad3e01aa7","url":"fonts/Archia/archia-light-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"02155d96e4a3f18305ab944925389c77","url":"fonts/Archia/archia-regular-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"e88f1cf30180bd74b3201844b0c03c69","url":"fonts/Archia/archia-thin-webfont.woff2"},{"revision":"410079d037f1e9570b12e042b6bd4fc8","url":"index.html"},{"revision":"9ebb36222fc639eec40baf763bf14b1c","url":"precache-manifest.9ebb36222fc639eec40baf763bf14b1c.js"},{"revision":"cb740fc90ec139afa150d1df7e351d57","url":"static/css/13.93b3b32d.chunk.css"},{"revision":"2f6270eda5270d0b74ae3088a7359a70","url":"static/css/main.962af12f.chunk.css"},{"revision":"7ae7976361bfef47f7cffb541320cdf7","url":"static/js/0.7b4649ec.chunk.js"},{"revision":"83c4f247a4ff70acbdac179ed6a1f638","url":"static/js/1.929ee2c6.chunk.js"},{"revision":"bb3c6bf63b3c62f23f2ca02623208f60","url":"static/js/11.7176556f.chunk.js"},{"revision":"3e9869ef32d5c9967b4e06b725593099","url":"static/js/12.b30b7602.chunk.js"},{"revision":"26d5422cbdbf2062dd5b9b773ac52a41","url":"static/js/13.cd8c5cb7.chunk.js"},{"revision":"f698607bf94b75946ffb6abfffd2e137","url":"static/js/14.c1a50076.chunk.js"},{"revision":"cdefa03943c4f15a72b6983272e4a9c1","url":"static/js/15.2763a637.chunk.js"},{"revision":"586bb415dc8a4fb548f15b55fb47ee59","url":"static/js/2.9fbb0266.chunk.js"},{"revision":"8f82761e77281a6c301d2f6418eeff63","url":"static/js/DeepDive.ce259c0c.chunk.js"},{"revision":"adfe4d35733df62bf336dac37b4145e4","url":"static/js/Essentials.860b4e15.chunk.js"},{"revision":"05a4f3a04523d4e20b087a95a6fcc1aa","url":"static/js/FAQ.3d5df845.chunk.js"},{"revision":"e94fd231fed32a9e279492123471243b","url":"static/js/Home.0bbe7a65.chunk.js"},{"revision":"04c0aa2264216e612da91070b419598b","url":"static/js/main.d7ae6555.chunk.js"},{"revision":"ba5f9bf0ad03fbc8f61992944214dd4a","url":"static/js/PatientDB.5a5f1f87.chunk.js"},{"revision":"7c75e76d4894d6263f2e5ea1efbb5cb8","url":"static/js/runtime-main.cba39591.js"},{"revision":"b5060988cecb1e5d5a42e5954edc3eba","url":"static/js/State.62808f4e.chunk.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
