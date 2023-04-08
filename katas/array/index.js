
console.log(`Start`);

[...new Array(10)].forEach((item, i) => {
  console.log('item: ', i);
});

console.log(`End`);

const MOCK_ARTICLE = { mock: '123' }

// Create and fill array
const createArr = (length, fillItem) => {
  if (! length) return []
  
  return new Array(length)
    .fill(0)
    .map((_, idx) => fillItem || '-');
}

console.log('arr', createArr(12, '1'));
