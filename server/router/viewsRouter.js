const { loginPage, signupPage, homePage, indexPage } = require('../controller');
const { isLogged, checkAuth } = require('../middelwares');
const userRouter = require('./userRouter');

const viewRouter=require('express').Router();


viewRouter.get('/login', isLogged,  loginPage);
viewRouter.get('/signup', isLogged, signupPage);
viewRouter.get('/home', checkAuth, homePage );
viewRouter.get('/index', isLogged,indexPage )


viewRouter.use('/', userRouter)

module.exports=viewRouter;

