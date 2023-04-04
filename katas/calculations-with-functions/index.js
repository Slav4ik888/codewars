const { testEqual } = require('../testing/index.js');
 



const
  id     = (x) => x,
  number = (x) => (f = id) => f(x);

  // [zero, one, two, three, four, five, six, seven, eight, nine] =
  //   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(number),

['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  .forEach(function (name, n) {
    this[name] = number(n);
  });

const 
  plus      = (x) => (y) => y + x,
  minus     = (x) => (y) => y - x,
  times     = (x) => (y) => y * x,
  dividedBy = (x) => (y) => y / x;

// console.log('two * eight = ', two(times(eight())));

testEqual(() => four(plus(nine())), 13);
testEqual(() => seven(times(five())), 35);
testEqual(() => eight(minus(three())), 5);
testEqual(() => six(dividedBy(two())), 3);
