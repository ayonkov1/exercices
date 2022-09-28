const arrObj1 = [
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4'],
    ['9', '8', '7', '5', '4']]

const arrObj2 = [
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]

const equalNeighbours = (arr) => {
    const row = arr.map((el, index) => {
        return el[index]
    }).filter((el, index) => el.includes(el[index]))
    return row
}


console.log(equalNeighbours(arrObj1), equalNeighbours(arrObj2))
export { }