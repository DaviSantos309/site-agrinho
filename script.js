// Botão Saiba Mais
document.getElementById("saibaMais").addEventListener("click", () => {
    document
        .getElementById("sobre")
        .scrollIntoView({ behavior: "smooth" });
});

// Contador animado
const contador = document.getElementById("contador");

let valor = 0;
const meta = 50000;

const animarContador = () => {
    const incremento = Math.ceil(meta / 200);

    const intervalo = setInterval(() => {
        valor += incremento;

        if (valor >= meta) {
            valor = meta;
            clearInterval(intervalo);
        }

        contador.textContent = valor.toLocaleString("pt-BR");
    }, 20);
};

// Inicia quando a página carregar
window.addEventListener("load", animarContador);

// Formulário
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
});