const str = "bitcoin take over the world maybe who knows perhaps" //find langth shorts word
function findShort(s) {
    return Math.min(...(s.split(' ').map((val) => val.length)))
}
console.log(findShort(str))