const connection = require("../../config/connection")


const getUserPostsIdQuery = (userId) => {
  const sql = {
    text: 'SELECT posts.id, posts.title,posts.content, posts.user_id, users.username FROM posts JOIN users ON posts.user_id = users.id WHERE posts.user_id = $1',
    values: [userId]
  }

  return connection.query(sql)
}

module.exports = getUserPostsIdQuery
