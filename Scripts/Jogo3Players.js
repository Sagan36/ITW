const BOTAO_COMECAR_JOGO = "btnStartGame";

// Objetos de personalização
let Customizacoes = {
    Dificuldade: "Normal",
    Tempo: "Cronometro",
};

// Variáveis do jogo que irão mudar
var FoundPairsPlayer1 = 0;
var FoundPairsPlayer2 = 0;
var FoundPairsPlayer3 = 0;
var TotalFlippedCardsPlayer1 = 0;
var TotalFlippedCardsPlayer2 = 0;
var TotalFlippedCardsPlayer3 = 0;
let player1Time = 15;
let player2Time = 15;
let player3Time = 15;
let timerInterval;
let CurrentPlayer = 1;
var CardListDificil = [
    'Normal', 'Fighting', 'Dark', 'Fairy', 'Water', 'Grass', 'Fire', 'Steel', 'Electric', 'Poison'
];

var Rows = 4;
var Collums = 5;
var Lifes = 0;
var Board = [];
var firstCard = null;
var secondCard = null;
var lockBoard = false;
var gameStarted = false; 

window.addEventListener("load", VamoBora);

function VamoBora() {
    Shuffle();
    createBoard();
    addEventOptions();
}

function addEventOptions() {
    document.getElementById(BOTAO_COMECAR_JOGO).addEventListener("click", StartGame);
}

function Shuffle() {
    CardList = CardListDificil.concat(CardListDificil); // faz com que sejam 20 cartas
    for (let x = 0; x < CardList.length; x++) {
        var i = Math.floor((Math.random()) * CardList.length);
        let f = CardList[i];
        CardList[i] = CardList[x];
        CardList[x] = f;
    }
}

function createBoard() {
    for (let r = 0; r < Rows; r++) {
        let rows = [];
        for (let c = 0; c < Collums; c++) {
            let CardImgName = CardList.pop();
            rows.push(CardImgName);
            let card = document.createElement('img');
            card.id = r.toString() + '|' + c.toString(); // Cria id da carta como a posição dela no tabuleiro
            card.src = '/Media/backcard.jpeg';
            card.classList.add("cartinha");
            card.addEventListener('click', handleCardClick);
            document.getElementById('Jogo').append(card);
        }
        Board.push(rows);
    }
}

function StartGame() {

    // Reiniciar variáveis de jogo
    FoundPairsPlayer1 = 0;
    FoundPairsPlayer2 = 0;
    FoundPairsPlayer3 = 0;
    player1Time = 15;
    player2Time = 15;
    player3Time = 15;
    CurrentPlayer = 1;
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    gameStarted = true; 

    document.getElementById('MatchedPairs1').textContent = FoundPairsPlayer1;
    document.getElementById('MatchedPairs2').textContent = FoundPairsPlayer2;
    document.getElementById('MatchedPairs3').textContent = FoundPairsPlayer3;
    document.getElementById('Time1').textContent = player1Time;
    document.getElementById('Time2').textContent = player2Time;
    document.getElementById('Time3').textContent = player3Time;

    startPlayerTurn();
}

function startPlayerTurn() {
    clearInterval(timerInterval);

    if (CurrentPlayer === 1) {
        player1Time = 15;
        document.getElementById('Time1').textContent = player1Time;
        timerInterval = setInterval(() => {
            player1Time--;
            document.getElementById('Time1').textContent = player1Time;
            if (player1Time === 0) {
                handleTimeout();
            }
        }, 1000);
    } else if (CurrentPlayer === 2) {
        player2Time = 15;
        document.getElementById('Time2').textContent = player2Time;
        timerInterval = setInterval(() => {
            player2Time--;
            document.getElementById('Time2').textContent = player2Time;
            if (player2Time === 0) {
                handleTimeout();
            }
        }, 1000);
    } else {
        player3Time = 15;
        document.getElementById('Time3').textContent = player3Time;
        timerInterval = setInterval(() => {
            player3Time--;
            document.getElementById('Time3').textContent = player3Time;
            if (player3Time === 0) {
                handleTimeout();
            }
        }, 1000);
    }
}

function handleTimeout() {
    clearInterval(timerInterval);
    if (firstCard) {
        firstCard.src = '/Media/backcard.jpeg';
    }
    if (secondCard) {
        secondCard.src = '/Media/backcard.jpeg';
    }
    resetBoard();
    switchPlayer();
}

function switchPlayer() {
    if (CurrentPlayer === 1) {
        CurrentPlayer = 2;
    } else if (CurrentPlayer === 2) {
        CurrentPlayer = 3;
    } else {
        CurrentPlayer = 1;
    }
    startPlayerTurn();
}

function updatePoints() {
    if (CurrentPlayer === 1) {
        FoundPairsPlayer1++;
        document.getElementById('MatchedPairs1').textContent = FoundPairsPlayer1;
    } else if (CurrentPlayer === 2) {
        FoundPairsPlayer2++;
        document.getElementById('MatchedPairs2').textContent = FoundPairsPlayer2;
    } else {
        FoundPairsPlayer3++;
        document.getElementById('MatchedPairs3').textContent = FoundPairsPlayer3;
    }
    if (FoundPairsPlayer1 + FoundPairsPlayer2 + FoundPairsPlayer3 === (Rows * Collums) / 2) {
        clearInterval(timerInterval);
        determineWinner();
    } else {
        resetPlayerTime();
    }
}

function resetPlayerTime() {
    clearInterval(timerInterval);
    if (CurrentPlayer === 1) {
        player1Time = 15;
        document.getElementById('Time1').textContent = player1Time;
        timerInterval = setInterval(() => {
            player1Time--;
            document.getElementById('Time1').textContent = player1Time;
            if (player1Time === 0) {
                handleTimeout();
            }
        }, 1000);
    } else if (CurrentPlayer === 2) {
        player2Time = 15;
        document.getElementById('Time2').textContent = player2Time;
        timerInterval = setInterval(() => {
            player2Time--;
            document.getElementById('Time2').textContent = player2Time;
            if (player2Time === 0) {
                handleTimeout();
            }
        }, 1000);
    } else {
        player3Time = 15;
        document.getElementById('Time3').textContent = player3Time;
        timerInterval = setInterval(() => {
            player3Time--;
            document.getElementById('Time3').textContent = player3Time;
            if (player3Time === 0) {
                handleTimeout();
            }
        }, 1000);
    }
}

function determineWinner() {
    let maxPairs = Math.max(FoundPairsPlayer1, FoundPairsPlayer2, FoundPairsPlayer3);
    let winners = [];

    if (FoundPairsPlayer1 === maxPairs) {
        winners.push(1);
    }
    if (FoundPairsPlayer2 === maxPairs) {
        winners.push(2);
    }
    if (FoundPairsPlayer3 === maxPairs) {
        winners.push(3);
    }

    if (winners.length === 1) {
        alert(`Ganhou o Jogador ${winners[0]}. Parabéns!`);
    } else {
        let minFlippedCards = Infinity;
        for (let winner of winners) {
            if (winner === 1 && TotalFlippedCardsPlayer1 < minFlippedCards) {
                minFlippedCards = TotalFlippedCardsPlayer1;
            } else if (winner === 2 && TotalFlippedCardsPlayer2 < minFlippedCards) {
                minFlippedCards = TotalFlippedCardsPlayer2;
            } else if (winner === 3 && TotalFlippedCardsPlayer3 < minFlippedCards) {
                minFlippedCards = TotalFlippedCardsPlayer3;
            }
        }
        winners = winners.filter(winner => {
            if (winner === 1 && TotalFlippedCardsPlayer1 === minFlippedCards) {
                return true;
            } else if (winner === 2 && TotalFlippedCardsPlayer2 === minFlippedCards) {
                return true;
            } else if (winner === 3 && TotalFlippedCardsPlayer3 === minFlippedCards) {
                return true;
            }
            return false;
        });

        if (winners.length === 1) {
            alert(`Ganhou o Jogador ${winners[0]} pelo menor número de cartas viradas. Parabéns!`);
        } else {
            alert(`Empate entre Jogadores ${winners.join(' e ')} por terem o mesmo número de pares feitos e número de cartas viradas. Grande Jogo!`);
        }
    }

    resetGame();
}

function handleCardClick(event) {
    if (!gameStarted || lockBoard) return; 
    const clickedCard = event.target;
    if (clickedCard === firstCard) return;

    const [r, c] = clickedCard.id.split('|');
    clickedCard.src = '/Media/' + Board[r][c] + '.jpg';

    if (!firstCard) {
        firstCard = clickedCard;
        return;
    }

    secondCard = clickedCard;
    lockBoard = true;

    if (firstCard.src === secondCard.src) {
        disableCards();
        updatePoints();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', handleCardClick);
    secondCard.removeEventListener('click', handleCardClick);
    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.src = '/Media/backcard.jpeg';
        secondCard.src = '/Media/backcard.jpeg';
        resetBoard();
        resetPlayerTime();
        switchPlayer();
    }, 1500);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

document.getElementById('btnResetGame').addEventListener('click', resetGame);

function resetGame() {
    clearInterval(timerInterval); 
    FoundPairsPlayer1 = 0;
    FoundPairsPlayer2 = 0;
    FoundPairsPlayer3 = 0;
    TotalFlippedCardsPlayer1 = 0;
    TotalFlippedCardsPlayer2 = 0;
    TotalFlippedCardsPlayer3 = 0;
    player1Time = 15;
    player2Time = 15;
    player3Time = 15;
    CurrentPlayer = 1;
    Board = [];
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    gameStarted = false; 
    document.getElementById('Jogo').innerHTML = '';
    document.getElementById('MatchedPairs1').textContent = FoundPairsPlayer1;
    document.getElementById('MatchedPairs2').textContent = FoundPairsPlayer2;
    document.getElementById('MatchedPairs3').textContent = FoundPairsPlayer3;
    document.getElementById('Time1').textContent = player1Time;
    document.getElementById('Time2').textContent = player2Time;
    document.getElementById('Time3').textContent = player3Time;
    Shuffle();
    createBoard();
}
