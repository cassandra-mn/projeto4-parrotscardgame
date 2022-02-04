let quantidadeCartas = null;
let arrayCartas = [];
let contadorDeJogadas = null;
const gifs = ["bobrossparrot.gif","bobrossparrot.gif","explodyparrot.gif","explodyparrot.gif","fiestaparrot.gif","fiestaparrot.gif","metalparrot.gif","metalparrot.gif","revertitparrot.gif","revertitparrot.gif","tripletsparrot.gif","tripletsparrot.gif","unicornparrot.gif","unicornparrot.gif"];

iniciarJogo();

function iniciarJogo() {
    perguntarQuantidadeCartas();
    distribuirCartas();
    armazenarCartas();
    embaralharCartas();
}

function perguntarQuantidadeCartas() {
    while (quantidadeCartas % 2 !== 0 || quantidadeCartas < 4 || quantidadeCartas > 14) {
        quantidadeCartas = parseInt(prompt("Com quantas cartas você quer jogar?"));
    }
}

function distribuirCartas() {
    let section = document.querySelector(".cartas");
    for (let i = 0; i < quantidadeCartas; i++) {
        section.innerHTML += `<div class="carta">
        <img class="frente" src="images/${gifs[i]}"></img>
        <img class="verso" src="images/front.png" onclick="selecionarCarta(this)"></img>
        </div>`
    }
}

function armazenarCartas() {
    let lista = document.querySelectorAll(".carta");
    for (let i = 0; i < lista.length; i++) {
        arrayCartas[i] = lista[i];
    }
}

function embaralharCartas() {
    arrayCartas.forEach(card => {
        let rand = Math.floor(Math.random() * quantidadeCartas);
        card.style.order = rand;
    })
}

function selecionarCarta(cartaSelecionada) {
    cartaSelecionada.classList.add("esconder");
    contadorDeJogadas++;
    if (contadorDeJogadas === 2) {
        setTimeout(desselecionarCarta,1000);
        // jogadas();
    }
}

function desselecionarCarta() {
    let selecionadas = document.querySelectorAll(".esconder");
    for (let i = 0; i < selecionadas.length; i++) {
        let variavel = selecionadas[i];
        console.log(variavel);
        variavel.classList.remove("esconder");
        contadorDeJogadas = 0;
    }
}