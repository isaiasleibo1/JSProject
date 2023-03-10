const itemTitle = document.querySelector("#itemTitle");
const itemPrice = document.querySelector("#itemPrice");
const itemImage = document.querySelector('#imageCont');
const pageTitle = document.querySelector('#pageTitle');
const pageIcon = document.querySelector('#pageIcon');

const litografia = document.querySelector("#litografia");
const cantidadDeNucleos = document.querySelector("#cantidadDeNucleos");
const frecuencia = document.querySelector("#frecuencia");
const cache = document.querySelector("#cache");
const velocidadDelBus = document.querySelector("#velocidadDelBus");
const TDP = document.querySelector("#TDP");
const tama├▒oDeMemoriaMaximo = document.querySelector("#tama├▒oDeMemoriaMaximo");
const graficos = document.querySelector("#graficos");
const cacheL1 = document.querySelector("#cacheL1");
const cacheL2 = document.querySelector("#cacheL2");
const cacheL3 = document.querySelector("#cacheL3");
const procesador = document.querySelector('#procesador');
const ram = document.querySelector('#ram');
const almacenamiento = document.querySelector('#almacenamiento');
const pantalla = document.querySelector('#pantalla');
const camara = document.querySelector('#camara');

async function connectJSON() {
    try {
        const response = await fetch('/json/items.json');
        const data = await response.json();
        verItem(data);
    } catch (err) {
        console.log(err);
    }
}

function verItem(procesadoresJSON) {
    let item;
    let tipo;
    let enlaceValido = false;

    for (let i = 0; i < procesadoresJSON.length; i++) {
        let url = procesadoresJSON[i].titulo.replace(/ /g, '-');
        if (location.pathname.includes(url)) {
            item = procesadoresJSON[i];
            tipo = procesadoresJSON[i].tipo;
            enlaceValido = true;
        }
    }

    if (!enlaceValido) {
        location.href = 'https://mastershop.gq/error/404';
    }

    itemTitle.textContent = item.titulo;
    pageTitle.textContent = item.titulo;
    itemPrice.textContent = item.precio;
    itemImage.innerHTML = `<img class="item-img" src="${item.imagen}">`;
    pageIcon.outerHTML = `<link id="pageIcon" rel="shortcut icon" href="${item.imagen}">`


    if (tipo == 'intel') {

        litografia.style.display = 'list-item'; //
        litografia.innerHTML = `<b>Litograf├şa:</b> ${item.litografia}`;
        cantidadDeNucleos.style.display = 'list-item'; //
        cantidadDeNucleos.innerHTML = `<b>Cantidad de n├║cleos:</b> ${item.cantidadDeNucleos}`;
        frecuencia.style.display = 'list-item'; //
        frecuencia.innerHTML = `<b>Frecuencia:</b> ${item.frecuencia}`;
        cache.style.display = 'list-item'; //
        cache.innerHTML = `<b>Cach├ę:</b> ${item.cache}`;
        velocidadDelBus.style.display = 'list-item'; //
        velocidadDelBus.innerHTML = `<b>Velocidad del bus:</b> ${item.velocidadDelBus}`;
        TDP.style.display = 'list-item'; //
        TDP.innerHTML = `<b>TDP:</b> ${item.TDP}`;
        tama├▒oDeMemoriaMaximo.style.display = 'list-item'; //
        tama├▒oDeMemoriaMaximo.innerHTML = `<b>Tama├▒o de memoria m├íximo:</b> ${item.tama├▒oDeMemoriaMaximo}`;
        graficos.innerHTML = `<b>Gr├íficos:</b> ${item.graficos}`;

        cacheL1.style.display = 'none';
        cacheL2.style.display = 'none';
        cacheL3.style.display = 'none';
        procesador.style.display = 'none';
        ram.style.display = 'none';
        almacenamiento.style.display = 'none';
        pantalla.style.display = 'none';
        camara.style.display = 'none';
    } else if (tipo == 'ryzen') {

        cantidadDeNucleos.style.display = 'list-item'; //
        cantidadDeNucleos.innerHTML = `<b>Cantidad de n├║cleos:</b> ${item.cantidadDeNucleos}`;
        frecuencia.style.display = 'list-item'; //
        frecuencia.innerHTML = `<b>Frecuencia:</b> ${item.frecuencia}`;
        cacheL1.style.display = 'list-item'; //
        if (item.cacheL1 == "-") {
            cacheL1.style.display = 'none';
        } else {
            cacheL1.innerHTML = `<b>Cach├ę L1:</b> ${item.cacheL1}`;
        }
        cacheL2.style.display = 'list-item'; //
        cacheL2.innerHTML = `<b>Cach├ę L2:</b> ${item.cacheL2}`;
        cacheL3.style.display = 'list-item'; //
        cacheL3.innerHTML = `<b>Cach├ę L3:</b> ${item.cacheL3}`;
        TDP.style.display = 'list-item'; //
        TDP.innerHTML = `<b>TDP:</b> ${item.TDP}`;
        tama├▒oDeMemoriaMaximo.style.display = 'list-item'; //
        tama├▒oDeMemoriaMaximo.innerHTML = `<b>Tama├▒o de memoria m├íximo:</b> ${item.tama├▒oDeMemoriaMaximo}`;
        graficos.innerHTML = `<b>Gr├íficos:</b> ${item.graficos}`;

        cache.style.display = 'none';
        velocidadDelBus.style.display = 'none';
        litografia.style.display = 'none';
        procesador.style.display = 'none';
        ram.style.display = 'none';
        almacenamiento.style.display = 'none';
        pantalla.style.display = 'none';
        camara.style.display = 'none';
    } else if (tipo == 'notebook') {
        procesador.style.display = 'list-item'; //
        procesador.innerHTML = `<b>Procesador:</b> ${item.procesador}`
        ram.style.display = 'list-item'; //
        ram.innerHTML = `<b>RAM:</b> ${item.ram}`;
        almacenamiento.style.display = 'list-item'; //
        almacenamiento.innerHTML = `<b>Almacenamiento:</b> ${item.almacenamiento}`;
        pantalla.style.display = 'list-item'; //
        pantalla.innerHTML = `<b>Pantalla:</b> ${item.pantalla}`;
        graficos.innerHTML = `<b>Gr├íficos:</b> ${item.graficos}`;
        camara.style.display = 'list-item'; //
        camara.innerHTML = `<b>C├ímara:</b> ${item.camara}`;

        litografia.style.display = 'none';
        cantidadDeNucleos.style.display = 'none';
        frecuencia.style.display = 'none';
        cache.style.display = 'none';
        cacheL1.style.display = 'none';
        cacheL2.style.display = 'none';
        cacheL3.style.display = 'none';
        velocidadDelBus.style.display = 'none';
        TDP.style.display = 'none';
        tama├▒oDeMemoriaMaximo.style.display = 'none';
    }
}

connectJSON();