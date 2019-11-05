#!/usr/bin/env node
import run from '../engine';

const theme = 'Answer "yes" if the number is even, otherwise answer "no".';
const dataSet = [];

for (let i = 0; i < 3; i += 1) {
  dataSet[i] = Math.floor(Math.random() * 100);
}

console.log(dataSet);

const checkEven = (n) => {
  if (n % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

run(theme, dataSet, dataSet, checkEven);
