function show(){
  alert('hi4');
  return registerServiceWorker()
    .then(function(registration) {
    const title = 'Web Push Book';
    const options = {
      body: 'This would be the body text of the notification.\n' +
        'It can hold two lines of text.',
      icon: '/images/demos/icon-512x512.png',
      badge: '/images/demos/badge-128x128.png',
      image: '/images/demos/unsplash-farzad-nazifi-1600x1100.jpg',
      tag: 'example-notification',
      actions: [
        {
          action: 'download-book-action',
          title: 'Download Book',
          icon: '/images/demos/action-download-book-128x128.png'
        }
      ]
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
