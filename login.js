const email = document.getElementById('email_box');
const password = document.getElementById('password_box');


document.getElementById('login').addEventListener('click', function () {
    if (email.value == 'admin' && password.value == 'admin') {
        document.location.href = 'banking.html'
    }
    else {
        document.getElementById('alert').innerText = 'Wrong Input';
    }
})

