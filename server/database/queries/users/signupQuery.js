const connection = require("../../config/connection")

const signupQuery=({username, email, password} )=>{


  const sql={
    text:`INSER INTO users (username, email, password)
    VALUES($1,$2,$3)
    RETURNING id, username,email
    `,

    value: [username, email, password]
  }


  return connection.query(sql)
}



module.exports=signupQuery;