// DISPLAY
const { strGivenLength, Display, Divider } = require(`../../../string-of-given-length/index.js`);
const cfg = require(`../config.js`);
 
const display = Display(20, cfg.displayOff);
const divider = Divider(27, cfg.displayOff);

module.exports = { display, divider };
