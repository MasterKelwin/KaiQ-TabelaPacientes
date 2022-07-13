// VALIDA IMC

var corrigiu = false;

function valida (peso, altura, imc, alturaDOM, pesoDOM, aluno) {
    if(peso > 0 && peso < 400 && altura > 0.5 && altura < 3) {
        calculaIMC(peso, altura);
        alturaDOM.classList.remove('dadoInvalido');
        alturaDOM.textContent = altura;
        pesoDOM.classList.remove('dadoInvalido');
        pesoDOM.textContent = peso;
        imc.classList.remove('dadoInvalido');
        imc.textContent = imcCalculado;
        if (!corrigiu) {
            palpita(corrigiu, aluno);
        }
    }

    if(altura < 0.5 || altura >2.9) {
        imc.textContent = "Dados inválidos";
        alturaDOM.textContent = "Altura Inválida";
        alturaDOM.classList.add('dadoInvalido');
        imc.classList.add('dadoInvalido');
        aluno.classList.add('errou');

        setTimeout(() => {  //RESPONSÁVEL POR CORRIGIR
            let alturaCorrigida = parseFloat(prompt("Altura inválida, informe novamente. Digite '.' ao invés de ','"));
            console.log(alturaCorrigida)
            while(alturaCorrigida < 0.5 || alturaCorrigida > 3) {
                let novaAltura = parseFloat(prompt("Altura inválida, informe novamente. Digite '.' ao invés de ','"));
                alturaCorrigida = novaAltura;
            }
            calculaIMC(peso, alturaCorrigida);
            alturaDOM.textContent = alturaCorrigida;
            corrigiu = true;
            palpita(corrigiu, aluno);
        }, 500);
    }   

    if(peso <= 0 || peso > 400) {
        imc.textContent = "Dados inválidos";
        pesoDOM.textContent = "Peso Inválido";
        pesoDOM.classList.add('dadoInvalido');
        imc.classList.add('dadoInvalido');
        aluno.classList.add('errou');

        setTimeout(() => {  //RESPONSÁVEL POR CORRIGIR
            let pesoCorrigido = parseFloat(prompt("Peso inválido, informe novamente. Digite '.' ao invés de ','"));
            while(pesoCorrigido <= 0 || pesoCorrigido > 400) {
                let novoPeso = parseFloat(prompt("Peso inválido, informe novamente. Digite '.' ao invés de ','"));
                pesoCorrigido = novoPeso;
            }
            calculaIMC(pesoCorrigido, altura);
            pesoDOM.textContent = pesoCorrigido;
            corrigiu = true;
            palpita(corrigiu, aluno);
        }, 500);
    } 
}