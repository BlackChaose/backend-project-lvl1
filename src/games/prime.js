import run from '../engine';
import { genData, randNum } from '../lib';

/**
 * check is n prime?
 * @param n {Number}
 * @returns {string}
 */
const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

/**
 * function for generations dataset;
 * @returns {{dataSet: Array, questionsSet: string[], theme: string}}
 */
const generationDataset = () => {
  const NUM_OF_DATASETS = 3;
  const numDataset = genData([randNum(0, 100)], NUM_OF_DATASETS);
  return {
    dataSet: numDataset,
    questionsSet: numDataset.map((el) => `${el[0]}`),
    theme: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  };
};

/**
 * game
 */
export default () => {
  run(generationDataset(), isPrime);
};
