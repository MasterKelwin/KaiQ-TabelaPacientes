//TROCA TEMA 3-29

const body = document.querySelector('body');

function setTemaInicial() {
    const temaSalvo = localStorage.getItem('tema');
    if(temaSalvo) {
        body.setAttribute('data-tema', temaSalvo);
    } else {
        setTema('claro');
    }
} 

setTemaInicial();

function setTema(tema) {
    localStorage.setItem('tema', tema);
    body.setAttribute('data-tema', tema);
}

function trocaTema() {
    const ativaTema = localStorage.getItem('tema');

    if(ativaTema === 'claro') {
        setTema('escuro');
    } else {
        setTema('claro');
    }
}



// CALCULA IMC

const pacientes = document.querySelectorAll('.paciente');
var imcCalculado;
console.log(pacientes);

function calculaIMC(peso, altura) {
    return imcCalculado = peso / (altura * altura)
}

for (i = 0; i < pacientes.length; i++) {
    const peso = parseFloat((pacientes[i].querySelector('.info-peso')).textContent);
    const altura = parseFloat((pacientes[i].querySelector('.info-altura')).textContent);
    var imc = pacientes[i].querySelector('.info-imc');

    calculaIMC(peso, altura);
    imc.textContent = imcCalculado.toFixed(2);
    console.log(imc);
}

