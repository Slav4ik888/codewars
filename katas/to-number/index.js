const addSpaceBetweenNumber = (number) => {
  if (!number) return ``;
  
  // Перевести в строку
  let newNumber = String(number);

  let beforeDot = newNumber;
  let afterDot = ``;

  // Разрезаем до и после знака
  if (newNumber.includes(`.`)) {
    beforeDot = newNumber.slice(0, newNumber.indexOf(`.`));
    afterDot = newNumber.slice(newNumber.indexOf(`.`));
  }

  // Добавляем пробелы
  let result = ``;
  let newResult = ``;

  if (beforeDot.length > 2) {
    let num = 0; // Чтобы отсчитывать по 3 числа
    for (let i = beforeDot.length - 1; i > -1; i--) {
      num++;
      // if (result.length/3 === Math.floor(result.length/3) && (result.length > 0)) {
      if (num / 4 === Math.floor(num / 4) && (num > 0)) {
        num = 0;
        result += ` `;
        i++;
      } else {
        result += beforeDot[i];
      }
    }
    // Переводим в обратную сторону
    for (let i = result.length - 1; i > -1; i--) {
      newResult += result[i];
    }
    beforeDot = newResult;
  }

  return beforeDot + afterDot
};


// =============================================

const isDotComma = (str) => /[,.]/g.test(str);
const isDot      = (str) => /\./g  .test(str);
const isComma    = (str) => /,/g   .test(str);
const commaToDot = (str) => str.replace(/\,/g, `.`);
const dotToComma = (str) => str.replace(/\./g, `,`);
const delSpace   = (str) => str.replace(/\s/g, ``);
const getDigit   = (str) => str.replace(/\D/g, ``);

// =============================================

const toNumber = (str) => {
  if (typeof str !== `string`) return 0;
  if (!str) return 0;

  const dot = commaToDot(str);
  const spa = delSpace(dot);
  const num = parseFloat(spa);
  
  if (!num) return 0;
  return num;
};

const arr = [`123`, `123,222,2`, `123.2222`, ``, undefined, `sdf`];

// arr.forEach(t => console.log(t + ` - ` + toNumber(t) + `\n`));

// =============================================


const input = document.querySelector(`.blur`);
input.addEventListener(`input`, handleChange);


function handleChange(e) {
  const value = e.target.value;
  console.log('target: ', value);

  let str = ``;

  for (let i = 0; i < value.length; i++) {
    if (isDotComma(value[i])) {
      if (!isDotComma(str)) str += value[i] // Comma or Dota must be one
    }
    else str += getDigit(value[i]);
  }

  str = addSpaceBetweenNumber(commaToDot(str));
  str = dotToComma(str);
  input.value = str;
};


const handleBlur = () => {
  const value = input.value;
  console.log('value: ', value);

  
  console.log(`RESULT: `, toNumber(value));
}
