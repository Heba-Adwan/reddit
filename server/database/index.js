const { getUserPostsIdQuery } = require("./queries/posts");
const { loginQuery, signupQuery, getUsersIdQuery, getUsersQuery,  } = require("./queries/users");
// const { loginQuery, signupQuery} = require("./queries/users");
// ما تنسي استدعي صح


module.exports={
// getUserByEmailQuery,
  loginQuery,
  signupQuery,
  getUsersIdQuery,
  getUsersQuery,
getUserPostsIdQuery

}

