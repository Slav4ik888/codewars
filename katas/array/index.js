
// [...new Array(10)].forEach((item, i) => {
//   console.log('item: ', i);
// });

const MOCK_ARTICLE = { mock: '123' }

// Create and fill array
const createArr = (length, fillItem) => {
  if (! length) return []
  
  return new Array(length)
    .fill(0)
    .map((_, idx) => fillItem || '-');
}

// console.log('arr', createArr(12, '1'));

// ------------------------------------------------

const OBJ = {
  a: {
    t: 'hi'
  },
  b: 'buhay',
  c: ['1', '2', 3, 4, { ab: 'abc' }]
};


function arrFromObj(obj) {
  let arr = [];

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      arr.push(obj[key]);
    }
  }
  return arr;
};

console.log(arrFromObj(OBJ));
console.log(Object.values(OBJ));
