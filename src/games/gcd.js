import run from '../engine';
import { createDataset, randNum } from '../lib';

/**
 * константа, правила игры
 * @type {string}
 */
const RULES_OF_THE_GAME = 'Find the greatest common divisor of given numbers.';
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
  const dataSet = createDataset([randNum(0, 100), randNum(0, 100)],
    NUMBER_OF_ROWS_IN_THE_DATASET);
  return {
    questionsSet: dataSet.map((el) => `${el[0]} ${el[1]}`),
    answersSet: dataSet.map(([x1, x2]) => findGCD(x1, x2).toString()),
  };
};

/**
 * game
 */
export default () => {
  run(RULES_OF_THE_GAME, generateDataset());
};
