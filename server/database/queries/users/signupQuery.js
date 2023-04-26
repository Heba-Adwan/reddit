const connection = require("../../config/connection")

const signupQuery=({username, email, password} )=>{

console.log(username, email, password);
  const sql={
    text:`INSERT INTO users (username, email, password)
    VALUES($1,$2,$3)
    RETURNING id, username,email
    `,

    values: [username, email, password]
  }


  return connection.query(sql)
}


module.exports=signupQuery;