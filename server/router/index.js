const postRouter = require('./postRouter');
const userRouter = require('./userRouter');
const viewRouter = require('./viewsRouter');

const router=require('express').Router();


  router.use('/users', userRouter); //  /api/v1/users/signup
  router.use('/posts', postRouter)  //نفس الشي اعمله جوا الكونترول
router.use('/view', viewRouter )


  module.exports=router;



