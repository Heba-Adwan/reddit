// const { getUsername } = require("../../database");



// const getUsersName = (req, res, next) => {
  
//   getUsername(req.params.username)
//     .then((data) => res.json({
//       error: false,
//       data: data.rows[0],
//     }))
//     .catch((err) => {
//       next(err);
//     });
// };
// module.exports = getUsersName;






// Correct


const jwt = require('jsonwebtoken')
const { getUsersQuery, getUsersIdQuery, getUserPostsIdQuery } = require('../../database')


const getUsers = (req, res) => {

  const {user}=req
  res.json({
    data:user
  })

}


const getUsersId = (req, res) => {
  const userId = req.params.id
  getUsersIdQuery(userId)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => console.log(err))
}

const getUserPostsId = (req, res) => {
  const userId = req.params.userId

  getUserPostsIdQuery(userId)
    .then((data) => res.status(200).json(data.rows))
    .catch(console.log)
}
module.exports = { getUsers, getUsersId, getUserPostsId }

