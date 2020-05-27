if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"b04424750b70d01ad61f18b30423a8f2","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"e1f0cf91c3c19dc35580d13ad3e01aa7","url":"fonts/Archia/archia-light-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"02155d96e4a3f18305ab944925389c77","url":"fonts/Archia/archia-regular-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"e88f1cf30180bd74b3201844b0c03c69","url":"fonts/Archia/archia-thin-webfont.woff2"},{"revision":"b04424750b70d01ad61f18b30423a8f2","url":"index.html"},{"revision":"8daa020bba91efb9257e27f3a6a7f3c6","url":"precache-manifest.8daa020bba91efb9257e27f3a6a7f3c6.js"},{"revision":"cb740fc90ec139afa150d1df7e351d57","url":"static/css/13.93b3b32d.chunk.css"},{"revision":"2f6270eda5270d0b74ae3088a7359a70","url":"static/css/main.962af12f.chunk.css"},{"revision":"63d6fb66f32fd27a76cbdda4bea175a9","url":"static/js/0.926b5cb6.chunk.js"},{"revision":"b51130f95fefb0af75841e150fbfc74c","url":"static/js/1.595cf5d2.chunk.js"},{"revision":"42bfce7d60ccd6fc2999c28a3933d32b","url":"static/js/11.829fb62b.chunk.js"},{"revision":"b963ae30144380dd6ad8f1fee21ea47b","url":"static/js/12.b388cc7e.chunk.js"},{"revision":"3c2571da007c434d591bc69443d22d64","url":"static/js/13.6b9612ef.chunk.js"},{"revision":"4aac328085e27b2a5e91100e71a16d82","url":"static/js/14.c4bde093.chunk.js"},{"revision":"651907d7635b2564e57f68bfcd3a3ca9","url":"static/js/15.ba845c4d.chunk.js"},{"revision":"7d2fe1c8b3be9e2275f630aecb3bda1c","url":"static/js/2.e9509a5c.chunk.js"},{"revision":"97177282ab1181e60fda3fc14fc5b45e","url":"static/js/DeepDive.da416752.chunk.js"},{"revision":"ea7e7a26fcc62639a74a7540869c916d","url":"static/js/Essentials.cf5ff5fe.chunk.js"},{"revision":"77b87f9785cbbe802734c8d9bde5d736","url":"static/js/FAQ.c5a1c1d5.chunk.js"},{"revision":"913ec8731d4ed6c70f84a77517d0c363","url":"static/js/Home.fea4b010.chunk.js"},{"revision":"ab585d28e625fe71a5f438d22cecee25","url":"static/js/main.fc4a2663.chunk.js"},{"revision":"c1a75cd9d60523575b98fabc2c6fd6bf","url":"static/js/PatientDB.3c50a8e6.chunk.js"},{"revision":"ec8eb8e43bba1ddac48a93fc72f7033d","url":"static/js/runtime-main.970cab3b.js"},{"revision":"70a005bf744f3178c34db2f0fca62605","url":"static/js/State.991c53bf.chunk.js"}]);

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
