const isValidation = array => {
  if (typeof array !== 'object') {
    console.log(`${array} - not array...`);
    return false;
  }
  if (array.length < 2) {
    console.log(`[${array}] - less 2 arguments...`);
    return false;
  }
  return true;
}

const howSorted = (a, b) => a > b ? `des` : `asc`;

module.exports = function isSortedAndHow(array) {
  if (!isValidation(array)) return;

  let lastResult = ``;
  let types = {
    asc: "yes, ascending",
    des: "yes, descending",
    no: "no"
  };

  array.forEach((_, i) => {
    if (i === 0) {
      lastResult = howSorted(array[i], array[i + 1]);

    } else {
      const newResult = howSorted(array[i - 1], array[i]);

      if (lastResult !== newResult) {
        console.log(types.no);
        lastResult = types.no;
        return;
      }
    }
  });

  return types[lastResult];
}

// isSortedAndHow(123);
// isSortedAndHow([3]);

// console.log('isSortedAndHow([3, 1, 2]): ', isSortedAndHow([3, 1, 2]));
// console.log('isSortedAndHow([3, 2, 1]): ', isSortedAndHow([3, 2, 1]));
// console.log('isSortedAndHow([1, 2, 3]): ', isSortedAndHow([1, 2, 3]));
