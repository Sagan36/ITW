// Constants
const USERNAME = 'username';
const PASSWORD = 'password';
const CONFIRM_PASSWORD = 'confirmpassword';
const AGE = 'age';
const GENDER = 'gender';

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registerForm").addEventListener("submit", register);
});

function UserInfo(username, password, gender, age) {
    // Constructor function for new users
    this.username = username;
    this.password = password;
    this.gender = gender;
    this.age = age;
}

function register(event) {
    event.preventDefault();

    let newPassword = document.getElementById(PASSWORD).value;
    let confirmPassword = document.getElementById(CONFIRM_PASSWORD).value;

    if (newPassword !== confirmPassword) {
        console.log("Passwords are not equal.");
        alert("The password fields do not match.");
    } else {
        let user = new UserInfo(
            document.getElementById(USERNAME).value,
            newPassword,
            document.getElementById(GENDER).value,
            document.getElementById(AGE).value
        );

        let userDataJSON = JSON.stringify(user);
        localStorage.setItem(user.username, userDataJSON);
        console.log("User added to local storage.");
        // Redirect to login page after successful registration
        window.location.href = "1PlayerLogin.html";
    }
}