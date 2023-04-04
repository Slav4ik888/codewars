const { testEqual } = require(`../testing/index.js`);


function validParentheses(parens) {
  const stack = [];

  for (const symbol of parens) {
    if (symbol === `(`) {
      stack.push(symbol);
    }
    else if (symbol === `)`) {
      if (!stack.pop()) {
        return false;
      };
    }
  }
  return !stack.length;
}

function validParentheses2(parens) {
  const reg = /\(\)/;
  while (reg.test(parens)) {
    parens = parens.replace(reg, ``);
  }

  return !parens
}

// ----------------- //
// ----  TESTS  ---- //
// ----------------- //

const mocks = [
  [`(`,                false],
  [`)`,                false],
  [``,                 true ],
  [`()`,               true ],
  [`())`,              false],
  [`(()())(22)()((()))`, true ],
  [`(()())()()(()))`,  false],
];

mocks.forEach(m => testEqual(() => validParentheses(m[0]), m[1]));
