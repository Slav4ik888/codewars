const getStrCharOfLength = (length, char) => [...new Array(length)].map(_ => char).join(``);

const addSpaces = (str, needSpace) => {
  let newStr = str;

  [...new Array(needSpace)].forEach(() => {
    newStr += ` `;
  });

  return newStr;
};

const strGivenLength = (str, length) => {
  if (!str || typeof str !== `string`) return str;
  if (!length && length !== 0) return ``;

  const needSpace = length - str.length;
  if (needSpace < 0) return str.slice(0, length);
  if (!needSpace) return str;
  if (needSpace > 0) return addSpaces(str, needSpace);
};


const Display = (length, displayOff) => (description, value) => {
  if (displayOff) return;
  const _value = typeof value === `number` ? value : value || ``;
  
  console.log(strGivenLength(description, length), _value);
};


const Divider = (length, displayOff, style) => () => {
  if (displayOff) return;
  const str = getStrCharOfLength(length, `-`);
  console.log(str);
};


// console.log(strGivenLength(`Slava`, 10) + `length: ` + strGivenLength(`Slava`, 10).length);

module.exports = {
  strGivenLength, Display, Divider
};
