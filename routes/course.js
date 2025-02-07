const {Router} = require("express")
const CourseRoter = Router()

    CourseRoter.post("/purchase" , (req,res)=>{
        res.json({
          message : 'course endpoint'
        })
    })
    
    CourseRoter.get("/preview" , (req,res)=>{
      res.json({
        message : 'course endpoint'
      })
    })


module.exports = {
  CourseRoter : CourseRoter
}