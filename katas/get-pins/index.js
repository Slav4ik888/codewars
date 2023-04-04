
// DISPLAY

const { strGivenLength, Display, Divider } = require(`../string-of-given-length/index.js`);
const displayOff = false;
 
const display = Display(15, displayOff);
const divider = Divider(15, displayOff);

function getPINs2(observed) {
  return observed.split('')
  .map( t => ({
    '0': [ '0', '8' ],
    '1': [ '1', '2', '4' ],
    '2': [ '1', '2', '3', '5' ],
    '3': [ '2', '3', '6' ],
    '4': [ '1', '4', '5', '7' ],
    '5': [ '2', '4', '5', '6', '8' ],
    '6': [ '3', '5', '6', '9' ],
    '7': [ '4', '7', '8' ],
    '8': [ '5', '7', '8', '9', '0' ],
    '9': [ '6', '8', '9' ]
  }[t]))
  .reduce((pre, cur)=> [].concat.apply([], pre.map(t => cur.map(g => t + g))));
}


// FUNCTION
const getPINs = (observed) => {
  const
    matrix = [],
    result = [];

  observed.split(``).forEach(digit => {
    const adjacents = getAdjacents(digit);
    matrix.push(adjacents);
  });

  calc(result, matrix, 0, '');

  return result
}


// HELPERS
const adjacents = [`80`, `124`, `1235`, `236`, `1457`, `24568`, `3569`, `478`, `57890`, `689`];

const getAdjacents = (digit) => adjacents[parseInt(digit)];

const calc = (result, matrix, idx, strLast) => {
  const
    l       = matrix.length,
    idxNext = idx + 1,
    str     = strLast;

  for (let a = 0; a < matrix[idx].length; a++) {
    const
      digitCurrent = matrix[idx][a],
      strCurrent   = str + digitCurrent;

    if (l > idxNext) calc(result, matrix, idxNext, strCurrent);
    else result.push(strCurrent);
  }
}


// TESTING
const { testEqual } = require(`../testing/index.js`);

const expectations = {
    "8": ["5", "7", "8", "9", "0"],
    "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
    "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]
  };

for (let pin in expectations) {
  testEqual(`getPINs: ${pin}`, () => getPINs(pin).sort(), expectations[pin].sort());
}
