//------ simple tests ------
let forEach = require('./forEach.js');
let filter = require('./filter.js');
let slice = require('./slice.js');
let reduce = require('./reduce.js');
let map = require('./map.js');
let splice = require('./splice.js');

//------ forEach -------
console.log('------ forEach -------');

let a = [1,2,3,4,5,'a','b','c','d','e'];
let callback = function(val, i) {
  console.log(`${i}: ${val}; context: ${this}`);
};

forEach(a, callback, 'context');

//------ filter -------
console.log('------ filter -------');

callback = function(val) {
  return typeof val === this.type;
};

console.log(filter(a, callback, {type: 'string'}));

//------ map -------
console.log('------ map -------');

callback = function(val) {
  return `${this.simbol}${val}`;
};

console.log(map(a, callback, {simbol: '•'}));

//------ slice -------
console.log('------ slice -------');

console.log(`arguments  |  mySlice  Slice`);
console.log(`   5,6     |  ${slice(a,5,6)}  ${a.slice(5,6)}`);
console.log(`   -5,-6   |  ${slice(a,-5,-6)}  ${a.slice(-5,-6)}`);
console.log(`   -5,6    |  ${slice(a,-5,6)}  ${a.slice(-5,6)}`);
console.log(`   5,-2    |  ${slice(a,5,-2)}  ${a.slice(5,-2)}`);
console.log(`   5,-6    |  ${slice(a,5,-6)}  ${a.slice(5,-6)}`);
console.log(`   15,16   |  ${slice(a,15,16)}  ${a.slice(15,16)}`);
console.log(`   -15,-16 |  ${slice(a,-15,-16)}  ${a.slice(-15,-16)}`);
console.log(`   1,-6    |  ${slice(a,1,-6)}  ${a.slice(1,-6)}`);
console.log(`   -1,6    |  ${slice(a,-1,6)}  ${a.slice(-1,6)}`);
console.log(`   5,6     |  ${slice(a,5,6)}  ${a.slice(5,6)}`);
console.log(`   no,no   |  ${slice(a)}  ${a.slice()}`);
console.log(`   3,no    |  ${slice(a,3)}  ${a.slice(3)}`);
console.log(`   -8,no   |  ${slice(a,-8)}  ${a.slice(-8)}`);
console.log(`   -15,no  |  ${slice(a,-15)}  ${a.slice(-15)}`);
console.log(`   13,no   |  ${slice(a,13)}  ${a.slice(13)}`);

//------ reduce -----
console.log('------ reduce -------');

let b = [1,2,3,5554,5,6,7,8];
callback = function(previousValue, currentValue, index, array) {
  if(typeof array === "object") return previousValue + currentValue - index;
};

console.log(b.reduce(callback)+ " "+reduce(b, callback));

//----- splice -----
console.log('------ splice -------');

let x = [1,2,3,4,5];
let y = [1,2,3,4,5];

console.log(`splice(2,1);
splice: deleted ${x.splice(2,1)} array ${x}
mySplice: deleted ${splice(y,2,1)} array ${y}
--------------------------------------------`);
x = [1,2,3,4,5];
y = [1,2,3,4,5];
 console.log(`splice(3,2);
splice: deleted ${x.splice(3,2)} array ${x}
 mySplice: deleted ${splice(y,3,2)} array ${y}
 --------------------------------------------`);
x = [1,2,3,4,5];
y = [1,2,3,4,5];
console.log(`splice(-2,1);
splice: deleted ${x.splice(-2,1)} array ${x}
mySplice: deleted ${splice(y,-2,1)} array ${y}
--------------------------------------------`);
x = [1,2,3,4,5];
y = [1,2,3,4,5];
console.log(`splice(2,-1);
splice: deleted ${x.splice(2,-1)}  array ${x}
mySplice: deleted ${splice(y,2,-1)}  array ${y}
--------------------------------------------`);
x = [1,2,3,4,5];
y = [1,2,3,4,5];
console.log(`splice(-2,-1);
splice: deleted ${x.splice(-2,-1)}  array ${x}
mySplice: deleted ${splice(y,-2,-1)} array ${y}
--------------------------------------------`);
x = [1,2,3,4,5];
y = [1,2,3,4,5];
console.log(`splice(2,0);
splice: deleted ${x.splice(2,0)} array ${x}
mySplice: deleted ${splice(y,2,0)} array ${y}
--------------------------------------------`);
x = [1,2,3,4,5];
y = [1,2,3,4,5];
console.log(`splice(2,1,9,9,9,9,9,9);
splice: deleted ${x.splice(2,1,9,9,9,9,9,9)} array ${x}
mySplice: deleted ${splice(y,2,1,9,9,9,9,9,9)} array ${y}
--------------------------------------------`);
x = [1,2,3,4,5];
y = [1,2,3,4,5];
console.log(`splice(-3,3,9,9,9,9);
splice: deleted ${x.splice(-3,3,9,9,9,9)} array ${x}
mySplice: deleted ${splice(y,-3,3,9,9,9,9)} array ${y}
--------------------------------------------`);
 x = [1,2,3,4,5];
 y = [1,2,3,4,5];
console.log(`splice(-3,0);
splice: deleted ${x.splice(-3,0)} array ${x}
mySplice: deleted ${splice(y,-3,0)} array ${y}
--------------------------------------------`);
x = [1,2,3,4,5];
y = [1,2,3,4,5];
console.log(`splice(-3,0,9,9,9,9);
splice: deleted ${x.splice(-3,0,9,9,9,9)} array ${x}
mySplice: deleted ${splice(y,-3,0,9,9,9,9)} array ${y}
--------------------------------------------`);
x = [1,2,3,4,5];
y = [1,2,3,4,5];
console.log(`splice(1,4,9,9,9,9);
splice: deleted ${x.splice(1,4,9,9,9,9)} array ${x}
mySplice: deleted ${splice(y,1,4,9,9,9,9)} array ${y}
--------------------------------------------`);
x = [1,2,3,4,5];
y = [1,2,3,4,5];
console.log(`splice(-5,2,9,9,9,9);
splice: deleted ${x.splice(-5,2)} array ${x}
mySplice: deleted ${splice(y,-5,2)} array ${y}
--------------------------------------------`);
x = [1,2,3,4,5];
y = [1,2,3,4,5];
console.log(`splice(0,5,9,9,9);
splice: deleted ${x.splice(0,5,9,9,9)} array ${x}
mySplice: deleted ${splice(y,0,5,9,9,9)} array ${y}
--------------------------------------------`);
x = [1,2,3,4,5];
y = [1,2,3,4,5];
console.log(`splice(0,3);
splice: deleted ${x.splice(0,3)} array ${x}
mySplice: deleted ${splice(y,0,3)} array ${y}
--------------------------------------------`);
