function accum1(str) {
    return [...str].map((currentValue, index) => currentValue.toUpperCase() + currentValue.toLowerCase().repeat(index)).join('-')
}
console.log(accum1('abskas'))