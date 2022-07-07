var pacientes = document.querySelectorAll('.paciente');
var imcCalculado;

function calculaIMC(peso, altura) {
    return imcCalculado = (peso / (altura * altura)).toFixed(2);
}

function verificaECalcula () {
    for (i = 0; i < pacientes.length; i++) {
        var pesoDOM = pacientes[i].querySelector('.info-peso');
        var alturaDOM = pacientes[i].querySelector('.info-altura');
    
        var peso = parseFloat(pesoDOM.textContent);
        var altura = parseFloat(alturaDOM.textContent);
        var imc = pacientes[i].querySelector('.info-imc');
        
        valida(peso, altura, imc, alturaDOM, pesoDOM);       
    }
}

verificaECalcula();