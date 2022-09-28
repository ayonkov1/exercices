const arrObj = ['1', '2', '3', '4', '5']

const findEvenIndex = (arr: Array<string>) => {
    return arr.filter((arr, index) => index % 2 === 0)
}

console.log(findEvenIndex(arrObj))

export { }