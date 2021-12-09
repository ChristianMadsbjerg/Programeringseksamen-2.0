//logud knappen fra programmets frontpage linkes sammen med frontpage.js her, ved hjælp af at hente
//ID'et fra html siden og der preventes en default så siden ikke opdatere når knappen trykkes på
document.getElementById("submit").addEventListener("click",(event) => {
    event.preventDefault();
//herfra fjernes "login oplysningerne" fra localstorage. 
    localStorage.removeItem("loginOplysninger")
// og her skiftes interfacet så brugeren bliver dirigeret til loginsiden
    window.location.replace("http://127.0.0.1:5500/Public/login/login.html?")

})
//min knap fra HTML kobles op til mit js dokument i dette linje. 
document.getElementById("Delete").addEventListener("click",(event) => {
    event.preventDefault();
//opretter ny variable som skal sørge for at de oplysninger der allerede er indtastet "loginOplysninger"
//bliver fundet i local storage, her konverteres det tilbage til javascript data ved brugen af "parse"
    let username = JSON.parse(localStorage.getItem("loginOplysninger")).username
//Her oprettes en fetch der bruger DELETE metoden som går ind og i dette tilfælde tager oplysninger fra 
//Serveren. 
    fetch('http://localhost:5800/delete/' + username, {
                method: "DELETE", 
            }).then(response => response.json())
            .then(data => {
                 console.log(data)
                localStorage.setItem("loginOplysninger",username+password) 
                 
            })
            .catch((error) => {
        })
    
})
