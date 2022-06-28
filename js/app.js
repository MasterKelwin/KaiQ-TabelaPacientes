//TROCA TEMA

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

function verificaECalcula () {
    for (i = 0; i < pacientes.length; i++) {
        var pesoDOM = pacientes[i].querySelector('.info-peso');
        var alturaDOM = pacientes[i].querySelector('.info-altura');
    
        var peso = parseFloat(pesoDOM.textContent);
        var altura = parseFloat(alturaDOM.textContent);
        var imc = pacientes[i].querySelector('.info-imc');
        
        valida(peso, altura, imc, alturaDOM, pesoDOM);       
    }
}

verificaECalcula();



// CADASTRA ALUNO

var formulario = document.querySelector('#form');
const inputNome = document.querySelector('#nome');
const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');
const inputGordura = document.querySelector('#gorduraCorporal');
var adicionados = 1;

function adiciona () {
    var nome = inputNome.value;
    var peso = inputPeso.value;
    var altura = inputAltura.value;
    var gorduraCorporal = inputGordura.value;

    geraHTML(nome, peso, altura, gorduraCorporal);
    var verificador = false;
    if(!verificador) {
        verificaECalcula();
        verificador = true;
    }   
}

function geraHTML (nome, peso, altura, gordura) {
    const tabela = document.querySelector('#tabela-pacientes');
    const novoPaciente = document.createElement("tr");
    novoPaciente.classList.add('paciente');
    tabela.appendChild(novoPaciente);
    novoPaciente.classList.add('paciente');

    const pacienteNome = document.createElement("td");
    const pacientePeso = document.createElement("td");
    const pacienteAltura = document.createElement("td");
    const pacienteGordura = document.createElement("td");
    const pacienteIMC = document.createElement("td");
    var elemento = [pacienteNome, pacientePeso, pacienteAltura, pacienteGordura, pacienteIMC];
    var propriedadeClass = ["info-nome", "info-peso", "info-altura", "info-gordura", "info-imc"];
    var conteudo = [nome, peso, altura, gordura];
    
    for (i = 0; i < adicionados; i++) {  
        adicionados++;
        elemento[i].classList.add(propriedadeClass[i]);

        if (i < 4) {
            elemento[i].textContent = conteudo[i]; 
        } else {
            calculaIMC(peso, altura);
            elemento[4].textContent = imcCalculado;
        }        
        novoPaciente.appendChild(elemento[i]);  
    }

    //function renderizaIMC (imcCalculado, novoPaciente) {
    //    const pacienteIMC = document.createElement("td");
    //    pacienteIMC.classList.add("info-imc");
    //    pacienteIMC.textContent = imcCalculado;
    //    novoPaciente.appendChild(pacienteIMC);
    //}

    //const pacienteNome = document.createElement("td");
    //pacienteNome.classList.add("info-nome");
    //pacienteNome.textContent = nome;
    //novoPaciente.appendChild(pacienteNome);
    
    //const pacientePeso = document.createElement("td");
    //pacientePeso.classList.add("info-peso");
    //pacientePeso.textContent = peso;
    //novoPaciente.appendChild(pacientePeso);
    
    //const pacienteAltura = document.createElement("td");
    //pacienteAltura.classList.add("info-altura");
    //pacienteAltura.textContent = altura;
    //novoPaciente.appendChild(pacienteAltura);
    
    //const pacienteGordura = document.createElement("td");
    //pacienteGordura.classList.add("info-gordura");
    //pacienteGordura.textContent = gordura;
    //novoPaciente.appendChild(pacienteGordura);
    
    pacientes = document.querySelectorAll('.paciente');    
    
    // calculaIMC(peso, altura)
    // renderizaIMC(imcCalculado, novoPaciente);
}
 
