const { getShiftStr, shiftStr, shiftIdx } = require(`./shift.js`);
const { shuffle } = require(`./shuffle.js`);
const { divider, display } = require(`../display.js`);


// FUNCTION
function permutations(str) {
  if (!str) return [];

  const
    set     = new Set(),
    counter = {
      count: 0
    },
    S = {
      str,          // abcd
      mutStr : str, // for mutation
      depth  : 2,   // start
      idx    : 0
    };
    
  // Predefine - start values
  set.add(S.str); // First str value - abcd

  // Logs
  console.log();
  divider();
  display('str: ',      S.str);
  divider();

  // Process
  for (let i = 0; i < S.str.length; i++) {
    S.idx = i;
    shuffle(set, S, counter);
  }

  // Finish display
  console.log();
  divider();
  console.log();
  display(set);
  console.log();

  return set
}

// 012
// 102
// 210
// 120
// 021
// 201
// 
// 


// 1234
// - 1 -
// start value - template0
// 12 [34]
// toggle  - схема обработки 2х соседних
// 21 [34] - idx 0 => 1 
// toggle  - схема обработки 3х соседних
// 321 [4] - idx 0 => 2 | template1
// toggle
// 23 [14] - idx 0 => 1 
// 
// - 2 -
// 132 [4] - idx 1 => 2 - идём вперёд | template1
// 312 [4] - idx 0 => 1
// 
// - 3 -
// no variants

// - 1 - 
// переходим к 4му ряду
// 4231 - idx 0 => 3
// применяем схему обработки 3х
// 




// All variants
// abcd  start - str => toggle
// ab [d] c 
// a [d] bc 
// a [d] cb
// [d] acb
// [d] abc
// [d] bac
// [d] bca
// [d] cba
// [d] cab
// 
// a [c] bd newShuffle - setMainItem, shift => str
// a [c] db
// [c] adb
// [c] abd
// [c] bad
// [c] bda
// [c] dab
// [c] dba
// 
// [b] acd
// [b] adc
// [b] dac
// [b] dca
// [b] cda
// [b] cad

// TESTING

// it('examples from description', function() {
//   Test.assertSimilar(permutations('a'), ['a']);
//   Test.assertSimilar(permutations('ab').sort(), ['ab', 'ba'].sort());
//   Test.assertSimilar(permutations('aabb').sort(), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());
// });



// =========


const mocks = [
  ["'a'",    `a`,    ['a']],
  ["'ab'",   `ab`,   ['ab', 'ba'].sort()],
  ["'aabb'", `aabb`, ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort()],
];

// mocks.forEach(m => testEqual(`${m[0]}`, () => permutations(m[1]), m[2]));
permutations(`abc`);
