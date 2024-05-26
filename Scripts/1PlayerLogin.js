

const USERNAME = 'usernameLogin';
const PASSWORD = 'passwordLogin';
const AGE = 'age';
const GENDER = 'gender';
const LOGIN = 'loginform';

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginform").addEventListener("submit", Login);
});

function CurrentUserInfo(user){
    this.username = user.username;
    this.password = user.password;

}

function Login(event){

    event.preventDefault();

    let LoginUsername = document.getElementById(USERNAME).value;
    let LoginPassword = document.getElementById(PASSWORD).value;

    let LocalStorageClientInfo = JSON.parse(localStorage.getItem(LoginUsername))
    let nextpage = JSON.parse(localStorage.getItem('nextpage'))
    console.log(LocalStorageClientInfo)

    if (localStorage.getItem(LoginUsername) == null){
        alert("Este utilizador ainda nao esta Registado!")
        console.log('User nao registado')
    }else if(LoginUsername == LocalStorageClientInfo.username && LoginPassword == LocalStorageClientInfo.password){
        
        let CurrentLogin = new CurrentUserInfo(LocalStorageClientInfo)
        console.log('Login bem sucedido.')
        localStorage.setItem("currentLogin", JSON.stringify(CurrentLogin));  //Voltamos a por na forma de string para utilizar mais tarde
        console.log(nextpage)

        window.location.href = "Jogo.html";
        

    }else{
        alert("Utilizador ou a password estão errados.")
        console.log("password errada",utilizador)
    }
        
}




