const {sign}=require('jsonwebtoken')
require('dotenv').config()

const { SECRET_KEY } =process.env;


const signToken=(payload)=>{
  return new Promise((resolve, reject)=>{
    sign(payload, SECRET_KEY, (err, token)=>{
      if(err){
        reject(err)
      }
      resolve(token)
    })
  })
}

module.exports=signToken