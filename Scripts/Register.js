//constantes

const USERNAME = 'username'
const PASSWORD = 'password'
const CONFIRM_PASSWORD = 'confirmpassword'
const AGE = 'age'
const GENDER = 'gender'


function UserInfo(username, password, confirmpassword, gender, age){
    // funcao construtora de novos users
    this.username = username
    this.password = password
    this.confirmpassword = confirmpassword
    this.gender = gender
    this.age = age
}

function register(){


    User = new UserInfo(
        document.getElementById(USERNAME).value,
        document.getElementById(PASSWORD).value,
        document.getElementById(CONFIRM_PASSWORD).value,
        document.getElementById(AGE).value,
        document.getElementById(AGE).value
    )

    if(PASSWORD !== CONFIRM_PASSWORD){

        alert("O campo Password nao esta igual ao campo Confirmar Password.")

    }



    
    
 



}