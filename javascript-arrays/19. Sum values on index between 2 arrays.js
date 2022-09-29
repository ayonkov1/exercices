const Arrays_sum = (...args) => {
    const arrays = args.sort((a, b) => b.length - a.length);
    return arrays[0].map((arr, i) => arrays[0][i] + (arrays[1][i] || 0));
};

console.log(Arrays_sum([1, 2, 3, 4], [3, 4, 5, 6, 7, 8, 3, 4, 5, 6, 7]));