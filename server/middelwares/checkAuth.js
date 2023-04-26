const { CustomError, verifyToken } = require("../utils");

 const checkAuth=(req, res, next)=>{
  const {token} = req.cookies;
  
  if(!token){
    throw new CustomError("Unauthorized!", 401);
  }

  verifyToken(token)
  .then(data =>{
    req.user=data;
    next();
  }).catch(err =>{
    next(err)
  })

 }




module.exports=checkAuth;