const imagensCarrossel = document.querySelectorAll(".carrossel-imagem");
const indicadoresCarrossel = document.querySelectorAll(".carrossel-indicadores button");
const botaoAnterior = document.querySelector(".carrossel-controle.anterior");
const botaoProximo = document.querySelector(".carrossel-controle.proximo");

let imagemAtual = 0;

imagensCarrossel.forEach((imagem) => {
    imagem.addEventListener("error", () => {
        imagem.src = "imagens/fazenda-espacial.png";
    });
});

function mostrarImagem(indice) {
    imagensCarrossel[imagemAtual].classList.remove("ativa");
    indicadoresCarrossel[imagemAtual].classList.remove("ativo");

    imagemAtual = (indice + imagensCarrossel.length) % imagensCarrossel.length;

    imagensCarrossel[imagemAtual].classList.add("ativa");
    indicadoresCarrossel[imagemAtual].classList.add("ativo");
}

if (imagensCarrossel.length > 0) {
    botaoAnterior.addEventListener("click", () => {
        mostrarImagem(imagemAtual - 1);
    });

    botaoProximo.addEventListener("click", () => {
        mostrarImagem(imagemAtual + 1);
    });

    indicadoresCarrossel.forEach((indicador, indice) => {
        indicador.addEventListener("click", () => {
            mostrarImagem(indice);
        });
    });
}
