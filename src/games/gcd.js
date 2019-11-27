import { run, ROUNDS_COUNT } from '../engine';
import { createDataset, randNum } from '../lib';

/**
 * константа, правила игры
 * @type {string}
 */
const RULE_OF_THE_GAME = 'Find the greatest common divisor of given numbers.';
/**
 * Finding the Greatest Common Divisor
 * @param  {number} paramA
 * @param  {number} paramB
 * @returns {string} value of Greatest Common Divisor in string format
 */
const findGCD = (paramA, paramB) => {
  let a = paramA;
  let b = paramB;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
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
  const records = createDataset([randNum(0, 100), randNum(0, 100)],
    ROUNDS_COUNT);
  return {
    questionsSet: records.map((el) => `${el[0]} ${el[1]}`),
    answersSet: records.map(([x1, x2]) => findGCD(x1, x2).toString()),
  };
};

/**
 * game
 */
export default () => {
  run(RULE_OF_THE_GAME, generateDataset());
};
