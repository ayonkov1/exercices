let arrObj = [30, 15, 50, 5]

const findTwoSmallestNumbers = (arr: Array<number>) => {
    return arr.sort((a, b) => a - b).slice(0, 2)
}

console.log(findTwoSmallestNumbers(arrObj))
export { }