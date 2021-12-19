function solution(notation) {
  let rows = notation.split('/');
  let chess = [];
  for (let row of rows) {
    let tisR = [];
    for (let c of row) {
      if (!Number.isInteger(parseInt(c))) {
        tisR.push(c);
      } else {
        tisR = [...tisR, ...'1'.repeat(Number(c)).split('')];
      }
    }
    chess.push(tisR);
  }
  let rotated = [];
  for (let i = 0; i < 8; i++) {
    let str = '';
    for (let j = 7; j >= 0; j--) {
      str+=chess[j][i];
    }
    rotated.push(str);
  }
  return rotated.map((str) => str.replace(/1+/g, (m)=>m.length)).join('/');
}

notation = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
solution(notation);
