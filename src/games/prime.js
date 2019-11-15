import run from '../engine';
import { createDataset, randNum } from '../lib';

/**
 * check is n prime?
 * @param n {Number}
 * @returns {boolean}
 */
const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

/**
 * function for generations dataset;
 * @returns {{dataSet: Array, questionsSet: string[], theme: string}}
 */
const generateDataset = () => {
  const NUMBER_OF_ROWS_IN_THE_DATASET = 3;
  const numDataset = createDataset([randNum(0, 100)],
    NUMBER_OF_ROWS_IN_THE_DATASET);
  return {
    questionsSet: numDataset.map((el) => `${el[0]}`),
    answersSet: numDataset.map((x) => (isPrime(x) ? 'yes' : 'no')),
  };
};

/**
 * game
 */
export default () => {
  run('Answer "yes" if given number is prime. Otherwise answer "no".', generateDataset());
};
