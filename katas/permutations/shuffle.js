const { change, shiftStr, shiftIdx, getShiftStr } = require(`./shift.js`);
const { display, divider } = require(`./display.js`); 


const shuffle = (set, P, counter) => {
  const length = P.str.length;
  // if (P.depth > length) return;

  counter.count++;
  display(`count:`, counter.count);

  if (P.depth > 2) {
    display(`depth > 2`);
    if (P.depth <= length) {
      display(`P.depth <= length`);
      const str = change(P.str, P.idx, P.depth);
      set.add(str);
      const params = {
        str,
        depth: --P.depth
      };

    }

    return shuffle(set, P, counter)
  }
  else {
    display(`toggle: `, change(P.str, 0, 1));

    set.add(change(P.str, 0, 1));
    P.depth++;
  }

  divider();
};
  
module.exports = { shuffle };
