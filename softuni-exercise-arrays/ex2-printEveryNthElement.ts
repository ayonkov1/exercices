/* 
The input comes as an array of strings. The last element is N - the step.

The output is every element on the N-th step starting from the first one. If the step is "3",
you need to print the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array.
The elements must be printed each on a new line.
*/

const arrObj = ['5', '20', '31', '4', '20', '213', '8', '6']
const arrObj2 = ['1', '2', '3', '4', '5', '6']

const printEveryNthElement = (arr: Array<string>) => {
    const step = Number(arr[arr.length - 1])
    return arr.filter((el, index) => {
        return (index % step === 0)
    }).join("\n")
}

console.log(
    printEveryNthElement(arrObj),
    printEveryNthElement(arrObj2)
)
export { }