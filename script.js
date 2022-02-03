let quantidadeCartas = null;
let arrayCartas = [];

iniciarJogo();

function iniciarJogo() {
    perguntarQuantidadeCartas();
    distribuirCartas();
    cartasAleatorias();
    selecionarCarta();
}

function perguntarQuantidadeCartas() {
    while (quantidadeCartas % 2 !== 0 || quantidadeCartas < 4 || quantidadeCartas > 14) {
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

function cartasAleatorias() {
    arrayCartas.forEach(card => {
        let rand = Math.floor(Math.random() * quantidadeCartas);
        card.style.order = rand;
    })
}

function selecionarCarta() {
    let elemento = document.querySelectorAll(".carta");
    for (let cont = 0; cont < quantidadeCartas; cont++) {
        elemento[cont].addEventListener('click', function () {
            if (cont < 2) {
                arrayCartas[cont].classList.toggle("frente1");
            }
            else if (cont < 4) {
                arrayCartas[cont].classList.toggle("frente2");
            }
            else if (cont < 6) {
                arrayCartas[cont].classList.toggle("frente3");
            }
            else if (cont < 8) {
                arrayCartas[cont].classList.toggle("frente4");
            }
            else if (cont < 10) {
                arrayCartas[cont].classList.toggle("frente5");
            }
            else if (cont < 12) {
                arrayCartas[cont].classList.toggle("frente6");
            }
            else {
                arrayCartas[cont].classList.toggle("frente7");
            }
        });
    }
}