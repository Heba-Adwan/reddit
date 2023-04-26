// code
const { signupController, loginController, logoutController, getUsersId, getUserPostsId, profilePage, getUsers } = require('../controller')
const { checkAuth } = require('../middelwares')

const userRouter=require('express').Router()

userRouter.post('/signup', signupController)
userRouter.post('/login', loginController )
userRouter.get('/logout', logoutController )

userRouter.get('/data',checkAuth,getUsers)
userRouter.get('/data/:id', getUsersId)
userRouter.get('/home/:userId', profilePage)
userRouter.get('/profile/:userId', getUserPostsId)



module.exports=userRouter

