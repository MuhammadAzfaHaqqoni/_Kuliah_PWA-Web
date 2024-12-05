if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
        .then(registration => {
            console.log('Service Worker registered:', registration);
            return Notification.requestPermission();
        })
        .then(permission => {
            if (permission === 'granted') {
                navigator.serviceWorker.ready.then(registration => {
                    registration.showNotification('Selamat datang di PWA!', {
                        body: 'Terima kasih telah mengunjungi aplikasi kami.',
                        icon: '/images/icons/icon-192x192.png'
                    });
                });
            }
        })
        .catch(err => {
            console.error('Service Worker registration failed:', err);
        });
    });
}