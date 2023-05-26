const email = document.querySelector('#email')
const emailError = document.querySelector('.email-error')
const country = document.querySelector('#country')
const countryError = document.querySelector('.country-error')
const zip = document.querySelector('#zip')
const zipError = document.querySelector('.zip-error')
const password = document.querySelector('#password')
const passwordError = document.querySelector('.password-error')
const confirmPassword = document.querySelector('#password-confirm')
const confirmPasswordError = document.querySelector('.password-confirm-error')
const button = document.querySelector('button')

email.addEventListener('input', () => {
    if (email.validity.valid) {
        emailError.textContent = '';
    } else {
        emailErrorFunction()
    }
})

country.addEventListener('input', () => {
    if (country.validity.valid) {
        countryError.textContent = '';
    } else {
        countryErrorFunction()
    }
})

zip.addEventListener('input', () => {
    if (zip.validity.valid) {
        zipError.textContent = '';
    } else {
        zipErrorFunction()
    }
})

password.addEventListener('click', () => {
    if (password.value == '') {
        passwordError.textContent = 'Password min length 5 max length 20'
    }
})

password.addEventListener('input', () => {
    if (password.validity.valid) {
        passwordError.textContent = '';
    } else {
        passwordErrorFunction()
    }
})

confirmPassword.addEventListener('input', () => {
    checkPasswordMatch()
})

function emailErrorFunction() {

    if (email.validity.valueMissing) {
        emailError.textContent = `Email field cannot be empty`
    } else if (email.validity.typeMismatch) {
        emailError.textContent = `Please enter a valid email address`
    }
}

function countryErrorFunction() {
    
    if (country.validity.valueMissing) {
       countryError.textContent = `Country field cannot be empty` 
    } else if (country.validity.tooShort) {
        countryError.textContent = 'Country name cannot be shorter than 4 Characters'
    }
}

function zipErrorFunction() {

    if (zip.validity.valueMissing) {
       zipError.textContent = `Zip Code field cannot be empty` 
    } else if (zip.validity.tooShort) {
        zipError.textContent = 'Zip Code cannot be shorter than 5 Characters'
    }
}

function passwordErrorFunction() {

    if (password.validity.valueMissing) {
       passwordError.textContent = `Password field cannot be empty` 
    } else if (password.validity.tooShort) {
        passwordError.textContent = 'Password cannot be shorter than 5 Characters'
    }
}

function checkPasswordMatch() {
    
    if (password.value != confirmPassword.value) {
        confirmPasswordError.textContent = 'Password do not match'
    } else {
        confirmPasswordError.textContent = ''        
    }
}

button.addEventListener('click', (event) => {
    
    if (!email.validity.valid) {
        emailErrorFunction()
    }

    if (!country.validity.valid) {
        countryErrorFunction()
    }

    if (!zip.validity.valid) {
        zipErrorFunction()
    }

    if (!password.validity.valid) {
        passwordErrorFunction()
    }

    if (!confirmPassword.validity.valid) {
        checkPasswordMatch()
    }

    event.preventDefault()
})