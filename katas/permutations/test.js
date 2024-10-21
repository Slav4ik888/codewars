const { testEqual } = require('../testing/index.js');
const { permutations } = require('./permutation.js');


const mocks = [
  ["'a'",    'a',    ['a']],
  ["'ab'",   'ab',   ['ab', 'ba'].sort()],
  ["'aabb'", 'aabb', ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort()],
];

mocks.forEach(m => testEqual(`${m[0]}`, () => permutations(m[1]), m[2]));
