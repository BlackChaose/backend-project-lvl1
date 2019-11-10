import run from '../engine';
import { genData, randNum } from '../lib';

const theme = 'What number is missing in the progression?';
const NUM_OF_ROUNDS = 3;

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
      res += '..';
    } else {
      res += el;
    }
    res += ' ';
    return res;
  }, '');
};

/**
 * game
 */
export default () => {
  const dataSet = genData([randNum(100), randNum(100), randNum(10)], NUM_OF_ROUNDS);
  const questionsSet = dataSet.map((el) => genQuestionProgression(el));

  run(theme, dataSet, questionsSet, getProgrIndexX);
};
