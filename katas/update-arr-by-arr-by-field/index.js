// ------------------------------------------------------
// --  FUNCTIONS ----
// ------------------------------------------------------

// важен порядок
function arraysEqual(a, b) {
  a = Array.isArray(a) ? a : [];
  b = Array.isArray(b) ? b : [];
  return a.length === b.length && a.every((el, ix) => el === b[ix]);
}
// не важен порядок
function arraysContainSame(a, b) {
  a = Array.isArray(a) ? a : [];
  b = Array.isArray(b) ? b : [];
  return a.length === b.length && a.every(el => b.includes(el));
}


function updateArrByArrByField(lastArr, field, newArr) {
  if (!lastArr?.length) return newArr;

  let updatedArr = [...newArr];

  lastArr.forEach(item => {
    const res = updatedArr.find(updated => updated[field] === item[field]);
    if (!res) updatedArr.push(item);
  });

  return updatedArr;
};

// ------------------------------------------------------
// ----  MOCKS ------
// ------------------------------------------------------

const last = [
  { id: `10`, city: `Irkutst`, country: `Russia` },
  { id: `11`, city: `Chita`, country: `Russia` },
  { id: `12`, city: `Chelyabinsk`, country: `Russia` },
  { id: `13`, city: `Stavropol`, country: `Russia` },
];

const update = [
  { id: `10`, city: `Kostroma`, country: `Russia` },
  { id: `13`, city: `Saratov` },
];

const expected = [
  { id: `10`, city: `Kostroma`, country: `Russia` },
  { id: `13`, city: `Saratov` },
  { id: `11`, city: `Chita`, country: `Russia` },
  { id: `12`, city: `Chelyabinsk`, country: `Russia` },
];


// ------------------------------------------------------
// ----------------    TESTS     ------------------------
// ------------------------------------------------------


const result = updateArrByArrByField(last, `id`, update);
console.log('result: ', result);

const resultJSON = JSON.stringify(result);
const expectedJSON = JSON.stringify(expected);
console.log(`JSON: `, resultJSON === expectedJSON);


console.log(`simple важен порядок arraysEqual: `, arraysEqual([1, `3`, 5], [1, `3`, 5]));
console.log(`simple не важен порядок arraysContainSame: `, arraysContainSame([`3`, 5, 1], [1, `3`, 5]));
