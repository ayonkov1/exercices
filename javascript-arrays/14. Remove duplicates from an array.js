const arr = [1, 1, 2, 3, 4, 5, 6, 6, 6, 7]

const newArray = arr.reduce((previous, actual) => {
    if (!previous.includes(actual)) {
        previous.push(actual)
    }
    return previous
}, [])
console.log(newArray)
