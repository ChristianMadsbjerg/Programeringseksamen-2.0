   //har flyttet den herop så den indkapsler det hele
   document.addEventListener("DOMContentLoaded", () => {
//hej med deg dfss
    function setFormMessage(formElement, type, message) {
        //Her finder jeg det andet element i loginformen
        const messageElement = formElement.querySelector(".form__message"); 
    
        messageElement.innerHTML = message;
        messageElement.classList.remove("form__message--success","form__message--error");
        messageElement.classList.add(`form__message--${type}`);
    }
    
    
    
    
    function setInputError(inputElement, message){
        inputElement.classList.add("form__input--error");
        inputElement.parentElement.querySelector(".form__input-error-message").innerHTML = message;
    }
    
    
    function clearInputError(inputElement) {
        inputElement.classList.remove("form__input--error");
        //Brug af querySelector virker dog ikke
        inputElement.parentElement.querySelector(".form__input-error-message").innerHTML = "";
    }
    
    
    
        const LoginForm = document.getElementById("login");
        const createAccountForm = document.getElementById("createAccount");
        
        document.getElementById("linkCreateAccount").addEventListener("click" ,e => {
            e.preventDefault();
            LoginForm.classList.add("form--hidden");
            createAccountForm.classList.remove("form--hidden");
        });
        
        document.getElementById("linkLogin").addEventListener("click",e => {
            e.preventDefault();
            LoginForm.classList.remove("form--hidden");
            createAccountForm.classList.add("form--hidden");
        });
    
        //sat en addeventlistener ind her. 
        document.getElementById("login").addEventListener("click", e => {
            e.preventDefault();
            let test; 
            //skift den her værdi til noget andet, hvis du vil have den til at give en error.
            test = "error"
            
            //perform your Fetch login også på baggrund af den lav et tjek om det er en success eller ej 
    
            //Lavet en if else, så den ikke gør begge ting. 
            if(test ==  "success"){
                
            //sat en type ind her, og flyttet den her op
                setFormMessage(LoginForm, "success",  "success, you are now logged in!");
    
            } else {
                setFormMessage(LoginForm, "error", "Invalid username or password");
    
            }
    
    
         });
    
             //sat en addeventlistener ind her. og kopiret den og lavet en ny 
        document.getElementById("signupUsername").addEventListener("submit", e => {
            e.preventDefault();
            let test; 
            test = "error"
            
            //perform your Fetch login
    
            //Lavet en if else, så den ikke gør begge ting. 
            if(test ==  "success"){
                
            //sat en type ind her, og flyttet den her op
                setFormMessage(LoginForm, "success",  "success, you are now logged in!");
    
            } else {
                setFormMessage(LoginForm, "error", "Invalid username or password");
    
            }
    
    
         });
    
    
    
        var forms = document.getElementsByClassName("form__input")
        
        //Ændret den her til at kunne bruge for each
        Array.from(forms).forEach(inputElement => {
            inputElement.addEventListener("blur", e => {
                if(e.target.id === "signupUsername" && e.target.value.lenght > 0 && e.target.value.lenght <10) {
                    setInputError(inputElement, "Username must be minimum 10 characters in lenght");
                }
                
            });
    
            inputElement.addEventListener("input", e => {
                clearInputError(inputElement);
            });
        });
        
    
    });