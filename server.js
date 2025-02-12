const express = require("express");
const app= express()
const mongoose = require("mongoose")
require("dotenv").config()
const {userRouter} = require("./routes/user.js")
const {CourseRoter} = require("./routes/course.js")
const {AdminRouter}  =require("./routes/admin.js")
 app.use(express.json())

// any req coming to /user will be handle by userRouter

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin",AdminRouter);
app.use("/api/v1/course", CourseRoter);

async function main(){
 await  mongoose.connect(process.env.MONGO_URL)

    app.listen(3000);
}
 main()