const stringEnter = 'o a kak ushakov lil vo kashu kakao'
// console.log(stringEnter.split(''))
function getCount(str) {
    let accum = str.split('').filter((item) => {
        const macher = (letter) => { return !item.indexOf(letter)}
         if (macher('a') || macher('q') || macher('e') || macher('o') || macher('U')) 
        {return true}
    })
    return accum
}
console.log(getCount(stringEnter))