const postRouter=require('express').Router();
const checkAuth = require('../middelwares/checkAuth');


const getPostController=(req,res)=>{
  res.json({
    error:false,
    dara:{
      posts:['post1', 'post2']
    }
  })
}

postRouter.get('/', checkAuth, getPostController)


module.exports=postRouter;

// عندي طريقتين اعمل اوث اما زي سطر 14 او اني اعمل اب يوز ثم راوتر جيت
// getPostConلا تحتاج اوثانيكيشن
// const postRouter=require('express').Router();
// const {getPostController, createPostController}= require('')
// const checkAuth = require('../middelwares');


// postRouter.get('/', getPostController)
// postRouter.use(checkAuth)
// postRouter.post('/create', createPostController)
// module.exports=postRouter;