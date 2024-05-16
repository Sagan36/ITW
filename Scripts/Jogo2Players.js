let player1Pairs = 0;
let player2Pairs = 0;
let currentPlayer = 1;
let countdownTimer; 

function shuffleBoard() {
    const cards = document.querySelectorAll('.cartinha');
    cards.forEach(card => {
        const randomPos = Math.floor(Math.random() * 20); 
        card.style.order = randomPos;
    });
}

function startGame() {
    shuffleBoard();
    startTimer(); 
}

function flipCard() {
    if (lockBoard) return; 

    // Impede que o jogador clique na mesma carta duas vezes
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        // Primeira carta virada
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    // Segunda carta virada
    secondCard = this;

    checkForMatch(); // Verifica se houve um par

    // Atualiza as cartas viradas
    firstCard = null;
    secondCard = null;
}

function checkForMatch() {
    let isMatch = firstCard.dataset.card === secondCard.dataset.card;

    if (isMatch) {
        disableCards(); 
        updatePlayerScore(); 
    } else {
        unflipCards(); 
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
    lockBoard = true; 
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false; 
    }, 1500);
}

function updatePlayerScore() {
    
}

function startTimer() {
    let timer = 15; 
    gameActive = true; 
    countdownTimer = setInterval(() => {
        timer--;
        updateTimerDisplay(timer); 
        if (timer === 0) {
            clearInterval(countdownTimer); 
            switchPlayer();
            startTimer(); 
        }
    }, 1000); 
}

function updateTimerDisplay(time) {
    let player1TimeDisplay = document.getElementById('player1Time');
    let player2TimeDisplay = document.getElementById('player2Time');

    if (currentPlayer === 1) {
        player1TimeDisplay.textContent = time < 10 ? `0${time}` : time;
    } else {
        player2TimeDisplay.textContent = time < 10 ? `0${time}` : time;
    }
}

function switchPlayer() {
    currentPlayer = (currentPlayer === 1) ? 2 : 1; 
}

document.querySelectorAll('.cartinha').forEach(card => {
    card.addEventListener('click', flipCard);
});

document.getElementById('btnStartGame').addEventListener('click', () => {
    startGame();
});