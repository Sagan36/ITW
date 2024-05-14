function login() {
    // Simule a verificação do login
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Condição de login válida
    if (username === "usuario" && password === "senha") {
        // Redirecionar para a página desejada após o login
        window.location.href = "pagina.html";
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}
