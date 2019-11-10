import run from '../engine';
import { genData, randNum } from '../lib';

const theme = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const NUM_OF_ROUNDS = 3;

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
 * game
 */
export default () => {
  const dataSet = genData([randNum(100)], NUM_OF_ROUNDS);

  run(theme, dataSet, dataSet, isPrime);
};
