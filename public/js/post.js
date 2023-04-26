const content = document.getElementById('comment-box');
const image  = document.getElementById('image');
const postBtn = document.getElementById('comment');



if (postBtn) {

postBtn.addEventListener('click', () => {
  if (content.value.trim() !== '') {
    const body = {
      content: content.value,
      image: image.value,
    }
    fetch('/post/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    }).then((data) => {
      if (!data.error) {
        window.location.href = '/view/home';
      };
    }).catch(console.log)
  }
})
};
