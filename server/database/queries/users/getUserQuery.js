
// const { connection } = require("../../config");

// // get user email
// const getUserByEmailQuery=({email})=>{
//   const sql={
//     text: 'SELECT * FROM users WHERE email =$1',
//     values: {email}
//   }

//   return connection.query(sql);
// }

// module.exports=getUserByEmailQuery;





// Correct

const connection = require("../../config/connection")

const getUsersQuery = (myToken) => {
  const userId = myToken.id
  const sql = {
    text: 'SELECT * FROM users WHERE id = $1',
    values: [userId]
  }

  return connection.query(sql)
}

const getUsersIdQuery = (userId) => {
  const sql = {
    text: 'SELECT * FROM users WHERE id = $1',
    values: [userId]
  }

  return connection.query(sql)
}

module.exports = { getUsersQuery, getUsersIdQuery }



