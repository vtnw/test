if ('serviceWorker' in navigator) {
    navigator.serviceWorker
            .register('./sw.js')
            .then(function() 
            { console.log('Service Worker Registered'); 
            });
}

function add() {
    var data = '';
    if (navigator.onLine) {
        document.getElementById('dvContent').innerHTML = 'Successfully Added';
    }
    else {
        document.getElementById('dvContent').innerHTML = 'Unable to connect..';
    }
};
