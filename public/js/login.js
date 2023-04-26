

const login=document.querySelector('#login-form')
login.addEventListener('submit', (e)=>{
  e.preventDefault()

  const obj=new FormData(login)
  const data=Object.fromEntries(obj)

fetch('/users/login', {
  method:'POST',
  headers:{'Content-Type': 'application/json'},
  body:JSON.stringify(data)
})

.then(data  =>data.json())
.then(data=> {
if(!data.err){
  window.location.href='/view/home'
}
else{
  window.location.href='/view/index'
}
}

)



.catch(console.log)


})

