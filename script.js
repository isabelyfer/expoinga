// Aumentar e reduzir fonte
let fonteAtual = 1.1;

function ajustarFonte(fator) {
    const corpo = document.querySelector("body");
    fonteAtual += fator;
    corpo.style.fontSize = `${fonteAtual}em`;
}

// Leitura do conteúdo em voz alta
function lerTexto() {
    const texto = document.querySelector("body").innerText;
    const fala = new SpeechSynthesisUtterance(texto);
    speechSynthesis.speak(fala);
}

// Ativar atalhos de teclado (ex: Shift + L para leitura)
document.addEventListener("keydown", (e) => {
    if (e.shiftKey && e.key.toLowerCase() === 'l') lerTexto();
});
