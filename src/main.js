const form = document.getElementById("form");
const cardholder = document.getElementById("cardholder");
const card_number = document.getElementById("card-number");
const card_date_month = document.getElementById("month");
const card_date_year = document.getElementById("year");
const card_cvc = document.getElementById("cvc");

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "input-field error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function success(input) {
    const formControl = input.parentElement;
    formControl.className = 'input-field success';
}

function checkCardNumber(input) {
    const regex = /^\d{16}$/;
    if (input.value == "") {
        showError(input, "Can't be blank");
    } else if (!regex.test(input.value)) {
        showError(input, "Wrong format, numbers only");
    } else {
        success(input);
    }
}

function checkMonth(input) {
    const regex = /^(0[1-9]|1[0-2])$/;
    if (input.value == "") {
        showError(input, "Can't be blank");
    } else if (!regex.test(input.value)) {
        showError(input, "Wrong format, numbers only");
    } else {
        success(input);
    }
}

function checkYear(input) {
    const regex = /^(0[1-9]|[1-9][0-9])$/;
    console.log(input);
    if (input.value == "") {
        showError(input, "Can't be blank");
    } else if (!regex.test(input.value)) {
        showError(input, "Wrong format, numbers only");
    } else {
        success(input);
    }
}

function checkCVC(input) {
    const regex = /^\d{3,4}$/;
    if (input.value == "") {
        showError(input, "Can't be blank");
    } else if (!regex.test(input.value)) {
        showError(input, "Wrong format, numbers only");
    } else {
        success(input);
    }
}

function checkCardholder(input) {
    const regex = /^[a-zA-Z ]{1,50}$/;
    if (input.value == "") {
        showError(input, "Can't be blank");
    } else if (!regex.test(input.value)) {
        showError(input, "Wrong format, numbers only");
    } else {
        success(input);
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkCardholder(cardholder);
    checkCVC(card_cvc);
    checkYear(card_date_year);
    checkMonth(card_date_month);
    checkCardNumber(card_number);
});