var alunos = document.querySelectorAll('.aluno');
var imcCalculado;

function calculaIMC(peso, altura) {
    return imcCalculado = (peso / (altura * altura)).toFixed(2);
}

function verificaECalcula () {
    for (i = 0; i < alunos.length; i++) {
        var pesoDOM = alunos[i].querySelector('.info-peso');
        var alturaDOM = alunos[i].querySelector('.info-altura');
    
        var peso = parseFloat(pesoDOM.textContent);
        var altura = parseFloat(alturaDOM.textContent);
        var imc = alunos[i].querySelector('.info-imc');
        
        valida(peso, altura, imc, alturaDOM, pesoDOM);       
    }
}

verificaECalcula();