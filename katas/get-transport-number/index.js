const getTransportNumberSeparated = (num) => {
  if (!num) return ``;
  let regnum = num.regnum.replace(/\s/g, "");

  const firstNum = regnum.match(/\d/);
  const numLength = regnum.match(/\d/g).length;
  const idxFirstNum = regnum.indexOf(firstNum);

  const firstLetters = regnum.slice(0, idxFirstNum).toUpperCase();
  const numbers = regnum.slice(idxFirstNum, idxFirstNum + numLength);
  const secondLetters = regnum.slice(idxFirstNum + numLength).toUpperCase();

  const region = regnum.slice(idxFirstNum + numLength + secondLetters.length);

  return { firstLetters, numbers, secondLetters, region };
};

// const numbers = [
//   {
//     regnum: `a3 84P o`,
//     region: `74`
//   }, {
//     regnum: `a3 84`,
//     region: `74`
//   }, {
//     regnum: `3 84`,
//     region: `74`
//   }, {
//     regnum: `ab223 84`,
//     region: `74`
//   },
// ];

// numbers.forEach((num) => console.log(getTransportNumberSeparated(num)));




const getTransportNumberSeparatedFromStr = (num) => {
  if (!num) return ``;
  let regnum = num.replace(/\s/g, "");

  const idxSlash = regnum.indexOf(`/`);

  let region = ``;
  if (idxSlash !== -1) {
    region = regnum.slice(idxSlash + 1);
    regnum = regnum.slice(0, idxSlash);
  }

  const firstNum = regnum.match(/\d/);
  const numLength = regnum.match(/\d/g).length;
  const idxFirstNum = regnum.indexOf(firstNum);

  const firstLetters = regnum.slice(0, idxFirstNum).toUpperCase();
  const numbers = regnum.slice(idxFirstNum, idxFirstNum + numLength);
  const secondLetters = regnum.slice(idxFirstNum + numLength).toUpperCase();

  // region = regnum.slice(idxFirstNum + numLength + secondLetters.length);

  return { firstLetters, numbers, secondLetters, region };
};


const numbersStr = [
  `a3 84P o/74`,
  `a3 84/74`,
  `3 84/74`,
  `ab223 84/74`,
  `ab223 84`
];

numbersStr.forEach((num) => console.log(getTransportNumberSeparatedFromStr(num)));