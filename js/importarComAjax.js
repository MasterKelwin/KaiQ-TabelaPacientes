var botaoBusca = document.querySelector('#busca');

botaoBusca.addEventListener("click", function() {
    console.log("buscando alunos");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.send();

    xhr.addEventListener("load", function(){
        if (xhr.status == 200) {
            var resposta = xhr.responseText;

            var aluno = JSON.parse(resposta);
            

            aluno.forEach(function(aluno){
                var nome = aluno.nome;
                var peso = aluno.peso;
                var altura = aluno.altura;
                var gordura = aluno.gordura;
            
                geraHTML(nome, peso, altura, gordura);   
                calculaIMC(peso, altura);
            
                const palpitaImportado = (imcCalculado) => {
                    if(imcCalculado > 18.5 && imcCalculado < 25.1){
                        alunoGerado.classList.add('palpite-saudavel');
                    } else if(imcCalculado > 15 && imcCalculado < 30) {
                        alunoGerado.classList.add('palpite-insaudavel');
                    } else {
                        alunoGerado.classList.add('palpite-muito-insaudavel');
                    }
                }
            
                palpitaImportado(imcCalculado);

                
            });
            atualizaView(aluno.length);
        } else {
            alert("O servidor não foi encontrado, tente novamente mais tarde")
        }
    });
});
