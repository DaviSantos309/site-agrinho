// =========================
// EFEITO DIGITANDO
// =========================

const texto =
"Agro Forte, Futuro Sustentável";

let i = 0;

function escrever() {

    if(i < texto.length){

        document.getElementById("typing").innerHTML += texto.charAt(i);

        i++;

        setTimeout(escrever, 100);
    }
}

escrever();


// =========================
// CONTADORES ANIMADOS
// =========================

const contadores =
document.querySelectorAll(".contador");

contadores.forEach(contador => {

    function atualizar(){

        const alvo =
        +contador.getAttribute("data-target");

        const atual =
        +contador.innerText;

        const incremento =
        alvo / 100;

        if(atual < alvo){

            contador.innerText =
            Math.ceil(atual + incremento);

            setTimeout(atualizar, 25);
        }
        else{

            contador.innerText = alvo;
        }
    }

    atualizar();

});


// =========================
// QUIZ
// =========================

function respostaCorreta(){

    document.getElementById(
        "resultadoQuiz"
    ).innerHTML =
    "✅ Correto! Essa prática ajuda a preservar recursos naturais.";
}

function respostaErrada(){

    document.getElementById(
        "resultadoQuiz"
    ).innerHTML =
    "❌ Incorreto! O desperdício prejudica a sustentabilidade.";
}


// =========================
// FORMULÁRIO
// =========================

document.getElementById("formulario")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Mensagem enviada com sucesso!"
    );

    this.reset();
});