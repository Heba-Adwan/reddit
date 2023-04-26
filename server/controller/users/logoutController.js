const logoutController = (req, res) => {
 
  res.clearCookie('token').redirect('/view/index')
}

module.exports = logoutController
