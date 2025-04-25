// Responsividade para dispositivos móveis
function adjustForMobile() {
    const viewportWidth = window.innerWidth;

    if (viewportWidth <= 768) {
        document.body.style.fontSize = "14px";
        document.body.style.padding = "10px";
    } else {
        document.body.style.fontSize = "16px";
        document.body.style.padding = "20px";
    }
}

// Adiciona um listener para redimensionamento da janela
window.addEventListener("resize", adjustForMobile);

// Chama a função ao carregar a página
adjustForMobile();