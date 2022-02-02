let quantidadeCartas = null;
let arrayCartas = [];

iniciarJogo();

function iniciarJogo() {
    perguntarQuantidadeCartas();
    arrayCartas.sort(comparador); 
    distribuirCartas();
    selecionar();
}

function perguntarQuantidadeCartas() {
    while (quantidadeCartas%2 !== 0 || quantidadeCartas < 4 || quantidadeCartas > 14) {
        quantidadeCartas = parseInt(prompt("Com quantas cartas você quer jogar?"));
    }
}

function distribuirCartas() {
    for (let cont = 0; cont < quantidadeCartas; cont++) {
        arrayCartas[cont] = document.createElement('div'); 
        document.querySelector(".cartas").appendChild(arrayCartas[cont]);
        arrayCartas[cont].classList.add("carta");
        arrayCartas[cont].classList.add("verso");
    }
}

function comparador() { 
    return Math.random() - 0.5; 
}

function selecionar() {
    let elemento = document.querySelectorAll(".carta");
    for (let cont = 0; cont < quantidadeCartas; cont++) {
        elemento[cont].addEventListener('click', function() {
            arrayCartas[cont].classList.toggle("frente");
        });
    }
}