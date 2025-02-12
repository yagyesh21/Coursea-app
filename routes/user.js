const express = require("express");
const {Router} = require("express")
const {UserModel} = require("../db.js")
const userRouter = Router()
const jwt = require("jsonwebtoken")
const JWT_Secret = "gg12345ok"

userRouter.use(express.json())
// User Signup route handle
    userRouter.post("/signup" ,async(req,res)=>{
        const gmail = req.body.gmail
        const firstName = req.body.firstName
        const lastName = req.body.lastName;
        const password = req.body.password

     const user = await UserModel.create({
            gmail ,
            firstName ,
            lastName ,
            password 
        })
            res.json({
                message : "you are signed up"
            })
    })

    function Auth(req,res,next){
        const firstName= req.body.firstName;
        const lastName = req.body.lastName;
        const password =req.body.password;

        const usercheck = UserModel.findOne({
            firstName : firstName, 
            lastName : lastName , 
            password :password
        })
        if(!usercheck){
            res.status(403).json({
                message : "InValid username or password"  
            })
        } else{
            next()
        }
    }
    
   userRouter.post("/login" , Auth,(req,res)=>{
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const usertoken = jwt.sign(firstName + lastName ,JWT_Secret)
        
    res.json({
        message : usertoken
    })
    })
    
    userRouter.get("/purchases" , (req,res)=>{
        res.json({
            message : "you are logged in"
        })
    })


module.exports = {
    userRouter : userRouter
}