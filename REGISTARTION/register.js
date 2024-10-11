const form = document.getElementById('form')
const username = document.getElementById('usernamereg')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const address = document.getElementById('address')
const password = document.getElementById('passwordreg')
const confirm_password = document.getElementById('confirm_password')


// username is getting id from the html and storing as username in js
//usernameval is getting the stored id value in a variable named username and using it for validation 

form.addEventListener('submit', (e) => {
    e.preventDefault()

    //this will prevent submitting by having error

    validateInputs()

   
})
function validateInputs() {
    const usernameVal = usernamereg.value.trim()
    const emailVal = email.value.trim()
    const phoneVal = phone.value.trim()
    const addressVal = address.value.trim()
    const passwordVal = passwordreg.value.trim()
    const confirm_passwordVal = confirm_password.value.trim()

    if (usernameVal === '') {
        setError(usernamereg, "Username is required")
        
    }
    else {
        setSuccess(usernamereg)
    }
    if (emailVal === '') {
        setError(email, "Email is required")
    }
    else if (!validateEmail(emailVal)) {
        setError(email, 'Please enter a valid email')
    }
    else {
        setSuccess(email)
    }
    if (addressVal === '') {
        setError(address, "Address is required");

    } else {
        setSuccess(address);
    }
    if (passwordVal === '') {
        setError(passwordreg, 'Password is required')

    }
    else if (passwordVal.length < 8) {
        setError(passwordreg, 'Password should be more than 8 characters')
    }
    else {
        setSuccess(passwordreg)
    }
    if (confirm_passwordVal === '') {
        setError(confirm_password, 'Confirm  password is required')
    }
    else if (confirm_passwordVal !== passwordVal) {
        setError(confirm_password, "Password didn't match")
    }
    else {
        setSuccess(confirm_password)
    }
    if (phoneVal === '') {
        setError(phone, "phone number is required")
    }
    else if (phoneVal.length !== 10 || !validatePhone(phoneVal)) {
        setError(phone, "Phone number should  contain 10 numbers")
    }
    else {
        setSuccess(phone)
    }

    if (usernameVal && passwordVal.length >= 8) {
        // Storing the values in localStorage setitem is fn used to set the values during loginnwe use getitems
        localStorage.setItem('usernamereg', usernameVal);
        localStorage.setItem('passwordreg', passwordVal);
        alert('Registration successful!');
        window.location.href = '/LOGIN/login.html';
        form.reset();
    }
    else {
        alert('Please fill in both fields.');
    }

    if (!registeredUsername || !registeredPassword) {
        console.log('No registered users found.');
    } else {
        console.log('Registered user found:', registeredUsername);
    } 
}



// for eg element - password , msg - pswd is reqd
//element -email , msg email is reqd


function setError(element, message) {
    const inputGroup = element.parentElement;

    //getting elements like in common by giving parentelement

    const errorElement = inputGroup.querySelector('.error');

    //getting element from the error class as it is not in the id 



    if (errorElement) 
        {
            errorElement.innerText = message;
        }
    // errorElement.innerText = message;

    // this inner text denotes that its printing in html pg

    inputGroup.classList.add('error');

    //as this is for set error function it adds the error 

    inputGroup.classList.remove('success');
}

// for eg element - password , 
//element -email , 


function setSuccess(element) {
    const inputGroup = element.parentElement;

    //getting elements like in common by giving parentelement 

    const sucessElement = inputGroup.querySelector('.success')

    //getting element from the error class as it is not in the id 

    const errorElement = inputGroup.querySelector('.error');
    if (errorElement) {
        errorElement.innerText = '';
    }
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}





const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
        //regex expression

};

const validatePhone = (phone) => {

    return String(phone).match(/^(\+91-|\+91|0)?\d{10}$/);
};

phone.addEventListener('focus', () => {
    if (phone.value === '') {
        phone.value = '+91';
    }
});


function togglePassword(passwordId, eyeId) {
    var passwordInput = document.getElementById(passwordId);
    var eyeIcon = document.getElementById(eyeId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}


