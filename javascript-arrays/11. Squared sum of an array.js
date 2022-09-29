let array = [0, 1, 2, 3, 4];

let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum = (sum + Math.pow(array[i], 2))
// }

array.forEach(element => {
    sum += Math.pow(element, 2);
});

console.log(sum)
