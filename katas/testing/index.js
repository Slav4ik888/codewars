// DISPLAY

const { Display, Divider } = require(`../string-of-given-length/index.js`);
 
const display = Display(10);
const divider = Divider(15);


// ----------------------------------------
// ------------     TESTING    ------------
// ----------------------------------------

const compareArray = (arr1, arr2) => {
  // console.log('arr1: ', arr1);
  // console.log('arr2: ', arr2);
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;

  let result = true;
  for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i];
    const find = arr2.find(it => it === item);

    if (!find && find !== ``) {
      result = false;
      break;
    }
  }
  return result;
};


const showError = (toEqual, resultFunc) => {
  console.log(`Ошибка!`);
  display(`Expected:`, toEqual);
  display(`Recivied:`, resultFunc);
};


const showRight = () => console.log(`Верно`);


/**
 * Тестирует функцию
 * @param {string} description
 * @param {function} func 
 * @param {*} toEqual 
 * @returns 
 */
exports.testEqual = (description, func, toEqual) => {
  console.log(``);
  if (!func) return console.log(`Не указали проверяемую функцию`);

  console.log(description);

  const resultFunc = func();

  if (Array.isArray(resultFunc)) {
    if (compareArray(resultFunc, toEqual)) showRight();
    else showError(toEqual, resultFunc);
  }
  else if (resultFunc === toEqual) showRight();
  else showError(toEqual, resultFunc);

  return divider();
};
