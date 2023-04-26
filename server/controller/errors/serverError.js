const {ValidationError}=require('joi');
const { JsonWebTokenError } = require('jsonwebtoken');
const { CustomError } = require('../../utils/helper');


const serverError=(err, req, res, next)=>{
 

if(err instanceof ValidationError){
 return res.status(400).json({
    error:true,
    data:{
      details:err.details
    }
  })
}

 if(err instanceof JsonWebTokenError){
  return res.status(401).json({
    error:true,
    data:{
      message:'Unauthorized!',
      from:'JsonWebTokenError'
    }
  })
}


 if(err instanceof CustomError){

  return res.status(err.status).json({
    error:true,
    data:{
      message:err.message,
      from:'Custom Error'
    }
  })
}


res.status(500)
.json({
  error:true,
  data:{
    message:'Internal Server Error!'
  }
})



}

module.exports=  serverError;