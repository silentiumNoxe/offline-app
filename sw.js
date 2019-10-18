'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html"]);

toolbox.router.get('/offline-app/images/*', toolbox.cacheFirst);

toolbox.router.get('/offline-app/*', toolbox.networkFirst, {
    networkTimeoutSeconds: 5
});