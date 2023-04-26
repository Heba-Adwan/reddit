
const profileTop = document.querySelector('.profile-top')


const userProfile = (userData) => {
  const avatarDiv = document.createElement('div')
  avatarDiv.className = 'avatar'
  profileTop.appendChild(avatarDiv)

  const avatar = document.createElement('img')
  avatar.src = '/images/img.png'
  avatarDiv.appendChild(avatar)

  const username = document.createElement('h3')
  username.textContent = userData.data.username
  profileTop.appendChild(username)
}


fetch('/users/data')
.then(res  => res.json())
.then(userProfile)
.catch(console.log)