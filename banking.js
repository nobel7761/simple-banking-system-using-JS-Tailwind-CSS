const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');
const dAmount = document.getElementById('dAmount');
const wAmount = document.getElementById('wAmount');
const balance = document.getElementById('balance');

document.getElementById('dSubmit').addEventListener('click', function () {
    if (deposit.value > 0) {
        dAmount.innerText = parseFloat(deposit.value) + parseFloat(dAmount.innerText);
        balance.innerText = parseFloat(balance.innerText) + parseFloat(deposit.value)
    }
    else {
        alert("Please Enter A Amount More Than 0!!!");
    }
    deposit.value = '';
})
document.getElementById('wSubmit').addEventListener('click', function () {
    if (withdraw.value > 0) {
        wAmount.innerText = parseFloat(withdraw.value) + parseFloat(wAmount.innerText);
        balance.innerText = parseFloat(balance.innerText) - parseFloat(withdraw.value)
    }
    else {
        alert("Please Enter A Amount More Than 0!!!");
    }
    withdraw.value = '';
})