
/**
 * Проверяет, чтобы символы использовались не более стольки раз, сколько раз они используются в начальной строке.
 * Т.к. при переборе вариантов, будут повторения.
 * Пример: исходная строка 'abc', массив принимается в виде ['a', 'b', 'c']
 *  - 'bca' valid
 *  - 'aab' not valid (a - использовано 2 раза)
 * @param {Array} validArr - массив символов начальной (входной) строки. 'abc' => ['a', 'b', 'c']
 * @param {string} str - строка для проверки.
 */
const validate = (validArr, str) => {
  const copyValidArr = [...validArr];
  let valid = true;

  for (let i = 0; i < str.length; i++) {
    const idx = copyValidArr.indexOf(str[i]);

    if (idx !== -1) {
      copyValidArr.splice(idx, 1); // удаляем найденный символ из массива, тк использовали его
    }
    else {
      valid = false; // Не обнаружили символ в массиве валидных
      break;
    }
  }

  return valid;
}

// TEST
// validate(['a', 'b', 'c', 'd'], 'abcd'); // true
// console.log("['a', 'b', 'c', 'd'], 'abcd'", validate(['a', 'b', 'c', 'd'], 'abcd'));

// validate(['a', 'b', 'c', 'd'], 'abbd'); // false
// console.log("['a', 'b', 'c', 'd'], 'abbd'", validate(['a', 'b', 'c', 'd'], 'abbd'));


module.exports = { validate };
