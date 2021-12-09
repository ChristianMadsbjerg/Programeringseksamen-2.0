const fs = require("fs");
const express = require("express");
const { mainModule } = require("process");
const { response } = require("express");  
const cors = require("cors");
const app = express();

app.use(cors())
app.use(express.static("public"));
app.use(express.json());

const PORT=5800;
app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
});

//Requests 


app.get("login", (req,res) => {
    fs.readFile("login/profile.json", function(err, data){
        if(err) res.send(err)
        res.send(data)
    })
})

app.post("/login", (req,res) => {
    let dataArray =JSON.parse(fs.readFileSync("profile.json"))
    let user; 

    for(let i = 0; i <dataArray.length; i++) {
        if(req.body.username == dataArray[i].username && req.body.password == dataArray[i].password) { 
            res.json({msg: "success"})
            user = dataArray[i]
        }
    }

    if(!user){
        res.send({msg: "fejl"})
    }
})


// Array måde at slette og opdatere på 
app.post("/signUp", (req,res) => {

    let dataArray =JSON.parse(fs.readFileSync("profile.json"))

    dataArray.push(req.body)


    fs.writeFile("profile.json", JSON.stringify(dataArray, null, 4), err =>{
        if(err) res.send(err)
        res.send({
            msg:"Succes"
        })
    })
})

app.get("/loginarray", (req,res) => {
    fs.readFile("login/profile.json", function(err, data){
        if(err) res.send(err)
        res.send(data)
        
    })
})
//her oprettes en app.post, går ind ind og sender data til programmets backend, og ved at jeg har
//("/create_product") som er min "route" så leder den efter data derinde.
app.post("/create_product", (req,res) => {
    let dataArray =JSON.parse(fs.readFileSync("product.json"))
// her skubber jeg data ind på mit array 
    dataArray.push(req.body)
// her skirves filen "product.json" og transporteres ind via stringify 
    fs.writeFile("product.json", JSON.stringify(dataArray, null, 4), err =>{
        if(err) res.send(err)
        res.send({
            msg:"Succes"
        })
    })
});
//her responderes der til programmets "DELETE" fetch hvor de oplysninger der skal fjernes fra programmet
// Jeg opretter en ny variable, der hedder dataArray som går ind og læser filen "profile.json" hvor 
// alle brugerne af programmet et stored. 
app.delete("/delete/:username", (req,res) => {
    console.log('hej2')
    let username = req.params.username
// ved brug af parse tages json data'en og konverteres til data der kan bruges af andet.
    let dataArray =JSON.parse(fs.readFileSync("profile.json"))

    dataArray.forEach((element, index) => {
        if(element.username == username){
            dataArray.splice(index, 1)
        } 
    });


    fs.writeFile("profile.json", JSON.stringify(dataArray, null, 4), err =>{
        if(err) res.send(err)
        res.send({
            msg:"Succes"
        })
    })
});
