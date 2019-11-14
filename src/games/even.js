import run from '../engine';
import { genData, randNum } from '../lib';

/**
 * check n for even
 * @param n Number
 * @returns {boolean}
 */
const isEven = (n) => n % 2 === 0;

/**
 * function for generations dataset;
 * @returns {{dataSet: Array, questionsSet: string[], theme: string}}
 */
const generateDataset = () => {
  const NUM_OF_DATASETS = 3;
  const numDataset = genData([randNum(0, 100)], NUM_OF_DATASETS);
  return {
    dataSet: numDataset,
    questionsSet: numDataset,
    theme: 'Answer "yes" if the number is even, otherwise answer "no".',
  };
};

/**
 * game
 */
export default () => {
  run(generateDataset(), (x) => ((isEven(x) ? 'yes' : 'no')));
};
