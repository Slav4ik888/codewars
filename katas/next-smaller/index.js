const { testEqual } = require('../testing/index.js');

const minifyNumberLast = (n) => {
  const arr = n.toString().split(``).sort();

  const idx = arr.findIndex(item => Number(item) > 0);
  if (idx !== 0) {
    const del = arr.splice(idx, 1);
    return [...del, ...arr].join(``)
  }

  return arr.join(``);
};

const minifyNumber = (n) => {
  return [...`${n}`] // .toString().split(``)
    .sort().join(``)
    .replace(/^(0+)([1-9])/, `$2$1`); // Хотим любой первый 0 поменять с первой цифрой отличной от 0

};

function nextSmaller(n) {
  const min = minifyNumber(n);

  // for (let i = n - 1; i >= min; i--) {
  //   if (minifyNumber(i) === min) return i;
  // }
  while (--n >= min) if (minifyNumber(n) === min) return n;

  return -1;
};


const titles = [
  { data: 21, result: 12 },
  { data: 907, result: 790 },
  { data: 531, result: 513 },
  { data: 135, result: -1 },
  { data: 2071, result: 2017 },
  { data: 1027, result: -1 },
  { data: 414, result: 144 },
  { data: 1234567908, result: 1234567890 },
];

console.log(minifyNumber(123000321)); // result 112233
// titles.forEach(item => testEqual(``, () => nextSmaller(item.data), item.result));
