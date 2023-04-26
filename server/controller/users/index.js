// const getUsersName = require('./getUserController')
// const { getUsers, getUsersId, getUserPostsId } = require('./getUserController')
const { getUsers, getUsersId, getUserPostsId } = require('./getUserController')
const loginController = require('./loginControllers')
const logoutController = require('./logoutController')
const signupController=require('./signupController')

module.exports={
  signupController,
  loginController,
  logoutController,
  //  getUsersName
  
  // getUsersId,
  // getUserPostsId
  getUsers,
  getUsersId,
getUserPostsId
  






}