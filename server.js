const express = require("express");
const app= express()
const mongoose = require("mongoose")
const {createUserRoutes} = require("./routes/user.js")
const {createCourseRoutes} = require("./routes/course.js")
app.use(express.json())

createUserRoutes(app);
createCourseRoutes(app);


app.listen(3000);