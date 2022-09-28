const lastKNumberSequence = (n, k) => {
    let seq = [1]
    seq.reduce((acc, value, index) => {
        let start = Math.max(0, acc - k)
        let end = value
        let prevK = seq.slice(start, end)
        return console.log("here ", prevK)
    })

}

lastKNumberSequence(6, 3)