import run from '../engine';
import { createDataset, randNum } from '../lib';

/**
 * константа, правила игры
 * @type {string}
 */
const RULES_OF_THE_GAME = 'Answer "yes" if the number is even, otherwise answer "no".';
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
    questionsSet: dataSet,
    answersSet: dataSet.map((x) => ((isEven(x) ? 'yes' : 'no'))),
  };
};

/**
 * game
 */
export default () => {
  run(RULES_OF_THE_GAME, generateDataset());
};
