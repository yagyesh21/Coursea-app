const {Router} = require("express");
const adminRouter = Router()

const {AdminModel} = require("../db.js")
const {courseModel}= require("../db.js")

const jwt = require("jsonwebtoken")
const adminMiddleware = require("../middleware/admin.js")

adminRouter.post("/signup" , async(req,res)=>{
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

adminRouter.post("/signin",async (req,res)=>{
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

// creating a course
adminRouter.post("/course",adminMiddleware, async(req,res)=>{
// userID is updated in adminMiddlware
const adminId = req.userId;

const {title, description, imageUrl, price} = req.body;

const course = await courseModel.create({
    title :title,
    description: description ,
    imageUrl:imageUrl,
 price: price, 
 creatorID :adminId
}) 

res.json({
    message : "Course created",
    courseId : course._id
})

})


adminRouter.put("/signup" ,adminMiddleware,  async(req,res)=>{
    const adminId = req.userId;

    const { title, description , imageUrl, price, courseId } = req.body;

// checking if courseID belong's to admin 
   const course =  await courseModel.updateOne({
    _id : courseId,
    creatorID : adminId
   },{ 
    title : title,
        description :description,
        imageUrl : imageUrl,
        price : price, 
        creatorID :adminId
    })

  res.json({
        message : "course updated",
        courseId : course._id

})
})

adminRouter.get("/course/bulk", adminMiddleware, async(req,res)=>{
    const adminId =req.userId;

    const course = await courseModel.find({
        creatorID : adminId
    })

    res.json({
        message : "Course updated", 
        course
    })
})

module.exports = {
    adminRouter: adminRouter
 };
 
