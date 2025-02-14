const mongoose = require("mongoose");
const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId


const UsersSchema = new Schema({
   id : ObjectId,
   gmail : {type : String , unique : true},
   password : String,
   firstName : String,
   lastName : String

})

const courseSchema = new Schema({
    id :ObjectId,
    title : String,
    description : String,
    price  : Number,
    imageUrl : String,
    creatorID : ObjectId
 })

 const AdminSchema = new Schema({
    id :ObjectId,
    gmail : {type : String , unique : true},
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
 const courseModel= mongoose.model ("Course", courseSchema)
 const AdminModel = mongoose.model ("Admin", AdminSchema)
 const PurchaseModel= mongoose.model ("Purchase", PurchaseSchema)

 module.exports = {
    UserModel :UserModel,
   courseModel :courseModel,
    AdminModel : AdminModel,
    PurchaseModel : PurchaseModel
 }