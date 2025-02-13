const jwt = reqiure("jsonwebtoken");
require("dotenv").config()

function userMiddleware(res,req,next){
 const token  =req.headers.token;
const decoded = jwt.vertify(token,process.env.JWT_USER_PASSWORD )

if(decoded){
    req.userId = decoded.id;
    next()
}else{
    res.status(403).json({
        message : "You are not signed"
    })
}
}

module.exports ={
    userMiddleware : userMiddleware
}