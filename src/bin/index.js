/**
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


export { randOp, getResOfCalc };
