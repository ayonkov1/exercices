const arrObj = [3, 0, 10, 4, 7, 3]

const processOddNumbers = (arr: Array<number>) => {
    const oddPos = arr.filter((arr, index) => index % 2 === 1)
    const doubled = oddPos.map(el => el * 2)
    const reversed = doubled.sort((a, b) => b - a)
    return reversed
}

console.log(processOddNumbers(arrObj))
export { }