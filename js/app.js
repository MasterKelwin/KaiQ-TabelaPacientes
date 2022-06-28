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
        alturaDOM.classList.remove('dadoInvalido');
        alturaDOM.textContent = altura;
        pesoDOM.classList.remove('dadoInvalido');
        pesoDOM.textContent = peso;
        imc.classList.remove('dadoInvalido');
        imc.textContent = imcCalculado.toFixed(2);

        palpita(imcCalculado, pacientes[i]);
    }

    if(altura < 0.5 || altura > 3) {
        imc.textContent = "Dados inválidos";
        alturaDOM.textContent = "Altura Inválida";
        alturaDOM.classList.add('dadoInvalido');
        imc.classList.add('dadoInvalido');

        setTimeout(() => {  //RESPONSÁVEL POR CORRIGIR
            var alturaCorrigida = parseFloat(prompt("Altura inválida, informe novamente"));
            valida(peso, alturaCorrigida, imc, alturaDOM, pesoDOM);
            alturaDOM.textContent = alturaCorrigida;
        }, 1000);
    }   

    if(peso <= 0 || peso > 400) {
        imc.textContent = "Dados inválidos";
        pesoDOM.textContent = "Peso Inválido";
        pesoDOM.classList.add('dadoInvalido');
        imc.classList.add('dadoInvalido');

        setTimeout(() => {  //RESPONSÁVEL POR CORRIGIR
            var pesoCorrigido = parseFloat(prompt("Peso inválido, informe novamente"));
            valida(pesoCorrigido, altura, imc, alturaDOM, pesoDOM);
            pesoDOM.textContent = pesoCorrigido;
        }, 1000);
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
    
    for (i = 0; i < 5; i++) {  
        adicionados++;
        elemento[i].classList.add(propriedadeClass[i]);

        if (i < 4) {
            elemento[i].textContent = conteudo[i]; 
        } else {
            calculaIMC(peso, altura);
            elemento[i].textContent = imcCalculado;
        }        
        novoPaciente.appendChild(elemento[i]);  
    }
      
    pacientes = document.querySelectorAll('.paciente');    
}
 


// PALPITA

function palpita(imcCalculado, pacienteAnalisado) {

    if(imcCalculado > 18.5 && imcCalculado < 25.1){
        pacienteAnalisado.classList.add('palpite-saudavel');
    } else if(imcCalculado > 15 && imcCalculado < 30) {
        pacienteAnalisado.classList.add('palpite-insaudavel');
    } else {
        pacienteAnalisado.classList.add('palpite-muito-insaudavel');
    }
}