const compression = require('compression');
const cookieParser = require('cookie-parser');
const express=require('express')
require('dotenv').config()
const  app=express()

const {PORT} = process.env;
app.set('port', PORT || 5000);

app.disable('x-powered-by')

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use([
  cookieParser(),
  compression()
])

app.get('/', (req,res)=>{
res.json({
  msg:'hi'
})
})


module.exports=app;