const obj = ['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']

function solve(input) {
    const cities = input.map((el) => {
        return (isNaN(Number(el)) ? el : Number(el))
    })
    const sum = cities.reduce((accumulator, value) => {
        return console.log(accumulator + value);
    }, 0);
}

solve(obj)