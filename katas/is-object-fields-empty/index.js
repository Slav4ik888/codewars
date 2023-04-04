
const isEmptyFields = (obj) => {
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (obj[key]) return false
    }
  }
  return true;
};

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
const obj3 = {};
const obj4 = undefined;

console.log(`isEmptyFields false: `, isEmptyFields(obj1));
console.log(`isEmptyFields true: `, isEmptyFields(obj2));
console.log(`isEmptyFields true: `, isEmptyFields(obj3));
console.log(`isEmptyFields true: `, isEmptyFields(obj4));
