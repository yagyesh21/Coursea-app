const {Router} = require("express");
const AdminRouter = Router()
const {AdminSchema} = require("../db.js")
AdminRouter.post("/signup" , (req,res)=>{
    res.json({
        message : 'you are signed up' 
    })

})

AdminRouter.post("/signin", (req,res)=>{
res.json({
    message : "you are loged in"
})
})

AdminRouter.put("/signup" , (req,res)=>{
    res.json({
        message : 'you are signed up' 
    })

})

AdminRouter.get("/signup" , (req,res)=>{
    res.json({
        message : 'you are signed up' 
    })

})


module.exports = {
    AdminRouter : AdminRouter
}



