function shuffleArray(array) {
    array.sort(function (a, b) { return 0.5 - Math.random() });
    return array;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shuffleArray(numbers));

