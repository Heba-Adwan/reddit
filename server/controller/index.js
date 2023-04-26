const {clientError, serverError} = require("./errors");
const indexPage = require("./pages/getIndex");
const loginPage = require("./pages/getLoginPage");
const signupPage = require("./pages/getSignupPage");
const homePage = require("./pages/home");
const profilePage = require("./pages/profileHome");
const { signupController, loginController, logoutController, getUsers, getUsersId, getUserPostsId,  } = require("./users");

module.exports={
  signupController,
  clientError,
  serverError,
loginController,
logoutController,
loginPage,
signupPage,
homePage,
indexPage,
// getUsersName
// getUsersId,
// getUserPostsId
getUsers,
getUsersId,
getUserPostsId,
profilePage


}

 