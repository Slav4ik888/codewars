function updateArrBySomeChanges(arr, field, changesArr, obj) {
  if (!arr?.length) return [];

  let newArr = [];

  arr.forEach(lastItem => {
    const res = changesArr.find(ch => ch === lastItem[field]);
    if (res) newArr.push({ ...lastItem, ...obj });
    else newArr.push(lastItem)
  })

  return newArr;
};

const arr = [
  {
    id: `12`,
    any: `any12`,
    some: `some12`,
    anysome: `anysome12`
  }, {
    id: `13`,
    any: `any13`,
    some: `some13`,
    anysome: `anysome13`
  }, {
    id: `14`,
    any: `any14`,
    some: `some14`,
    anysome: `anysome14`
  }, {
    id: `15`,
    any: `any15`,
    some: `some15`,
    anysome: `anysome15`
  }, {
    id: `16`,
    any: `any16`,
    some: `some16`,
    anysome: `anysome16`
  }, {
    id: `17`,
    any: `any17`,
    some: `some17`,
    anysome: `anysome17`
  },
];

const changesArr = [`13`, `17`, `15`, `20`];
const obj = { any: `100`, anysome: `300` };

// console.log(`updateArrBySomeChanges: `, updateArrBySomeChanges(arr, `id`, changesArr, obj));