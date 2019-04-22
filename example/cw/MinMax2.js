const data = '1 2 83 -1 9'
  function getMinMax (atr) {
    const maxVal = Math.max(...atr.split(' '));
    const minVal = Math.min(...atr.split(' '));
    return maxVal +' '+ minVal
}
console.log(getMinMax(data))