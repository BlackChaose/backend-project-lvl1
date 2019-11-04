#!/usr/bin/env node
import run from '../engine';

const theme = 'Find the greatest common divisor of given numbers.';
const dataSet = [];

for (let i = 0; i < 3; i += 1) {
  dataSet[i] = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
}

console.log(dataSet);

const findNOD = (pair) => {
  let a1 = pair.pop();
  let b1 = pair.pop();
  console.log('in FindNOD:  ', a1, '   ', b1);
  while (a1 !== b1) {
    if (a1 > b1) {
      a1 -= b1;
    } else {
      b1 -= a1;
    }
  }
  return a1.toString();
};

run(theme, dataSet, findNOD);
