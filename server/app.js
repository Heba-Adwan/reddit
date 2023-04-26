const path = require('path')
const express=require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const router = require('./router');
const { serverError, clintError } = require('./controller');

require('dotenv').config()


const  app=express()

const {PORT} = process.env;
app.set('port', PORT || 5000);

app.disable('x-powered-by')

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use( compression())

app.use(express.static(path.join(__dirname, '..', 'public')))


app.use( router)
app.use(clintError)
app.use(serverError)


module.exports=app;