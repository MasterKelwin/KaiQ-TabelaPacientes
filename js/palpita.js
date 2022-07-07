// PALPITA

function palpita(verificador) {
    if(!verificador) {
        if(imcCalculado > 18.5 && imcCalculado < 25.1){
            alunos[i].classList.add('palpite-saudavel');
        } else if(imcCalculado > 15 && imcCalculado < 30) {
            alunos[i].classList.add('palpite-insaudavel');
        } else {
            alunos[i].classList.add('palpite-muito-insaudavel');
        }
    } else {
        var alunosCorrigido = document.querySelectorAll('.errou');
        for (i = 0; i < alunosCorrigido.length; i++) {
            
            var pesoDOM = alunosCorrigido[i].querySelector('.info-peso');
            var alturaDOM = alunosCorrigido[i].querySelector('.info-altura');
            var imcCorrigido = alunosCorrigido[i].querySelector('.info-imc');

            var pesoCorrigido = parseFloat(pesoDOM.textContent);
            var alturaCorrigida = parseFloat(alturaDOM.textContent);
              
            calculaIMC(pesoCorrigido, alturaCorrigida);        
            imcCorrigido.textContent = imcCalculado;

            if(imcCalculado > 18.5 && imcCalculado < 25.1){
                alunosCorrigido[i].classList.add('palpite-saudavel');
                
            } else if(imcCalculado > 15 && imcCalculado < 30) {
                alunosCorrigido[i].classList.add('palpite-insaudavel');
            } else {
                alunosCorrigido[i].classList.add('palpite-muito-insaudavel');
            }

            alturaDOM.classList.remove('dadoInvalido');
            pesoDOM.classList.remove('dadoInvalido');
            imcCorrigido.classList.remove('dadoInvalido');
        }
    }
    corrigiu = false;   
}