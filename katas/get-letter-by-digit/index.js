/**
 * Цифру возвращает в виде буквы соответсвующей её номеру в алфавите,
 * если значение цифры больше чем букв в алфавите, то + доп букву (как в гугл таблицах)
 * if upper => to uppercase
 */
const getLetterByDigit = (value, upper) => {
  let letter = 'a';

  if (!value) return letter;

  const
    alphabet = 'abcdefghijklmnopqrstuvwxyz',
    getAlphaIdx  = (a) => alphabet.indexOf(a),
    lastAlpha = (a) => a[a.length - 1],
    prevAlpha = (a) => a[a.length - 2],
    nextAlpha = (a) => alphabet[getAlphaIdx(a) + 1],
    withoutLastAlpha = (a) => a.slice(0, a.length - 1),
    upLastAlpha = (a) => withoutLastAlpha(a) + nextAlpha(lastAlpha(a)),
    restToA = (rest) => rest.split('').map(it => 'a').join(''),
    isZ = (a) => a === 'z';
  
  
  const upLetter = (pieceOfLetter, rest = '') => {
    // console.log('pieceOfLetter: ', pieceOfLetter);
    // rest && console.log('rest: ', rest);

    let newLetter = pieceOfLetter

    if (isZ(lastAlpha(newLetter))) {
      if (prevAlpha(newLetter)) {
        return upLetter(withoutLastAlpha(newLetter), lastAlpha(newLetter) + rest) // console.log('Есть предыдущая');
      }
      else { 
        newLetter = 'a' + restToA(newLetter + rest); // console.log('Если нет предыдущей', newLetter);
      }
    }
    else {
      newLetter = upLastAlpha(newLetter) + restToA(rest); // console.log(newLetter);
    }
  
    return newLetter
  }


  // Начинаем с 2 потому что 1 в самом начале letter = 'a'
  for (let i = 2; i <= value; i++) {
    letter = upLetter(letter);
  }

  return letter
}

console.log(`1  => a [result: ${getLetterByDigit(1)}]`);
console.log(`26 => z [result: ${getLetterByDigit(26)}]`);
console.log(`52 = az [result: ${getLetterByDigit(52)}]`);
console.log(`703 = aaa [result: ${getLetterByDigit(703)}]`);
