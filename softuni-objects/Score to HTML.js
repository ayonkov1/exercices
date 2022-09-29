const obj = ['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']

function solve(input) {
  let table = "<table>\n\t<tr>";
  const parsed = JSON.parse(input)
  const columns = Object.keys(parsed[0])
  const users = {}
  table += columns.map(el => `<th>${el}</th>`).join("")
  table += "</tr>\n"
  table += parsed.map(el => {
    const name = (el.name)
    const score = el.score
    return `\t<tr><td>${name}</td><td>${score}</td></tr>\n`
  }).join("")
  return table += "</table>"
};