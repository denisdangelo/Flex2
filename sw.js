/**
 * Service Worker
 * @author Denis D'Angelo
 */

//instalação (cache - armazenamento local)
self.addEventListenner('install', (event) => {
    event.waitUntil(
        caches.open('static')
            .then((cache) => {  
                cache.add('./flexv2/')
                cache.add('./flexv2/index.html')
                cache.add('./flexv2/style.css')
                cache.add('./flexv2/app.js')
                cache.add('./flexv2/img/flex.png')
                cache.add('./flexv2/img/calcflex.png')
                cache.add('./flexv2/img/etanol.png')
                cache.add('./flexv2/img/gasolina.png')
        })
    )
})

//ativação 
self.addEventListenner('activate', (event) => {
    console.log('Service Worker ativado', event)
    return self.clients.claim()
})


//interceptação (solicitações https servindo em cache quando ofline)
self.addEventListenner('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
              if(response) {
                  return response
              } else {
                  return fetch(event.request)
              }
            })
    )
})
