

const postContainer = document.querySelector('.postContainer')

const createPosts = (data) => {
  data.forEach(post => {

    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    const userDiv = document.createElement('div');
    userDiv.className = 'user';
    const userImg = document.createElement('img');
    userImg.className = 'user-avatar'
    if (post.avatar){
      userImg.src = post.avatar
    }else {
      userImg.src = '/images/img.png'

    }
    const userName = document.createElement('p');
    userName.className = 'username'
    userName.textContent = post.username;
    userDiv.appendChild(userImg)
    userDiv.appendChild(userName)
    postDiv.appendChild(userDiv)

    const postContent = document.createElement('div');
    postContent.className = 'postContent'

    const content = document.createElement('p');
    content.classList = 'content';
    content.textContent = post.content;
    postDiv.appendChild(content);

    const postImage = document.createElement('img');
    postImage.classList = 'post-image';
    postImage.src = post.image;
    postDiv.appendChild(postImage);

    // const commentBox = document.createElement('div');
    // const commentContent = document.createElement('div');


    postContainer.appendChild(postDiv);
    postContainer.appendChild(postContent)
  });
}



fetch('/post/get')
.then((data) => data.json())
.then((data) => data.data)
.then(createPosts)
.catch(console.log);









/* <div class="post">
<div class="user">
  <img src="/images/img.png" alt="" class="uiser-avatar">
  <p class="username">****</p>
</div>
<div class="postContent">
  <p class="content">wadsssssssssasdadddddddddddddd</p>
  <img src="/images/img.png" alt="" class="post-image">
</div>
<div class="commentBox">
  <div class="commentContent">
    <h2>Heba</h2>
    <p>20-2-2023-3:00AM</p>
  </div>
  <input type="text" id="comment-box" placeholder=" comment">
  <button id="comment" type="submit">Add Comment</button>
  <ul id="unordered">

  </ul>
</div>
</div> */