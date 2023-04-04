
/**
 * All values in string separated by commas 
 * @param {*} obj 
 */
function getAllObjValue(obj) {
  let str = ``;

  if (typeof obj !== `object`) {
    console.log(`obj - не является объектом. ${obj}`);
    return str;
  }

  const values = Object.values(obj);
  if (!values.length) {
    console.log(`obj - пустой. ${obj}`);
    return str;
  }

  values.forEach(v => v && (str += v + `, `));

  return str.slice(0, str.length - 2);
}


const obj1 = {
  sd: ``,
  adf: null,
  weq: undefined,
  asq: `value`
};
const obj2 = {
  sd: ``,
  adf: null,
  weq: undefined
};
const obj3 = {
  sd: ``,
  adf: null,
  weq: undefined,
  asq: `value1`,
  asq1: `value2`,
  asq2: `value3`,
  asq3: `value4`,
};

console.log('getAllObjValue(obj1): [' + getAllObjValue(obj1) + `]`);
console.log('getAllObjValue(obj2): [' + getAllObjValue(obj2) + `]`);
console.log('getAllObjValue(obj3): [' + getAllObjValue(obj3) + `]`);