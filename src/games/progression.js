import run from '../engine';
import { genData, randNum } from '../lib';

/**
 * arithmetic progression generation
 * @param param {Array} [a1, d]
 * @returns {Array}
 */
const genProgr = (param) => {
  const a1 = param[0];
  const d = param[1];
  const prog = [];
  let i = 0;
  while (i < 10) {
    prog.push(a1 + d * (i - 1));
    i += 1;
  }
  return prog;
};

/**
 * get ak element of arithmetic progression
 * @param param {Array} [a1, d, index]
 * @returns {string}
 */
const getProgrIndexX = (param) => {
  const a1 = param[0];
  const d = param[1];
  const indexX = param[2];
  const prog = genProgr([a1, d, indexX]);
  return prog[indexX].toString();
};

/**
 * generate text of question by arithmetic progression
 * @param param {Array} [a1, d, index]
 * @returns {string}
 */
const genQuestionProgression = (param) => {
  const a1 = param[0];
  const d = param[1];
  const indexX = param[2];
  return genProgr([a1, d]).reduce((acc, el, i) => {
    let res = acc;
    if (i === indexX) {
      res = `${res} ..`;
    } else {
      res = `${res} ${el}`;
    }
    res = `${res} `;
    return res;
  }, '');
};

/**
 * function for generations dataset;
 * @returns {{dataSet: Array, questionsSet: string[], theme: string}}
 */
const generationDataset = () => {
  const NUM_OF_DATASETS = 3;
  const numDataset = genData([randNum(0, 100), randNum(0, 100), randNum(0, 10)], NUM_OF_DATASETS);
  return {
    dataSet: numDataset,
    questionsSet: numDataset.map((el) => genQuestionProgression(el)),
    theme: 'What number is missing in the progression?',
  };
};

/**
 * game
 */
export default () => {
  run(generationDataset(), getProgrIndexX);
};
