let array = [0, 1, 2, 3, 4];

let sum = 0;
let product = 0;

array.forEach(element => {
    sum += element;
    product *= element;
});

console.log(sum, product)
