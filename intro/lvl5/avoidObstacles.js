"use strict";
/** *
 * do stuff
 * @param {Array<Number>} inputArray: input array
 * @return {Number} a number
 */
const avoidObstacles = (inputArray) => {
    inputArray.sort((a, b) => {
        return a - b;
    });
    const obstacles = new Array(inputArray[inputArray.length - 1] + 1).fill(0);
    inputArray.forEach((value) => {
        obstacles[value] = 1;
    });
    /**
     *
     * @param {number} hop: the hop to test
     * @return {boolean}: the output
     */
    function isValidSolution(hop) {
        if (hop >= obstacles.length)
            return true;
        let currentPos = 0;
        while (currentPos !== obstacles.length) {
            currentPos += hop;
            if (currentPos >= obstacles.length)
                return true;
            if (obstacles[currentPos] === 1) {
                return false;
            }
        }
        return true;
    }
    let minHop = 0;
    let currentmax = 0;
    for (const i of obstacles) {
        if (i === 1) {
            currentmax++;
        }
        else {
            currentmax = 0;
        }
        minHop = Math.max(currentmax, minHop);
    }
    let good = false;
    while (!good) {
        good = isValidSolution(minHop);
        if (good)
            break;
        minHop++;
    }
    return minHop;
};
console.log(avoidObstacles([5, 3, 6, 7, 9]));
const avoidObstaclesBestPractices = (array) => {
    // explaination: find the first n(hop number) that doesnt jump into
    // an obstacles
    for (let n = 1;; n++) {
        if (array.every((x) => {
            return x % n !== 0;
        }))
            return n;
    }
};
console.log(avoidObstaclesBestPractices([2, 3]));
