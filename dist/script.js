const Login = document.getElementById("LoginForm")
const Signup = document.getElementById("SignupForm")

const ForgetUP = document.getElementById("forgetPass")
const DontHaveAcc = document.getElementById("dontAcc")
const AlreadyHaveAcc = document.getElementById("haveAcc")

const emailInput = document.getElementById("form_username_login");
const passwordInput = document.getElementById("form_password_login");

const SignupUsernameInput = document.getElementById("form_username_signup")
const SignupEmailInput = document.getElementById("form_email_signup")
const SignupPassInput = document.getElementById("form_password_signup")
const SignupNewPassInput = document.getElementById("form_confirm_password_signup")

DontHaveAcc.addEventListener('click', () => {
    Login.classList.toggle("hidden")
    Signup.classList.toggle("hidden")
});

AlreadyHaveAcc.addEventListener('click', () => {
    Signup.classList.toggle("hidden")
    Login.classList.toggle("hidden")
});

function displayError(message, formType){
    const messageBox = document.getElementById(formType === 'login' ? 'loginMessageBox' : 'signupMessageBox');
    messageBox.innerHTML = message;
    messageBox.classList.remove('text-green-500');
    messageBox.classList.add('text-red-500');

    setTimeout(() => {
        messageBox.innerHTML = ""
    }, 2000);
};

function displaySuccess(message, formType){
    const messageBox = document.getElementById(formType === 'login' ? 'loginMessageBox' : 'signupMessageBox');
    messageBox.innerHTML = message;
    messageBox.classList.add('text-green-500');
    messageBox.classList.remove('text-red-500');

    setTimeout(() => {
        messageBox.innerHTML = ""
    }, 2000);
};

Login.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (emailInput.value === "" || passwordInput.value === "") {
        displayError("Please Fill in All Fields.", 'login');
    } else {
        displaySuccess("Login Successful!.", 'login')
        
        const loginData = {
            email: emailInput.value,
            password: passwordInput.value 
        };
        const loginDataString = JSON.stringify(loginData);
        localStorage.setItem('loginData', loginDataString);

        emailInput.value = "";
        passwordInput.value = ""; 
    }
});

Signup.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (SignupUsernameInput.value === "" || SignupEmailInput.value === "" || SignupPassInput.value === "" || SignupNewPassInput.value === "") {
        displayError("Please Fill in All Fields.", 'signup');
    } else if (SignupPassInput.value !== SignupNewPassInput.value) {
        displayError("Password Don't Match", 'signup');
    } else {
        displaySuccess("Signup Successful!.", 'signup');
        
        const signupData = {
            username: SignupUsernameInput.value,
            email: SignupEmailInput.value,
            password: SignupPassInput.value,
            newPassword: SignupNewPassInput.value
        };
        const signupDataString = JSON.stringify(signupData);
        localStorage.setItem('signupData', signupDataString);

        SignupUsernameInput.value = "";
        SignupEmailInput.value = ""; 
        SignupPassInput.value = "";
        SignupNewPassInput.value = "";
    }
});

const storedLoginData = JSON.parse(localStorage.getItem('loginData'));
const storedSignupData = JSON.parse(localStorage.getItem('signupData'));

console.log(storedLoginData);  
console.log(storedSignupData);  
