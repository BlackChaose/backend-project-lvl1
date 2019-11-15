import run from '../engine';
import { createDataset, randNum } from '../lib';

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
  const NUMBER_OF_ROWS_IN_THE_DATASET = 3;
  const numDataset = createDataset([randNum(0, 100), randNum(0, 100), randomOperation],
    NUMBER_OF_ROWS_IN_THE_DATASET);
  return {
    questionsSet: numDataset.map((param) => `${param[0]} ${param[2]} ${param[1]}`),
    answersSet: numDataset.map(getResultOfCalculation),
  };
};

/**
 * game
 */
export default () => {
  run('What is the result of the expression? ', generateDataset());
};
