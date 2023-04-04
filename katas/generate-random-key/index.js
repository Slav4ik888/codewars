
const seenKeys = {};                // Список сохранённых ранее ключей
const MULTIPLIER = Math.pow(2, 24); // 16777216


function generateRandomKey() {
  let key;

  while (key === undefined || seenKeys.hasOwnProperty(key) || !isNaN(+key)) {
    key = Math.floor(Math.random() * MULTIPLIER).toString(32);
  }

  return key;
}

console.log(`generateRandomKey:`, generateRandomKey());
