const { testEqual } = require(`../testing/index.js`);

const { strGivenLength } = require(`../string-of-given-length/index.js`);
const displayOff = true;

const display = (description, value) => {
  if (displayOff) return;
  console.log(strGivenLength(description, 10), value || ``);
};
const divider = () => {
  if (displayOff) return;
  console.log(`------------------------------------`);
};
  
const plus = (a, b, overflow) => {
  let result = 0;
  if (Number(a))        result += Number(a);
  if (Number(b))        result += Number(b);
  if (Number(overflow)) result += Number(overflow);
  return result.toString();
};
// testEqual(`plus`, () => plus(`1234`, `23`, `44`), `1301`);
// testEqual(`plus`, () => plus(`1234`, undefined, `44`), `1278`);
// testEqual(`plus`, () => plus(`1234`, `23`, undefined), `1257`);

const getPrimarySecondary = (a, b) => a.length >= b.length
  ? { primary: a, secondary: b }
  : { primary: b, secondary: a };



function addBigNumbers(a, b) {
  display('a: ', a);
  display('b: ', b);
  divider();

  const { primary, secondary } = getPrimarySecondary(a, b);
  const secondaryReverse = secondary.split(``).reverse();

  let overflow = ``;
  let sum = ``;

  primary.split(``).reverse().forEach((prim, i) => {
    display('prim: ', prim);
    display(`second: `, secondaryReverse[i]);

    const result = plus(prim, secondaryReverse[i], overflow);
    if (result.length > 2) {
      display(`error:`, result);
    }
    const idx = result.length > 1 ? 1 : 0;
    sum = result[idx] + sum;
    display('sum: ', sum);
    overflow = idx ? result[0] : 0;
    display('overflow: ', overflow);
    

    divider();
  });
  
  display(`sum: `, sum);
  return overflow ? overflow + sum : sum;
};

const mocks = [
  [{ a: "1",    b: "1"   }, "2"],
  [{ a: "123",  b: "456" }, "579"],
  [{ a: "888",  b: "222" }, "1110"],
  [{ a: "1372", b: "69"  }, "1441"],
  [{ a: "12",   b: "456" }, "468"],
  [{ a: "101",  b: "100" }, "201"],
  [{ a: "63829983432984289347293874", b: "90938498237058927340892374089" }, "91002328220491911630239667963"],
];

// addBigNumbers(mocks[3][0].a, mocks[3][0].b);

mocks.forEach(m => testEqual(`addBigNumbers: ${m[0].a}`, () => addBigNumbers(m[0].a, m[0].b), m[1]));
