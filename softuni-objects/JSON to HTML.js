const obj = ['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']

function solve(input) {
    let table = "<table>\n\t<tr>";
    const parsed = JSON.parse(input)
    const columns = Object.keys(parsed[0])
    table += columns.map(el => `<th>${el}</th>`).join("")
    table += "</tr>\n"
    table += parsed.map(el => {
        let keys = "\t<tr>"
        keys += Object.values(el).map(values => {
            let key = values.toString().replace("<", "&lt;").replace(">", "&gt;")
            return `<td>${key}</td>`
        }).join("")
        return keys += '</tr>\n'
    }).join("")
    return table += "</table>"
};

console.log(solve(obj))