const { shiftStr, shiftIdx, getShiftStr } = require(`./shift.js`);
const { display, divider } = require(`./display.js`); 


const shuffle = (set, params, counter) => {
  

  // if (params.start < params.end) {
    for (let i = params.start; i < params.end + 1; i++) {
      counter.count++;
      // display(`count:`, counter.count);
      if (counter.count > 100) return;

      if (params.idx > params.start) {
        params.str = shiftStr(params);
        params.idx = shiftIdx(params);

        display('str:', params.str);
        display('idx:', params.idx);
        set.add(params.str);
        divider();

        if (params.idx < params.end - 2) {
          display('next start:', params.start);

          const newParams = {
            start : params.idx + 1,       // 2
            end   : params.end,           // 4
            str   : params.str,           // adbc
            idx   : params.str.length - 1 // 3
          };

          shuffle(set, newParams, counter);
        }
      }
      else {
        display(`End`);
        divider();
        return
      }
    }
  // }
  // else {
  //   display(`params.start: ${params.start}, params.end: ${params.end}`);
  // }
};
  
module.exports = { shuffle };
