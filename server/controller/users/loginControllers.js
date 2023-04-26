const bcrypt=require('bcrypt')
const { CustomError } = require("../../utils/helper");
const {loginSchema, signToken } = require('../../utils');
const {  loginQuery } = require('../../database');


const loginController=(req, res, next)=>{
  const {email, password} =req.body;

  loginQuery({email})
  .then(({rows})=>{
    if(!rows.length){
      throw CustomError("Ivalid email or password", 400)
    }
    return rows[0]
  })
  .then(data=>{
    req.user=data;
   return bcrypt.compare(password, data.password)
  })
  .then(result=>{
    if(!result){
      throw CustomError("Ivalid email or password", 400)

    }

  }).then(()=>{
    const {id, username, email}=req.user;
    return signToken({username:username, userId: id, isLogged:true})
    
  })
  .then(token=>{
    const {id, username, email}=req.user;
    res
    .cookie('token', token, {httpOnly:true})
    .json({
      error:false,
      data:{
        message:'User Logged in successfully',
        user: {id, username, email}
// window.location

      }
    })
  })
  // signupQuery
.catch(err=>{
  next(err)
})
}

module.exports=loginController;