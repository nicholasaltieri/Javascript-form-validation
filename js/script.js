// HTML Elements to Variables
const form = document.getElementById('form');

const userName = document.getElementById('userName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2')
const button = document.getElementById('btn')


// Create Click Event
button.addEventListener('click', (e) => {
    e.preventDefault();

    checkInputs();
})


//Check User Inputs
function checkInputs() {
    //Obtain Element Values
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    //Username Check
    if (userNameValue === '') {
        setErrorFor(userName, 'Username cannot be blank.');
    } else {
        setSuccessFor(userName)
    }

    // Email Check
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'Not Valid Email')
    } else {
        setSuccessFor(email)
    }

    //Password Check
    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank')
    } else if (!passwordCheck(passwordValue)) {
        setErrorFor(password, 'Invalid Password')
    } else {
        setSuccessFor(password)
    }

     //Password2 Check
     if (password2Value === '') {
        setErrorFor(password2, 'Password cannot be blank')
    } else if (!passwordCheck(password2Value)) {
        setErrorFor(password2, 'Invalid Password')
    } else {
        setSuccessFor(password2)
    }
}


// Error Function
function setErrorFor (input, message) {
    const inValid = input.parentElement;
    const small = inValid.querySelector('small')
    
    inValid.className = 'form-control error';
    small.innerText = message
    
   
}


//Success Function
function setSuccessFor(input) {
    const valid = input.parentElement;
    valid.className = 'form-control success';
}


//Email Check Function
function checkEmail (email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//Password Check Function
function passwordCheck(pass) {
    if (pass.length <= 6) {
        return false;
    } else {
        return true;
    }
}