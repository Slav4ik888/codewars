require('dotenv').config();
const log = require('./utils/log')(`main`);

const isSortedAndHow = require('./katas/is-sorted-and-how');
const getArray = require('./katas/get-array');

// console.log('isSortedAndHow([3, 1, 2]): ', isSortedAndHow([3, 1, 2]));
// console.log('isSortedAndHow([3, 2, 1]): ', isSortedAndHow([3, 2, 1]));
// console.log('isSortedAndHow([1, 2, 3]): ', isSortedAndHow([1, 2, 3]));


log(`getArray(5)`, getArray(5)); // => [undefined x 5]
log(`getArray('a', 'b', 'c')`, getArray('a', 'b', 'c')) // => ['a', 'b', 'c']

console.log(`--------------`);
log(`process.env.NAME_SPACE`, process.env.NAME_SPACE);
process.env.NAME_SPACE += ` Korzan`;
log(`process.env.NAME_SPACE`, process.env.NAME_SPACE);


let arr = [1, 2, 3, 4, 5];

arr.splice(0);
console.log(arr);
