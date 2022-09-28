const arrObj = ['1', '2', '3', '4', '2']
const arrObj2 = ['Banana', 'Orange', 'Coconut', 'Apple', '15']

const rotatearray = (arr: Array<string>) => {
    const step = Number(arr[arr.length - 1])
    for (let i = 0; i < step; i++) {
        arr.unshift(arr.pop());
    }
}

console.log(
    rotatearray(arrObj),
    rotatearray(arrObj2))
export { }