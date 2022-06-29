// VALIDA IMC

var corrigiu = false;

function valida (peso, altura, imc, alturaDOM, pesoDOM) {
    if(peso > 0 && peso < 400 && altura > 0.5 && altura < 3) {
        calculaIMC(peso, altura);
        alturaDOM.classList.remove('dadoInvalido');
        alturaDOM.textContent = altura;
        pesoDOM.classList.remove('dadoInvalido');
        pesoDOM.textContent = peso;
        imc.classList.remove('dadoInvalido');
        imc.textContent = imcCalculado.toFixed(2);
        if (!corrigiu) {
            palpita(corrigiu);
        }

    }

    if(altura < 0.5 || altura >2.9) {
        imc.textContent = "Dados inválidos";
        alturaDOM.textContent = "Altura Inválida";
        alturaDOM.classList.add('dadoInvalido');
        imc.classList.add('dadoInvalido');
        pacientes[i].classList.add('errou');

        setTimeout(() => {  //RESPONSÁVEL POR CORRIGIR
            var alturaCorrigida = parseFloat(prompt("Altura inválida, informe novamente. Digite '.' ao invés de ','"));
            calculaIMC(peso, alturaCorrigida);
            alturaDOM.textContent = alturaCorrigida;
            corrigiu = true;
            palpita(corrigiu);
        }, 500);
    }   

    if(peso <= 0 || peso > 400) {
        imc.textContent = "Dados inválidos";
        pesoDOM.textContent = "Peso Inválido";
        pesoDOM.classList.add('dadoInvalido');
        imc.classList.add('dadoInvalido');
        pacientes[i].classList.add('errou');

        setTimeout(() => {  //RESPONSÁVEL POR CORRIGIR
            var pesoCorrigido = parseFloat(prompt("Peso inválido, informe novamente. Digite '.' ao invés de ','"));
            calculaIMC(pesoCorrigido, altura);
            pesoDOM.textContent = pesoCorrigido;
            corrigiu = true;
            palpita(corrigiu);
        }, 500);
    } 
}