function swap(str) {
    str = str.toString();
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();

        }
    }
    return newStr;
}

console.log(swap('The Quick Brown Fox'));