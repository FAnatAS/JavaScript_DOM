'use strict'

const messagesArray = [];

const form = document.getElementById('root-form');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const{target: {textInput}} = e
  //console.dir(textInput.value);
  //const newMessagesArray=messagesArray.push(textInput  ? messagesArray.push(textInput.value): console.log(newMessagesArray))
const inputValue = textInput.value.trim();
//const validator = /(^\b\D{3,12}\b)(\b\D{2,17}$)/gi;
//const validator = /(^[A-Z][a-z]{2,12} [A-Z][a-z]{1,17}$)|(^[А-Я][а-я]{2,12} [А-Я][а-я]{1,17})$/gi;
const validator = /^[А-Я][а-я]{1,17} ([А-Я]\.){2}$/;
//const label = pattern.test(inputValue);
//console.log(label);
if(validator.test(inputValue)){
  messagesArray.push(inputValue);
  form.reset();//очищает форму
  }
  console.dir(messagesArray);
})

