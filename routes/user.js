const {Router} = require("express")
const userRouter = Router()
const {UserModel} = require("../db.js")
const jwt = require("jsonwebtoken")
require("dotenv").config()
// User Signup route handle
    userRouter.post("/signup" ,async(req,res)=>{
     const {gmail, firstName, lastName, password}= req.body

   const user = await UserModel.create({
        gmail : gmail,
        firstName: firstName,
        lastName : lastName,
        password : password
      })
      
      if(user){
        res.json({
            message : "you are signed up"
        })
      }

    })

    
   userRouter.post("/signin",async(req,res)=>{
    const {gmail, password} = req.body;
    const userchecker = await UserModel.findOne({
        gmail : gmail,
        password : password
    })
    if(userchecker){
  const token =jwt.sign({
            id : userchecker._id
        },process.env.JWT_USER_PASSWORD)

        res.json({
            token : token
        })
    }else{
        res.status(403).json({
            message :"Incorrect credentials"
        })
    }

   })


module.exports = {
    userRouter : userRouter
}