
// Core service worker

self.addEventListener('install', (e) => {

    console.log('Installing service worker...')
    e.waitUntil(
        caches.open('v1').then((cache) => {
            console.log('Loading cache...')
            return cache.addAll([
                './',
                './Scripts/',
                './Modules/',
                './Icons/',
                './Favicons/',
                './Data/',
            ])
        })
    )

})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => { 
            return response || fetch(event.request)
        })
    )
})
