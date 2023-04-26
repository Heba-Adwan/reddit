const { clintError, serverError } = require('./errors/serverError');
const indexPage = require("./pages/getIndex");
const loginPage = require("./pages/getLoginPage");
const signupPage = require("./pages/getSignupPage");
const homePage = require("./pages/home");
const profilePage = require("./pages/profileHome");
const { signupController, loginController, logoutController, getUsers, getUsersId, getUserPostsId,  } = require("./users");

module.exports={
  signupController,
  loginController,
  logoutController,
  loginPage,
  signupPage,
  homePage,
  indexPage,
  getUsers,
  getUsersId,
  getUserPostsId,
  profilePage,
  clintError,
  serverError



}