import { run, ROUNDS_COUNT } from '../engine';
import { createDataset, randNum } from '../lib';

/**
 * константа, правила игры
 * @type {string}
 */
const RULE_OF_THE_GAME = 'What number is missing in the progression?';

/**
 * arithmetic progression generation
 * 'an = a1 + d*(n-1)', [link](https://educon.by/index.php/materials/math/progressii),
 * @param param {Array} [a1, d]
 * @returns {Array}
 */
const generateProgression = (param) => {
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
const getProgressionIndexX = (param) => {
  const a1 = param[0];
  const d = param[1];
  const indexX = param[2];
  const prog = generateProgression([a1, d, indexX]);
  return prog[indexX].toString();
};

/**
 * generate text of question by arithmetic progression
 * @param param {Array} [a1, d, index], a1 - first member, d - difference, index - index of '..'
 * @returns {string}
 */
const generateQuestionProgression = (param) => {
  const a1 = param[0];
  const d = param[1];
  const indexX = param[2];
  return generateProgression([a1, d]).reduce((acc, el, i) => {
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
const generateDataset = () => {
  /**
   * data set - (англ.) - набор данных, имя существительное
   * @type {Array}
   */
  const records = createDataset([randNum(0, 100), randNum(0, 100), randNum(0, 10)],
    ROUNDS_COUNT);
  return {
    questionsSet: records.map((el) => generateQuestionProgression(el)),
    answersSet: records.map(getProgressionIndexX),
  };
};

/**
 * game
 */
export default () => {
  run(RULE_OF_THE_GAME, generateDataset());
};
