const arr = [10 , 1 , 5, 20, 3235235]
function sumTwoSmalerNumbers  (arg) {
    let a = arg.sort((i,j) => i-j)
    let [y, x, ...e] = a 
    console.log(a)
    console.log(e)
    return y + x + e
}
console.log(sumTwoSmalerNumbers(arr))