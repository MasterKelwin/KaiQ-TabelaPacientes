var view = 3;

function atualizaView(number) {
    var alunos = document.querySelectorAll('.aluno');
    
    if(alunos.length >= view && !primeiraVez) {
        let teste = document.querySelector('.main');  
        teste.style.height = "200vh";  
    }
    if(!primeiraVez) {
        view = view + (number*2);
        var primeiraVez = true;
    }

}