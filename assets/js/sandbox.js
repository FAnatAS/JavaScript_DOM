'use strict'

const pattern1 = new RegExp('\\b\\w{4}\\b','gi');
const pattern2 = /\b\w{4}\b/gi;

if (pattern2.test('qwew 1245 @#$#')){
  console.log(true)
}else{
  console.log(false)
}

const str = 'All 1956my troubles 1998seemed 1999so far away';

const pattern3 = /\b(?:[a-z]*)(\d{4})([a-z]+)/gi;

const newStr = str.replace(pattern3, '$1')
const newStr = str.replace(pattern3, '$2 - $1')
