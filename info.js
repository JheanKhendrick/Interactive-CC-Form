
const cvc = document.getElementById('card-cvc');
const inputCvc = document.getElementById('cvc');
const name = document.getElementById('card-name');
const inputName = document.getElementById('name');
const cardNumber = document.getElementById('card-number');
const inputCN = document.querySelector('#number');
const month = document.getElementById('card-expiry');
const inputMonth = document.getElementById('month');
const year = document.getElementById('card-expiry1');
const inputYear = document.getElementById('year');
inputCvc.onkeyup = function (e) {
    if (!e.target.value) {
        cvc.innerText = "000"
    } else {
        cvc.innerHTML = this.value;
    }
}

inputName.onkeyup = function (e) {
    if (!e.target.value) {
        name.innerText = "Jane Appleseed"
    }
    else {
        name.innerHTML = this.value;
    }
}

inputCN.addEventListener('keyup', (e) => {

    if (!e.target.value) {
        cardNumber.innerText = "1234 5678 9101 1121"
    }
    else {
        const inputValue = e.target.value.replaceAll(" ", "");

        if (e.target.value.length > 14) {
            e.target.value = inputValue.
                replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
            cardNumber.innerText = inputValue.
                replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
        }
        else if (e.target.value.length > 9) {
            e.target.value = inputValue.
                replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
            cardNumber.innerText = inputValue.
                replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
        }
        else if (e.target.value.length > 4) {
            e.target.value = inputValue.
                replace(/(\d{4})(\d{0,4})/, "$1 $2");
            cardNumber.innerText = inputValue.
                replace(/(\d{4})(\d{0,4})/, "$1 $2");
        }
        else {
            cardNumber.innerText = inputValue;
        }
    }
})


inputMonth.onkeyup = function (e) {
    if (!e.target.value) {
        month.innerText = "00/"
    }
    else {
        month.innerHTML = `${this.value}/`
        if (month.innerHTML === ' ') {
            month.innerHTML = '00/'
        }
    }
}

inputYear.onkeyup = function (e) {
    if (!e.target.value) {
        year.innerText = "00"
    }
    else {
        year.innerHTML = this.value;
    }
}
