let quantidadeCartas = parseInt(prompt("Com quantas cartas você quer jogar?"));

while (quantidadeCartas%2 !== 0 || quantidadeCartas < 4 || quantidadeCartas > 14) {
    quantidadeCartas = prompt("Insira um número par entre 4 e 14");
}

for (let cont = 0; cont < quantidadeCartas; cont++) {
    var div = document.createElement('div'); 
    document.querySelector(".cartas").appendChild(div);
    div.classList.add("carta");
}