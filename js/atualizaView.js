var view = 3;

function atualizaView(number) {
    var alunos = document.querySelectorAll('.aluno');
    console.log(alunos.length);
    console.log(view);
    if(alunos.length >= view && !primeiraVez) {
        var teste = document.querySelector('.main');  
        teste.style.height = "200vh";  
    }
    if(!primeiraVez) {
        view = view + (number*2);
        var primeiraVez = true;
    }

}