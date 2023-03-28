window.onload = () => {
    if(sessionStorage.email){
        location.href = '/';
    }
}

var emailArray=[];
var passwordArray=[];

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");

function register(){
    event.preventDefault();

    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;

    if (email == ""){
        alert("Email required.");
        return ;
    }
    else if (password == ""){
        alert("Password required.");
        return ;
    }
    else if (passwordRetype == ""){
        alert("Password required.");
        return ;
    }
    else if ( password != passwordRetype ){
        alert("Passwords don't match");
        return;
    }
    else if(emailArray.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password);

        alert(email + " Thanks for making an account!");

        window.location.href('/login.html');

        document.getElementById("re").value ="";
        document.getElementById("rp").value="";
        document.getElementById("rrp").value="";
    }
    else{
        alert(email + " is already registered");
        return ;
    }
}
function login(){
    event.preventDefault();

    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;

    var i = emailArray.indexOf(email);

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Password required.");
            return ;
        }
        alert("Password does not match.");
        return ;
    }
    else {
        alert("You're logged in!");

        window.location.href('/index.html');

        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
        return ;
    }
}

// old code 
const email = document.querySelector('.email') || null;
const password = document.querySelector('.password');
const submitBtn = document.querySelector('.submit');

if(email == null){
    submitBtn.addEventListener('click', () => {
        fetch('/login-user', {
            method: 'post',
            headers: new Headers({'Content-Type' : 'application/json'}),
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        })
        .then(res => res.json())
        .then(data => {
            validateData(data);
        })
    })

} else {
    submitBtn.addEventListener('click', () => {
        fetch('/register-user', {
            method: 'post',
            headers: new Headers({'Content-Type' : 'application/json'}),
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        })
        .then(res => res.json())
        .then(data => {
            validateData(data);
        })
    })
}

const validateData = (data) => {
    if(!data.name){
        alertBox(data);
    } else{
        sessionStorage.email = data.email;
        location.href = '/';    
    }
}

const alertBox = (data) => {
    const alertContainer = document.querySelector('.alert-box');
    const alertMsg = document.querySelector('.alert');
    alertMsg.innerHTML = data;

    alertContainer.style.top = '5%';
    setTimeout(() => {
        alertContainer.style.top = null;
    }, 5000);
}



// function setFormMessage(formElement, type, message) {
//     const messageElement = formElement.querySelector(".form__message");

//     messageElement.textContent = message;
//     messageElement.classList.remove("form__message--success", "form__message--error");
//     messageElement.classList.add('form__message--${type}');
// }

// function setInputError(inputElement, message) {
//     inputElement.classList.add("form__input--error");
//     inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const loginForm = document.querySelector("#login");
//     const createAccountForm = document.querySelector("#createAccount");

//     document.querySelector("#linkCreateAccount").addEventListener("click", e => {
//         e.preventDefault();
//         loginForm.classList.add("form--hidden");
//         createAccountForm.classList.remove("form--hidden");
//     });

//     document.querySelector("#linkLogin").addEventListener("click", e => {
//         e.preventDefault();
//         loginForm.classList.remove("form--hidden");
//         createAccountForm.classList.add("form--hidden");
//     });

//     loginForm.addEventListener("submit", e => {
//         e.preventDefault();
//         fetch ("API Address", {
//             method: "POST",
//             body: JSON.stringify({
//               email: this.state.idValue,
//               password: this.state.pwValue
//            }),
//        })
//          .then((response) => response.json())
//          .then((result) => {
//            if(result.message === "SUCCESS"){
//              alert("You are logged in.");
//              this.goToPopup();
//             } else {
//                 alert("Please check your login information.");
//             }
//          });
//          setFormMessage(loginForm, "error", "Invalid email/password combination");
//     });
// })
