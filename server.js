const express = require("express");
const app= express()
const mongoose = require("mongoose")
const {createUserRoutes} = require("./user.js")

app.use(express.json())

createUserRoutes(app)






app.listen(3000);