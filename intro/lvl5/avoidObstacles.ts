/** *
 * do stuff
 * @param {Array<Number>} inputArray: input array
 * @return {Number} a number
 */
const avoidObstacles = (inputArray: Array<number>): number => {
  inputArray.sort((a: number, b: number): number => {
    return a - b;
  });
  const obstacles: Array<number> = new Array<number>(
      inputArray[inputArray.length -1] + 1
  ).fill(0);
  inputArray.forEach((value: number): void => {
    obstacles[value] = 1;
  });

  /**
   *
   * @param {number} hop: the hop to test
   * @return {boolean}: the output
   */
  function isValidSolution(hop: number): boolean {
    if (hop >= obstacles.length) return true;
    let currentPos: number = 0;
    while (currentPos !== obstacles.length) {
      currentPos += hop;
      if (currentPos >= obstacles.length) return true;
      if (obstacles[currentPos] === 1) {
        return false;
      }
    }
    return true;
  }

  let minHop:number = 0;
  let currentmax = 0;
  for (const i of obstacles) {
    if (i === 1) {
      currentmax++;
    } else {
      currentmax = 0;
    }
    minHop = Math.max(currentmax, minHop);
  }

  let good:boolean = false;
  while (!good) {
    good = isValidSolution(minHop);
    if (good) break;
    minHop++;
  }
  return minHop;
};

console.log(avoidObstacles([5, 3, 6, 7, 9]));


const avoidObstaclesBestPractices = (array : Array<number>):number => {
  // explaination: find the first n(hop number) that doesnt jump into
  // an obstacles
  for (let n:number = 1; ;n++) {
    if (array.every((x) => {
      return x % n !== 0;
    })) return n;
  }
};

console.log(avoidObstaclesBestPractices([2, 3]));
