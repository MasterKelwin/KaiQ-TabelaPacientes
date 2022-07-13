var campoBusca = document.querySelector('#buscaAluno');

campoBusca.addEventListener('input', () => {
    var alunos = document.querySelectorAll('.aluno');
    if(campoBusca.value.length > 0) {
        alunos.forEach(aluno => {
            let nome = (aluno.querySelector('.info-nome')).textContent;
            let regex = new RegExp(campoBusca.value, "i");
            if (regex.test(nome)) {
                aluno.classList.remove("invisivel");
            } else aluno.classList.add("invisivel");
        })
        
    } else {
        alunos.forEach(aluno => aluno.classList.remove('invisivel'));
    }
});