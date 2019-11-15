/**
 * funciton generate function for get randNum
 * @param multiplier  number or undefined
 * @returns {function}
 */

/**
 * generation random number
 * @param a min random number
 * @param b max random number
 * @returns {function(): *}
 */
const randNum = (a, b) => () => {
  const arr = [];
  for (let i = a; i <= b; i += 1) {
    arr.push(i);
  }
  const koef = arr.length;
  return arr[Math.floor(Math.random() * koef)];
};
/**
 * function for generation data set
 * @param sets - a set of functions by which data is generated
 * @param nums - required number of data sets
 * @returns {Array}
 */
const createDataset = (sets, nums) => {
  const dataSet = [];
  for (let i = 0; i < nums; i += 1) {
    dataSet[i] = sets.map((func) => func());
  }
  return dataSet;
};

export { createDataset, randNum };
