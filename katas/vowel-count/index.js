const { testEqual } = require(`../testing/index.js`);

const VOWEL = `aeiou`;

const getCount = (str) => [...str]
  .reduce((acc, item) => {
    if (VOWEL.indexOf(item) !== -1) {
      acc++
    }
    return acc;
  }, 0);

const getCount2 = (str) => {
  const match = str.match(/[aeiou]/gi);
  return match ? match.length : 0;
}

testEqual(() => getCount2(`abrakadabra`), 5);
