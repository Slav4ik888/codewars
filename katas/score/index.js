
// DISPLAY

const { strGivenLength, Display, Divider } = require(`../string-of-given-length/index.js`);
const displayOff = false;
 
const display = Display(15, displayOff);
const divider = Divider(15, displayOff);


// FUNCTION
const price = {
  1: 1000,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
  6: 600
};

const ones = [0, 100, 0, 0, 0, 50, 0];

function score(dice) {
  const result = {};

  dice.forEach(d => result[d] ? result[d]++ : result[d] = 1);

  let sum = 0;
  for (let idx in result) {
    if (result[idx] > 2) {
      const count = result[idx] - 3;
      result[idx] = price[idx];
      if (count) result[idx] += ones[idx] * count;
    }
    else result[idx] = ones[idx] * result[idx]
    
    sum += result[idx];
  }
  return sum
}


// TESTING
const { testEqual } = require(`../testing/index.js`);

const mocks = [
  ["Should be 0 :-(", [2, 3, 4, 6, 2], 0],
  ["Should be 400",   [4, 4, 4, 3, 3], 400],
  ["Should be 450",   [2, 4, 4, 5, 4], 450],
  ["Should be 1100",  [1, 1, 1, 3, 1], 1100],
  ["Should be 250",   [5, 1, 3, 4, 1], 250],
  
];

mocks.forEach(m => testEqual(`${m[0]}`, () => score(m[1]), m[2]));
