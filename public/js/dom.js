// const avatarDiv = document.querySelector('header .nav .avatar')
// avatarDiv.textContent = '..'

// const homeAvatar = (userData) => {
//   const profileLink = document.createElement('a')
//   profileLink.href = `/home/${userData.id}`
//   avatarDiv.textContent = ''
//   avatarDiv.appendChild(profileLink)

//   const avatar = document.createElement('img')
//   avatar.src = userData.avatar
//   profileLink.appendChild(avatar)

//   const userName = document.createElement('span')
//   userName.textContent = userData.username
//   profileLink.appendChild(userName)
// }

// fetch('/users')
//   .then((res) => res.json())
//   .then((data) => data.forEach((userData) => homeAvatar(userData)))
//   .catch((err) => console.log(err))