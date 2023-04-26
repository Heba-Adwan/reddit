const path = require('path')

const profilePage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', '..', '..', 'private',  'home.html'))
}

module.exports = profilePage
