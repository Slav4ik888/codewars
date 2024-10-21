const { divider, display } = require('./helpers/display.js');
const { validate } = require('./helpers/validations.js');


exports.permutations = (str) => {
  if (! str) return [];

  const set = new Set();
    
  // Predefine - start values
  // set.add(S.str); // First str value - abcd

  // Logs
  console.log();
  divider();
  display('str: ',str);
  divider();

  // Process
  // Список всех вариантов (сколько длина строки столько и вариантов)
  const vars = str.split('');
  console.log('vars: ', vars);


  /**
   * Перебираем все варианты и добавляем в Set
   * @param {string} currentStr - собранная строка до текущего индекса (углубления)
   * @param {number} currentIdx - текущий индекс (углубления)
   */
  function perebor(currentStr, currentIdx) {
    // console.log('currentStr: ', currentStr, ', currentIdx: ', currentIdx);

    for (let i = 0; i < vars.length; i++) {
      let newStr = currentStr + vars[i];

      if (currentIdx === vars.length - 1) { // last index
        if (validate(vars, newStr)) {
          set.add(newStr);
        }
      }
      else {
        perebor(newStr, currentIdx + 1);
      }
    }
  }

  perebor('', 0);
  // for (let i1 = 0;  i1 < vars.length; i1++) {
  //   let currentStr1 = vars[i1];

  //   for (let i2 = 0; i2 < vars.length; i2++) {
  //     let currentStr2 = currentStr1 + vars[i2];

  //     for (let i3 = 0; i3 < vars.length; i3++) {
  //       let currentStr3 = currentStr2 + vars[i3];
        
  //       for (let i4 = 0; i4 < vars.length; i4++) {
  //         let currentStr4 = currentStr3 + vars[i4];
  //         if (validate(vars, currentStr4)) {
  //           set.add(currentStr4);
  //         }
  //       }
  //     }
  //   }
  // }


  // Finish display
  console.log();
  divider();
  console.log();
  display(set);
  console.log();

  return Array.from(set)
}
