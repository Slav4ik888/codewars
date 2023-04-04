const { testEqual } = require('../testing/index.js');


// ----------------------------------------
// ------------    FUNCTION    ------------
// ----------------------------------------


const capitalize = ([firstChar, ...rest]) => firstChar.toUpperCase() + rest.join(``);


function titleCase(title, minorWords) {
  if (!title) return ``;

  const minorWordsArr = minorWords ? minorWords.toLowerCase().split(` `) : [];

  return title
    .toLowerCase()
    .split(` `)
    .map((item, idx) => {
      if (minorWordsArr.indexOf(item) === -1 || idx === 0) {
        return capitalize(item);
      }
      return item
    })
    .join(` `)
}

const titles = [
  { title: `a clash of KINGS`,        minor: `a an the of`, result: `A Clash of Kings` },
  { title: `THE WIND IN THE WILLOWS`, minor: `The In`,      result: `The Wind in the Willows` },
  { title: `the quick brown fox`,     minor: ``,            result: `The Quick Brown Fox` }
];




titles.forEach(item => testEqual(() => titleCase(item.title, item.minor), item.result));
