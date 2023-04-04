const log = require('../utils/log')(`math`);

const x = 3.888;
const y = ~x;
const z = ~y;

const fastFloorX = ~~x;
log(`x : `, x);
log(`y : `, y);
log(`z : `, z);
log(`fastFloorX : `, fastFloorX);

const partialObj1 = {
  name: "fernando",
  fill: "anything"
}
const partialObj2 = {
  age: 37,
  price: 222
}

const fullObj = { ...partialObj1, ...partialObj2 }
log(`fullObj : `, fullObj);

const myList = [1,2,3,4,5,6,7]
const myObj = {
  name: "Fernando",
  age: 37,
  country: "Spain",
  gender: "M"
}

const [head, ...tail] = myList

const {name, age, ...others} = myObj

log(`head: `, head) //1
log(`tail: `, tail) //[2,3,4,5,6,7]
log(`name: `, name) //Fernando
log(`age: `, age) //37
log(`others: `, others) //{country: "Spain", gender: "M"}