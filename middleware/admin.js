const jwt = require("jsonwebtoken");
require("dotenv").config()

function adminMiddleware(req,res,next){
 const token  =req.headers.token;
const decoded = jwt.verify(token, process.env.JWT_ADMIN_PASSWORD )

if(decoded){
    req.userId = decoded.id;
    next()
}else{
    res.status(403).json({
        message : "You are not signed in"
    })
}
}

module.exports =
   adminMiddleware 
