#!/usr/bin/env node
import run from '../engine';

const theme = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const dataSet = [];

for (let i = 0; i < 3; i += 1) {
  dataSet[i] = Math.floor(Math.random() * 100);
}

console.log(dataSet);

const checkPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

run(theme, dataSet, dataSet, checkPrime);
