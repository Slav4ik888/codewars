const cloneObj = (obj) => {
  if (!obj) return {};
  
  const newObj = JSON.stringify(obj);
  return JSON.parse(newObj);
};


/**
 * Сортируем по arr по полю fieldName
 * @param {array} arr 
 * @param {string} fieldName 
 * @param {boolean} decrease // если нужно на убывание
 * @return {array} - result
 */
function sortingArr(arr, fieldName, decrease) { // test +++ without decrease
  
  let result = arr.map(item => cloneObj(item));

  const L = decrease ? 1 : -1;
  const G = decrease ? -1 : 1;
  
  return result.sort((a, b) => {
    if (a[fieldName] < b[fieldName]) {
      return L;
    }
    if (a[fieldName] > b[fieldName]) {
      return G;
    }
    return 0;
  }); 
};

const arr = [
  { label: `21 - 11`, id: `dfs1`, obj: { list: `asd1` } },
  { label: `21 - 43`, id: `dfs2`, obj: { list: `asd2` } },
  { label: `22 - 01`, id: `dfs3`, obj: { list: `asd3` } },
  { label: `21 - 01`, id: `dfs4`, obj: { list: `asd4` } },
];

// const newArr = sortingArr(arr, `label`);
// console.log(arr === newArr);


// const p = newArr[2];
// p.obj.list = 123;
// console.log('newArr: ', newArr);
// console.log('arr: ', arr);
// console.log(`sortingArr: `, sortingArr(arr, `label`));
// console.log(`sortingArr: `, sortingArr(arr, `label`, true));

// VARIANT 2


/**
 * Сортирует в нужной последовательности города
 * для распределения SimpleProductions
 */
const sortTownsForSimpleProduct = (towns) => {
  let
    sortedTowns = [],
    sorted = {};
    
  towns.forEach(town => {
    if (sorted[town.produces.length] === undefined) sorted[town.produces.length] = [];
    sorted[town.produces.length].push({ ...town });
  });


  Object
    .keys(sorted)
    .sort((a, b) => {
      if (a > b) return -1 // От большего к меньшему
    })
    .forEach(key => {
      sortedTowns.push(...sorted[key]);
    });
  
  
  return sortedTowns
}

// HELPERS
function getRandomNumber(min, max) { return Math.floor(Math.random() * (max - min + 1) + min);};
const getRandomEngLitera = () => {
  const eng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return eng[getRandomNumber(0, 25)];
};
const getRandomLetters = (n) => {
  let str = '';
  for (let i = 0; i < n; i++) { str += getRandomEngLitera();}
  return str;
};
const getRandom5Letters = () => getRandomLetters(5);
function getMixedArray(arr) {
  const newArr = [];
  let randomIdx;

  while (arr && arr.length) {
    randomIdx = getRandomNumber(0, arr.length - 1);
    newArr.push(arr[randomIdx]);
    arr = [...arr.slice(0, randomIdx), ...arr.slice(randomIdx + 1)];
  }

  return newArr;
};

// ----

const ProductName = {
  Wood     : 'Древесина',
  Bricks   : 'Кирпичи',
  Sugar    : 'Сахар',
  Textiles : 'Текстиль',
  Wheat    : 'Пшеница',
  Corn     : 'Кукуруза',
  Fruits   : 'Фрукты',
  Metal    : 'Металл',
  Hemp     : 'Конопля',
  Cotton   : 'Хлопок',
  Dyes     : 'Красители',
  Tools    : 'Инструменты',
  Coffee   : 'Кофе',
  Cacao    : 'Какао',
  Tobacco  : 'Табак',
  Meat     : 'Мясо',
  Clothing : 'Одежда',
  Bread    : 'Хлеб',
  Ropes    : 'Веревки',
  Rum      : 'Ром'
};

const ProductNameArray = Object.values(ProductName);

const getProduces = (lengthProduces) => {
  const prodNames = getMixedArray(ProductNameArray);

  return [...new Array(lengthProduces)].map((item, i) => prodNames[i])
};

const getTown = () => {
  const lengthProduces = getRandomNumber(0, 4);

  return {
    id: getRandom5Letters(),
    produces: lengthProduces ? [...getProduces(lengthProduces)] : []
  };
}


const TOWNS = [
  ...[...new Array(60)].map((item, i) => getTown())
];

console.log('TOWNS: ', TOWNS);

const result = sortTownsForSimpleProduct(TOWNS);
console.log('result: ', result);
