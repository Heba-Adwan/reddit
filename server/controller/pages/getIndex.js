



const {join}=require('path')

const indexPage=(req, res)=>{
  res.status(200).sendFile(join(__dirname, '..', '..', '..', 'public', 'index.html'))
}

module.exports=indexPage