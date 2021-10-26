// function logMesssage(){
//   consike.log('hi!')
// }

// const [button] = document.getElementsByTagName('button');

// button.addEventListener('click', logMesssage);

// document.querySelector('article+article>img')
// //const [,imgwww]=document.images 
// document.querySelector('ul')

// document.querySelector('main>article>p')

// document.querySelectorAll('p:not(.text)')
'use strict'

const imagesDB = [
  'https://www.seachefs.com/fileadmin/user_upload/1300x558_-_Header/Unternehmen-sea-chefs-als-business-partner-sc.jpg',
  'https://chemsec.org/app/uploads/2019/02/Lost-at-SEA.jpg',
  'https://games.mail.ru/hotbox/content_files/article/2020/06/10/ec8dff97d28144e69984320d4197378c.jpeg',
  'https://data4.origin.com/asset/content/dam/originx/web/app/games/sea-of-solitude/sea-of-solitude/SOS_pfeat_002.jpg/6d190baf-3c74-473c-89a2-0cf399891ae2/original.jpg',
  'https://ec.europa.eu/programmes/horizon2020/sites/default/files/newsroom/29_05_17_small_22078.jpg',
  'https://yourmission.org/wp-content/uploads/2017/07/081918_SocialMedia_shawnn-tan-265187-300x300.jpg'
];

const slider = new Slider(imagesDB);

const img = document.querySelector('.slide>img')

const [prevButton, nextButton] = document.querySelectorAll('.slider-container>button');

function updateView (){
  img.setAttribute('src', slider.currentSlide);
}
updateView();

nextButton.addEventListener('click', ()=>{
  slider.currentIndex = slider.next();
  updateView();
})

prevButton.addEventListener('click', ()=>{
  slider.currentIndex = slider.prev();
  updateView();
})