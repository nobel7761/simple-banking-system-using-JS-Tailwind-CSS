const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');
const dAmount = document.getElementById('dAmount');
const wAmount = document.getElementById('wAmount');
const balance = document.getElementById('balance');

function convertFloat(num) {
    return parseFloat(num);
}

function alertMessage() {
    return alert("Please Enter A Amount More Than 0!!!");
}

document.getElementById('dSubmit').addEventListener('click', function () {
    if (convertFloat(deposit.value) > 0) {
        dAmount.innerText = convertFloat(deposit.value) + convertFloat(dAmount.innerText);
        balance.innerText = convertFloat(balance.innerText) + convertFloat(deposit.value);
    }
    else {
        alertMessage();
    }
    deposit.value = '';
})
document.getElementById('wSubmit').addEventListener('click', function () {
    if (convertFloat(withdraw.value) > 0 && convertFloat(withdraw.value) <= convertFloat(balance.innerText)) {
        wAmount.innerText = convertFloat(withdraw.value) + convertFloat(wAmount.innerText);
        balance.innerText = convertFloat(balance.innerText) - convertFloat(withdraw.value)
    }
    else if (convertFloat(withdraw.value) > convertFloat(balance.innerText)) {
        alert("You Can Not Withdraw More Than Your Available Balance!!!")
    }
    else {
        alertMessage();
    }
    withdraw.value = '';
}) 
