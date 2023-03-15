const form = document.getElementById("form");
const cardholder = document.getElementById("cardholder");
const card_number = document.getElementById("card-number");
const card_date_month = document.getElementById("month");
const card_date_year = document.getElementById("year");
const card_cvc = document.getElementById("cvc");
const card_img_numbers = document.getElementById("card-img-number");
const card_img_month = document.getElementById("card-img-month");
const card_img_year = document.getElementById("card-img-year");
const card_img_cvc = document.getElementById("card-img-cvc");
const card_img_name = document.getElementById("card-img-name")
let valid = true;

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
        valid = false;
    } else if (!regex.test(input.value)) {
        showError(input, "Wrong format, numbers only");
        valid = false;
    } else {
        success(input);
    }
}

function checkMonth(input) {
    const regex = /^(0[1-9]|1[0-2])$/;
    if (input.value == "") {
        showError(input, "Can't be blank");
        valid = false;
    } else if (!regex.test(input.value)) {
        showError(input, "Wrong format, numbers only");
        valid = false;
    } else {
        success(input);
    }
}

function checkYear(input) {
    const regex = /^(0[1-9]|[1-9][0-9])$/;
    if (input.value == "") {
        showError(input, "Can't be blank");
        valid = false;
    } else if (!regex.test(input.value)) {
        showError(input, "Wrong format, numbers only");
        valid = false;
    } else {
        success(input);
    }
}

function checkCVC(input) {
    const regex = /^\d{3,4}$/;
    if (input.value == "") {
        showError(input, "Can't be blank");
        valid = false;
    } else if (!regex.test(input.value)) {
        showError(input, "Wrong format, numbers only");
        valid = false;
    } else {
        success(input);
    }
}

function checkCardholder(input) {
    const regex = /^[a-zA-Z ]{1,50}$/;
    if (input.value == "") {
        showError(input, "Can't be blank");
        valid = false;
    } else if (!regex.test(input.value)) {
        showError(input, "Wrong format, numbers only");
        valid = false;
    } else {
        success(input);
    }
}



form.addEventListener('submit', function (e) {
    e.preventDefault();
    valid = true;
    checkCardholder(cardholder);
    checkCVC(card_cvc);
    checkYear(card_date_year);
    checkMonth(card_date_month);
    checkCardNumber(card_number);
    if (valid) {
        document.getElementById("thank-you-flex").style.display = "grid";
        document.getElementById("form-inputs").style.display = "none";
    }
});


function changeCardNumbers(e) {
    let value = e.target.value;
    while (value.length != 16) {
        value += "0"
    }
    card_img_numbers.innerHTML = value.replace(/(.{4})/g, '$1 ');
}

function changeCardMonth(e) {
    card_img_month.innerHTML = e.target.value;
}

function changeCardYear(e) {
    card_img_year.innerHTML = e.target.value;
}

function changeCardCVC(e) {
    card_img_cvc.innerHTML = e.target.value;
}

function changeCardName(e) {
    card_img_name.innerHTML = e.target.value.toUpperCase();
}

cardholder.addEventListener("input", changeCardName)
card_cvc.addEventListener("input", changeCardCVC);
card_date_month.addEventListener("input", changeCardMonth);
card_date_year.addEventListener("input", changeCardYear);
card_number.addEventListener("input", changeCardNumbers);