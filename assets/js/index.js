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
  'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.bsec-organization.org%2F&psig=AOvVaw2lqK-9EBsdv2E2kxDib87T&ust=1635319825713000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiE1p7H5_MCFQAAAAAdAAAAABAD',
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Ffioshouse%2Fphotos%2Fd41d8cd9%2F2656975621216724%2F&psig=AOvVaw2lqK-9EBsdv2E2kxDib87T&ust=1635319825713000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiE1p7H5_MCFQAAAAAdAAAAABAJ',
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.wikipedia.org%2Fwiki%2FThe_Sea&psig=AOvVaw2lqK-9EBsdv2E2kxDib87T&ust=1635319825713000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiE1p7H5_MCFQAAAAAdAAAAABAP',
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fclimate.esa.int%2Ffr%2Fprojects%2Fsea-state%2F&psig=AOvVaw2lqK-9EBsdv2E2kxDib87T&ust=1635319825713000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiE1p7H5_MCFQAAAAAdAAAAABAV',
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.seaofthieves.com%2Fru&psig=AOvVaw2lqK-9EBsdv2E2kxDib87T&ust=1635319825713000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiE1p7H5_MCFQAAAAAdAAAAABAc'
];

const img = document.querySelector('.slide>img')

const [prevButton, nextButton] = document.querySelectorAll('.slider-container>button')
