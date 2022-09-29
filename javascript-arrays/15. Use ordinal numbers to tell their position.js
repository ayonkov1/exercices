function makeOrdinal(cardinal) {
    let ord = ['th', 'st', 'nd', 'rd'];
    let last = cardinal % 10;

    if (cardinal > 10 && cardinal < 14) {
        return cardinal + ord[0];
    } else if (last < 4) {
        return cardinal + ord[last];
    } else {
        return cardinal + ord[0];
    }

}

function addColor(color) {
    for (let key in color) {

        var result = `${makeOrdinal(+key + 1)} color is ${color[key]}`
        console.log(result);
    }

}

addColor(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow", "Blue ", "Green"])
