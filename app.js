/**
 * APP PWA - Etanol x Gasolina
 * @author Denis D'Angelo
 * @version 2.0
 */

//=================================================================
//Registro do service worker

//se o navegador de internet suportar o recurso serviceWorker
if('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/sw.js')
    .then(()=> {
        console.log('Service Worker registrado')
    })
}

//=================================================================

function calcular() {
    //capturar os valores das caixas de input
    let gasolina = document.getElementById('gasolina').value
    let etanol = document.getElementById('etanol').value
    let kmlGasolina = document.getElementById('kmGasolina').value
    let kmlEtanol = document.getElementById('kmEtanol').value
    //cálculo da vantagem
    if (etanol < (kmlEtanol / kmlGasolina) * gasolina) {
        document.getElementById('status').src = "img/etanol.png"
    } else {
        document.getElementById('status').src = "img/gasolina.png"
    }
}