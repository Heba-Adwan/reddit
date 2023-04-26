

const logout=document.querySelector('#logout')
logout.addEventListener('click', (e)=>{
 

  console.log('sss');
fetch('/users/logout')

.then(data  =>data.json())
.then(data=> {
if(!data.err){
  window.location.href='/view/index'
}
})

.catch(console.log)

})