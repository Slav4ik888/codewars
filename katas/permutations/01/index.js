const { getShiftStr, shiftStr, shiftIdx } = require(`../shift.js`);
const { shuffle } = require(`../shuffle.js`);
const { divider, display } = require(`../display.js`);


// FUNCTION
function permutations(str) {
  if (!str) return [];

  let
    set     = new Set(),
    length  = str.length,
    counter = {
      count: 0
    },
    S       = {
      str,                 // abcd
      idx  : length - 1,      // 3
      item : str[length - 1], // d
      // movedStr     : str,
      // movedItemIdx : length - 1
    };
    
  // Predefine - start values
  set.add(S.str); // First str value - abcd

  // Logs
  console.log();
  divider();
  display('str: ',      S.str);
  display('item: ',     S.item);
  // display('movedStr: ',     S.movedStr);
  // display('movedItemIdx: ', S.movedItemIdx);
  divider();

  // Helpers
  const shiftCheked   = () => getShiftStr(S.str, S.idx);
  

  // Process

  for (let i = 0; i < length; i++) {

    const params = {
      start : 0,
      end   : length, // 4
      str   : S.str,  // abcd
      idx   : S.idx   // 3
    };

    shuffle(set, params, counter);

    // Update
    // S.str = shiftStr(S);
    S.idx = shiftIdx(S);

    display('updated str:', S.str);
    display('updated idx:', S.idx);
    divider();

    set.add(S.str);
  }

  console.log();
  divider();
  console.log();
  display(set);
  console.log();

  return set
}

// =======

// All variants
// abcd  start - str
// ab [d] c shuffleAllPrev() => if no then shift main item
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


const setMainItemPos = () => {
  return 
}
// Сдвигаем последнюю влево
// 1234 - start
// set main item position (index 3)
// if seted item position === last item => shift left
// 1243
// 
// 1423 - if no variant to shuffle => selectshift left selected 4
// 1432 - new selected
// 4132
// 4123
// 4




const mocks = [
  ["'a'",    `a`,    ['a']],
  ["'ab'",   `ab`,   ['ab', 'ba'].sort()],
  ["'aabb'", `aabb`, ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort()],
];

// mocks.forEach(m => testEqual(`${m[0]}`, () => permutations(m[1]), m[2]));
permutations(`abcd`);
