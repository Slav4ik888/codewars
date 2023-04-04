
console.log(`Start`);

[...new Array(10)].forEach((item, i) => {
  console.log('item: ', i);
});

console.log(`End`);

// Create and fill array
new Array(16)
  .fill(0)
  .map((_, idx) => ({
    ...MOCK_ARTICLE,
    id: String(idx)
  }))
