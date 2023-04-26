const postRouter=require('express').Router();
const { addPostC, getPostC } = require('../controller/post/post');
const checkAuth = require('../middelwares/checkAuth');



postRouter.post('/add', checkAuth, addPostC)
postRouter.get('/get', getPostC)


module.exports=postRouter;
