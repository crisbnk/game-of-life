function createMatrix(r, c, num) {
  return Array(r).fill().map(() => Array(c).fill(num));
}

function randomValues(multiArr) {
  multiArr = multiArr.map(row => {
    const rows = row.map(cell => {
      cell = Math.round(Math.random());
      return cell;
    });
    return rows;
  });
  return multiArr;
}

export {createMatrix, randomValues};
