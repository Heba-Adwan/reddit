const { getUserPostsIdQuery, getPostQuery, addPostQuery } = require("./queries/posts");
const { loginQuery, signupQuery, getUsersQuery,  } = require("./queries/users");
// const { loginQuery, signupQuery} = require("./queries/users");

module.exports={
// getUserByEmailQuery,
  loginQuery,
  signupQuery,
  getUsersQuery,
  getUserPostsIdQuery,
  getPostQuery,
  addPostQuery,
}
