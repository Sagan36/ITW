//NOTA: NOS USAMOS O CONSOLE LOG PARA TERMOS A CERTEZA QUE O CODIGO ESTA A FUNCIONAR E 
//O PROFESSOR TAMBER TER ESTA ACERTEZA
//constantes que possamos fazer

const BOTAO_COMECAR_JOGO = "btnStartGame"


//Objetos que possamos fazer
let Customizaçoes = {

    Dificuldade: "Normal",
    Tempo: "Cronometro",

}

// vars para o jogo que vai mudar

var FoundPairs = 0
var PairToFind = 0
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

var Rows = 4
var Collums = 5
var Lifes = 0
var Board = []


 function PointsUpdater(Time, MatchedPairs, Lives, UnMatched){
    
     document.getElementById('Time').textContent = Time;
     document.getElementById('MatchedPairs').textContent = MatchedPairs;
     document.getElementById('Lives').textContent = Lives;
     document.getElementById('UnMathcedPairs').textContent = UnMatched;

 }

window.addEventListener("load", VamoBora);

function VamoBora(){
    Shuffle()
    StartGame()
    
}

function addEventOptions() {
    document.getElementById("Dificuldade").addEventListener('change', DifficultyOptions);
    document.getElementById("Tempo").addEventListener('change', TimeOptions);
    document.getElementById(BOTAO_COMECAR_JOGO).addEventListener("click", StartGame)
}

// function DifficultyOptions(event) {
//     Customizaçoes.Dificuldade = event.target.value;
//     console.log('Selected Difficulty:', Customizaçoes.Dificuldade);
// }

// function TimeOptions(event) {
//     Customizaçoes.Tempo = event.target.value;
//     console.log('Selected Time:', Customizaçoes.Tempo);
// }

// let timerInterval = 0;

// function StartGame(){
//     addEventOptions();    


//         timerInterval = setInterval(updateTimer, 1000);
//             }
// //////////////////////////////
// function updateTimer() {
//     if (Customizaçoes.Tempo === "1:00") {
//         let timeRemaining = 60 - Math.floor((Date.now() - Math.floor(Date.now() / 1000) * 1000) / 1000);
//         document.getElementById('Time').textContent = formatTime(timeRemaining);
//         console.log(formatTime(timeRemaining))
//     } else if (Customizaçoes.Tempo === "2:00"){
//     let timeRemaining = 120 - Math.floor((Date.now() - Math.floor(Date.now() / 1000) * 1000) / 1000);
//         document.getElementById('Time').textContent = formatTime(timeRemaining);
//         console.log(formatTime(timeRemaining))
//     } else if (Customizaçoes.Tempo === "3:00"){
//     let timeRemaining = 180 - Math.floor((Date.now() - Math.floor(Date.now() / 1000) * 1000) / 1000);
//         document.getElementById('Time').textContent = formatTime(timeRemaining);
//         console.log(formatTime(timeRemaining))
//     }
// }   

// function formatTime(timeInSeconds) {
//     let minutes = Math.floor(timeInSeconds / 60);
//     let seconds = timeInSeconds % 60;
//     return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
// }
// /////////////////////////////////////////


function Shuffle(){
    CardList = CardListDificil.concat(CardListDificil)// faz com que sejam 20 cartas
    for (let x = 0; x < CardList.length; x++){

        var i = Math.floor((Math.random()) * CardList.length)
        let f = CardList[i] 
        CardList[i] = CardList[x];
        CardList[x] = f; 
    }
}

function StartGame(){

    for (let r = 0; r < Rows; r++){
        let rows = []
        for(let c = 0; c < Collums; c++){
            
            let CardImgName = CardList.pop();
            rows.push(CardImgName);
            let card = document.createElement('img');
            card.id = r.toString() + '|' + c.toString()//Cria id da carta como a posicao dele na board
            card.src = '/Media/' + CardImgName + '.jpg'
            card.classList.add("cartinha")
            document.getElementById('Jogo').append(card);


        }
        Board.push(rows)
        
    }
console.log(Board)
setTimeout(BackofTheCards, 1000)


}

function BackofTheCards(){

    for (let r = 0; r < Rows; r++) {
        for (let c = 0; c < Collums; c++) {
        let card = document.getElementById(r.toString() + '|' + c.toString())
        card.src = "/Media/backcard.jpeg"
    
        }
}
}