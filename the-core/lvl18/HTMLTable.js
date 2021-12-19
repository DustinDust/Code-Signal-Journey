const solution = (table, row, column) => {
  try {
    let t = table.split('<tr>')[row + 1];
    let r = t.split('<td>')[column + 1];
    let c = r.split('</td>')[0];
    return c;
  } catch (e) {
    return 'No such cell';
  }
};
