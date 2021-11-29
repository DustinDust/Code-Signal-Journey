const solution = (length, width, height) => {
  const boxNum = length.length;
  const volume = [];
  for (let i = 0; i < boxNum; i++) {
    volume.push({l: length[i], w: width[i], h: height[i]});
  }
  volume.sort((a, b) => {
    return a.h * a.l * a.w - b.h * b.l * b.w;
  });
  const check = ({l, w, h}, newbox) => {
    if (l < newbox.l && w < newbox.w && h < newbox.h) return true;
    if (l < newbox.l && w < newbox.h && h < newbox.w) return true;
    if (l < newbox.h && w < newbox.w && h < newbox.l) return true;
    if (l < newbox.w && w < newbox.l && h < newbox.h) return true;
    if (l < newbox.w && w < newbox.h && h < newbox.l) return true;
    if (l < newbox.h && w < newbox.l && h < newbox.w) return true;
    return false;
  };
  console.log(volume);
  for (let i = 1; i < volume.length; i++) {
    if (!check(volume[i - 1], volume[i])) return false;
  }
  return true;
};


const length= [3, 5, 7, 2, 3];
const width= [2, 2, 3, 1, 9];
const height= [3, 6, 8, 2, 10];
console.log(solution(length, width, height));
