'use strict'

const messagesArray = [];

const form = document.getElementById('root-form');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const{target: {textInput}} = e
  //console.dir(textInput.value);
  //const newMessagesArray=messagesArray.push(textInput  ? messagesArray.push(textInput.value): console.log(newMessagesArray))

const inputValue = textInput.value.trim();
if(inputValue){
  messagesArray.push(inputValue);
  form.reset();//очищает форму
  }
  console.dir(messagesArray);
})
const card = document.createElement('li');
   card.classList.add('cardWrapper');

   function createActorCards(actor){
    const p = createElement('p',{classNames:['cardDescription']},
          document.createTextNode(actor.birthdate || 'unknown'))
    const h2 = createElement('h2', {classNames:['cardName']}, 
          document.createTextNode(actor.name || 'noname'))
    const article = createElement('article', {classNames:['cardContainer']}, 
    createImageWrapper(actor),
    h2,
    p,
    );
    return createElement('li', {classNames:['cardWrapper']}, article);
  }