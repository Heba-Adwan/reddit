const bcrypt=require('bcrypt')
const { signupQuery } = require("../../database");
const { signupSchema,signToken } = require("../../utils");
const { CustomError } = require('../../utils/helper');

const signupController=(req, res, next)=>{
  const {username,email, password}=req.body;
 


 signupSchema.validateAsync({username,email, password},{abortEarly:false})
 .then((data)=>{
  return bcrypt.hash(password, 10)
 }).then(hash=>({username,email, password: hash}))
 .then(data=>signupQuery(data))
 .then(data=>data.rows[0])
 .then(data=>{
req.user=data;

  res
  .json({
    error:false,
    data:{
      message:'User Created Successfuly',
      user:req.user
    }
  })
})
 .catch(err=>{ 
  
next(err)
 }) 

}


module.exports=signupController;
