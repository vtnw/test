function show() {
    return navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      registration.showNotification('Hello 2', { body: 'Nice'});
    })
    .catch(function(err) {
      console.error('Unable to register service worker.', err);
    });
}
