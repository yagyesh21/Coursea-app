const jwt = reqiure("jsonwebtoken");
require("dotenv").config()

function adminMiddleware(res,req,next){
 const token  =req.headers.token;
const decoded = jwt.vertify(token,process.env.JWT_ADMIN_PASSWORD )

if(decoded){
    req.userId = decoded.id;
    next()
}else{
    res.status(403).json({
        message : "You are not signed in"
    })
}
}

module.exports ={
   adminMiddleware : adminMiddleware
}