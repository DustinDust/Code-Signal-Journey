const solution = (comb1, comb2) => {
  // let work with bit, instead of normal string iterating
  const cumb1 = parseInt(
      comb1
          .split('')
          .map((val) => (val === '*' ? 1 : 0))
          .join(''),
      2
  );
  const cumb2 = parseInt(
      comb2
          .split('')
          .map((val) => (val === '*' ? 1 : 0))
          .join(''),
      2
  );

  // 2 ways of testing out the possible placement, assuming
  // that they're at the same rightmost start
  // since this is 32bit integer, this is always correct

  // i and j are maxium movement needed to achieve a solution
  let i = 0; // when moving comb1 to the left
  let j = 0; // when moving comb2 to the left (means comb1 to the right)


  // only stop when the AND operator returns 0, which mean
  // there no bit clash (0&0 or 0&1)
  // if the answer !== 0 then there still 1&1 somewhere
  while ((cumb1 << i) & cumb2) {
    i++;
  }
  while ((cumb2 << j) & cumb1) {
    j++;
  }

  // since i and j indicates the maximum movements needed for a solution
  // worst case it's gonna be comb1.length + comb2.length
  // best case is 0, they fit right in
  // after finding 2 ways of placement for the combs, take the smaller one
  return Math.min(
      Math.max(comb1.length + i, comb2.length),
      Math.max(comb2.length + j, comb1.length)
  );
};

solution('*..*', '*.*');
