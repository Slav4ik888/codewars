function isSolved(board) {
  let isHasEmpty = false;
  board.forEach(row => {
    row.forEach(it => {
      if (it === 0) {
        isHasEmpty = true;
      }
    });
  });
    
  const one   = board[0][0];
  const two   = board[0][1];
  const three = board[0][2];
  const four  = board[1][0];
  const five  = board[1][1];
  const six   = board[1][2];
  const seven = board[2][0];
  const eight = board[2][1];
  const nine  = board[2][2];

  // rows
  if (one === two && one === three && one !== 0) return one;
  if (four === five && four === six && four !== 0) return four;
  if (seven === eight && seven === nine && seven !== 0) return seven;
  
  // columns
  if (one === four && one === seven && one !== 0) return one;
  if (two === five && two === eight && two !== 0) return two;
  if (three === six && three === nine && three !== 0) return three;
  
  // diagonals
  if (one === five && one === nine && one !== 0) return one;
  if (three === five && three === seven && three !== 0) return three;
  
  return isHasEmpty ? -1 : 0
}


// Решение от другого участника
function isSolved_2(board) {
  const template = board.join('-').replace(/,/g, '');
  
   if(/222|2...2...2|2....2....2|2..2..2/.test(template)) return 2;
   if(/111|1...1...1|1....1....1|1..1..1/.test(template)) return 1;
   if(/0/.test(template)) return -1;
   return 0;
}
// console.log(isSolved_2([[2,1,1],[0,1,1],[2,2,2]]));
// console.log(isSolved_2([
//   [2, 2, 1],
//   [0, 1, 1],
//   [1, 2, 0]
// ]));
// console.log([[2,1,1],[0,1,1],[2,2,2]].join('-').replace(/,/g,''));
