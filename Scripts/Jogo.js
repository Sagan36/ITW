//NOTA: NOS USAMOS O CONSOLE LOG PARA TERMOS A CERTEZA QUE O CODIGO ESTA A FUNCIONAR E 
//O PROFESSOR TAMBER TER ESTA ACERTEZA
//constantes que possamos fazer

const BOTAO_COMECAR_JOGO = "btnStartGame"
const BOTAO_APLICAR = "btnCustoms"
const BOTAO_TERMINAR = "btnFinnish"
const PARES_POR_ENCONTRAR = "UnMatchedPairs"
const PARES_ENCONTRADOS = "MatchedPairs"

//Objetos que possamos fazer
let Customizaçoes = {

    Dificuldade: "Hard",
    Tempo: "Cronometro",

}

// vars para o jogo que vai mudar

var CardListDificil = [

    'Normal',
    'Fighting',
    'Dark',
    'Fairy',
    'Water',
    'Grass',
    'Fire',
    'Steel',
    'Electric',
    'Poison'
]
var CardListNormal = [
    'Normal',
    'Fighting',
    'Dark',
    'Fairy',
    'Water',
    'Grass',
    'Fire',
    'Steel'
]
var CardListFacil= [

    'Normal',
    'Fighting',
    'Dark',
    'Fairy',
    'Water',
    'Grass'

]

var CurrentCardListDifficulty;

var Lifes = 0
var Board = []

window.addEventListener("load", VamoBora);

function VamoBora(){
    LivesMaker()
    addEventOptions()
    MakesBoard()
    
}

function addEventOptions() {
    document.getElementById("Dificuldade").addEventListener('change', DifficultyOptions);
    document.getElementById("Tempo").addEventListener('change', TimeOptions);
    document.getElementById(BOTAO_COMECAR_JOGO).addEventListener("click", StartGame)
    document.getElementById(BOTAO_APLICAR).addEventListener("click", CustomizationsBTN)
}


//-------------------------------------------------------------------FUNCOES QUE FAZEM O JOGO--------------------------------------------------------------------------
function Shuffle(){
    DifficultyChecker()
    CardList = CurrentCardListDifficulty.concat(CurrentCardListDifficulty)// faz com que sejam 20 cartas
    for (let x = 0; x < CardList.length; x++){

        var i = Math.floor((Math.random()) * CardList.length)
        let f = CardList[i] 
        CardList[i] = CardList[x];
        CardList[x] = f;
    }
}

var Rows = 0
var Collums = 0
function MakesBoard(){
UpdatesBoard()
Shuffle();
    for (let r = 0; r < Rows; r++){
        let rows = []
        for(let c = 0; c < Collums; c++){
            let CardImgName = CardList.pop();
            rows.push(CardImgName);
            let card = document.createElement('img');
            card.id = r.toString() + '|' + c.toString() // Cria id da carta como a posicao dele na board
            card.src = '/Media/' + CardImgName + '.jpg'
            card.classList.add("cartinha")
            document.getElementById('Jogo').append(card); 
            console.log(card)
            
        }
        Board.push(rows)
    }
document.getElementById(PARES_POR_ENCONTRAR).textContent = (Rows * Collums) / 2    
setTimeout(BackofTheCards,0)
}

function StartGame(){
    initializeTimer()
    for (let r = 0; r < Rows; r++){
        for(let c = 0; c < Collums; c++){
            let card = document.getElementById(r.toString() + '|' + c.toString());
            card.addEventListener("click", ClickableCards);
        }
    }

        setTimeout(BackofTheCards, 0)
}

function BackofTheCards(){
    DifficultyChecker()
    for (let r = 0; r < Rows; r++) {
        for (let c = 0; c < Collums; c++) {
        let card = document.getElementById(r.toString() + '|' + c.toString())
        card.src = "/Media/backcard.jpeg"
    
        }
    }
}

var FirstCard;
var SecondCard;

function ClickableCards(){
    
    if(this.src.includes("backcard")){//vemos se a carta no momento que aparece na board está virada para cima ou para baixo
        if(!FirstCard){
            FirstCard = this

            let position = FirstCard.id.split("|");
            let x = parseInt(positimion[0])
            let y = parseInt(position[1])

            FirstCard.src = "/Media/" + Board[x][y] + ".jpg"
        }else if(!SecondCard && this != FirstCard){
            SecondCard = this
            
            let position = SecondCard.id.split("|");
            let x = parseInt(position[0])
            let y = parseInt(position[1])

            SecondCard.src = "/Media/" + Board[x][y] + ".jpg"
            setTimeout(CardsChecker, 500)  
        }

    } 
}

let x = 0 // Isto e para conseguirmos que as vidas sejam as pokebolas para conseguirnmos os ids delas anteriormente formados na funcao LivesMaker
function CardsChecker(){
let img = document.getElementById(x)
console.log(x)
    if(FirstCard.src != SecondCard.src){
        img.src = 'Media/Checked.png'
        x = x + 1
        FirstCard.src = "/Media/backcard.jpeg"
        SecondCard.src = "/Media/backcard.jpeg"

    }else{
        document.getElementById(PARES_ENCONTRADOS).textContent = parseInt(document.getElementById(PARES_ENCONTRADOS).textContent) + 1
        document.getElementById(PARES_POR_ENCONTRAR).textContent = parseInt(document.getElementById(PARES_POR_ENCONTRAR).textContent) - 1
    }


if (x === 5 ){
    alert("Gastaste todas as tuas vidas! Boa sorte para a proxima!")
}else if(document.getElementById(PARES_POR_ENCONTRAR == 0)){
    alert("Parabéns ganhaste!!")
}
FirstCard = null;
SecondCard = null;

    
}

function LivesMaker(){
    for(let e = 0; e < 5; e++){
        
        let Lives = document.createElement('img')
        Lives.id = e.toString()
        Lives.src = "/Media/Unchecked.png"
        document.getElementById('lives').append(Lives);
                
    }  
}
//------------------------------------------------------------------------FIM DAS FUNCOES QUE FAZEM O JOGO-------------------------------------------------------------//



function TimeOptions(event) {
    Customizaçoes.Tempo = event.target.value;
    console.log('Selected Time:', Customizaçoes.Tempo);
}

let timerInterval = 0

function initializeTimer() {
    // Clear any existing timer
    clearInterval(timerInterval);
    // Set the initial time remaining based on the selected time
    if (Customizaçoes.Tempo === "1:00") {
        timeRemaining = 60;
    } else if (Customizaçoes.Tempo === "2:00") {
        timeRemaining = 120;
    } else if (Customizaçoes.Tempo === "3:00") {
        timeRemaining = 180;
    }else if(Customizaçoes.Tempo === "Cronometro"){

    }
    // Update the timer display immediately`
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Tempo Acabou.");
        }
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    document.getElementById('Time').textContent = formatTime(timeRemaining);
    console.log(formatTime(timeRemaining));
}

function formatTime(timeInSeconds) {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}


function DifficultyOptions(event) {
    Customizaçoes.Dificuldade = event.target.value;
    console.log('Selected Difficulty:', Customizaçoes.Dificuldade);
}

function DifficultyChecker(){
    if(Customizaçoes.Dificuldade == 'Facil'){
        Rows = 3
        Collums = 4
        CurrentCardListDifficulty = CardListFacil
    }else if(Customizaçoes.Dificuldade == 'Normal'){
        Rows = 4
        Collums = 4
        CurrentCardListDifficulty = CardListNormal
    }else if(Customizaçoes.Dificuldade == 'Hard'){
        Rows = 4
        Collums = 5
        CurrentCardListDifficulty = CardListDificil
    }
}

function UpdatesBoard(){
    
    document.getElementById('Jogo').innerHTML = ''
    DifficultyChecker()
    const jogoElement = document.getElementById('Jogo'); //Atualiza a grid no css
    jogoElement.style.gridTemplateRows = `repeat(${Rows}, 1fr)`;
    jogoElement.style.gridTemplateColumns = `repeat(${Collums}, 1fr)`;

}



function CustomizationsBTN(){

    MakesBoard()
}