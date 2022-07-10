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
        let alunosCorrigido = document.querySelectorAll('.errou');
        for (i = 0; i < alunosCorrigido.length; i++) {
            
            let pesoDOM = alunosCorrigido[i].querySelector('.info-peso');
            let alturaDOM = alunosCorrigido[i].querySelector('.info-altura');
            let imcCorrigido = alunosCorrigido[i].querySelector('.info-imc');

            let pesoCorrigido = parseFloat(pesoDOM.textContent);
            let alturaCorrigida = parseFloat(alturaDOM.textContent);
              
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