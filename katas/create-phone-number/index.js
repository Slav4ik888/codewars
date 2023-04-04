const { testEqual } = require(`../testing/index.js`);


// const createPhoneNumber = (numbers) => {
//   if (!numbers) return ``;
//   let format = `(xxx) xxx-xxxx`;

//   numbers.forEach((n, i) => {
//     format = format.replace(`x`, numbers[i])
//   });
  
//   return format;
// };

// function createPhoneNumber(numbers){
//   return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
// }

// function createPhoneNumber(numbers){
//    return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
// }

// function createPhoneNumber(numbers){
//   return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
// }

function createPhoneNumber(n) {
  return "(012) 345-6789".replace(/\d/g, (d) => n[d])
}

const mocks = [
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "(123) 456-7890"],
  [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "(111) 111-1111"],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "(123) 456-7890"]
];

mocks.forEach(m => testEqual(() => createPhoneNumber(m[0]), m[1]));
