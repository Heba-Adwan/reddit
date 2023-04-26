

const message = document.querySelector('#message');
const signUp = document.querySelector('#signup-form');

signUp.addEventListener('submit', (e)=>{
  e.preventDefault();
  const obj = new FormData(signUp);
  const data = Object.fromEntries(obj);

  // Check if any fields are empty
  if (!data.username || !data.email || !data.password) {
    message.textContent = "Error: Please fill in all fields";
    return;
  }

  fetch('/users/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  .then(data => data.json())
  // .then(console.log)
// .catch(console.log);
  .then((result) => {
    if (result && result.data) {
      message.textContent = result.data.message;
    }
  })
  .catch((err) => {
    message.textContent = "Error: " + err.message;
  });
});
