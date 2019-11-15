import run from '../engine';
import { genData, randNum } from '../lib';

/**
 * random generate 'sign'
 * @nothing  operation sign generation function
 * @returns {string}  '+', '-' or '*'
 */
const randOp = () => {
  const index = randNum(1, 3)();
  const sign = ['+', '-', '*'];
  return sign[index];
};

/**
 * calculate a 'sign' b
 * @param param  array [a, b, 'sign']
 * @returns {string}
 */
const getResOfCalc = (param) => {
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
const generationDataset = () => {
  const NUM_OF_DATASETS = 3;
  const numDataset = genData([randNum(0, 100), randNum(0, 100), randOp], NUM_OF_DATASETS);
  return {
    dataSet: numDataset,
    questionsSet: numDataset.map((param) => `${param[0]} ${param[2]} ${param[1]}`),
    theme: 'What is the result of the expression? ',
  };
};

/**
 * game
 */
export default () => {
  run(generationDataset(), getResOfCalc);
};
