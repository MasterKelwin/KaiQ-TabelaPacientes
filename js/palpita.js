// PALPITA

function palpita(verificador) {
    if(!verificador) {
        if(imcCalculado > 18.5 && imcCalculado < 25.1){
            pacientes[i].classList.add('palpite-saudavel');
        } else if(imcCalculado > 15 && imcCalculado < 30) {
            pacientes[i].classList.add('palpite-insaudavel');
        } else {
            pacientes[i].classList.add('palpite-muito-insaudavel');
        }
    } else {
        var pacientesCorrigido = document.querySelectorAll('.errou');
        for (i = 0; i < pacientesCorrigido.length; i++) {
            
            var pesoDOM = pacientesCorrigido[i].querySelector('.info-peso');
            var alturaDOM = pacientesCorrigido[i].querySelector('.info-altura');
            var imcCorrigido = pacientesCorrigido[i].querySelector('.info-imc');

            var pesoCorrigido = parseFloat(pesoDOM.textContent);
            var alturaCorrigida = parseFloat(alturaDOM.textContent);
              
            calculaIMC(pesoCorrigido, alturaCorrigida);        
            imcCorrigido.textContent = imcCalculado;

            if(imcCalculado > 18.5 && imcCalculado < 25.1){
                pacientesCorrigido[i].classList.add('palpite-saudavel');
                
            } else if(imcCalculado > 15 && imcCalculado < 30) {
                pacientesCorrigido[i].classList.add('palpite-insaudavel');
            } else {
                pacientesCorrigido[i].classList.add('palpite-muito-insaudavel');
            }

            alturaDOM.classList.remove('dadoInvalido');
            pesoDOM.classList.remove('dadoInvalido');
            imcCorrigido.classList.remove('dadoInvalido');
        }
    }
    corrigiu = false;   
}