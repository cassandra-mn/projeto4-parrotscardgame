let quantidadeCartas = null;
let arrayCartas = [];
let contadorDeJogadas = null;
let posicao1 = null;
let posicao2 = null;
let cont = 0;
let jogadas = 0;
let intervalo = 0;

const gifs = ["bobrossparrot.gif", "bobrossparrot.gif", "explodyparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "metalparrot.gif", "revertitparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "tripletsparrot.gif", "unicornparrot.gif", "unicornparrot.gif"];
const relogio = document.querySelector(".relogio");

iniciarPartida();

function iniciarPartida() {
    perguntarQuantidadeCartas();
    distribuirCartas();
    armazenarCartas();
    embaralharCartas();
}
    
function perguntarQuantidadeCartas() {
    while (quantidadeCartas % 2 !== 0 || quantidadeCartas < 4 || quantidadeCartas > 14) {
        quantidadeCartas = parseInt(prompt("Com quantas cartas você quer jogar? (Digite um número par de 4 à 14)"));
    }
}

function distribuirCartas() {
    let section = document.querySelector(".cartas");
    for (let i = 0; i < quantidadeCartas; i++) {
        section.innerHTML += `
        <div class="carta" data-identifier="card">
            <div class="frente virar" data-identifier="front-face"> <img src="images/${gifs[i]}" /img> </div>
            <div class="verso virar" data-identifier="back-face"> <img src="images/front.png" onclick="selecionarCarta(this,${i})" /img> </div>
        </div>`
    }
    intervalo = setInterval(aumentarContagem, 1000);
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
        clearInterval(intervalo);
        alert(`Você ganhou com ${jogadas} jogadas, em ${relogio.innerHTML} segundos!`);
        intervalo = 0;
        let reiniciar = prompt("Quer jogar novamente? (Digite sim ou não)");
        if (reiniciar === "sim") {
            resetar();
        }
        else if (reiniciar === "não") {
            alert("Belezinha!");
        }
        else {
            alert("Entrada inválida!");
        }
    }
}

function resetar() {
    let section = document.querySelector(".cartas");
    section.innerHTML = "";
    quantidadeCartas = null;
    arrayCartas = [];
    contadorDeJogadas = null;
    posicao1 = null;
    posicao2 = null;
    cont = 0;
    jogadas = 0;
    intervalo = 0;
    relogio.innerHTML = "0";
    iniciarPartida();
}

function aumentarContagem() {
    relogio.innerHTML = parseInt(relogio.innerHTML) + 1; 
}