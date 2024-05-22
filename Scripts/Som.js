document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("background-music");
    const botao = document.getElementById("botaoAudio");


    const isMuted = localStorage.getItem("audioMuted") === "true";
    audio.muted = isMuted;
    botao.textContent = isMuted ? "Ativar Áudio" : "Desativar Áudio";

    botao.addEventListener("click", function() {
        if (audio.muted) {
            audio.muted = false;
            botao.textContent = "Desativar Áudio";
            localStorage.setItem("audioMuted", "false");
        } else {
            audio.muted = true;
            botao.textContent = "Ativar Áudio";
            localStorage.setItem("audioMuted", "true");
        }
    });
});
