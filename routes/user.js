const {Router} = require("express")
const userRouter = Router()


    userRouter.post("/signup" , (req,res)=>{
        res.json({
            message : 'you are signed up' 
        })
    
    })
   userRouter.post("/login" , (req,res)=>{
    res.json({
        message : "you are loged in"
    })
    
    })
    
    userRouter.get("/purchases" , (req,res)=>{
        res.json({
            message : "you are loged in"
        })
    })


module.exports = {
    userRouter : userRouter
}