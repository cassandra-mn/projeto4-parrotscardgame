let quantidadeCartas = null;
let arrayCartas = [];
const gifs = ["bobrossparrot.gif","bobrossparrot.gif",
"explodyparrot.gif","explodyparrot.gif",
"fiestaparrot.gif","fiestaparrot.gif",
"metalparrot.gif","metalparrot.gif",
"revertitparrot.gif","revertitparrot.gif",
"tripletsparrot.gif","tripletsparrot.gif",
"unicornparrot.gif","unicornparrot.gif"];

iniciarJogo();

function iniciarJogo() {
    perguntarQuantidadeCartas();
    distribuirCartas();
    armazenarCartas();
    cartasAleatorias();
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

function cartasAleatorias() {
    arrayCartas.forEach(card => {
        let rand = Math.floor(Math.random() * quantidadeCartas);
        card.style.order = rand;
    })
}

function selecionarCarta(cartaSelecionada) {
    cartaSelecionada.remove();
}