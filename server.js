const express = require("express");
const app= express()
const mongoose = require("mongoose")
const {userRouter} = require("./routes/user.js")
const {CourseRoter} = require("./routes/course.js")
// app.use(express.json())

// any req coming to /user will be handle by userRouter

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", CourseRoter)


app.listen(3000);