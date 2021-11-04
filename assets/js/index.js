'use strict'

// // const btn = document.getElementById('btn');
// // btn.addEventListener('click', btnHandler);
// // function btnHandler(e){

// // }
// counter()
// function counter(){
//   let i=1;
//   const id = setInterval(()=>{
// console.log(i++)
// if(i>10){
//   clearInterval(id);
// }
//   }, 500)
// }

const user={
  name:'Elon',
  sname:'Musk',
  age:50,
  getFullName(){
    return`${this.name} ${this.sname}`;
  },
  children:['one', 'two'],
  isAdult: true,
  hasPet: undefined,
  isUkraine: null,
  [Symbol('test')]:123,
  friends:{
    friend1: 'Tom',
    friend2: 'Tim',
  },
}
console.log(user);
const serializedUser = JSON.stringify(user);
console.log(serializedUser);

const deSerializedUser = JSON.parse(serializedUser)
console.log(deSerializedUser);