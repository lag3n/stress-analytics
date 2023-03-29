const greeting = document.querySelector('.greeting');

window.onload = () => {
    if(!sessionStorage.email){
        location.href = '/login-student';
    } else{
        greeting.innerHTML = 'Welcome! Instructions for the study:';
    }
}

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}