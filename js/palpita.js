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

            var imcCorrigido = pacientesCorrigido[i].querySelector('.info-imc');
            var pesoCorrigido = parseFloat((pacientesCorrigido[i].querySelector('.info-peso')).textContent);
            var alturaCorrigida = parseFloat((pacientesCorrigido[i].querySelector('.info-altura')).textContent);
              
            calculaIMC(pesoCorrigido, alturaCorrigida);        
            imcCorrigido.textContent = imcCalculado;

            if(imcCalculado > 18.5 && imcCalculado < 25.1){
                pacientesCorrigido[i].classList.add('palpite-saudavel');
                
            } else if(imcCalculado > 15 && imcCalculado < 30) {
                pacientesCorrigido[i].classList.add('palpite-insaudavel');
            } else {
                pacientesCorrigido[i].classList.add('palpite-muito-insaudavel');
            }

            var pesoDOM = pacientesCorrigido[i].querySelector('.info-peso');
            var alturaDOM = pacientesCorrigido[i].querySelector('.info-altura');
            var imc = pacientesCorrigido[i].querySelector('.info-imc');

            alturaDOM.classList.remove('dadoInvalido');
            pesoDOM.classList.remove('dadoInvalido');
            imc.classList.remove('dadoInvalido');
        }
    }
    corrigiu = false;   
}