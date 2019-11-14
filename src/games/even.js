import run from '../engine';
import { createDataset, randNum } from '../lib';

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
  const NUMBER_OF_ROWS_IN_THE_DATASET = 3;
  const numDataset = createDataset([randNum(0, 100)],
    NUMBER_OF_ROWS_IN_THE_DATASET);
  return {
    dataSet: numDataset,
    questionsSet: numDataset,
  };
};

/**
 * game
 */
export default () => {
  run('Answer "yes" if the number is even, otherwise answer "no".', generateDataset(), (x) => ((isEven(x) ? 'yes' : 'no')));
};
