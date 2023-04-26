const connection = require('../../config/connection');

const addPostQuery = ({ content, image, user_id} ) => {
  const sql = {
    text: "INSERT INTO POSTS (content, image, user_id) VALUES ($1, $2, $3) RETURNING 'Successfully'",
    values: [content, image, user_id]
  };
  return connection.query(sql);
}

module.exports = addPostQuery ;
