document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    const loginForm = document.getElementById("loginform");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        console.log("Form submit event prevented");
        Login(event);
    });
});

function CurrentUserInfo(username, password) {
    this.username = username;
    this.password = password;
}

function Login(event) {
    event.preventDefault();
    console.log("Login function called");

    let player1username = document.getElementById("player1username").value;
    let player1password = document.getElementById("player1password").value;
    let player2username = document.getElementById("player2username").value;
    let player2password = document.getElementById("player2password").value;

    console.log("Player 1 username:", player1username);
    console.log("Player 1 password:", player1password);
    console.log("Player 2 username:", player2username);
    console.log("Player 2 password:", player2password);

    let player1Info = JSON.parse(localStorage.getItem(player1username));
    let player2Info = JSON.parse(localStorage.getItem(player2username));

    if (player1Info === null || player2Info === null) {
        alert("Pelo menos um dos jogadores não estão registrado.");
    } else if (player1username === player1Info.username && player1password === player1Info.password &&
               player2username === player2Info.username && player2password === player2Info.password) {
        let currentPlayer1 = new CurrentUserInfo(player1Info.username, player1Info.password);
        let currentPlayer2 = new CurrentUserInfo(player2Info.username, player2Info.password);

        localStorage.setItem("currentPlayer1", JSON.stringify(currentPlayer1));
        localStorage.setItem("currentPlayer2", JSON.stringify(currentPlayer2));

        alert("Login bem sucedido para ambos os jogadores. O jogo vai começar quando clicarem ok...");
        window.location.href = "jogo2Players.html";
    } else {
        alert("Credenciais de login incorretas para um ou ambos os jogadores.");
    }
}
