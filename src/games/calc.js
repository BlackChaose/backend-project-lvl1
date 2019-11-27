import { run, ROUNDS_COUNT } from '../engine';
import { createDataset, randNum } from '../lib';

/**
 * константа, правила игры
 * @type {string}
 */
const RULE_OF_THE_GAME = 'What is the result of the expression? ';
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
   * data set - (англ.) - набор данных, имя существительное
   * @type {Array}
   */
  const records = createDataset([randNum(0, 100), randNum(0, 100), randomOperation],
    ROUNDS_COUNT);
  return {
    questionsSet: records.map((param) => `${param[0]} ${param[2]} ${param[1]}`),
    answersSet: records.map(getResultOfCalculation),
  };
};

/**
 * game
 */
export default () => {
  run(RULE_OF_THE_GAME, generateDataset());
};
