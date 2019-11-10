import run from '../engine';
import { genData, randNum } from '../lib';

const theme = 'Answer "yes" if the number is even, otherwise answer "no".';
const NUM_OF_ROUNDS = 3;

/**
 * check n for even
 * @param n Number
 * @returns {string}
 */
const isEven = (n) => {
  if (n % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

/**
 * game
 */
export default () => {
  const dataSet = genData([randNum(100)], NUM_OF_ROUNDS);

  run(theme, dataSet, dataSet, isEven);
};
