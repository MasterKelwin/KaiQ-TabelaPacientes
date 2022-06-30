// CADASTRA ALUNO

var formulario = document.querySelector('#form');
const inputNome = document.querySelector('#nome');
const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');
const inputGordura = document.querySelector('#gorduraCorporal');
const tabela = document.querySelector('#tabela-pacientes');

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
    function montaTd(dado, classe) {
        var td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);
        return td;
    }      

    const novoPaciente = document.createElement("tr");
    novoPaciente.classList.add('paciente');
    tabela.appendChild(novoPaciente);

    var tdNome = montaTd(nome, "info-nome");
    var tdPeso = montaTd(peso, "info-peso");
    var tdAltura = montaTd(altura, "info-altura");
    var tdGordura = montaTd(gordura, "info-gordura");
    calculaIMC(peso, altura);
    var tdImc = montaTd(imcCalculado, "info-imc");

    novoPaciente.appendChild(tdNome);
    novoPaciente.appendChild(tdPeso);
    novoPaciente.appendChild(tdAltura);
    novoPaciente.appendChild(tdGordura);
    novoPaciente.appendChild(tdImc);

    pacientes = document.querySelectorAll('.paciente');    
}