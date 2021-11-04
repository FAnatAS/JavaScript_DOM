'use strict'

// const btn = document.getElementById('btn');
// btn.addEventListener('click', btnHandler);
// function btnHandler(e){

// }
counter()
function counter(){
  let i=1;
  const id = setInterval(()=>{
console.log(i++)
if(i>10){
  clearInterval(id);
}
  }, 500)
}

