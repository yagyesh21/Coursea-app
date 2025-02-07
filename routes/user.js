
const {Router} = require("express")


function createUserRoutes(app){
    app.post("/user/signup" , (req,res)=>{
        res.json({
            message : 'you are signed up' 
        })
    
    })
    app.post("/user/login" , (req,res)=>{
    res.json({
        message : "you are loged in"
    })
    
    })
    
    app.get("/user/purchases" , (req,res)=>{
        res.json({
            message : "you are loged in"
        })
    })
}

module.exports = {
    createUserRoutes : createUserRoutes
}