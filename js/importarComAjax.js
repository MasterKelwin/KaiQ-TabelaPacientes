var botaoBusca = document.querySelector('#busca');

botaoBusca.addEventListener("click", function() {
    console.log("buscando alunos");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();

    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            let resposta = xhr.responseText;
            let alunos = JSON.parse(resposta);
            
            alunos.forEach(aluno => {         
                geraHTML(aluno.nome, aluno.peso, aluno.altura, aluno.gordura);   
                avaliaIMC(alunoGerado);                
            });
            atualizaView(alunos.length);
        } else alert("O servidor não foi encontrado, tente novamente mais tarde");
    });
});
