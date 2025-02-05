const express = require("express");
const app= express()
const mongoose = require("mongoose")

app.use(express.json())

app.post("/user/signup" , (req,res)=>{
    res.json({
        message 
    })

})
app.post("/user/login" , (req,res)=>{
    


})

app.get("/user/purchases" , (req,res)=>{
    


})

app.post("/course/purchase" , (req,res)=>{

})

app.get("/courses" , (req,res)=>{
    
})




app.listen(3000);