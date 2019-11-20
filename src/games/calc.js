import run from '../engine';
import { createDataset, randNum } from '../lib';

/**
 * константа, правила игры
 * @type {string}
 */
const RULES_OF_THE_GAME = 'What is the result of the expression? ';
/**
 * random generate 'sign'
 * @nothing  operation sign generation function
 * @returns {string}  '+', '-' or '*'
 */
const randomOperation = () => {
  const sign = ['+', '-', '*'];
  const index = randNum(0, sign.length)();
  return sign[index];
};

/**
 * calculate a 'sign' b
 * @param param  array [a, b, 'sign']
 * @returns {string}
 */
const getResultOfCalculation = (param) => {
  const sign = param[2];
  const a = param[0];
  const b = param[1];
  let res;
  switch (sign) {
    case '+': res = a + b; break;
    case '-': res = a - b; break;
    default: res = a * b; break;
  }
  return res.toString();
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
   * data set - (англ.) - набор данных, мая существительное
   * @type {Array}
   */
  const dataSet = createDataset([randNum(0, 100), randNum(0, 100), randomOperation],
    NUMBER_OF_ROWS_IN_THE_DATASET);
  return {
    questionsSet: dataSet.map((param) => `${param[0]} ${param[2]} ${param[1]}`),
    answersSet: dataSet.map(getResultOfCalculation),
  };
};

/**
 * game
 */
export default () => {
  run(RULES_OF_THE_GAME, generateDataset());
};
