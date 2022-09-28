let arrObj = [
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]

const diagonalSumInMatrix = (arr: Array<number[]>) => {
    let mainSum = 0, secondarySum = 0
    arr.map((el, i, row) => {
        mainSum += row[i][i];
        secondarySum += row[i][row.length - i - 1];
    })
    return `${mainSum} ${secondarySum}`
}

console.log(diagonalSumInMatrix(arrObj))
export { }