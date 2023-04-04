function countSquares(cuts){
  const edge = 1 + cuts;
  const side = edge * edge;
  const without2edge = side - edge * 2;
  const without4edge = without2edge - (edge - 2) * 2;
  
  return cuts
    ? (side + without2edge + without4edge) * 2
    : 1
}
