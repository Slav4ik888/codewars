const { testEqual } = require('../testing/index.js');


function stringInMaxDepth(str) {
  let level   = 0;
  let deepest = 0;
  let result  = [str];


  for (let i = 0, start = 0; i < str.length; i++) {
    const item = str[i];

    if (item === `(`) {
      level++;
      start = i;
    } else if (item === `)`) {
      if (level === deepest) result.push(str.slice(start + 1, i));
      level--;
    }
    if (level > deepest) {
      deepest = level;
      result = [];
    }
  }
  
  return result;
}

const mocks = [
  [`AA(XX((YY))(U))`, ["YY"]],
  [`((AAX(AB)(UP)F(Z))(HH))`, ["AB", "UP", "Z"]],
  ["AAA", ["AAA"]], 
  ["", [""]]
]
mocks.forEach(m => testEqual(() => stringInMaxDepth(m[0]), m[1]));


