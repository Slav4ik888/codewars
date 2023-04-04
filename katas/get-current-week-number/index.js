const currentdate = new Date();
const oneJan = new Date(currentdate.getFullYear(),0,1);
const numberOfDays = Math.floor((currentdate.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000));
console.log('numberOfDays: ', numberOfDays);
const result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
console.log(`The week number of the current date (${currentdate}) is ${result}.`);