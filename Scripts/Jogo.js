//NOTA: NOS USAMOS O CONSOLE LOG PARA TERMOS A CERTEZA QUE O CODIGO ESTA A FUNCIONAR E 
//O PROFESSOR TAMBER TER ESTA ACERTEZA
//constantes que possamos fazer






















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


// function PointsUpdater(Time, MatchedPairs, Lives, UnMatched){
    
//     document.getElementById('Time').textContent = Time;
//     document.getElementById('MatchedPairs').textContent = MatchedPairs;
//     document.getElementById('Lives').textContent = Lives;
//     document.getElementById('UnMathcedPairs').textContent = UnMatched;

// }

window.addEventListener("load", VamoBora);

function VamoBora(){
    addEventOptions()
}

function addEventOptions() {
    document.getElementById("Dificuldade").addEventListener('change', DifficultyOptions);
    document.getElementById("Tempo").addEventListener('change', TimeOptions);
}

function DifficultyOptions(event) {
    Customizaçoes.Dificuldade = event.target.value;
    console.log('Selected Difficulty:', Customizaçoes.Dificuldade);
}

function TimeOptions(event) {
    Customizaçoes.Tempo = event.target.value;
    console.log('Selected Time:', Customizaçoes.Tempo);
}


