const arrObj = [7, 0, -2, 8, -1, 0, 9, 1, 13, 2]

const sortWithZeroOnTheEnd = (arr: Array<number>) => {
    return arr.sort((a, b) => {
        if (a === 0) return 1;
        if (b === 0) return -1;
        return (a - b);
    }).join("\n")
}

console.log(sortWithZeroOnTheEnd(arrObj))

export { }