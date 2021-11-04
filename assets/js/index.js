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

//-------------04-11-2021------------------

// const user={
//   name:'Elon',
//   sname:'Musk',
//   age:50,
//   getFullName(){
//     return`${this.name} ${this.sname}`;
//   },
//   children:['one', 'two'],
//   isAdult: true,
//   hasPet: undefined,
//   isUkraine: null,
//   [Symbol('test')]:123,
//   friends:{
//     friend1: 'Tom',
//     friend2: 'Tim',
//   },
// }
// console.log(user);
// const serializedUser = JSON.stringify(user);
// console.log(serializedUser);

// const deSerializedUser = JSON.parse(serializedUser)
// console.log(deSerializedUser);


// let i=0;
// function f(){
//   console.log(i++)
//   f();
//   // setTimeout(()=>{
//   //   f();
//   // },0)
// }

// f()

//const promise = fetch('./assets/js/data.json');

// promise.then((response)=>{
//   console.log('ok')
//   console.log(response)
//   const jsonPromise = response.json()
//   jsonPromise.then((data)=>{
//     console.table(data)
//   })
// })

// console.log(promise)

fetch('./assets/js/data.json')
.then((response)=>response.json())
.then((data)=>{
  //console.table(data)
  data.forEach((user)=>{
    console.log(user.name);
   });
})
.catch((error)=>{console.log(error);})
.finally(()=>{console.log('the end')})

const myFirstPromise = new Promise (executor);

function executor(resolve, reject){
  Math.random()>0.5?resolve():reject();
}
