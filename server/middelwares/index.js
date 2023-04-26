const { verifyToken } = require("../utils");
const checkAuth = require("./checkAuth");
const isLogged = require("./isLogged");

module.exports={
  verifyToken,
isLogged,
checkAuth

}