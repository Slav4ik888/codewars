
const shiftR = (arr, idx) => {
  if (idx + 1 >= arr.length) return [arr[idx], ...arr.slice(0, idx)];
  return [...arr.slice(0, idx), arr[idx + 1], arr[idx], ...arr.slice(idx + 2)]
};


const shiftL = (arr, idx) => {
  if (idx === 0) return [...arr.slice(1), arr[idx]];
  if (idx - 1 === arr.length) return [...arr.slice(0, idx - 1), arr[idx], arr[idx - 1], ...arr.slice(idx + 2)]
  return [...arr.slice(0, idx - 1), arr[idx], arr[idx - 1], ...arr.slice(idx + 1)]
};


const shift = (arr, idx, type) => type === `R` ? shiftR(arr, idx) : shiftL(arr, idx);

// Return shifted str
const getShiftStr = (str, idx) => shift(str.split(``), idx).join(``);

const shiftStr = (obj) => getShiftStr(obj.str, obj.idx);
const shiftIdx = (obj) => obj.idx - 1;

// const shiftMain     = (obj) => getShiftStr(obj.mainStr, obj.mainItemIdx);
// const shiftMainIdx  = (obj) => obj.mainItemIdx = obj.mainItemIdx - 1;

/**
 * Change 2 char in str
 * @param {string} str 
 * @param {number} idx1 
 * @param {number} idx2 
 * @returns str
 */
const change = (str, idx1, idx2) => {
  const
    x1  = idx1 < idx2 ? idx1 : idx2,
    x2  = idx2 > idx1 ? idx2 : idx1,
    arr = str.split(``);

  return changedArr = [
    ...arr.slice(0, x1),
    arr[x2],
    ...arr.slice(x1 + 1, x2),
    arr[x1],
    ...arr.slice(x2 + 1)
  ].join(``)
};

module.exports = { shift, getShiftStr, shiftStr, shiftIdx, change };

// TESTING

const config = {
  testing: false
};

if (config.testing) {
  const { testEqual } = require(`../testing/index.js`);

  // SHIFT
  const mockShift = [1, 2, 3, 4];
  const mockShiftRRes = [
    [2, 1, 3, 4],
    [1, 3, 2, 4],
    [1, 2, 4, 3],
    [4, 1, 2, 3]
  ];
  const mockShiftLRes = [
    [2, 3, 4, 1], // 0
    [2, 1, 3, 4], // 1
    [1, 3, 2, 4], // 2
    [1, 2, 4, 3]  // 3
  ];

  mockShiftRRes.forEach((m, i) => testEqual(`shift R`, () => shift(mockShift, i, `R`), mockShiftRRes[i]));
  mockShiftLRes.forEach((m, i) => testEqual(`shift L`, () => shift(mockShift, i), mockShiftLRes[i]));


  // CHANGE
  const mockChange = [
    [`1234`, 0, 3, `4231`],
    [`1234`, 1, 2, `1324`],
    [`1234`, 2, 3, `1243`],
    [`1234`, 3, 2, `1243`],
  ];

  mockChange.forEach((m, i) => testEqual(`change ${m[0]}: ${m[1]} => ${m[2]}`, () => change(m[0], m[1], m[2]), m[3]));
}
