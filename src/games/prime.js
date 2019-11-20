import run from '../engine';
import { createDataset, randNum } from '../lib';

/**
 * константа, правила игры
 * @type {string}
 */
const RULES_OF_THE_GAME = 'Answer "yes" if given number is prime. Otherwise answer "no".';
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
   * количество строк в наборе данных,
   * записано в стиле snake-case,
   * венгерская нотация отсутствует
   * имя не сокращено
   * @type {number}
   */
  const NUMBER_OF_ROWS_IN_THE_DATASET = 3;
  /**
   * data set - (англ.) - набор данных, имя существительное
   * @type {Array}
   */
  const dataSet = createDataset([randNum(0, 100)],
    NUMBER_OF_ROWS_IN_THE_DATASET);
  return {
    questionsSet: dataSet.map((el) => `${el[0]}`),
    answersSet: dataSet.map((x) => (isPrime(x) ? 'yes' : 'no')),
  };
};

/**
 * game
 */
export default () => {
  run(RULES_OF_THE_GAME, generateDataset());
};
