let imagens = [
    "imagens/IMG_261.jpeg",
    "imagens/IMG_262.jpeg",
    "imagens/IMG_263.jpeg",
    "imagens/IMG_264.jpeg",
    "imagens/IMG_265.jpeg",
    "imagens/IMG_266.jpeg",
    "imagens/IMG_268.jpeg",
    "imagens/IMG_269.jpeg"
];

let index = 0;

function atualizarImagem() {
    document.getElementById("imagens").src = imagens[index];
}

function proxima() {
    index++;

    if (index >= imagens.length) {
        index = 0;
    }

    atualizarImagem();
}

function anterior() {
    index--;

    if (index < 0) {
        index = imagens.length - 1;
    }

    atualizarImagem();
}

setInterval(proxima, 3000);