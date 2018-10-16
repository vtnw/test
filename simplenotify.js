function show() {
    return navigator.serviceWorker.register('sw2.js')
    .then(function(registration) {
      registration.showNotification('Hello 3', { body: 'Nice'});
    })
    .catch(function(err) {
      console.error('Unable to register service worker.', err);
    });
}
