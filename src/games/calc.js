import run from '../engine';
import { genData, randNum } from '../lib';

const theme = 'Answer "yes" if the number is even, otherwise answer "no".';
const NUM_OF_ROUNDS = 3;

/**
 * random generate 'sign'
 * @nothing  operation sign generation function
 * @returns {string}  '+', '-' or '*'
 */
const randOp = () => {
  const bf = Math.floor(Math.random() * 10);
  let sign = '';
  switch (bf) {
    case 1: sign = '+'; break;
    case 2: sign = '+'; break;
    case 3: sign = '+'; break;
    case 4: sign = '-'; break;
    case 5: sign = '-'; break;
    case 6: sign = '-'; break;
    case 7: sign = '-'; break;
    default: sign = '*'; break;
  }
  return sign;
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
 * game
 */
export default () => {
  const dataSet = genData([randNum(100), randNum(100), randOp], NUM_OF_ROUNDS);

  run(theme,
    dataSet,
    dataSet.map((param) => `${param[0]} ${param[2]} ${param[1]}`),
    getResOfCalc);
};
