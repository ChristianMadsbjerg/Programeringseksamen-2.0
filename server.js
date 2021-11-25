const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.json());

const PORT=5800;
app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
});

//login
app.get("/login", (req,res) => {
    res.status(200).json("login")
});


// (opret bruger i og gemme lokalt på en server.)
app.get("/login", (req, res) => {
    res.render ("login.js","login.html")
})

app.post("/form__button", async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect("login")

    } catch {
        res.redirect("/frontpage")


    }  
})