// let Customizaçoes = {

//     Dificuldade: "Normal",
//     Tempo: "Cronometro",

// }


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

function Stopwatch(newtime){
    // newTime é um tempo que advem do value do botao das customizaçoes, que vai atualizar o objecto Custimizacçoes.time
    
}



