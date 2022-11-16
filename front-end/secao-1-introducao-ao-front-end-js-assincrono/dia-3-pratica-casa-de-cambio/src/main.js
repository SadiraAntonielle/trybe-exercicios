const botao = document.querySelector("#btn");
const inp = document.querySelector("#inputt");
const list = document.querySelector("#lista");

// Fazendo a requisição da API
// A moeda a ser pesquisada deverá ser passada como parâmetro do endpoint.
function pegandoFetch(coin) {
    // A URL que faz a busca das cotações das moedas
    const url = `https://api.exchangerate.host/latest?base=${coin}`;
    // Fazer o fetch para a API e retornar o resultado
    return fetch(url)
    // Quando recebe os dados, tranformamos em json
    .then((response) => response.json())
    // O resultado json retorna e pegamos ele em data
    .then((data) => {
    // Verificando se o nome pesquisado na API é o mesmo digitado
    if(data.base !== coin.toYpperCase()) {
        // Se não for, jaga um erro
        throw new Error("Moeda não existente!")
    }
    // Se não retorna objeto
    return data.rates
    })
}

// Funçao para renderizar as cotaçoes e recebe o objeto com elas
function renderizandoMoedas(coins) {
    // Limpar a lista
    list.innerHTML = '';
    // Percorrer o array e entrar em cada cotaçao
    coinsArray.forEach((coin) => {
        // coin = ['sss, 222]
        // coinname=sss value=2222
        // guarda na respectiva variavel o nome e valor
        const [coinName, value] = coin;
        // cria um elemento de list item
        const li = document.createElement('li');
        li.textContent = `${coinName} - ${value}`;
        // coloca esse li dentro do lu
        list.appendChild(li);
    });
}

// funcao disparada quando o botao pesquisa é pressionado
function funcaoBotao() {
    // pega a moeda escrita no input e deixa em maiusculo
    const coin = inp.value.toUpperCase(); // usd
    console.log(funcaoBotao);
}

// Recebe o click do botao pesquisar
botao.addEventListener('click', funcaoBotao);