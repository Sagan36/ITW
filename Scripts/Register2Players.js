document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registerFormPlayer1").addEventListener("submit", RegisterPlayer1);
    document.getElementById("registerFormPlayer2").addEventListener("submit", RegisterPlayer2);
});

function CurrentUserInfo(username, password, age, gender) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.gender = gender;
}

function RegisterPlayer1(event) {
    event.preventDefault();

    let player1Username = document.getElementById("PLAYER1_USERNAME").value;
    let player1Password = document.getElementById("PLAYER1_PASSWORD").value;
    let confirmPassword1 = document.getElementById("CONFIRM_PASSWORD1").value;
    let player1Age = document.getElementById("PLAYER1_AGE").value;
    let player1Gender = document.getElementById("PLAYER1_GENDER").value;

    if (!player1Username || !player1Password || !player1Age || !player1Gender || player1Password !== confirmPassword1) {
        alert("Todos os campos são obrigatórios e as senhas devem corresponder para o registo do Player 1.");
        return;
    }

    let player1Info = new CurrentUserInfo(player1Username, player1Password, player1Age, player1Gender);
    localStorage.setItem(player1Username, JSON.stringify(player1Info));

    alert("Registo do Player 1 bem sucedido.");
    document.getElementById("registerFormPlayer1").style.display = "none";
    document.getElementById("registerPlayer2").style.display = "block";
}

function RegisterPlayer2(event) {
    event.preventDefault();

    let player2Username = document.getElementById("PLAYER2_USERNAME").value;
    let player2Password = document.getElementById("PLAYER2_PASSWORD").value;
    let confirmPassword2 = document.getElementById("CONFIRM_PASSWORD2").value;
    let player2Age = document.getElementById("PLAYER2_AGE").value;
    let player2Gender = document.getElementById("PLAYER2_GENDER").value;

    if (!player2Username || !player2Password || !player2Age || !player2Gender || player2Password !== confirmPassword2) {
        alert("Todos os campos são obrigatórios e as senhas devem corresponder para o registo do Player 2.");
        return;
    }

    let player2Info = new CurrentUserInfo(player2Username, player2Password, player2Age, player2Gender);
    localStorage.setItem(player2Username, JSON.stringify(player2Info));

    alert("Registo do Player 2 bem sucedido.");
    window.location.href = "2PlayersLogin.html";
}
