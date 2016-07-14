let deepEqual = require('./deepEqual.js');



//-------------- tests --------------------
console.log('start tests');


let s = {
  key: 13,
  t: 34,
  p: 'job'
};
let x = {
  key: 13,
  t: 34,
  p: 'job'
};


let v = new Date(2016,0);
let f = new Date(1451595600000);

let u = [1,v,3,4,s];
let g = [1,f,3,4,x];

let a = {
  a: 1,
  b: 2,
  c: 'd',
  t: x,
  r: v,
  p: u
};

let b = {
  c: 'd',
  t: s,
  a: 1,
  p: g,
  r: f,
  b: 2
};

console.log(deepEqual(a,b));