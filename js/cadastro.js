// CADASTRA ALUNO

const tabela = document.querySelector('#tabela-alunos');

function adiciona () {
    let nome = document.querySelector('#nome').value;
    let peso = document.querySelector('#peso').value;
    let altura = document.querySelector('#altura').value;
    let gorduraCorporal = document.querySelector('#gorduraCorporal').value; 

    if (nome == "" || peso == "" || altura == "" || gorduraCorporal == "") {
        alert("Dados incompletos")
    } else {
        geraHTML(nome, peso, altura, gorduraCorporal);
        verificaECalcula();
        atualizaView(0);
        limpaForm();
        view++
    }
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
    let dados = [tdNome, tdPeso, tdAltura, tdGordura, tdImc];

    dados.forEach(f => novoAluno.appendChild(f));
    alunos = document.querySelectorAll('.aluno');   
    return alunoGerado = novoAluno;
}

function limpaForm() {
    nome = "";
    peso = "";
    altura = "";
    gorduraCorporal = "";
}