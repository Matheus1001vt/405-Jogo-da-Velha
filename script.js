let quadradinhos = document.querySelectorAll(".casinha");
let resposta = document.querySelector("h2");
let botao = document.querySelector("button");
let h1 = document.querySelector("h1");


let i = 0;

function gerarCor() {
    if (this.innerHTML == "") {
        if (i % 2 == 0) {
            this.innerHTML = "<p>X</p>";
            i++;
            verificarFinal();
        } else {
            this.innerHTML = "<p>O</p>";
            i++;
            verificarFinal();
        }
    }
}

for (let quadrado of quadradinhos) {
    quadrado.onclick = gerarCor;
}


function verificarFinal(){  
    if(quadradinhos[0].innerHTML != "" && quadradinhos[0].innerHTML == quadradinhos[3].innerHTML && quadradinhos[3].innerHTML == quadradinhos[6].innerHTML){
        h1.innerHTML = "você venceu";
    }
    else if(quadradinhos[1].innerHTML != "" && quadradinhos[1].innerHTML == quadradinhos[4].innerHTML && quadradinhos[4].innerHTML == quadradinhos[7].innerHTML){
        h1.innerHTML = "você venceu";
    }
    else if(quadradinhos[2].innerHTML != "" && quadradinhos[2].innerHTML == quadradinhos[5].innerHTML && quadradinhos[5].innerHTML == quadradinhos[8].innerHTML){
        h1.innerHTML = "você venceu";
    }
    else if(quadradinhos[0].innerHTML != "" && quadradinhos[0].innerHTML == quadradinhos[1].innerHTML && quadradinhos[1].innerHTML == quadradinhos[2].innerHTML){
        h1.innerHTML = "você venceu";
    }
    else if(quadradinhos[3].innerHTML != "" && quadradinhos[3].innerHTML == quadradinhos[4].innerHTML && quadradinhos[4].innerHTML == quadradinhos[5].innerHTML){
        h1.innerHTML = "você venceu";
    }
    else if(quadradinhos[6].innerHTML != "" && quadradinhos[6].innerHTML == quadradinhos[7].innerHTML && quadradinhos[7].innerHTML == quadradinhos[8].innerHTML){
        h1.innerHTML = "você venceu";
    }
    else if(quadradinhos[1].innerHTML != "" && quadradinhos[1].innerHTML == quadradinhos[4].innerHTML && quadradinhos[4].innerHTML == quadradinhos[7].innerHTML){
        h1.innerHTML = "você venceu";
    }
    else if(quadradinhos[0].innerHTML != "" && quadradinhos[0].innerHTML == quadradinhos[4].innerHTML && quadradinhos[4].innerHTML == quadradinhos[8].innerHTML){
        h1.innerHTML = "você venceu";
    }
    else if(quadradinhos[6].innerHTML != "" && quadradinhos[6].innerHTML == quadradinhos[4].innerHTML && quadradinhos[4].innerHTML == quadradinhos[2].innerHTML){
        h1.innerHTML = "você venceu";
    }
    else if(i >= 9){
        alert("velha");
    }
    else{
        return;
    }
}

function resetarJogo() {
    for (let quadrado of quadradinhos) {
        quadrado.innerHTML = "";
        resposta.innerHTML = "Jogo resetado !";
    
    }
    i=0;
}

botao.onclick = resetarJogo;
