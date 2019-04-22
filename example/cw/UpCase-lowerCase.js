function accum(str) {
    return str.split('').map((currentValue, index) => currentValue.toUpperCase() + currentValue.toLowerCase().repeat(index)).join('-')

}
console.log(accum('aasdas'))

function accum1(str) {
    return [...str].map((currentValue, index) => currentValue.toUpperCase() + currentValue.toLowerCase().repeat(index)).join('-')

}
console.log(accum1('aasdas'))

function accum2(s) {
    return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
  }

  console.log(accum2('aasdas'))
