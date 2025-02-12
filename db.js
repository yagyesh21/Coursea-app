const mongoose = require("mongoose");
const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId


const UsersSchema = new Schema({
   id : ObjectId,
   email : {type : String, unique : true},
   password : String,
   firstName : String,
   lastName : String

})

const CourseSchema = new Schema({
    id :ObjectId,
    title : String,
    description : String,
    price  : Number,
    imageUrl : String,
    creatorID : ObjectId
 })

 const AdminSchema = new Schema({
    id :ObjectId,
    email : String,
    password  : String,
    firstName  : String,
    lastName : String
 
 })

 const PurchaseSchema= new Schema({
     id : ObjectId, 
     Course_id : ObjectId,
     Users_id : ObjectId
 })

 const UserModel = mongoose.model ("User", UsersSchema)
 const CourseModel= mongoose.model ("Course", CourseSchema)
 const AdminModel = mongoose.model ("Admin", AdminSchema)
 const PurchaseModel= mongoose.model ("Purchase", PurchaseSchema)

 module.exports = {
    UserModel :UserModel,
    CourseModel : CourseModel,
    AdminModel : AdminModel,
    PurchaseModel : PurchaseModel
 }