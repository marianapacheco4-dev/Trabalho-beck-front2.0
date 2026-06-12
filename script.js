let imagens = [
    "IMG_261.jpeg",
    "IMG_262.jpeg",
    "IMG_263.jpeg",
    "IMG_264.jpeg",
    "IMG_265.jpeg",
    "IMG_266.jpeg",
    "IMG_268.jpeg",
    "IMG_269.jpeg"
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
