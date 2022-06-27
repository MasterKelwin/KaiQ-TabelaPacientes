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

var pacientes = document.querySelectorAll('.paciente');
var imcCalculado;

function calculaIMC(peso, altura) {
    return imcCalculado = peso / (altura * altura)
}

function banana () {
    for (i = 0; i < pacientes.length; i++) {
        var pesoDOM = pacientes[i].querySelector('.info-peso');
        var alturaDOM = pacientes[i].querySelector('.info-altura');
    
        const peso = parseFloat(pesoDOM.textContent);
        const altura = parseFloat(alturaDOM.textContent);
        const imc = pacientes[i].querySelector('.info-imc');
    
        valida(peso, altura, imc, alturaDOM, pesoDOM);       
    }
}

banana();





// CADASTRA ALUNO


var formulario = document.querySelector('#form');
const inputNome = document.querySelector('#nome');
const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');
const inputGordura = document.querySelector('#gorduraCorporal');


function adiciona () {
    var nome = inputNome.value;
    var peso = inputPeso.value;
    var altura = inputAltura.value;
    var gorduraCorporal = inputGordura.value;
    console.log(nome);

    geraHTML(nome, peso, altura, gorduraCorporal);
    
}

function geraHTML (nome, peso, altura, gordura) {
    const tabela = document.querySelector('#tabela-pacientes');
    const novoPaciente = document.createElement("tr");
    novoPaciente.classList.add('paciente');
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
    
    pacientes = document.querySelectorAll('.paciente');
    
    banana();
    calculaIMC(peso, altura)
    renderizaIMC(imcCalculado, novoPaciente);
    console.log(novoPaciente);
    console.log(pacientes);
}
 
function renderizaIMC (imcCalculado, novoPaciente) {
    const pacienteIMC = document.createElement("td");
    pacienteIMC.classList.add("info-IMC");
    pacienteIMC.textContent = imcCalculado;
    novoPaciente.appendChild(pacienteIMC);
}



