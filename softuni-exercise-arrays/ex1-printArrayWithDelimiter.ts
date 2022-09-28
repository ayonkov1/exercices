const arrObj = ['One', 'Two', 'Three', 'Four', 'Five', '-']
const arrObj2 = ['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']

const printArrayWithDelimiter = (arr: Array<string>) => {
    const delimiter = arr[arr.length - 1]
    return arr.slice(0, -1).join(delimiter)
}

console.log(
    printArrayWithDelimiter(arrObj),
    printArrayWithDelimiter(arrObj2))
export { }