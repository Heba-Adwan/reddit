

const {join}=require('path')

const homePage=(req, res)=>{
  res.status(200).sendFile(join(__dirname, '..', '..', '..', 'private', 'home.html'))
}

module.exports=homePage