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