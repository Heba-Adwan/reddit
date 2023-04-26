// code
const { signupController, loginController, logoutController, getUsers, getUsersId, getUserPostsId, profilePage } = require('../controller')
const { checkAuth } = require('../middelwares')

const userRouter=require('express').Router()

userRouter.post('/signup', signupController)
userRouter.post('/login', loginController )
userRouter.get('/logout', logoutController )

userRouter.get('/data',checkAuth,getUsers)
userRouter.get('/data/:id', getUsersId)
userRouter.get('/home/:userId', profilePage)
userRouter.get('/home/user/:userId', getUserPostsId)



module.exports=userRouter

