const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('password')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    //this will prevent submitting by having error

    validateInputs()
})


function validateInputs() {
    const usernameVal = username.value.trim()
   
    
    const passwordVal = password.value.trim() 
    

    const registeredUsername = localStorage.getItem('usernamereg');
    const registeredPassword = localStorage.getItem('passwordreg');
    if (usernameVal === '') {
        setError(username, "Username is required")
        
    }
    else if(usernameVal!==registeredUsername){
        setError(username, "Username is incorrect")
    }
    else {
        setSuccess(username)
    }
    
    if (passwordVal === '') {
        setError(password, 'Password is required')

    }
    else if (passwordVal !==registeredPassword) {
        setError(password, 'Password is incorrect')
    }
    else {
        setSuccess(password)
    }


    if (!registeredUsername || !registeredPassword) {
        alert('No registered users found. Please register first.');
        return;
    }
    if (usernameVal === registeredUsername && passwordVal === registeredPassword) {
        alert('Login successful!');
        window.location.href = '/HOME PG/home.html';  // Redirect to dummy page
    } else {
        alert('Invalid username or password.');
    }


    // if(username== registeredUsername && password == registeredPassword){
    //     alert("Login successful")
    //     window.location.href='dummy.html'
    // }
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










