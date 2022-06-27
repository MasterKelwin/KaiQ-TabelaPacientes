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



// CADASTRA ALUNO

const inputNome = document.querySelector('#nome');
const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');
const inputGordura = document.querySelector('#gorduraCorporal');

function adiciona () {
    console.log("oi")
    var nome = inputNome.textContent;
    var peso = inputPeso.value;
    var altura = inputAltura.value;
    var gorduraCorporal = inputGordura.value;


    geraHTML(nome, peso, altura, gorduraCorporal);
    
}

function geraHTML (nome, peso, altura, gordura) {
    const tabela = document.querySelector('#tabela-pacientes');
    const novoPaciente = document.createElement("tr");
    tabela.appendChild(novoPaciente);

    novoPaciente.classList.add('paciente');

    const pacienteNome = document.createElement("td");
    pacienteNome.classList.add("info-nome");
    pacienteNome.textContent = nome;
    novoPaciente.appendChild(pacienteNome);

    
    const pacientePeso = document.createElement("td");
    pacientePeso.classList.add("info-peso");
    pacientePeso.textContent = peso;
    novoPaciente.appendChild(pacientePeso);

    
    const pacienteAltura = document.createElement("td");
    pacienteAltura.classList.add("info-altura");
    pacienteAltura.textContent = altura;
    novoPaciente.appendChild(pacienteAltura);

    
    const pacienteGordura = document.createElement("td");
    pacienteGordura.classList.add("info-gordura");
    pacienteGordura.textContent = gordura;
    novoPaciente.appendChild(pacienteGordura);
}




