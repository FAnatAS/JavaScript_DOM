// function logMesssage(){
//   console.log('hi!')
// }

// const [button] = document.getElementsByTagName('button');

// button.addEventListener('click', logMesssage);

// document.querySelector('article+article>img')
// //const [,imgwww]=document.images 
// document.querySelector('ul')

// document.querySelector('main>article>p')

// document.querySelectorAll('p:not(.text)')
'use strict'

// const imagesDB = [
//   'https://www.seachefs.com/fileadmin/user_upload/1300x558_-_Header/Unternehmen-sea-chefs-als-business-partner-sc.jpg',
//   'https://chemsec.org/app/uploads/2019/02/Lost-at-SEA.jpg',
//   'https://games.mail.ru/hotbox/content_files/article/2020/06/10/ec8dff97d28144e69984320d4197378c.jpeg',
//   'https://data4.origin.com/asset/content/dam/originx/web/app/games/sea-of-solitude/sea-of-solitude/SOS_pfeat_002.jpg/6d190baf-3c74-473c-89a2-0cf399891ae2/original.jpg',
//   'https://ec.europa.eu/programmes/horizon2020/sites/default/files/newsroom/29_05_17_small_22078.jpg',
//   'https://yourmission.org/wp-content/uploads/2017/07/081918_SocialMedia_shawnn-tan-265187-300x300.jpg'
// ];

// const slider = new Slider(imagesDB);

// const img = document.querySelector('.slide>img')

// const [prevButton, nextButton] = document.querySelectorAll('.slider-container>button');

// function updateView (){
//   img.setAttribute('src', slider.currentSlide);
// }
// updateView();

// nextButton.addEventListener('click', ()=>{
//   slider.currentIndex = slider.next();
//   updateView();
// })

// prevButton.addEventListener('click', ()=>{
//   slider.currentIndex = slider.prev();
//   updateView();
// })


// const [openBtn, closeBtn]=document.querySelectorAll('button');

// const switchInnerText=({target})=>{
//   const openElem = target===closeBtn ? openBtn : closeBtn;
//   const closeElem = target===closeBtn ? closeBtn : openBtn;

//   const buffer = openElem.textContent;
//   openElem.textContent=closeElem.textContent;
//   closeElem.textContent=buffer;

//   closeElem.removeEventListener('mouseenter', switchInnerText);
//   openElem.addEventListener('mouseenter', switchInnerText);
// }
// const clickHandler=({target})=>{
//   console.log(target)
// }

// openBtn.addEventListener('mouseenter', switchInnerText, {once:true});
// closeBtn.addEventListener('mouseenter', switchInnerText);

// openBtn.addEventListener('click', clickHandler);
// closeBtn.addEventListener('click', clickHandler);

// const btns = document.querySelectorAll('button');

// //console.log(btns);
// const btnHandler = ({target:{dataset:{path}}})=>{console.log(path)};

// for (const btn of btns) {
//   btn.addEventListener('click', btnHandler); 
    
// }
// const btns = document.querySelectorAll('button');

// const btnHandler = ({
//   target:{
//     dataset:{color},
//     parentNode: parentRoot
//   }
// })=>{
//   parentRoot.style.backgroundColor=color
// }

// const handler = (e)=>{console.log(e)}


// for (const btn of btns) {
//   btn.addEventListener('click', btnHandler);
//   btn.addEventListener('click', handler);
// }    

const btns = document.querySelectorAll('button');

const btnHandler = ({
    target:{
      dataset:{color},
      parentNode: parentRoot
    }
  })=>{
    parentRoot.style.backgroundColor=color
  }

const handler = (e)=>{
  e.cancelBubble = true;
  e.stopPropagation();
  console.group();
  console.dir(e.target);
  console.dir(e.currnetTarget);
  console.groupEnd();
  }

  for (const btn of btns) {
    btn.addEventListener('click', btnHandler);
    btn.addEventListener('click', handler);
    btn.addEventListener('click', ()=>{console.log(123)}, {capture:true, once:true});
    
  }

  document.getElementById('root').addEventListener('click', handler);
  document.body.addEventListener('click', handler);

  document.addEventListener('click', handler,true);
  window.addEventListener('click', handler, true);

   