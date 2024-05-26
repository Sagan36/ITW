

function maintainAudio() {
    const audioElement = document.getElementById('background-music');
    if (audioElement) {
        const savedTime = localStorage.getItem('audioTime');
        const isMuted = localStorage.getItem('audioMuted') === 'true';

        if (savedTime !== null) {
            audioElement.currentTime = parseFloat(savedTime);
        }

        audioElement.muted = isMuted;

        window.addEventListener('beforeunload', () => {
            localStorage.setItem('audioTime', audioElement.currentTime);
            localStorage.setItem('audioMuted', audioElement.muted);
        });

        const muteButton = document.getElementById('botaoAudio');
        if (muteButton) {
            muteButton.addEventListener('click', () => {
                audioElement.muted = !audioElement.muted;
                localStorage.setItem('audioMuted', audioElement.muted);
                muteButton.textContent = audioElement.muted ? 'Ativar Áudio' : 'Desativar Áudio';
            });

            muteButton.textContent = audioElement.muted ? 'Ativar Áudio' : 'Desativar Áudio';
        }
    }
}

document.addEventListener("DOMContentLoaded", maintainAudio);
