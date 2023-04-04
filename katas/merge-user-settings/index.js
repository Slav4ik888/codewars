

function mergeUserSettings(origin, userSetting) {
  const newObj = {};

  for (let origKey in origin) {
    if (Object.prototype.hasOwnProperty.call(origin, origKey)) {
      newObj[origKey] = Object.assign({}, origin[origKey]); // Create copy origKey of origin
      const elem    = newObj[origKey];
      
      for (let elKey in elem) {
        if (Object.prototype.hasOwnProperty.call(elem, elKey)) {

          if (typeof elem[elKey] === `object`) { // If this is a Style: {}
            const style = elem[elKey];
            for (let stKey in style) {
              if (Object.prototype.hasOwnProperty.call(style, stKey)) {
                
                if (userSetting?.[origKey]?.[elKey]) {
                  if (stKey in userSetting?.[origKey]?.[elKey]) {
                    newObj[origKey][elKey][stKey] = userSetting[origKey][elKey][stKey];
                  }
                }
              }
            }
          }
          else {
            if (userSetting?.[origKey]) {
              if (elKey in userSetting?.[origKey]) {
                newObj[origKey][elKey] = userSetting?.[origKey]?.[elKey];
              }
            }
          }
        }
      }
    }
  }

  return newObj
}

const { OrderRowCells } = require('./cells.js');
const { userData } = require('./user.js');

// console.log(`mergeUserSettings: `, mergeUserSettings(OrderRowCells, userData));

const { getChanges } = require(`./get-changes.js`);
console.log('getChanges: ', getChanges(OrderRowCells, userData));
