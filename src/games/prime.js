import { run, ROUNDS_COUNT } from '../engine';
import { createDataset, randNum } from '../lib';

/**
 * константа, правила игры
 * @type {string}
 */
const RULE_OF_THE_GAME = 'Answer "yes" if given number is prime. Otherwise answer "no".';
/**
 * check is n prime?
 * @param n {Number}
 * @returns {boolean}
 */
const isPrime = (n) => {
  if (n <= 1) { return false; }
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
  /**
   * data set - (англ.) - набор данных, имя существительное
   * @type {Array}
   */
  const records = createDataset([randNum(0, 100)],
    ROUNDS_COUNT);
  return {
    questionsSet: records.map((el) => `${el[0]}`),
    answersSet: records.map((x) => (isPrime(x) ? 'yes' : 'no')),
  };
};

/**
 * game
 */
export default () => {
  run(RULE_OF_THE_GAME, generateDataset());
};
