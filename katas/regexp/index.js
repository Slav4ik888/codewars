const value = `1033-10-`;

// true если 3 цифры подряд
const is3Digit = (str) => Boolean(str.match(/\d\d\d/));
// console.log(is3Digit(value));



// Только русские буквы и цифры без пробелов
const regTruck   = /^[укенхваросмт]\d{3}[укенхваросмт]{2}$/i;
const regTrailer = /^[укенхваросмт]{2}\d{4}$/i;
const regRegion = /^\d\d?\d$/i;

const isTruck = (str) => regTruck.test(str);
const matchTruck = (str) => str.match(regTruck);

const isTrailer = (str) => regTrailer.test(str);
const matchTrailer = (str) => str.match(regTrailer);

const isRegion = (str) => regRegion.test(str);
const matchRegion = (str) => str.match(regRegion);


console.log(`TRUCK`);
const mockTruckNums =[`R454TT`, `А454ОР`, `А 454ОР`, `А454 О`, `АА454ОР`];

mockTruckNums.forEach(str => console.log(str + ` - ` + isTruck(str)));
console.log();
mockTruckNums.forEach(str => console.log(str + ` - ` + matchTruck(str)));


console.log(`TRAILER`);
const mockTrailers =[`RT4545`, `АА4545`, `А 4454`, `АА454ОР`];

mockTrailers.forEach(str => console.log(str + ` - ` + isTrailer(str)));
console.log();
mockTrailers.forEach(str => console.log(str + ` - ` + matchTrailer(str)));

console.log(`REGION`);
const mockRegion =[`72`, `172`, ` 7`, `12 `];

mockRegion.forEach(str => console.log(str + ` - ` + isRegion(str)));
console.log();
mockRegion.forEach(str => console.log(str + ` - ` + matchRegion(str)));

