function calculaIMC(peso, altura) {
    return imcCalculado = (peso / (altura * altura)).toFixed(2);
}

function verificaECalcula () {
    var alunos = document.querySelectorAll('.aluno');
    alunos.forEach(aluno => {
        let pesoDOM = aluno.querySelector('.info-peso');
        let alturaDOM = aluno.querySelector('.info-altura');
        let peso = parseFloat(pesoDOM.textContent);
        let altura = parseFloat(alturaDOM.textContent);
        let imc = aluno.querySelector('.info-imc');
        valida(peso, altura, imc, alturaDOM, pesoDOM, aluno);     
    });
} 

verificaECalcula();