import run from '../engine';
import { genData, randNum } from '../lib';

const theme = 'Find the greatest common divisor of given numbers.';
const NUM_OF_ROUNDS = 3;

/**
 * Finding the Greatest Common Divisor
 * @param pair {Array} [a1, b1]
 * @returns {string} value of Greatest Common Divisor in string format
 */
const findNOD = (pair) => {
  let a1 = pair.pop();
  let b1 = pair.pop();
  while (a1 !== b1) {
    if (a1 > b1) {
      a1 -= b1;
    } else {
      b1 -= a1;
    }
  }
  return a1.toString();
};

/**
 * game
 */
export default () => {
  const dataSet = genData([randNum(100), randNum(100)], NUM_OF_ROUNDS);

  run(theme, dataSet, dataSet.map((el) => `${el[0]} ${el[1]}`), findNOD);
};
