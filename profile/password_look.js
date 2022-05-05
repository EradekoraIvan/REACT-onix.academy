const passwordLook = document.getElementById('password_look'),
    password = document.getElementById('user_password');

const showHidePassword = ()=> {
    if(password.type === 'password'){
        password.type = 'text';
        passwordLook.classList.add('look_click');
    }
    else{
        password.type = 'password';
        passwordLook.classList.remove('look_click');
    }
}

passwordLook.addEventListener('click', showHidePassword);