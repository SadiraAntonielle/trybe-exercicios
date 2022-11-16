
const inputt = document.querySelector('#input');
const btn = document.querySelector('#btn');
const div = document. querySelector('#container-resultado');

function addStorage(key, valor) {
    localStorage.setItem(key, valor);
}

async function apresentaResultado(data) {
    div.innerHTML = '';

    data.results.forEach(result => {
        const h2 = document.createElement('h2');
        h2.innerHTML = `${result.title} - Preço R$ ${result.price}`;
        const img = document.createElement('img');
        img.src = result.thumbnail
        div.appendChild(h2);
        div.appendChild(img);
    })
    addStorage('keyDiv', JSON.stringify(data));
}

async function selecionarProduto() {
    const api = 'https://api.mercadolibre.com/sites/MLB/search?q=';
    const valor = inputt.value;
    const resposta = await fetch(`${api}${valor}`);
    const data = await resposta.json();
    console.log(data)
    apresentaResultado(data);
}

function getStorage() {
    apresentaResultado(JSON.parse(localStorage.getItem('keyDiv')))
}

btn.addEventListener('click', selecionarProduto);

getStorage();