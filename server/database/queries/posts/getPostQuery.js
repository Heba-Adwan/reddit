const connection = require('../../config/connection')

const getPostQuery = () => {
  const sql = {
    text: 'SELECT content, image, username, avatar FROM POSTS LEFT JOIN users ON users.id = POSTS.user_id;'
  }
  return connection.query(sql);
}

module.exports = getPostQuery;
