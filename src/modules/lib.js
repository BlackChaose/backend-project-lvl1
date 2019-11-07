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
 * check is n prime?
 * @param n {Number}
 * @returns {string}
 */
const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

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
 * Finding the Greatest Common Divisor
 * @param pair {Array} [a1, b1]
 * @returns {string} value of Greatest Common Divisor in string format
 */
const findNOD = (pair) => {
  let a1 = pair.pop();
  let b1 = pair.pop();
  while (a1 !== b1) {
    if (a1 > b1) {
      a1 -= b1;
    } else {
      b1 -= a1;
    }
  }
  return a1.toString();
};

/**
 * check n for even
 * @param n Number
 * @returns {string}
 */
const isEven = (n) => {
  if (n % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export {
  randOp,
  getResOfCalc,
  isPrime,
  genProgr,
  getProgrIndexX,
  genQuestionProgression,
  findNOD,
  isEven,
};
