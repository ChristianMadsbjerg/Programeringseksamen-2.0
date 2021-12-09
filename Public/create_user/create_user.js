var users = [
    {
        username: "cam@gmail.com",
        password: "ca"
    },
    {
        username: "mm@2gmail.com",
        password: "ca"
    },
    {
        username: "o@olegmail.com",
        password: "ca",
    },
    {
        username: "mag@gmail.com",
        password: "ca"
    },
]
// her opfanger jeg data fra min login function/form som jeg har udfyld i HTML 
function Login() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
// her looper jeg gennem mit array users for at se om username og password stemmer overens
    for(i = 0; 1 <users.length; i++) {
        if(username == users[i]. username && password == users[i].password) {
            localStorage.setItem("loginOplysninger",username+password)
            localStorage.getItem("loginOplysninger")
            console.log(username + "is logged in!!!!")
            return 
           // window.location()
        }
    }
    console.log("incorrect username or password")
}
// her opretter jeg en ny function der gør det muligt at oprette en ny user
function registerUser(){
    var registerUser = document.getElementById("NewUser").value
    var RegisterPassword = document.getElementById("NewPassword").value
    var NewUser = {
        username: registerUser,
        password: RegisterPassword
    }

    fetch('http://localhost:5800/signUp', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(NewUser)
    }).then(response => response.json())
    .then(data => {
        console.log(data)
        localStorage.setItem("loginOplysninger",username+password)  
    })
    .catch((error) => {
    })
// her opretter jeg et for-loop for at sikre mig at der ikke er to brugere der kan have samme
//username eller password
    for(i = 0; i < users.length; i++) {
//her sikrer jeg mig med et if-statement at den nye registerUser ikke har et username der allerede er defineret
//af de fire defineret længere oppe i mit array.
        if(registerUser == users[i].username){
            alert("this username is already taken, choose another one")
            return
// her sikrer jeg at alle nye brugere ikke kan have et password der er mindre end 10 tegn 
// dog kan de fire predefineret brugere stadig have deres "ca" password.
        } else if(RegisterPassword.length < 10) {
            alert("This password is too short, must be at least 10 characters")
            return
        }
    } 
    users.push(NewUser)
    console.log(users)
}
