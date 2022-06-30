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

    if (nome == "" || peso == "" || altura == "" || gorduraCorporal == "") {
        alert("Dados incompletos")
    } else {
        geraHTML(nome, peso, altura, gorduraCorporal);
        verificaECalcula();
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