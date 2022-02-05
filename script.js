let quantidadeCartas = null;
let arrayCartas = [];
let contadorDeJogadas = null;
let posicao1 = null;
let posicao2 = null;
let cont = 0;
let jogadas = 0;

const gifs = ["bobrossparrot.gif", "bobrossparrot.gif", "explodyparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "metalparrot.gif", "revertitparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "tripletsparrot.gif", "unicornparrot.gif", "unicornparrot.gif"];

perguntarQuantidadeCartas();
distribuirCartas();
armazenarCartas();
embaralharCartas();

function perguntarQuantidadeCartas() {
    while (quantidadeCartas % 2 !== 0 || quantidadeCartas < 4 || quantidadeCartas > 14) {
        quantidadeCartas = parseInt(prompt("Com quantas cartas você quer jogar? (Digite um número par de 4 à 14)"));
    }
}

function distribuirCartas() {
    let section = document.querySelector(".cartas");
    for (let i = 0; i < quantidadeCartas; i++) {
        section.innerHTML += `<div class="carta">
        <img class="frente" src="images/${gifs[i]}"></img>
        <img class="verso ident${i}" src="images/front.png" onclick="selecionarCarta(this,${i})"></img>
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

function selecionarCarta(cartaSelecionada, j) {
    cartaSelecionada.classList.add("esconder");
    let verificar = document.querySelectorAll(".esconder");
    contadorDeJogadas++;
    if (contadorDeJogadas === 1) {
        posicao1 = j;
    }
    if (contadorDeJogadas === 2) {
        posicao2 = j;
        if (validarPosicao(posicao1, posicao2)) {
            for (let i = 0; i < verificar.length; i++) {
                let selecionada = verificar[i];
                selecionada.classList.add("fixar");
            }
            contadorDeJogadas = 0;
            cont++;
        }
        else {
            setTimeout(desselecionarCarta, 1000);
        }
    }
    jogadas++;
    setTimeout(finalizarJogo, 500);
}

function desselecionarCarta() {
    let selecionadas = document.querySelectorAll(".esconder");
    for (let i = 0; i < selecionadas.length; i++) {
        let variavel = selecionadas[i];
        if (!variavel.classList.contains("fixar")) {
            variavel.classList.remove("esconder");
        }
        contadorDeJogadas = 0;
    }
}

function validarPosicao(p1, p2) {
    if (p1 % 2 === 0 && p1 + 1 === p2) {
        return true;
    }
    else if (p2 % 2 === 0 && p2 + 1 === p1) {
        return true;
    }
    else {
        return false;
    }
}

function finalizarJogo() {
    if (cont === quantidadeCartas / 2) {
        alert(`Você ganhou em ${jogadas} jogadas!`);
    }
}