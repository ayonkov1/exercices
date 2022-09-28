const arrObj = [[20, 50, 10], [8, 33, 145]]

const biggestNumberInMatrix = (arr: Array<number[]>) => {
    const rows = arr.map(el => {
        const maxOfEachRow = Math.max(...el)
        return maxOfEachRow
    })
    return Math.max(...rows)

}

console.log(biggestNumberInMatrix(arrObj))
export { }