

const Joi=require('joi');


const signupSchema=Joi.object({
  username:Joi.string().min(3).max(30).required().messages({
    'string.empty': 'Username is required',
    'string.min': 'Username must be at least 3 chars',
    'string.max':'Username must be at least 30 chars',
    'any.required':'Username is required!'
  }),
  email:Joi.string().email().required().messages({
    'string.empty':'Email is required!',
    'string.email':'Email maust be valid Email Address'
  }),
  password:Joi.string().min(8).pattern(new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)).messages({
    'string.empty':'Password is required!',
    'string.min':'Password must be at least 8 chars',
    'string.pattern':'Password must be at least one lowercase letter, one uppercase letter, and one digit and at least  8 chars',
    'any.required':'Password is required!'
  }),
 
})



const loginSchema = Joi.object({
  email: Joi.string().trim().email().max(30).required(),
  password: Joi.string().min(8).max(30).required()
})

const postSchema = Joi.object({
  post: Joi.string().max(200).required()
})

const commentSchema = Joi.object({
  comment: Joi.string().max(100).required()
})


module.exports={signupSchema, loginSchema, postSchema, commentSchema};