const input = document.querySelector('#password');
const checkbox = document.querySelector('#mostraSenha');
var senha = "movimento";
const querobel = document.querySelector('.querobel');
const trace1 = document.querySelector('.trace1');
const trace2 = document.querySelector('.trace2');
const trace3 = document.querySelector('.trace3');
const tag = document.querySelector('.tag');

input.focus();

function exibeSenha() {
    if(checkbox.checked) {
        input.type = "text";
    } else {
        input.type = "password"
    }
}

function loga() {
    if (input.value == senha) {
        animacaoKaiQ();
    } else {
        alert("senha incorreta")
    }
}

function animacaoKaiQ () {
    setTimeout(() => {  
        querobel.classList.add('querobel-ativo');
    }, 10);

    setTimeout(() => {  
        trace1.classList.add('doble-trace-ativo');
        trace2.classList.add('doble-trace-ativo');
    }, 1500);

    setTimeout(() => {  
        trace3.classList.add('trace3-ativo');
    }, 2500);

    setTimeout(() => {  
        tag.classList.add('tag-ativo');
    }, 3500);  

    setTimeout(() => {
        redireciona();
    }, 4500);    
}

function redireciona() {
    window.location.href = "./calculador de IMC.html";
}

