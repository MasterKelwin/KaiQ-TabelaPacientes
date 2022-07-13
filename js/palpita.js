// PALPITA

function avaliaIMC (aluno) {
    if(imcCalculado > 18.5 && imcCalculado < 25.1){
        aluno.classList.add('palpite-saudavel');
    } else if(imcCalculado > 15 && imcCalculado < 30) {
        aluno.classList.add('palpite-insaudavel');
    } else {
        aluno.classList.add('palpite-muito-insaudavel');
    }
}

function palpita(corrigiu, aluno) {
    if(!corrigiu) {
        avaliaIMC(aluno);
    } else {
        document.querySelectorAll('.errou').forEach(aluno => {
            let pesoCorrigido = parseFloat(aluno.querySelector('.info-peso').textContent);
            let alturaCorrigida = parseFloat(aluno.querySelector('.info-altura').textContent);
            calculaIMC(pesoCorrigido, alturaCorrigida);  
            aluno.querySelector('.info-imc').textContent = imcCalculado                  

            avaliaIMC(aluno);
            aluno.querySelector('.info-peso').classList.remove('dadoInvalido');
            aluno.querySelector('.info-altura').classList.remove('dadoInvalido');
            aluno.querySelector('.info-imc').classList.remove('dadoInvalido');
            corrigiu = false;   
        })}
}

