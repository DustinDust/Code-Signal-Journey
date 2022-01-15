"use strict";
/* eslint-disable no-array-constructor */
/* eslint-disable no-unused-vars */
const boxBlur = (image) => {
    const row = image.length - 2;
    const col = image[0].length - 2;
    const res = new Array(row);
    for (let i = 0; i < res.length; i++) {
        res[i] = new Array(col).fill(0);
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            const iX = i + 1;
            const iY = j + 1;
            const sum = image[iX - 1][iY - 1] +
                image[iX + 1][iY + 1] +
                image[iX][iY] +
                image[iX][iY - 1] +
                image[iX][iY + 1] +
                image[iX - 1][iY] +
                image[iX + 1][iY] +
                image[iX + 1][iY - 1] +
                image[iX - 1][iY + 1];
            res[i][j] = Math.floor(sum / 9);
        }
    }
    return res;
};
console.log(boxBlur([[7, 4, 0, 1],
    [5, 6, 2, 2],
    [6, 10, 7, 8],
    [1, 4, 2, 0]]));
