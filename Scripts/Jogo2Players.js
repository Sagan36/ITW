const BOTAO_COMECAR_JOGO = "btnStartGame"

//Objetos que possamos fazer
let Customizacoes = {
    Dificuldade: "Normal",
    Tempo: "Cronometro",
}

// vars para o jogo que vai mudar
var FoundPairsPlayer1 = 0;
var FoundPairsPlayer2 = 0;
var CurrentPlayer = 1;
var CardListDificil = [
    'Normal', 'Fighting', 'Dark', 'Fairy', 'Water', 'Grass', 'Fire', 'Steel', 'Electric', 'Poison'
]

var Rows = 4;
var Collums = 5;
var Lifes = 0;
var Board = [];
var timerInterval = null;
var player1Time = 15;
var player2Time = 15;
var firstCard = null;
var secondCard = null;
var lockBoard = false;

function PointsUpdater(Time, MatchedPairs1, MatchedPairs2, Lives, UnMatched){
    document.getElementById('Time').textContent = Time;
    document.getElementById('MatchedPairs1').textContent = MatchedPairs1;
    document.getElementById('MatchedPairs2').textContent = MatchedPairs2;
    document.getElementById('Lives').textContent = Lives;
    document.getElementById('UnMatchedPairs').textContent = UnMatched;
}

window.addEventListener("load", VamoBora);

function VamoBora(){
    Shuffle();
    addEventOptions();
    StartGame();
}

function addEventOptions() {
   
    document.getElementById(BOTAO_COMECAR_JOGO).addEventListener("click", StartGame);
}

function Shuffle(){
    CardList = CardListDificil.concat(CardListDificil); // faz com que sejam 20 cartas
    for (let x = 0; x < CardList.length; x++){
        var i = Math.floor((Math.random()) * CardList.length);
        let f = CardList[i];
        CardList[i] = CardList[x];
        CardList[x] = f;
    }
}

function StartGame(){
    addEventOptions();
    for (let r = 0; r < Rows; r++){
        let rows = [];
        for(let c = 0; c < Collums; c++){
            let CardImgName = CardList.pop();
            rows.push(CardImgName);
            let card = document.createElement('img');
            card.id = r.toString() + '|' + c.toString(); // Cria id da carta como a posição dela no tabuleiro
            card.src = '/Media/' + CardImgName + '.jpg'
            card.classList.add("cartinha");
            card.addEventListener('click', handleCardClick);
            document.getElementById('Jogo').append(card);
        }
        Board.push(rows);
    }
    
    console.log(Board);
    setTimeout(BackofTheCards, 0);
    startPlayerTurn();
}

function BackofTheCards(){
    for (let r = 0; r < Rows; r++) {
        for (let c = 0; c < Collums; c++) {
            let card = document.getElementById(r.toString() + '|' + c.toString());
            card.src = "/Media/backcard.jpeg";
        }
    }
}

function startPlayerTurn(){
    clearInterval(timerInterval);
    if (CurrentPlayer === 1) {
        player1Time = 15;
        timerInterval = setInterval(() => {
            player1Time--;
            document.getElementById('Time').textContent = player1Time;
            if (player1Time === 0) {
                clearInterval(timerInterval); 
                switchPlayer(); 
            }
        }, 1000);
    } else {
        player2Time = 15;
        timerInterval = setInterval(() => {
            player2Time--;
            document.getElementById('Time').textContent = player2Time;
            if (player2Time === 0) {
                clearInterval(timerInterval); 
                switchPlayer(); 
            }
        }, 1000);
    }
}

function switchPlayer() {
    CurrentPlayer = CurrentPlayer === 1 ? 2 : 1;
    startPlayerTurn();
}

function updatePoints() {
    if (CurrentPlayer === 1) {
        FoundPairsPlayer1++;
        document.getElementById('MatchedPairs1').textContent = FoundPairsPlayer1;
    } else {
        FoundPairsPlayer2++;
        document.getElementById('MatchedPairs2').textContent = FoundPairsPlayer2;
    }
    if (FoundPairsPlayer1 + FoundPairsPlayer2 === (Rows * Collums) / 2) {
        clearInterval(timerInterval);
        determineWinner();
    } else {
        startPlayerTurn(); 
    }
}

function determineWinner() {
    if (FoundPairsPlayer1 > FoundPairsPlayer2) {
        alert('Player 1 wins!');
    } else if (FoundPairsPlayer2 > FoundPairsPlayer1) {
        alert('Player 2 wins!');
    } else {
        alert('It\'s a tie!');
    }
}

function handleCardClick(event) {
    if (lockBoard) return;
    const clickedCard = event.target;
    if (clickedCard === firstCard) return;

    clickedCard.src = '/Media/' + Board[clickedCard.id.split('|')[0]][clickedCard.id.split('|')[1]] + '.jpg';

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
        switchPlayer();
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
    }, 1500);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}
