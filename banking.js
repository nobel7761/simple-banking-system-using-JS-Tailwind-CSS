const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');
const dAmount = document.getElementById('dAmount');
const wAmount = document.getElementById('wAmount');
const balance = document.getElementById('balance');

document.getElementById('dSubmit').addEventListener('click', function () {
    dAmount.innerText = parseInt(deposit.value) + parseInt(dAmount.innerText);
    balance.innerText = parseInt(balance.innerText) + parseInt(deposit.value)
    deposit.value = '';
})
document.getElementById('wSubmit').addEventListener('click', function () {
    wAmount.innerText = parseInt(withdraw.value) + parseInt(wAmount.innerText);
    balance.innerText = parseInt(balance.innerText) - parseInt(withdraw.value)
    withdraw.value = '';
})