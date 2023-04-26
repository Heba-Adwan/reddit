

const { verifyToken } = require('../utils');

const isLogged =(req, res, next) =>{
  const {token}  = req.cookies;


  if(!token)  {
    return next()
  }

  verifyToken(token)
  .then(data  =>{
    res.redirect('/')
  }).catch(err =>{
    next()
  })
}


module.exports=isLogged;