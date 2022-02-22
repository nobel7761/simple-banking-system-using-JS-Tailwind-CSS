document.getElementById('login').addEventListener('click', function () {
    if (document.getElementById('email_box').value == 'admin' && document.getElementById('password_box').value == 'admin') {
        document.location.href = 'banking.html'
    }
    else {
        document.getElementById('alert').innerText = 'Wrong Input';
    }
})

