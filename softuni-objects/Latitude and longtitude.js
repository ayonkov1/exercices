const obj = ['| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |']

function solve(townArray) {
  const columns = townArray[0]
    .split("|")
    .filter((el) => !!el)
    .map((el) => el.trim());
  const solutionArray = townArray.slice(1).map((item) => {
    const props = item.split("|");
    const valueObj = {};
    props
      .filter((el) => !!el)
      .map((el) => el.trim())
      .forEach((value, index) => {
        const key = columns[index];
        const check = isNaN(Number(value));
        valueObj[key] = check ? value : Number((+value).toFixed(2));
      });
    return valueObj;
  });
  return JSON.stringify(solutionArray);
}
