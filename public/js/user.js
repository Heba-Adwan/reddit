
const profileTop = document.querySelector('.profile .profile-top')


const userProfile = (userData) => {
  const avatarDiv = document.createElement('div')
  avatarDiv.className = 'avatar'
  profileTop.appendChild(avatarDiv)

  const avatar = document.createElement('img')
  avatar.src = userData.avatar
  avatarDiv.appendChild(avatar)

  const username = document.createElement('h3')
  profileTop.appendChild(username)

  const userLink = document.createElement('a')
  userLink.href = `/home/${userData.id}`
  userLink.textContent = userData.username
  username.appendChild(userLink)
}

fetch(`/users/${userId}`)
  .then((res) => res.json())
  .then((data) => data.forEach((userData) => userProfile(userData)))
  .catch((err) => console.log(err))

const avatarDiv = document.querySelector('header .nav .avatar')
avatarDiv.textContent = '...'

const homeAvatar = (userData) => {
  const profileLink = document.createElement('a')
  profileLink.href = `/home/${userData.id}`
  avatarDiv.textContent = ''
  avatarDiv.appendChild(profileLink)

  const avatar = document.createElement('img')
  avatar.src = userData.avatar
  profileLink.appendChild(avatar)

  const userName = document.createElement('span')
  userName.textContent = userData.username
  profileLink.appendChild(userName)
}

fetch('/view')
  .then((res) => res.json())
  .then((data) => data.forEach((userData) => homeAvatar(userData)))
  .catch((err) => console.log(err))
