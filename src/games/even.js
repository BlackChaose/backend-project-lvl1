import { run, ROUNDS_COUNT } from '../engine';
import { createDataset, randNum } from '../lib';

/**
 * константа, правила игры
 * @type {string}
 */
const RULE_OF_THE_GAME = 'Answer "yes" if the number is even, otherwise answer "no".';
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
   * data set - (англ.) - набор данных, имя существительное
   * @type {Array}
   */
  const records = createDataset([randNum(0, 100)],
    ROUNDS_COUNT);
  return {
    questionsSet: records,
    answersSet: records.map((x) => ((isEven(x) ? 'yes' : 'no'))),
  };
};

/**
 * game
 */
export default () => {
  run(RULE_OF_THE_GAME, generateDataset());
};
