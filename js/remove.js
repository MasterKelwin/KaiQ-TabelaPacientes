tabela.addEventListener("dblclick",(event) => {
    console.log(event);
    event.target.parentNode.classList.add("fade-out");

    setTimeout(() => {
        event.target.parentNode.remove();
    }, 500);    
});