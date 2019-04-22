const val = '1 2 83 -1 9'
const getMinMax = function (valuet) {
    let chanValuet = valuet.split(' ').sort((a, b) => {
        return b - a
    })
    return chanValuet[0] + ' ' + chanValuet[chanValuet.length - 1]

}
console.log(getMinMax(val))