function show(){
  alert('hi5');
  return registerServiceWorker()
    .then(function(registration) {
    const title = 'Pass 1';
    const options = {
      body: 'This would be the body text of the notification.\n' +
        'It can hold two lines of text.',
    };
    registration.showNotification(title, options);
  });
}

function registerServiceWorker() {
    return navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      console.log('Service worker successfully registered.');
      return registration;
    })
    .catch(function(err) {
      console.error('Unable to register service worker.', err);
    });
  }
