//Write a JavaScript function to check whether an `input` is an array or not

function is_array(input) {
    if (toString.call(input) === "[object Array]") {
        return true;
    } else {
        return false;
    }
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
