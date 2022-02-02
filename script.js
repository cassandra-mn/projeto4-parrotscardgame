let quantidadeCartas = null;
let arrayCartas = [];

while (quantidadeCartas%2 !== 0 || quantidadeCartas < 4 || quantidadeCartas > 14) {
    quantidadeCartas = parseInt(prompt("Com quantas cartas você quer jogar?"));
}

for (let cont = 0; cont < quantidadeCartas; cont++) {
    arrayCartas[cont] = document.createElement('div'); 
    document.querySelector(".cartas").appendChild(arrayCartas[cont]);
    arrayCartas[cont].classList.add("carta");
}

arrayCartas.sort(comparador); 

function comparador() { 
    return Math.random() - 0.5; 
}