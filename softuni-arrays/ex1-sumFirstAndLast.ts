const arrObj = ['1', '2', '3']

const sumFirstAndLast = (arr: Array<string>) => {
    let first = Number(arr[0])
    let last = Number(arr[arr.length - 1])
    return first + last
}

console.log(sumFirstAndLast(arrObj))

export { }