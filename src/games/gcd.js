import run from '../engine';
import { createDataset, randNum } from '../lib';

/**
 * Finding the Greatest Common Divisor
 * @param pair {Array} [a1, b1]
 * @returns {string} value of Greatest Common Divisor in string format
 */
const findGCD = (pair) => {
  let a1 = pair.pop();
  let b1 = pair.pop();
  while (a1 !== b1) {
    if (a1 > b1) {
      a1 -= b1;
    } else {
      b1 -= a1;
    }
  }
  return a1;
};

/**
 * function for generations dataset;
 * @returns {{dataSet: Array, questionsSet: string[], theme: string}}
 */
const generateDataset = () => {
  const NUM_OF_DATASETS = 3;
  const numDataset = createDataset([randNum(0, 100), randNum(0, 100)], NUM_OF_DATASETS);
  return {
    dataSet: numDataset,
    questionsSet: numDataset.map((el) => `${el[0]} ${el[1]}`)
  };
};

/**
 * game
 */
export default () => {
  run('Find the greatest common divisor of given numbers.', generateDataset(), ((x) => findGCD(x).toString()));
};
