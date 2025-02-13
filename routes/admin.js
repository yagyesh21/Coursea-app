const {Router} = require("express");
const AdminRouter = Router()
const {AdminModel} = require("../db.js")
const {CourseModel}= require("../db.js")
const jwt = require("jsonwebtoken")
const adminMiddleware = require("../middleware/admin.js")

AdminRouter.post("/signup" , async(req,res)=>{
    const {gmail, firstName , lastName , password} = req.body

    const admin =  await AdminModel.create({
        gmail : gmail,
        firstName :firstName,
        lastName : lastName,
        password : password
    })

    if(admin){
        res.json ({
            message :"You are now a admin"
        })
    }

})

AdminRouter.post("/signin",async (req,res)=>{
const {gmail , password} = req.body

const admincheck = await AdminModel.findOne({
    gmail : gmail,
    password : password
})
    
if(!admincheck){
        res.status(403).json({
            message : "Invalid credentails"
        })

    }else{
        const token = jwt.sign({
            id : admincheck._id
        }, process.env.JWT_ADMIN_PASSWORD)

        res.json({
            token : token
        })
    }

})

AdminRouter.post("/course" ,adminMiddleware, async(req,res)=>{
const adminId = req.userId;

const {title, description, imageUrl} = req.body;

await CourseModel.create({
    title,description ,imageUrl , price , creatorID :adminId
})  

res.json({
    message : "Course created",
    courseId : course.id
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



