var alunos = document.querySelectorAll('.aluno');
var imcCalculado;

function calculaIMC(peso, altura) {
    return imcCalculado = (peso / (altura * altura)).toFixed(2);
}

function verificaECalcula () {
    for (i = 0; i < alunos.length; i++) {
        let pesoDOM = alunos[i].querySelector('.info-peso');
        let alturaDOM = alunos[i].querySelector('.info-altura');
    
        let peso = parseFloat(pesoDOM.textContent);
        let altura = parseFloat(alturaDOM.textContent);
        let imc = alunos[i].querySelector('.info-imc');
        
        valida(peso, altura, imc, alturaDOM, pesoDOM);       
    }
}

verificaECalcula();