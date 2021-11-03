'use strict'

// const messagesArray = [];

// const form = document.getElementById('root-form');

// form.addEventListener('submit', (e)=>{
//   e.preventDefault();
//   const{target: {textInput}} = e
//   //console.dir(textInput.value);
//   //const newMessagesArray=messagesArray.push(textInput  ? messagesArray.push(textInput.value): console.log(newMessagesArray))
// const inputValue = textInput.value.trim();
// //const validator = /(^\b\D{3,12}\b)(\b\D{2,17}$)/gi;
// //const validator = /(^[A-Z][a-z]{2,12} [A-Z][a-z]{1,17}$)|(^[А-Я][а-я]{2,12} [А-Я][а-я]{1,17})$/gi;
// const validator = /^[А-Я][а-я]{1,17} ([А-Я]\.){2}$/;
// //const label = pattern.test(inputValue);
// //console.log(label);
// if(validator.test(inputValue)){
//   messagesArray.push(inputValue);
//   form.reset();//очищает форму
//   }
//   console.dir(messagesArray);
// })

const state = [];

const form = document.getElementById('root-form');
const list = document.getElementById('list');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const{target: {textInput}} = e
  const inputValue = textInput.value.trim();
const validatorName = /^[A-Z][a-z]{2,12}$/;
if(validatorName.test(inputValue) && !state.includes(inputValue)){
  state.push(inputValue)
  form.reset();
  const li = createElement('li', {}, document.createTextNode(inputValue));
  const btn = createElement('button', {typeEvent:'click', onClick:deleteHandler.bind(li), dataValue:inputValue}, document.createTextNode('X'));
  list.append(li);
  li.append(btn);
  }
  console.dir(state);
})

function createElement(type, {dataValue='', classNames=[], typeEvent='', onClick=null}, ...children){
  const elem = document.createElement(type);
if(dataValue){
  elem.dataset.value = dataValue;
}
  if(classNames.length){
  elem.classList.add(...classNames);
}
  elem.addEventListener(typeEvent, onClick); //example
  elem.append(...children);
  return elem;
}

function deleteHandler({target:{dataset:{value}}}){
  //e.target.parentNode.remove();
  this.remove();
  state.splice(state.indexOf(value),1)
  
}