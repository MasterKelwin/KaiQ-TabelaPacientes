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



// VALIDA IMC

function valida (peso, altura, imc, alturaDOM, pesoDOM) {
    if(peso > 0 && peso < 400 && altura > 0.5 && altura < 3) {
        calculaIMC(peso, altura);
        imc.textContent = imcCalculado.toFixed(2);
        alturaDOM.classList.remove('dadoInvalido');
        pesoDOM.classList.remove('dadoInvalido');
        imc.classList.remove('dadoInvalido');
    }

    if(altura < 0.5 || altura > 3) {
        alturaDOM.textContent = "Altura Inválida";
        alturaDOM.classList.add('dadoInvalido');
        imc.classList.add('dadoInvalido');
    }   

    if(peso <= 0 || peso > 400) {
        pesoDOM.textContent = "Peso Inválido";
        pesoDOM.classList.add('dadoInvalido');
        imc.classList.add('dadoInvalido');
    } 
}



// CALCULA IMC

const pacientes = document.querySelectorAll('.paciente');
var imcCalculado;

function calculaIMC(peso, altura) {
    return imcCalculado = peso / (altura * altura)
}

for (i = 0; i < pacientes.length; i++) {
    var pesoDOM = pacientes[i].querySelector('.info-peso');
    var alturaDOM = pacientes[i].querySelector('.info-altura');

    const peso = parseFloat(pesoDOM.textContent);
    const altura = parseFloat(alturaDOM.textContent);
    const imc = pacientes[i].querySelector('.info-imc');

    valida(peso, altura, imc, alturaDOM, pesoDOM);       
}



