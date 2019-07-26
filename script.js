let quadradinhos = document.querySelectorAll(".casinha");
let resposta = document.querySelector("h2");
let botao = document.querySelector("button");
let cores = ["yellow", "blue"];


i = 0;

function gerarCor() {
    if (this.style.backgroundColor = " ") {
        if (i % 2 == 0) {
            this.style.backgroundColor = cores[0];
            i++;
        } else {
            this.style.backgroundColor = cores[1]
            i++;
        }
    }
}

for (let quadrado of quadradinhos) {
    quadrado.onclick = gerarCor;
}
function verificarFinal() {
    if (quadradinhos[0].style.backgrouendColor == quadradinhos[1].style.backgroundColor && quadradinhos[1].style.backgroundColor == [2] && quadradinhos[2].style.backgroundColor == quadradinhos[3]);
    resposta.innerHTML = "VOCÊ  VENCEU";

}
function resetarJogo() {
    for (let quadrado of quadradinhos) {
        quadrado.style.backgroundColor = "unset";
        quadrado.onclick = gerarCor;
    }
    resposta.innerHTML = "Jogo resetado !";
}

botao.ondblclick = resetarJogo;













