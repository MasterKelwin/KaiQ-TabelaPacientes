var campoBusca = document.querySelector('#buscaAluno');

campoBusca.addEventListener('input', () => {
    var alunos = document.querySelectorAll('.aluno');
    if(campoBusca.value.length > 0) {
        for (i = 0; i < alunos.length; i++) {
            let aluno = alunos[i];
            let nome = (aluno.querySelector('.info-nome')).textContent;
            let regex = new RegExp(campoBusca.value, "i");

            if (regex.test(nome)) {
                aluno.classList.remove("invisivel");
            } else {
                aluno.classList.add("invisivel");
            }

        }   
    } else if (campoBusca.value.length == 0) {
        for (i = 0; i < alunos.length; i++) {
            alunos[i].classList.remove('invisivel');
        }
    }
});