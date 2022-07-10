// CADASTRA ALUNO

var formulario = document.querySelector('#form');
const inputNome = document.querySelector('#nome');
const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');
const inputGordura = document.querySelector('#gorduraCorporal');
const tabela = document.querySelector('#tabela-alunos');

function adiciona () {
    let nome = inputNome.value;
    let peso = inputPeso.value;
    let altura = inputAltura.value;
    let gorduraCorporal = inputGordura.value;   

    if (nome == "" || peso == "" || altura == "" || gorduraCorporal == "") {
        alert("Dados incompletos")
    } else {
        geraHTML(nome, peso, altura, gorduraCorporal);
        verificaECalcula();
        atualizaView(0);
        view++
    }
    inputNome.value = "";
    inputPeso.value = "";
    inputAltura.value = "";
    inputGordura.value = "";

}

function geraHTML (nome, peso, altura, gordura) {
    function montaTd(dado, classe) {
        let td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);
        return td;
    }      

    const novoAluno = document.createElement("tr");
    novoAluno.classList.add('aluno');
    tabela.appendChild(novoAluno);

    let tdNome = montaTd(nome, "info-nome");
    let tdPeso = montaTd(peso, "info-peso");
    let tdAltura = montaTd(altura, "info-altura");
    let tdGordura = montaTd(gordura, "info-gordura");
    calculaIMC(peso, altura);

    let tdImc = montaTd(imcCalculado, "info-imc");

    novoAluno.appendChild(tdNome);
    novoAluno.appendChild(tdPeso);
    novoAluno.appendChild(tdAltura);
    novoAluno.appendChild(tdGordura);
    novoAluno.appendChild(tdImc);

    alunos = document.querySelectorAll('.aluno');   
    return alunoGerado = novoAluno;
}