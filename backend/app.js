const express = require("express")
const app = express()

app.get("/", (req,res)=>{
    res.send("Welcome to the homePage of the website")
})

app.get("/home", (req,res)=>{
    res.send("This is the main page of the website")
})

app.listen(3000, ()=>{
    console.log("Listening at port 3000")
})