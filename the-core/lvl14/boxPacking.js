const solution = (length, width, height) => {
  const boxnum = length.length;
  const currentBoxes = [{l: 0, w: 0, h: 0}];
  let res = false;
  const check = ({l, w, h}, newbox) => {
    if (l >= newbox.l && l >= newbox.w && l >= newbox.h) return false;
    if (w >= newbox.l && w >= newbox.w && w >= newbox.h) return false;
    if (h >= newbox.l && h >= newbox.w && h >= newbox.h) return false;
    return true;
  };

  const tryPack = (k) => {
    for (let i = 0; i < boxnum; i++) {
      if (
        check(currentBoxes[currentBoxes.length - 1], {
          l: length[i],
          w: width[i],
          h: height[i],
        })
      ) {
        currentBoxes.push({l: length[i], w: width[i], h: height[i]});
        if (k < boxnum) {
          if (tryPack(k + 1)) return true;
        }
        if ( k === boxnum) {
          res = true;
          return true;
        }
        currentBoxes.pop();
      }
    }
  };

  tryPack(1);
  return res;
};

const a = [1, 3, 2];
console.log(solution(a, [...a], [...a]));
