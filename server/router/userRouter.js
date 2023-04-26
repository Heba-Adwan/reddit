// code
const { signupController, loginController, logoutController, getUsers, getUsersId, getUserPostsId, profilePage } = require('../controller')

const userRouter=require('express').Router()

userRouter.post('/signup', signupController)
userRouter.post('/login', loginController )
userRouter.get('/logout', logoutController )

userRouter.get('/users', getUsers)
userRouter.get('/users/:id', getUsersId)
userRouter.get('/home/:userId', profilePage)
userRouter.get('/home/user/:userId', getUserPostsId)



module.exports=userRouter

