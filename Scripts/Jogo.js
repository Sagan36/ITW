//NOTA: NOS USAMOS O CONSOLE LOG PARA TERMOS A CERTEZA QUE O CODIGO ESTA A FUNCIONAR E 
//O PROFESSOR TAMBER TER ESTA ACERTEZA
//constantes que possamos fazer

const BOTAO_COMECAR_JOGO = "btnStartGame"















//Objetos que possamos fazer
let Customizaçoes = {

    Dificuldade: "Normal",
    Tempo: "Cronometro",

}


// function CardMaker(value, CardFront, CardBack, CardSpin){

//     var verdadeiro = true;
//     var falso = false;
    
//     CardFront.getElementById("image").imageContent = CardFront;
//     CardBack.getElementById("number").imageContent = CardBack;
//     CardSpin.getElementById("rotate").imageContent = CardSpin;
    
// }

// function CardManipulator (value, CardFront, CardBack){
    
//     let card = cartinha.getElementById("number");
    
//     if (value.cardFront === value.cardBack) {
//         console.log("Match");
//     } else {
//         console.log("Fail");
//     }

//     let customizações = { 
        
//         true: "Match",
//         false: "fail",

//     }
// }


 function PointsUpdater(Time, MatchedPairs, Lives, UnMatched){
    
     document.getElementById('Time').textContent = Time;
     document.getElementById('MatchedPairs').textContent = MatchedPairs;
     document.getElementById('Lives').textContent = Lives;
     document.getElementById('UnMathcedPairs').textContent = UnMatched;

 }

window.addEventListener("load", VamoBora);

function VamoBora(){
    addEventOptions()
    
}

function addEventOptions() {
    document.getElementById("Dificuldade").addEventListener('change', DifficultyOptions);
    document.getElementById("Tempo").addEventListener('change', TimeOptions);
    document.getElementById(BOTAO_COMECAR_JOGO).addEventListener("click", StartGame)
}

function DifficultyOptions(event) {
    Customizaçoes.Dificuldade = event.target.value;
    console.log('Selected Difficulty:', Customizaçoes.Dificuldade);
}

function TimeOptions(event) {
    Customizaçoes.Tempo = event.target.value;
    console.log('Selected Time:', Customizaçoes.Tempo);
}

let timerInterval = 0;

function StartGame(){
    addEventOptions();    


        timerInterval = setInterval(updateTimer, 1000);
            }

function updateTimer() {
    if (Customizaçoes.Tempo === "1:00") {
        let timeRemaining = 60 - Math.floor((Date.now() - Math.floor(Date.now() / 1000) * 1000) / 1000);
        document.getElementById('Time').textContent = formatTime(timeRemaining);
        console.log(formatTime(timeRemaining))
    } else if (Customizaçoes.Tempo === "2:00"){
    let timeRemaining = 120 - Math.floor((Date.now() - Math.floor(Date.now() / 1000) * 1000) / 1000);
        document.getElementById('Time').textContent = formatTime(timeRemaining);
        console.log(formatTime(timeRemaining))
    } else if (Customizaçoes.Tempo === "3:00"){
    let timeRemaining = 180 - Math.floor((Date.now() - Math.floor(Date.now() / 1000) * 1000) / 1000);
        document.getElementById('Time').textContent = formatTime(timeRemaining);
        console.log(formatTime(timeRemaining))
    }



}   

function formatTime(timeInSeconds) {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

